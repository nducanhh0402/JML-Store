/**
 * JML Store Marketplace Admin - Authentication & Role Management
 * Handles Admin Login, Registration, Session, LocalStorage & Profile Sync
 */

const JML_ADMIN_ACCOUNTS_KEY = 'jml_admin_accounts';
const JML_CURRENT_ADMIN_KEY = 'jml_current_admin';
const JML_ADMIN_SESSION_KEY = 'jml_admin_session';

// Danh sách tài khoản Quản trị viên mặc định để test và chấm bài nhanh
const DEFAULT_ADMIN_ACCOUNTS = [
    {
        id: 'adm_001',
        name: 'Hoàng Nam',
        username: 'admin',
        email: 'admin@jmlstore.com',
        password: '123', // hoặc admin123
        role: 'Super Admin',
        roleBadge: 'Toàn quyền Hệ thống',
        dept: 'Ban Quản Trị Sàn JML',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
        createdAt: '2024-01-15 08:00:00'
    },
    {
        id: 'adm_002',
        name: 'Nguyễn Hải Đăng',
        username: 'mod',
        email: 'mod@jmlstore.com',
        password: '123',
        role: 'Kiểm Duyệt Viên',
        roleBadge: 'Duyệt Shop & Sản Phẩm',
        dept: 'Bộ Phận Vận Hành & KCS',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
        createdAt: '2024-03-20 09:30:00'
    },
    {
        id: 'adm_003',
        name: 'Lê Thuỳ Dung',
        username: 'finance',
        email: 'finance@jmlstore.com',
        password: '123',
        role: 'Kế Toán & Đối Soát',
        roleBadge: 'Giải ngân & Quỹ Escrow',
        dept: 'Phòng Tài Chính Toàn Sàn',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
        createdAt: '2024-05-10 14:15:00'
    }
];

// Khởi tạo Database Quản trị trong LocalStorage
function initAdminStorage() {
    try {
        const stored = localStorage.getItem(JML_ADMIN_ACCOUNTS_KEY);
        if (!stored) {
            localStorage.setItem(JML_ADMIN_ACCOUNTS_KEY, JSON.stringify(DEFAULT_ADMIN_ACCOUNTS));
        }
    } catch (e) {
        console.warn('LocalStorage error during initAdminStorage:', e);
    }
}

// Lấy danh sách tất cả tài khoản admin
function getAdminAccounts() {
    initAdminStorage();
    try {
        const stored = localStorage.getItem(JML_ADMIN_ACCOUNTS_KEY);
        return stored ? JSON.parse(stored) : DEFAULT_ADMIN_ACCOUNTS;
    } catch (e) {
        console.error('Lỗi đọc tài khoản admin:', e);
        return DEFAULT_ADMIN_ACCOUNTS;
    }
}

// Lưu danh sách tài khoản
function saveAdminAccounts(accounts) {
    try {
        localStorage.setItem(JML_ADMIN_ACCOUNTS_KEY, JSON.stringify(accounts));
    } catch (e) {
        console.error('Lỗi lưu danh sách admin:', e);
    }
}

// Lấy thông tin admin đang đăng nhập (ưu tiên sessionStorage của phiên làm việc hiện tại)
function getCurrentAdmin() {
    try {
        const stored = sessionStorage.getItem(JML_ADMIN_SESSION_KEY) || localStorage.getItem(JML_CURRENT_ADMIN_KEY);
        if (!stored || stored === 'null' || stored === 'undefined') return null;
        const parsed = JSON.parse(stored);
        return (parsed && (parsed.email || parsed.username)) ? parsed : null;
    } catch (e) {
        console.error('Lỗi đọc phiên làm việc admin:', e);
        return null;
    }
}

// Lưu phiên đăng nhập
function setCurrentAdmin(user, remember = true) {
    try {
        const sessionData = {
            ...user,
            token: 'adm_jwt_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
            loginAt: new Date().toISOString(),
            remember: !!remember
        };
        const serialized = JSON.stringify(sessionData);
        // Luôn cấp active session vào sessionStorage của tab hiện tại để mở được index.html
        sessionStorage.setItem(JML_ADMIN_SESSION_KEY, serialized);
        if (remember) {
            localStorage.setItem(JML_CURRENT_ADMIN_KEY, serialized);
        } else {
            localStorage.removeItem(JML_CURRENT_ADMIN_KEY);
        }
        return sessionData;
    } catch (e) {
        console.error('Lỗi lưu phiên đăng nhập:', e);
        return null;
    }
}

// Đăng xuất admin
function clearCurrentAdmin() {
    try {
        sessionStorage.removeItem(JML_ADMIN_SESSION_KEY);
        localStorage.removeItem(JML_CURRENT_ADMIN_KEY);
    } catch (e) {
        console.error('Lỗi xóa phiên admin:', e);
    }
}

/**
 * Xử lý Đăng nhập Quản trị viên
 * @param {string} identifier - Email hoặc Username
 * @param {string} password - Mật khẩu
 * @param {boolean} remember - Nhớ đăng nhập
 */
function handleAdminLogin(identifier, password, remember = true) {
    const rawId = (identifier || '').trim().toLowerCase();
    const rawPass = (password || '').trim();

    if (!rawId) {
        return { success: false, message: 'Vui lòng nhập Email hoặc Tên đăng nhập Admin!' };
    }
    if (!rawPass) {
        return { success: false, message: 'Vui lòng nhập Mật khẩu quản trị!' };
    }

    const accounts = getAdminAccounts();
    const user = accounts.find(acc => 
        (acc.email && acc.email.toLowerCase() === rawId) || 
        (acc.username && acc.username.toLowerCase() === rawId)
    );

    if (!user) {
        return { success: false, message: 'Tài khoản không tồn tại trong hệ thống quản trị Sàn!' };
    }

    // Chấp nhận mật khẩu chính xác hoặc alias tiện dụng cho demo (123 hoặc admin123)
    const isPassValid = (user.password === rawPass) || 
                        (rawPass === '123' && user.password === 'admin123') ||
                        (rawPass === 'admin123' && user.password === '123');

    if (!isPassValid) {
        return { success: false, message: 'Mật khẩu quản trị không chính xác! Vui lòng thử lại.' };
    }

    // Lưu session
    const session = setCurrentAdmin(user, remember);
    return { success: true, message: `Chào mừng ${user.name} (${user.role}) quay trở lại!`, user: session };
}

/**
 * Xử lý Đăng ký Tài khoản Quản trị mới
 */
function handleAdminRegister({ name, username, email, password, confirmPassword, role, dept, secretKey }) {
    const cleanName = (name || '').trim();
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();
    const cleanConfirm = (confirmPassword || '').trim();
    const cleanRole = (role || 'Quản Trị Viên Vận Hành').trim();
    const cleanDept = (dept || 'Ban Quản Trị Sàn JML').trim();
    const cleanKey = (secretKey || '').trim();

    // Validation
    if (!cleanName || cleanName.length < 2) {
        return { success: false, message: 'Họ và tên Quản trị viên phải từ 2 ký tự trở lên!' };
    }

    if (!cleanUser || cleanUser.length < 3) {
        return { success: false, message: 'Tên đăng nhập tối thiểu 3 ký tự (chữ cái, số hoặc gạch dưới)!' };
    }

    if (!/^[a-zA-Z0-9_.-]+$/.test(cleanUser)) {
        return { success: false, message: 'Tên đăng nhập không được chứa ký tự đặc biệt hoặc dấu cách!' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
        return { success: false, message: 'Địa chỉ Email công vụ không hợp lệ!' };
    }

    if (!cleanPass || cleanPass.length < 6) {
        return { success: false, message: 'Mật khẩu quản trị phải có ít nhất 6 ký tự để đảm bảo an toàn!' };
    }

    if (cleanPass !== cleanConfirm) {
        return { success: false, message: 'Mật khẩu xác nhận không khớp với mật khẩu đã nhập!' };
    }

    // Kiểm tra Mã bảo mật phân quyền nội bộ (Admin Secret Key)
    // Mã mặc định gợi ý là JML-ADMIN-2026, hoặc cho phép đăng ký nội bộ
    const REQUIRED_KEY = 'JML-ADMIN-2026';
    if (cleanKey && cleanKey.toUpperCase() !== REQUIRED_KEY) {
        return { success: false, message: `Mã cấp quyền Admin không hợp lệ! (Gợi ý mã nội bộ mặc định: ${REQUIRED_KEY})` };
    }

    // Kiểm tra trùng lặp
    const accounts = getAdminAccounts();
    const existing = accounts.find(acc => 
        (acc.email && acc.email.toLowerCase() === cleanEmail) || 
        (acc.username && acc.username.toLowerCase() === cleanUser)
    );

    if (existing) {
        if (existing.email.toLowerCase() === cleanEmail) {
            return { success: false, message: 'Email này đã được đăng ký cho một Quản trị viên khác!' };
        }
        return { success: false, message: 'Tên đăng nhập này đã được sử dụng, vui lòng chọn tên khác!' };
    }

    // Tạo avatar tự động theo tên
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=0D6EFD&color=fff&bold=true&size=120`;

    const newAdmin = {
        id: 'adm_' + Date.now().toString(36),
        name: cleanName,
        username: cleanUser,
        email: cleanEmail,
        password: cleanPass,
        role: cleanRole,
        roleBadge: cleanRole === 'Super Admin' ? 'Toàn quyền Hệ thống' : 'Quản trị viên',
        dept: cleanDept,
        avatar: avatar,
        createdAt: new Date().toISOString()
    };

    accounts.push(newAdmin);
    saveAdminAccounts(accounts);

    // Tự động lưu phiên đăng nhập
    const session = setCurrentAdmin(newAdmin, true);

    return { 
        success: true, 
        message: 'Đăng ký tài khoản Quản trị viên thành công! Đang chuyển hướng vào Hệ thống...',
        user: session 
    };
}

/**
 * Đăng nhập nhanh 1-click với tài khoản mẫu
 */
function quickLogin(usernameOrRole = 'admin') {
    const accounts = getAdminAccounts();
    let target = accounts[0]; // Mặc định Super Admin

    if (usernameOrRole === 'mod') {
        target = accounts.find(a => a.username === 'mod') || accounts[1] || accounts[0];
    } else if (usernameOrRole === 'finance') {
        target = accounts.find(a => a.username === 'finance') || accounts[2] || accounts[0];
    } else {
        target = accounts.find(a => a.username === 'admin') || accounts[0];
    }

    const session = setCurrentAdmin(target, true);
    return session;
}

/**
 * Cập nhật giao diện Sidebar Profile trên trang Admin
 */
function syncAdminProfileUI() {
    const current = getCurrentAdmin();
    if (!current) return;

    const avatarEl = document.getElementById('adminProfileAvatar');
    const nameEl = document.getElementById('adminProfileName');
    const roleEl = document.getElementById('adminProfileRole');

    if (avatarEl && current.avatar) {
        avatarEl.src = current.avatar;
    }
    if (nameEl && current.name) {
        nameEl.textContent = `${current.name} (${current.role || 'Admin'})`;
    }
    if (roleEl && (current.dept || current.roleBadge)) {
        roleEl.textContent = current.dept || current.roleBadge || 'Ban Quản Trị Sàn';
    }
}

/**
 * Xử lý Đăng xuất Admin
 */
function performAdminLogout(confirmPrompt = true) {
    if (confirmPrompt) {
        const confirmed = confirm('Bạn có chắc chắn muốn đăng xuất khỏi Cổng Quản Trị Sàn JML Store?');
        if (!confirmed) return;
    }
    clearCurrentAdmin();
    // Đẩy ngay lập tức về trang Đăng nhập & Đăng ký
    window.location.replace('login.html');
}

/**
 * Kiểm tra phân quyền bắt buộc ngay khi script auth.js được nạp vào trang
 * Nếu người dùng vào bất kỳ trang quản trị nào (index.html,...) mà CHƯA ĐĂNG NHẬP / CHƯA ĐĂNG KÝ -> ĐẨY VỀ login.html
 */
function enforceAdminAuthGuard() {
    initAdminStorage();
    const isLoginPage = window.location.href.toLowerCase().includes('login.html');
    if (isLoginPage) return;

    // Yêu cầu bắt buộc phải có active session trong tab hiện tại
    const session = sessionStorage.getItem(JML_ADMIN_SESSION_KEY);
    if (!session || session === 'null' || session === 'undefined') {
        window.location.replace('login.html');
        return;
    }
}

// Chạy kiểm tra guard ngay lập tức (chặn hiển thị dashboard khi chưa đăng nhập)
enforceAdminAuthGuard();

// Tự động chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    initAdminStorage();
    const isLoginPage = window.location.href.toLowerCase().includes('login.html');
    if (!isLoginPage) {
        const session = sessionStorage.getItem(JML_ADMIN_SESSION_KEY);
        if (!session) {
            window.location.replace('login.html');
            return;
        }
        syncAdminProfileUI();
    }

    // Bắt sự kiện nút Đăng xuất trên Sidebar
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performAdminLogout(true);
        });
    }
});

/**
 * Kiểm tra trạng thái xác thực khi tải trang index.html
 */
function checkAdminAuthOnLoad() {
    const modal = document.getElementById('adminAuthModal');
    if (!modal) return; // Không ở trang có modal (vd: login.html)

    const current = getCurrentAdmin();
    const urlParams = new URLSearchParams(window.location.search);
    const isGuest = urlParams.get('mode') === 'guest';

    if (current) {
        syncAdminProfileUI();
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    } else if (isGuest) {
        // Chế độ khách cho phép xem không cần đăng nhập
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    } else {
        // Chưa đăng nhập: Mở modal yêu cầu đăng nhập
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Điều khiển đóng/mở Modal Auth trên Dashboard
 */
function openAdminAuthModal() {
    const modal = document.getElementById('adminAuthModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
}

function closeAdminAuthModal() {
    const modal = document.getElementById('adminAuthModal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Chuyển Tab Đăng nhập / Đăng ký trong Modal
 */
function switchModalAuthTab(tab) {
    const btnLogin = document.getElementById('modalTabBtnLogin');
    const btnRegister = document.getElementById('modalTabBtnRegister');
    const viewLogin = document.getElementById('modalLoginView');
    const viewRegister = document.getElementById('modalRegisterView');
    const alertBox = document.getElementById('modalAuthAlert');

    if (alertBox) alertBox.classList.add('hidden');

    if (tab === 'login') {
        btnLogin?.classList.add('active', 'border-primary-500', 'text-primary-500');
        btnLogin?.classList.remove('text-neutral-500', 'border-transparent');
        btnRegister?.classList.remove('active', 'border-primary-500', 'text-primary-500');
        btnRegister?.classList.add('text-neutral-500', 'border-transparent');
        viewLogin?.classList.remove('hidden');
        viewRegister?.classList.add('hidden');
    } else {
        btnRegister?.classList.add('active', 'border-primary-500', 'text-primary-500');
        btnRegister?.classList.remove('text-neutral-500', 'border-transparent');
        btnLogin?.classList.remove('active', 'border-primary-500', 'text-primary-500');
        btnLogin?.classList.add('text-neutral-500', 'border-transparent');
        viewRegister?.classList.remove('hidden');
        viewLogin?.classList.add('hidden');
    }

    if (window.lucide) lucide.createIcons();
}

/**
 * Hiển thị thông báo trong Modal
 */
function showModalAlert(type, message) {
    const box = document.getElementById('modalAuthAlert');
    const text = document.getElementById('modalAuthAlertText');
    const icon = document.getElementById('modalAuthAlertIcon');
    if (!box || !text) return;

    box.className = 'mb-4 p-3 rounded-lg text-xs font-medium flex items-start gap-2';
    if (type === 'success') {
        box.classList.add('bg-success-50', 'text-success-700', 'border', 'border-emerald-200');
        icon?.setAttribute('data-lucide', 'check-circle-2');
        icon?.setAttribute('class', 'w-4 h-4 text-emerald-600 shrink-0 mt-0.5');
    } else {
        box.classList.add('bg-danger-50', 'text-danger-700', 'border', 'border-red-200');
        icon?.setAttribute('data-lucide', 'alert-circle');
        icon?.setAttribute('class', 'w-4 h-4 text-danger-500 shrink-0 mt-0.5');
    }

    text.innerHTML = message;
    box.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
}

/**
 * Xử lý nộp form đăng nhập từ Modal
 */
function submitModalLogin(e) {
    if (e) e.preventDefault();
    const id = document.getElementById('modalLoginId')?.value || '';
    const pass = document.getElementById('modalLoginPass')?.value || '';
    const rem = document.getElementById('modalLoginRemember')?.checked ?? true;
    const btn = document.getElementById('modalLoginBtn');

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="inline-block animate-spin mr-1">⏳</span> Đang xác thực...`;
    }

    setTimeout(() => {
        const res = handleAdminLogin(id, pass, rem);
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = `<i data-lucide="log-in" class="w-4 h-4"></i><span>Đăng Nhập Vào Hệ Thống</span>`;
            if (window.lucide) lucide.createIcons();
        }

        if (res.success) {
            showModalAlert('success', `${res.message}`);
            syncAdminProfileUI();
            setTimeout(() => {
                closeAdminAuthModal();
            }, 600);
        } else {
            showModalAlert('error', res.message);
        }
    }, 250);
}

/**
 * Đăng nhập nhanh 1-Click từ Modal
 */
function quickModalLogin(role = 'admin') {
    const session = quickLogin(role);
    showModalAlert('success', `Đã đăng nhập thành công với vai trò <strong>${session.role} (${session.name})</strong>!`);
    syncAdminProfileUI();
    setTimeout(() => {
        closeAdminAuthModal();
    }, 500);
}

/**
 * Xử lý nộp form đăng ký từ Modal
 */
function submitModalRegister(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('modalRegName')?.value || '';
    const username = document.getElementById('modalRegUser')?.value || '';
    const email = document.getElementById('modalRegEmail')?.value || '';
    const role = document.getElementById('modalRegRole')?.value || 'Quản Trị Viên Vận Hành';
    const dept = document.getElementById('modalRegDept')?.value || 'Ban Quản Trị Sàn JML';
    const password = document.getElementById('modalRegPass')?.value || '';
    const confirmPassword = document.getElementById('modalRegConfirm')?.value || '';
    const secretKey = document.getElementById('modalRegSecret')?.value || '';
    const btn = document.getElementById('modalRegBtn');

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="inline-block animate-spin mr-1">⏳</span> Đang tạo tài khoản...`;
    }

    setTimeout(() => {
        const res = handleAdminRegister({
            name, username, email, password, confirmPassword, role, dept, secretKey
        });
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = `<i data-lucide="user-plus" class="w-4 h-4"></i><span>Tạo Tài Khoản Quản Trị & Đăng Nhập</span>`;
            if (window.lucide) lucide.createIcons();
        }

        if (res.success) {
            showModalAlert('success', `${res.message}`);
            syncAdminProfileUI();
            setTimeout(() => {
                closeAdminAuthModal();
            }, 800);
        } else {
            showModalAlert('error', res.message);
        }
    }, 300);
}
