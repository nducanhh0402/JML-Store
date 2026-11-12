/**
 * Brandname Marketplace Admin Portal - Client-Side Logic
 * Multi-vendor E-commerce Platform (Shopee / Lazada Model)
 */

// Cơ sở dữ liệu mẫu của các Cửa hàng (Shops) & Sản phẩm của từng Shop
const SHOPS_DATABASE = {
    'SH-102': {
        id: '#SH-102',
        initials: 'AB',
        name: 'AB Technology Ltd',
        badge: 'JML MALL',
        badgeClass: 'bg-danger-500 text-white',
        meta: 'Mã Shop: #SH-102 • Quận 1, TP.HCM • Tham gia: 15/03/2024',
        gmv: '$312,400.00',
        fee: '$21,868.00',
        productCount: '142 mặt hàng',
        rating: '★ 4.9 / 5.0',
        products: [
            { name: 'Samsung Galaxy Note 4 SM-N910C 32GB', sku: 'SAM-N910-BLK', price: '$850.00', stock: '35 chiếc', sold: '342 đã bán', status: 'Đang bán' },
            { name: 'Bộ Sạc Nhanh Super Fast Charging 45W', sku: 'SAM-CHG-45W', price: '$49.00', stock: '120 chiếc', sold: '518 đã bán', status: 'Đang bán' },
            { name: 'Smart Watch Fitness Pro Series 8', sku: 'AB-WATCH-S8', price: '$195.00', stock: '48 chiếc', sold: '285 đã bán', status: 'Đang bán' },
            { name: 'Laptop UltraBook Pro 15.6 inch M2', sku: 'AB-LAP-M2', price: '$1,150.00', stock: '12 chiếc', sold: '94 đã bán', status: 'Đang bán' }
        ]
    },
    'SH-418': {
        id: '#SH-418',
        initials: 'ZF',
        name: 'Zara Fashion Store',
        badge: 'YÊU THÍCH+',
        badgeClass: 'bg-warning-500 text-white',
        meta: 'Mã Shop: #SH-418 • Quận Hoàn Kiếm, Hà Nội • Tham gia: 10/06/2024',
        gmv: '$198,200.00',
        fee: '$13,874.00',
        productCount: '98 mặt hàng',
        rating: '★ 4.8 / 5.0',
        products: [
            { name: 'Áo Khoác Da Nam AllSaints Balfern Leather Jacket', sku: 'ZARA-JKT-09', price: '$380.00', stock: '24 chiếc', sold: '184 đã bán', status: 'Đang bán' },
            { name: 'Quần Jean Nam ASOS Design Oversized Shorts', sku: 'ZARA-DNM-32', price: '$70.00', stock: '85 chiếc', sold: '310 đã bán', status: 'Đang bán' },
            { name: 'Áo Polo Nam Classic Fit Blue Cotton', sku: 'ZARA-POLO-BL', price: '$45.00', stock: '150 chiếc', sold: '420 đã bán', status: 'Đang bán' }
        ]
    },
    'SH-015': {
        id: '#SH-015',
        initials: 'CF',
        name: 'Canon Flagship Store',
        badge: 'JML MALL',
        badgeClass: 'bg-danger-500 text-white',
        meta: 'Mã Shop: #SH-015 • Quận 3, TP.HCM • Tham gia: 01/01/2024',
        gmv: '$164,500.00',
        fee: '$11,515.00',
        productCount: '64 mặt hàng',
        rating: '★ 4.9 / 5.0',
        products: [
            { name: 'Máy Ảnh Canon EOS DSLR Pro Kit 24-70mm', sku: 'CAN-EOS-PRO', price: '$1,299.00', stock: '15 bộ', sold: '128 đã bán', status: 'Đang bán' },
            { name: 'Ống Kính Canon RF 50mm f/1.8 STM', sku: 'CAN-LENS-50', price: '$199.00', stock: '40 chiếc', sold: '215 đã bán', status: 'Đang bán' }
        ]
    },
    'SH-889': {
        id: '#SH-889',
        initials: 'SM',
        name: 'SoundMax Audio Shop',
        badge: 'TIÊU CHUẨN',
        badgeClass: 'bg-neutral-200 text-neutral-700',
        meta: 'Mã Shop: #SH-889 • Hải Châu, Đà Nẵng • Tham gia: 22/08/2025',
        gmv: '$42,800.00',
        fee: '$2,996.00',
        productCount: '52 mặt hàng',
        rating: '★ 4.5 / 5.0',
        products: [
            { name: 'Tai Nghe Gaming Không Dây Wireless Pro 7.1', sku: 'SM-HEAD-71', price: '$145.00', stock: '19 chiếc', sold: '112 đã bán', status: 'Đang bị khiếu nại' },
            { name: 'Đồng Hồ Thông Minh Smart Watch Pro', sku: 'SM-WATCH-02', price: '$150.00', stock: '30 chiếc', sold: '88 đã bán', status: 'Đang bán' }
        ]
    }
};

// Cơ sở dữ liệu mẫu của các Đơn hàng (Orders) kèm danh sách Sản phẩm & Shop
const ORDERS_DATABASE = {
    'MP-9041': {
        id: '#MP-9041',
        escrowBadge: '🔒 Sàn đang giữ tiền ($899.00)',
        escrowClass: 'bg-primary-50 text-primary-500',
        time: 'Thời gian đặt: 07/11/2026 08:30 • Vận chuyển: GHN Express (Mã vận đơn: GHN8829104)',
        shopName: 'AB Technology Ltd (JML Mall - #SH-102)',
        shopAddress: 'Kho lấy hàng: Nguyễn Thị Minh Khai, Quận 1, TP.HCM',
        buyerName: 'Trần Minh Quân (0908.123.456)',
        buyerAddress: 'Địa chỉ nhận: Phố Đi Bộ Nguyễn Huệ, Quận 1, TP.HCM',
        total: '$899.00',
        fee: '-$62.93',
        net: '$836.07',
        items: [
            { name: 'Samsung Galaxy Note 4 SM-N910C 32GB Chính Hãng', variant: 'Đen Titan, 32GB • SKU: SAM-N910-BLK', price: '$850.00', qty: '1', subtotal: '$850.00' },
            { name: 'Bộ Sạc Nhanh Super Fast Charging 45W USB-C', variant: 'Trắng, Cáp 1.8m • SKU: SAM-CHG-45W', price: '$49.00', qty: '1', subtotal: '$49.00' }
        ]
    },
    'MP-9040': {
        id: '#MP-9040',
        escrowBadge: '✓ Đã giải ngân về Ví Shop',
        escrowClass: 'bg-success-50 text-success-500',
        time: 'Thời gian đặt: 06/11/2026 14:15 • Vận chuyển: Giao Hàng Tiết Kiệm (Đã giao thành công)',
        shopName: 'Zara Fashion Store (Shop Yêu thích+ - #SH-418)',
        shopAddress: 'Kho lấy hàng: Tràng Tiền, Quận Hoàn Kiếm, Hà Nội',
        buyerName: 'Nguyễn Hải Đăng (0912.345.678)',
        buyerAddress: 'Địa chỉ nhận: Phố Huế, Quận Hai Bà Trưng, Hà Nội',
        total: '$450.00',
        fee: '-$31.50',
        net: '$418.50',
        items: [
            { name: 'Áo Khoác Da Nam AllSaints Balfern Leather Biker Jacket', variant: 'Size L, Nâu Đen • SKU: ZARA-JKT-09', price: '$380.00', qty: '1', subtotal: '$380.00' },
            { name: 'Quần Jean Nam ASOS Design Oversized Denim Shorts', variant: 'Size 32, Xanh Indigo • SKU: ZARA-DNM-32', price: '$70.00', qty: '1', subtotal: '$70.00' }
        ]
    },
    'MP-9039': {
        id: '#MP-9039',
        escrowBadge: '⚠️ Đang đóng băng chờ phân xử tranh chấp',
        escrowClass: 'bg-danger-50 text-danger-500',
        time: 'Thời gian đặt: 05/11/2026 19:40 • Trạng thái: Khách yêu cầu Trả hàng / Hoàn tiền',
        shopName: 'SoundMax Audio Shop (#SH-889)',
        shopAddress: 'Kho lấy hàng: Quận Hải Châu, TP. Đà Nẵng',
        buyerName: 'Lê Thuỳ Dung (0987.654.321)',
        buyerAddress: 'Địa chỉ nhận: Khu Công Nghệ Cao Hòa Lạc, Hà Nội',
        total: '$295.00',
        fee: '-$20.65 (Tạm khóa)',
        net: '$274.35 (Đang giữ tại Sàn)',
        items: [
            { name: 'Tai Nghe Gaming Không Dây Wireless Pro 7.1', variant: 'Đen LED RGB • SKU: SM-HEAD-71', price: '$145.00', qty: '1', subtotal: '$145.00' },
            { name: 'Đồng Hồ Thông Minh Smart Watch Pro', variant: 'Dây Silicon Đen • SKU: SM-WATCH-02', price: '$150.00', qty: '1', subtotal: '$150.00' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
    initSidebarTabs();
    initRevenueChart();
    initCategoryChart();
    initGlobalSearch();
});

/**
 * Khởi tạo sự kiện click chuyển đổi giữa các Tab riêng biệt trên Sidebar
 */
function initSidebarTabs() {
    const navItems = document.querySelectorAll('.nav-item[data-tab]');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = item.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

/**
 * Chuyển đổi sang màn hình Tab tương ứng
 */
function switchTab(tabId) {
    const allViews = document.querySelectorAll('.tab-view');
    const allNavItems = document.querySelectorAll('.nav-item[data-tab]');

    allViews.forEach(view => {
        if (view.id === tabId) {
            view.classList.remove('hidden');
        } else {
            view.classList.add('hidden');
        }
    });

    allNavItems.forEach(nav => {
        if (nav.getAttribute('data-tab') === tabId) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}

/**
 * Mở Modal Xem chi tiết Cửa hàng (Shop) & Danh sách sản phẩm của Shop đó
 */
function openShopDetail(shopKey) {
    const shop = SHOPS_DATABASE[shopKey] || SHOPS_DATABASE['SH-102'];

    document.getElementById('modalShopAvatar').textContent = shop.initials;
    document.getElementById('modalShopName').textContent = shop.name;

    const badgeEl = document.getElementById('modalShopBadge');
    badgeEl.textContent = shop.badge;
    badgeEl.className = `px-2 py-0.5 text-[10px] font-bold rounded uppercase ${shop.badgeClass}`;

    document.getElementById('modalShopMeta').textContent = shop.meta;
    document.getElementById('modalShopGmv').textContent = shop.gmv;
    document.getElementById('modalShopFee').textContent = shop.fee;
    document.getElementById('modalShopProductCount').textContent = shop.productCount;
    document.getElementById('modalShopRating').textContent = shop.rating;

    const tbody = document.getElementById('modalShopProductsBody');
    tbody.innerHTML = shop.products.map(p => `
        <tr class="hover:bg-neutral-50">
            <td class="py-3 px-4 font-bold text-neutral-900">${p.name}</td>
            <td class="py-3 px-4 font-mono text-neutral-500">${p.sku}</td>
            <td class="py-3 px-4 font-bold text-primary-500">${p.price}</td>
            <td class="py-3 px-4 text-neutral-700">${p.stock}</td>
            <td class="py-3 px-4 text-neutral-600">${p.sold}</td>
            <td class="py-3 px-4 text-right">
                <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${p.status.includes('khiếu nại') ? 'bg-danger-50 text-danger-500' : 'bg-success-50 text-success-500'}">
                    ${p.status}
                </span>
            </td>
        </tr>
    `).join('');

    toggleModal('shopDetailModal');
}

/**
 * Mở Modal Xem chi tiết Đơn hàng (Gồm thông tin Shop, Người mua, và từng Sản phẩm trong đơn)
 */
function openOrderDetail(orderKey) {
    const order = ORDERS_DATABASE[orderKey] || ORDERS_DATABASE['MP-9041'];

    document.getElementById('modalOrderId').textContent = `Chi Tiết Đơn Hàng ${order.id}`;
    const badgeEl = document.getElementById('modalOrderEscrowBadge');
    badgeEl.textContent = order.escrowBadge;
    badgeEl.className = `px-2 py-0.5 text-xs font-semibold rounded ${order.escrowClass}`;

    document.getElementById('modalOrderTime').textContent = order.time;
    document.getElementById('modalOrderShopName').textContent = order.shopName;
    document.getElementById('modalOrderShopAddress').textContent = order.shopAddress;
    document.getElementById('modalOrderBuyerName').textContent = order.buyerName;
    document.getElementById('modalOrderBuyerAddress').textContent = order.buyerAddress;

    document.getElementById('modalOrderTotal').textContent = order.total;
    document.getElementById('modalOrderFee').textContent = order.fee;
    document.getElementById('modalOrderNet').textContent = order.net;

    const tbody = document.getElementById('modalOrderItemsBody');
    tbody.innerHTML = order.items.map(item => `
        <tr class="hover:bg-neutral-50">
            <td class="py-3 px-4 font-bold text-neutral-900">${item.name}</td>
            <td class="py-3 px-4 text-neutral-500">${item.variant}</td>
            <td class="py-3 px-4 font-medium">${item.price}</td>
            <td class="py-3 px-4 font-semibold">x${item.qty}</td>
            <td class="py-3 px-4 text-right font-bold text-neutral-900">${item.subtotal}</td>
        </tr>
    `).join('');

    toggleModal('orderDetailModal');
}

/**
 * Lọc danh sách Đơn hàng ở Tab Đơn hàng Trung gian theo Shop & Trạng thái
 */
function filterFullOrders() {
    const shopFilter = document.getElementById('fullOrderShopFilter')?.value || 'all';
    const statusFilter = document.getElementById('fullOrderStatusFilter')?.value || 'all';
    const cards = document.querySelectorAll('#fullOrdersContainer .order-card');

    cards.forEach(card => {
        const cardShop = card.getAttribute('data-shop') || '';
        const cardStatus = card.getAttribute('data-status') || '';

        const matchShop = (shopFilter === 'all') || (cardShop === shopFilter);
        const matchStatus = (statusFilter === 'all') || (cardStatus === statusFilter);

        card.style.display = (matchShop && matchStatus) ? '' : 'none';
    });
}

/**
 * Điều khiển đóng/mở Modal
 */
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Xử lý phát hành Chiến dịch / Voucher toàn sàn
 */
function saveCampaign() {
    const nameInput = document.getElementById('campaignNameInput');
    const campaignName = nameInput ? nameInput.value.trim() : '';

    if (!campaignName) {
        alert('Vui lòng nhập tên Chiến dịch hoặc Sự kiện toàn sàn!');
        return;
    }

    alert(`Đã phát hành chiến dịch "${campaignName}" và gửi thông báo tới 1,248 Shops trên toàn sàn!`);
    toggleModal('campaignModal');
}

/**
 * Xử lý giải ngân tiền giữ hộ (Escrow) về ví của Shop
 */
function releaseEscrow(orderId, shopName, netAmount) {
    const confirmed = confirm(
        `XÁC NHẬN ĐỐI SOÁT & GIẢI NGÂN:\n\n` +
        `• Mã đơn hàng: ${orderId}\n` +
        `• Cửa hàng thụ hưởng: ${shopName}\n` +
        `• Số tiền chuyển vào Ví Shop (sau trừ 7% phí sàn): ${netAmount}\n\n` +
        `Bạn có chắc chắn muốn giải ngân ngay?`
    );

    if (confirmed) {
        alert(`Đã giải ngân thành công ${netAmount} vào ví của "${shopName}" cho đơn ${orderId}!`);
    }
}

/**
 * Xử lý duyệt nhanh các yêu cầu trong bảng
 */
function approveQuick(element, successMessage) {
    alert(successMessage);
    const rowOrCard = element.closest('tr, .p-4, .p-3');
    if (rowOrCard) {
        rowOrCard.style.opacity = '0.4';
        rowOrCard.style.pointerEvents = 'none';
    }
}

/**
 * Khởi tạo biểu đồ GMV Toàn Sàn vs Doanh thu Hoa hồng Sàn 12 tháng
 */
function initRevenueChart() {
    const canvas = document.getElementById('revenueChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 
                'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 
                'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
            ],
            datasets: [
                {
                    label: 'Tổng GMV Toàn Sàn ($)',
                    data: [520000, 610000, 590000, 720000, 810000, 890000, 960000, 940000, 1080000, 1150000, 1284500, 1450000],
                    borderColor: '#0D6EFD',
                    backgroundColor: 'rgba(13, 110, 253, 0.08)',
                    fill: true,
                    tension: 0.35,
                    borderWidth: 2.5,
                    pointBackgroundColor: '#0D6EFD',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
                {
                    label: 'Doanh thu Hoa hồng Sàn ($)',
                    data: [36400, 42700, 41300, 50400, 56700, 62300, 67200, 65800, 75600, 80500, 89915, 101500],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    fill: true,
                    tension: 0.35,
                    borderWidth: 2.5,
                    pointBackgroundColor: '#10B981',
                    pointRadius: 3,
                    pointHoverRadius: 5,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    padding: 10,
                    backgroundColor: '#14181F',
                    titleFont: { size: 12, weight: 'bold' },
                    bodyFont: { size: 11 },
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 }, color: '#6F7C8E' }
                },
                y: {
                    grid: { color: '#EDF0F2' },
                    ticks: {
                        font: { size: 11 },
                        color: '#6F7C8E',
                        callback: function(val) {
                            if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
                            return '$' + (val / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Khởi tạo biểu đồ tỷ trọng GMV theo Phân hạng Shop
 */
function initCategoryChart() {
    const canvas = document.getElementById('categoryChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['JML Mall (Chính hãng)', 'Shop Yêu Thích+ (Uy tín)', 'Shop Tiêu Chuẩn'],
            datasets: [{
                data: [48, 32, 20],
                backgroundColor: ['#FA3434', '#FF9017', '#0D6EFD'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '72%',
            plugins: {
                legend: { display: false }
            }
        }
    });
}

/**
 * Tìm kiếm nhanh trên toàn sàn
 */
function initGlobalSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('#fullOrdersContainer .order-card');
        cards.forEach(card => {
            card.style.display = (!query || card.textContent.toLowerCase().includes(query)) ? '' : 'none';
        });
    });
}
