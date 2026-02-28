// Dummy data
const myProducts = [
    { id: 1, name: 'iPhone 12 Pro 128GB', price: 'Rp 7.500.000', status: 'Aktif', views: 245, image: '📱' },
    { id: 2, name: 'MacBook Air M1 2020', price: 'Rp 11.000.000', status: 'Aktif', views: 189, image: '💻' },
    { id: 3, name: 'Canon EOS M50', price: 'Rp 5.200.000', status: 'Terjual', views: 156, image: '📷' },
    { id: 4, name: 'Sony WH-1000XM4', price: 'Rp 3.200.000', status: 'Aktif', views: 98, image: '🎧' },
];

const transactions = [
    { 
        id: 'TRX001', 
        product: 'iPhone 12 Pro 128GB', 
        buyer: 'Ahmad S.', 
        price: 'Rp 7.500.000', 
        status: 'pending',
        statusText: 'Menunggu Pembayaran',
        date: '28 Feb 2026',
        image: '📱'
    },
    { 
        id: 'TRX002', 
        product: 'MacBook Air M1', 
        buyer: 'Siti R.', 
        price: 'Rp 11.000.000', 
        status: 'shipping',
        statusText: 'Sedang Dikirim',
        date: '27 Feb 2026',
        image: '💻'
    },
    { 
        id: 'TRX003', 
        product: 'Canon EOS M50', 
        buyer: 'Budi P.', 
        price: 'Rp 5.200.000', 
        status: 'completed',
        statusText: 'Selesai',
        date: '25 Feb 2026',
        image: '📷'
    },
    { 
        id: 'TRX004', 
        product: 'Sony WH-1000XM4', 
        buyer: 'Dewi L.', 
        price: 'Rp 3.200.000', 
        status: 'shipping',
        statusText: 'Sedang Dikirim',
        date: '26 Feb 2026',
        image: '🎧'
    },
];

// Show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('bg-green-50', 'text-primary');
    });
    event.target.closest('.nav-item').classList.add('bg-green-50', 'text-primary');
}

// Check URL hash on page load
window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1); // Remove #
    if (hash && document.getElementById(hash)) {
        // Find and click the corresponding nav button
        const navButtons = document.querySelectorAll('.nav-item');
        navButtons.forEach(btn => {
            if (btn.getAttribute('onclick').includes(hash)) {
                btn.click();
            }
        });
    }
});

// Render my products
function renderMyProducts() {
    const tbody = document.getElementById('myProductsList');
    
    tbody.innerHTML = myProducts.map(product => `
        <tr class="hover:bg-gray-50">
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-2xl">
                        ${product.image}
                    </div>
                    <span class="font-medium text-gray-900">${product.name}</span>
                </div>
            </td>
            <td class="px-6 py-4 text-gray-700">${product.price}</td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-sm font-medium ${
                    product.status === 'Aktif' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                }">
                    ${product.status}
                </span>
            </td>
            <td class="px-6 py-4 text-gray-700">${product.views}x</td>
            <td class="px-6 py-4">
                <div class="flex gap-2">
                    <button class="px-4 py-2 text-sm font-medium text-primary hover:bg-green-50 rounded-lg transition">
                        Edit
                    </button>
                    <button class="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition">
                        Hapus
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Render transactions
function renderTransactions(filter = 'all') {
    const container = document.getElementById('transactionsList');
    
    const filtered = filter === 'all' 
        ? transactions 
        : transactions.filter(t => t.status === filter);
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm p-12 text-center">
                <div class="text-5xl mb-4">📦</div>
                <p class="text-gray-500">Tidak ada transaksi</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(transaction => `
        <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-3xl">
                        ${transaction.image}
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-1">${transaction.product}</h3>
                        <p class="text-sm text-gray-500">ID: ${transaction.id}</p>
                    </div>
                </div>
                <span class="px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}">
                    ${transaction.statusText}
                </span>
            </div>
            <div class="grid grid-cols-3 gap-4 pt-4 border-t">
                <div>
                    <p class="text-sm text-gray-500 mb-1">Pembeli</p>
                    <p class="font-medium text-gray-900">${transaction.buyer}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500 mb-1">Total</p>
                    <p class="font-medium text-gray-900">${transaction.price}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500 mb-1">Tanggal</p>
                    <p class="font-medium text-gray-900">${transaction.date}</p>
                </div>
            </div>
            <div class="mt-4 flex gap-2">
                ${getActionButtons(transaction.status)}
            </div>
        </div>
    `).join('');
}

// Get status color
function getStatusColor(status) {
    const colors = {
        pending: 'bg-yellow-100 text-yellow-700',
        shipping: 'bg-blue-100 text-blue-700',
        completed: 'bg-green-100 text-green-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
}

// Get action buttons based on status
function getActionButtons(status) {
    if (status === 'pending') {
        return `
            <button class="flex-1 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-green-700 transition">
                Konfirmasi Pembayaran
            </button>
        `;
    } else if (status === 'shipping') {
        return `
            <button class="flex-1 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-green-700 transition">
                Lacak Pengiriman
            </button>
        `;
    } else {
        return `
            <button class="flex-1 px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition border">
                Lihat Detail
            </button>
        `;
    }
}

// Filter transactions
function filterTransactions(filter) {
    // Update tab styles
    document.querySelectorAll('.transaction-tab').forEach(tab => {
        tab.classList.remove('bg-primary', 'text-white');
        tab.classList.add('bg-white', 'text-gray-700');
    });
    event.target.classList.remove('bg-white', 'text-gray-700');
    event.target.classList.add('bg-primary', 'text-white');
    
    renderTransactions(filter);
}

// Form submission
document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Produk berhasil diupload! (Demo)');
});

// Initial render
renderMyProducts();
renderTransactions();

// Set default active nav
document.querySelector('.nav-item').classList.add('bg-green-50', 'text-primary');
