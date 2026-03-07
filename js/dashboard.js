// Real transaction data from API
let sellerOrders = [];

// Image upload handler
let uploadedImagesFiles = [];
let uploadedImagesPreview = [];
let selectedDiscount = 0;
let selectedColorOptions = [];

function selectColorOption(option) {
    const index = selectedColorOptions.indexOf(option);
    if (index > -1) selectedColorOptions.splice(index, 1);
    else selectedColorOptions.push(option);

    document.querySelectorAll('.color-option-btn').forEach(btn => {
        const btnOption = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (selectedColorOptions.includes(btnOption)) {
            btn.classList.add('border-primary', 'bg-green-50');
            btn.classList.remove('border-gray-300');
        } else {
            btn.classList.remove('border-primary', 'bg-green-50');
            btn.classList.add('border-gray-300');
        }
    });
    updateSelectedOptionsDisplay();
}

function updateSelectedOptionsDisplay() {
    const display = document.getElementById('selectedOptionsDisplay');
    const list = document.getElementById('selectedOptionsList');
    if (selectedColorOptions.length > 0) {
        display.classList.remove('hidden');
        list.innerHTML = selectedColorOptions.map(option => `
            <span class="inline-flex items-center gap-1 px-3 py-1 bg-white border border-green-500 text-green-700 rounded-full text-xs font-medium">
                `+ option + `
                <button type="button" onclick="selectColorOption('`+ option + `')" class="hover:text-red-500">
                    <i class="fas fa-times"></i>
                </button>
            </span>
        `).join('');
    } else {
        display.classList.add('hidden');
    }
}

function selectDiscount(percentage) {
    selectedDiscount = percentage;
    document.querySelectorAll('.discount-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'bg-green-50', 'text-primary');
        btn.classList.add('border-gray-300');
    });
    event.target.classList.remove('border-gray-300');
    event.target.classList.add('border-primary', 'bg-green-50', 'text-primary');
    document.getElementById('customDiscount').value = '';
    updatePricePreview();
}

function updatePricePreview() {
    let rawPrice = document.getElementById('productPrice').value || '0';
    const price = parseInt(rawPrice.replace(/\D/g, '')) || 0;
    const discount = selectedDiscount;

    if (price > 0 && discount > 0) {
        const discountedPrice = price - (price * discount / 100);
        document.getElementById('originalPrice').textContent = 'Rp ' + price.toLocaleString('id-ID');
        document.getElementById('discountAmount').textContent = discount + '%';
        document.getElementById('finalPrice').textContent = 'Rp ' + Math.round(discountedPrice).toLocaleString('id-ID');
        document.getElementById('pricePreview').classList.remove('hidden');
    } else {
        let el = document.getElementById('pricePreview');
        if (el) el.classList.add('hidden');
    }
}

// Adjust stock on upload form
function adjustStock(delta) {
    const input = document.getElementById('productStock');
    let val = parseInt(input.value) || 1;
    val = Math.max(1, val + delta);
    input.value = val;
}

// Adjust stock on edit modal
function adjustEditStock(delta) {
    const input = document.getElementById('editProductStock');
    let val = parseInt(input.value) || 0;
    val = Math.max(0, val + delta);
    input.value = val;
}

document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('productImages');
    const imagePreview = document.getElementById('imagePreview');
    const priceInput = document.getElementById('productPrice');
    const customDiscountInput = document.getElementById('customDiscount');

    if (priceInput) {
        priceInput.addEventListener('input', function (e) {
            let val = this.value.replace(/\D/g, '');
            if (val) {
                this.value = new Intl.NumberFormat('id-ID').format(val);
            } else {
                this.value = '';
            }
            updatePricePreview();
        });
    }

    if (customDiscountInput) {
        customDiscountInput.addEventListener('input', function (e) {
            let value = parseInt(e.target.value) || 0;
            if (value > 99) { value = 99; e.target.value = 99; }
            if (value < 0) { value = 0; e.target.value = 0; }
            selectedDiscount = value;
            document.querySelectorAll('.discount-btn').forEach(btn => {
                btn.classList.remove('border-primary', 'bg-green-50', 'text-primary');
                btn.classList.add('border-gray-300');
            });
            updatePricePreview();
        });
    }

    if (imageInput) {
        imageInput.addEventListener('change', function (e) {
            const files = Array.from(e.target.files);
            if (files.length > 5) {
                if (typeof showToast === 'function') showToast('warning', 'Maksimal 5 foto per produk');
                e.target.value = '';
                return;
            }

            uploadedImagesPreview = [];
            uploadedImagesFiles = [];
            imagePreview.innerHTML = '';

            files.forEach((file, index) => {
                if (file.size > 20 * 1024 * 1024) {
                    if (typeof showToast === 'function') showToast('error', 'File ' + file.name + ' terlalu besar. Maksimal 20MB per foto');
                    return;
                }

                uploadedImagesFiles.push(file);

                const reader = new FileReader();
                reader.onload = function (event) {
                    uploadedImagesPreview.push(event.target.result);
                    const imgDiv = document.createElement('div');
                    imgDiv.className = 'relative';
                    imgDiv.innerHTML = `
                        <img src="`+ event.target.result + `" class="w-full h-20 object-cover rounded-lg">
                        <button type="button" onclick="removeImage(`+ index + `)" class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600">×</button>
                    `;
                    imagePreview.appendChild(imgDiv);
                };
                reader.readAsDataURL(file);
            });
        });
    }

    // Edit price input formatting
    const editPriceInput = document.getElementById('editProductPrice');
    if (editPriceInput) {
        editPriceInput.addEventListener('input', function () {
            let val = this.value.replace(/\D/g, '');
            if (val) {
                this.value = new Intl.NumberFormat('id-ID').format(val);
            } else {
                this.value = '';
            }
        });
    }
});

function removeImage(index) {
    uploadedImagesFiles.splice(index, 1);
    uploadedImagesPreview.splice(index, 1);

    const imageInput = document.getElementById('productImages');
    imageInput.value = ''; // Reset input to avoid dupes

    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = '';

    uploadedImagesPreview.forEach((img, i) => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'relative';
        imgDiv.innerHTML = `
            <img src="`+ img + `" class="w-full h-20 object-cover rounded-lg">
            <button type="button" onclick="removeImage(`+ i + `)" class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600">×</button>
        `;
        imagePreview.appendChild(imgDiv);
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('bg-green-50', 'text-primary');
    });

    if (window.event && window.event.target) {
        let navItem = window.event.target.closest('.nav-item');
        if (navItem) {
            navItem.classList.add('bg-green-50', 'text-primary');
        }
    }

    // Fallback for programmatic calls
    const targetNav = document.querySelector(`button[onclick*="showSection('${sectionId}')"]`);
    if (targetNav) {
        targetNav.classList.add('bg-green-50', 'text-primary');
    }

    // Refresh product list when switching to myproducts
    if (sectionId === 'myproducts') {
        renderMyProducts();
    }
    // Refresh transactions when switching to transactions
    if (sectionId === 'transactions') {
        renderTransactions();
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        const navButtons = document.querySelectorAll('.nav-item');
        navButtons.forEach(btn => {
            if (btn.getAttribute('onclick').includes(hash)) {
                btn.click();
            }
        });
    }
});

// ==========================================
// My Products - Render, View, Edit, Delete
// ==========================================

async function renderMyProducts() {
    const tbody = document.getElementById('myProductsList');

    try {
        const response = await fetch('get_my_products.php');
        if (!response.ok) throw new Error('Network error');

        const myProducts = await response.json();

        if (myProducts.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="px-6 py-12 text-center">
                        <div class="flex flex-col items-center justify-center">
                            <i class="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
                            <p class="text-gray-500 mb-4">Belum ada produk yang diupload</p>
                            <button onclick="showSection('upload')" class="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition">
                                Upload Produk Pertama
                            </button>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = myProducts.map((product, idx) => {
            const statusClass = product.status === 'Aktif'
                ? 'bg-green-100 text-green-700'
                : product.status === 'Terjual'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700';

            const stockClass = product.stock <= 0
                ? 'text-red-600 font-bold'
                : product.stock <= 3
                    ? 'text-orange-500 font-semibold'
                    : 'text-gray-700';

            return `
            <tr class="${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-green-50/30 transition">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/48?text=No+Img'">
                        </div>
                        <div class="min-w-0">
                            <span class="font-medium text-gray-900 block truncate max-w-[200px]">${product.title}</span>
                            <span class="text-xs text-gray-400">${product.category || ''}</span>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 text-gray-700">
                    <div>
                        ${product.originalPrice ? `<p class="text-xs text-gray-400 line-through">Rp ${product.originalPrice.toLocaleString('id-ID')}</p>` : ''}
                        <p class="font-semibold">Rp ${product.price.toLocaleString('id-ID')}</p>
                        ${product.discount > 0 ? `<span class="text-xs text-red-500 font-medium">${product.discount}% OFF</span>` : ''}
                    </div>
                </td>
                <td class="px-6 py-4 text-center">
                    <span class="${stockClass}">${product.stock}</span>
                </td>
                <td class="px-6 py-4">
                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${statusClass}">
                        ${product.status}
                    </span>
                </td>
                <td class="px-6 py-4 text-gray-500 text-sm">${product.views || 0}x</td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-1">
                        <button onclick="viewProduct(${product.id})" title="Lihat" class="w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition">
                            <i class="fas fa-eye text-sm"></i>
                        </button>
                        <button onclick="editProduct(${product.id})" title="Edit" class="w-8 h-8 rounded-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition">
                            <i class="fas fa-edit text-sm"></i>
                        </button>
                        <button onclick="deleteProduct(${product.id}, '${product.title.replace(/'/g, "\\'")}') " title="Hapus" class="w-8 h-8 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition">
                            <i class="fas fa-trash text-sm"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
        }).join('');
    } catch (e) {
        console.error('Error rendering products:', e);
        if (typeof showToast === 'function') showToast('error', 'Gagal memuat produk saya.');
    }
}

// ==========================================
// View Product
// ==========================================
function viewProduct(productId) {
    window.open('../product-detail.php?id=' + productId, '_blank');
}

// ==========================================
// Edit Product
// ==========================================
async function editProduct(productId) {
    const modal = document.getElementById('editProductModal');
    modal.classList.remove('hidden');

    // Show loading state
    document.getElementById('editSubmitBtn').disabled = true;
    document.getElementById('editSubmitBtn').innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Memuat...';

    try {
        const response = await fetch('get_product.php?id=' + productId);
        const data = await response.json();

        if (!data.success) {
            closeEditModal();
            if (typeof showToast === 'function') showToast('error', data.message || 'Gagal memuat data produk');
            return;
        }

        const p = data.product;

        document.getElementById('editProductId').value = p.id;
        document.getElementById('editProductName').value = p.name;
        document.getElementById('editProductCategory').value = p.category;
        document.getElementById('editProductCondition').value = p.condition_type;
        document.getElementById('editProductPrice').value = new Intl.NumberFormat('id-ID').format(p.price);
        document.getElementById('editProductStock').value = p.stock;
        document.getElementById('editProductDescription').value = p.description || '';
        document.getElementById('editProductLocation').value = p.location || '';

        // Image preview
        const imgPreview = document.getElementById('editProductImagePreview');
        if (p.image) {
            imgPreview.src = p.image;
            imgPreview.style.display = 'block';
        } else {
            imgPreview.src = 'https://via.placeholder.com/80?text=No+Img';
        }

        // Reset file input
        document.getElementById('editProductImage').value = '';

    } catch (e) {
        console.error('Error fetching product:', e);
        closeEditModal();
        if (typeof showToast === 'function') showToast('error', 'Gagal memuat data produk');
        return;
    }

    document.getElementById('editSubmitBtn').disabled = false;
    document.getElementById('editSubmitBtn').innerHTML = '<i class="fas fa-save mr-2"></i>Simpan Perubahan';
}

function previewEditImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('editProductImagePreview').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function closeEditModal() {
    document.getElementById('editProductModal').classList.add('hidden');
}

// Handle edit form submission
document.addEventListener('DOMContentLoaded', function () {
    const editForm = document.getElementById('editProductForm');
    if (editForm) {
        editForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = document.getElementById('editSubmitBtn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Menyimpan...';

            const formData = new FormData();
            formData.append('product_id', document.getElementById('editProductId').value);
            formData.append('name', document.getElementById('editProductName').value);
            formData.append('category', document.getElementById('editProductCategory').value);
            formData.append('condition', document.getElementById('editProductCondition').value);
            formData.append('price', document.getElementById('editProductPrice').value);
            formData.append('stock', document.getElementById('editProductStock').value);
            formData.append('description', document.getElementById('editProductDescription').value);
            formData.append('location', document.getElementById('editProductLocation').value);

            // Optional image
            const imageFile = document.getElementById('editProductImage').files[0];
            if (imageFile) {
                formData.append('image', imageFile);
            }

            try {
                const response = await fetch('edit_product_handler.php', {
                    method: 'POST',
                    body: formData
                });

                const resData = await response.json();

                if (resData.success) {
                    closeEditModal();
                    if (typeof showToast === 'function') showToast('success', resData.message);
                    renderMyProducts();
                } else {
                    if (typeof showToast === 'function') showToast('error', resData.message || 'Gagal mengupdate produk');
                }
            } catch (err) {
                console.error('Edit error:', err);
                if (typeof showToast === 'function') showToast('error', 'Terjadi kesalahan server.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Simpan Perubahan';
            }
        });
    }
});

// ==========================================
// Delete Product
// ==========================================
function deleteProduct(productId, productName) {
    document.getElementById('deleteProductId').value = productId;
    document.getElementById('deleteProductName').textContent = productName || 'ini';
    document.getElementById('deleteProductModal').classList.remove('hidden');
}

function closeDeleteModal() {
    document.getElementById('deleteProductModal').classList.add('hidden');
}

async function confirmDeleteProduct() {
    const productId = document.getElementById('deleteProductId').value;
    const confirmBtn = document.getElementById('deleteConfirmBtn');

    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Menghapus...';

    try {
        const response = await fetch('delete_product_handler.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id: parseInt(productId) })
        });

        const resData = await response.json();

        if (resData.success) {
            closeDeleteModal();
            if (typeof showToast === 'function') showToast('success', resData.message);
            renderMyProducts();
        } else {
            if (typeof showToast === 'function') showToast('error', resData.message || 'Gagal menghapus produk');
        }
    } catch (err) {
        console.error('Delete error:', err);
        if (typeof showToast === 'function') showToast('error', 'Terjadi kesalahan server.');
    } finally {
        confirmBtn.disabled = false;
        confirmBtn.innerHTML = '<i class="fas fa-trash mr-2"></i>Hapus';
    }
}

// ==========================================
// Transactions - Real Data from API
// ==========================================
async function renderTransactions(filter = 'all') {
    const container = document.getElementById('transactionsList');
    if (!container) return;

    container.innerHTML = `
        <div class="text-center py-8">
            <i class="fas fa-spinner fa-spin text-3xl text-gray-300 mb-3"></i>
            <p class="text-gray-500">Memuat transaksi...</p>
        </div>
    `;

    try {
        const response = await fetch('get_seller_orders.php?status=' + filter);
        const data = await response.json();

        if (!data.success) throw new Error(data.message);

        sellerOrders = data.orders;

        if (sellerOrders.length === 0) {
            container.innerHTML = `
                <div class="bg-white rounded-xl shadow-sm p-12 text-center">
                    <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                    <p class="text-gray-500">Tidak ada transaksi${filter !== 'all' ? ' dengan status ini' : ''}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = sellerOrders.map(order => {
            const statusColors = {
                pending: 'bg-yellow-100 text-yellow-700',
                paid: 'bg-blue-100 text-blue-700',
                shipping: 'bg-indigo-100 text-indigo-700',
                completed: 'bg-green-100 text-green-700',
                cancelled: 'bg-red-100 text-red-700'
            };
            const statusLabels = {
                pending: 'Menunggu Pembayaran',
                paid: 'Sudah Dibayar',
                shipping: 'Sedang Dikirim',
                completed: 'Selesai',
                cancelled: 'Dibatalkan'
            };

            const firstItem = order.items && order.items[0];
            const productImage = firstItem && firstItem.product_image
                ? `<img src="${firstItem.product_image}" class="w-full h-full object-cover" onerror="this.parentNode.innerHTML='<i class=\\'fas fa-box text-3xl text-gray-400\\'></i>'">`
                : '<i class="fas fa-box text-3xl text-gray-400"></i>';

            const productNames = order.items
                ? order.items.map(i => i.product_name).join(', ')
                : '-';

            const itemCount = order.items ? order.items.reduce((sum, i) => sum + i.quantity, 0) : 0;

            const orderDate = new Date(order.created_at);
            const dateStr = orderDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
            const timeStr = orderDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

            return `
            <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                            ${productImage}
                        </div>
                        <div class="min-w-0">
                            <h3 class="font-semibold text-gray-900 mb-1 truncate max-w-[300px]">${productNames}</h3>
                            <p class="text-sm text-gray-500">Order: ${order.order_number}</p>
                            <p class="text-xs text-gray-400">${itemCount} item</p>
                        </div>
                    </div>
                    <span class="px-4 py-2 rounded-full text-sm font-medium ${statusColors[order.status] || 'bg-gray-100 text-gray-700'} flex-shrink-0">
                        ${statusLabels[order.status] || order.status}
                    </span>
                </div>
                <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div>
                        <p class="text-sm text-gray-500 mb-1">Pembeli</p>
                        <p class="font-medium text-gray-900">${order.buyer_name}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500 mb-1">Total</p>
                        <p class="font-semibold text-gray-900">Rp ${Number(order.total_amount).toLocaleString('id-ID')}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500 mb-1">Tanggal</p>
                        <p class="font-medium text-gray-900">${dateStr}</p>
                        <p class="text-xs text-gray-400">${timeStr}</p>
                    </div>
                </div>
                ${order.payment_method ? `
                <div class="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                    <i class="fas fa-credit-card text-gray-400 text-xs"></i>
                    <span class="text-xs text-gray-500">Pembayaran: <strong>${order.payment_method}</strong></span>
                </div>` : ''}
                ${order.notes ? `
                <div class="mt-2 p-2 bg-gray-50 rounded-lg">
                    <p class="text-xs text-gray-500"><i class="fas fa-sticky-note mr-1"></i>${order.notes}</p>
                </div>` : ''}
            </div>
            `;
        }).join('');

    } catch (e) {
        console.error('Error loading transactions:', e);
        container.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm p-12 text-center">
                <i class="fas fa-exclamation-triangle text-4xl text-gray-300 mb-3"></i>
                <p class="text-gray-500">Gagal memuat transaksi</p>
                <button onclick="renderTransactions('${filter}')" class="mt-3 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-green-600 transition">Coba Lagi</button>
            </div>
        `;
    }
}

function filterTransactions(filter) {
    document.querySelectorAll('.transaction-tab').forEach(tab => {
        tab.classList.remove('bg-primary', 'text-white');
        tab.classList.add('bg-white', 'text-gray-700');
    });
    event.target.classList.remove('bg-white', 'text-gray-700');
    event.target.classList.add('bg-primary', 'text-white');
    renderTransactions(filter);
}

// ==========================================
// Upload Product Form
// ==========================================
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (uploadedImagesFiles.length === 0) {
        if (typeof showToast === 'function') showToast('warning', 'Harap upload minimal 1 foto produk');
        return;
    }

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const ogText = submitBtn.textContent;
    submitBtn.textContent = 'Mengupload...';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50');

    const formData = new FormData();
    formData.append('name', document.getElementById('productName').value);
    formData.append('category', document.getElementById('productCategory').value);
    formData.append('condition', document.getElementById('productCondition').value);
    formData.append('price', document.getElementById('productPrice').value);
    formData.append('stock', document.getElementById('productStock').value);
    formData.append('description', document.getElementById('productDescription').value);
    formData.append('location', document.getElementById('productLocation').value);

    // Add images
    uploadedImagesFiles.forEach((file) => {
        formData.append('images[]', file);
    });

    try {
        const response = await fetch('upload_product_handler.php', {
            method: 'POST',
            body: formData
        });

        const resData = await response.json();

        if (resData.success) {
            if (typeof showToast === 'function') showToast('success', resData.message);

            e.target.reset();
            uploadedImagesFiles = [];
            uploadedImagesPreview = [];
            selectedDiscount = 0;
            selectedColorOptions = [];
            document.getElementById('imagePreview').innerHTML = '';

            showSection('myproducts');
            renderMyProducts();
        } else {
            if (typeof showToast === 'function') showToast('error', resData.message || 'Gagal mengupload produk');
        }
    } catch (err) {
        if (typeof showToast === 'function') showToast('error', 'Terjadi kesalahan server saat mengupload.');
        console.error(err);
    } finally {
        submitBtn.textContent = ogText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50');
    }
});

// Initial render
renderMyProducts();
renderTransactions();

document.addEventListener('DOMContentLoaded', function () {
    const dashboardBtn = document.querySelector('button[onclick="showSection(\'dashboard\')"]');
    if (dashboardBtn) {
        dashboardBtn.classList.add('bg-green-50', 'text-primary');
    }

    // Discussion reply forms handler
    document.querySelectorAll('.reply-form').forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const input = this.querySelector('input');
            const btn = this.querySelector('button');
            const message = input.value.trim();
            const discussionId = this.dataset.discussionId;
            const productId = this.dataset.productId;

            if (!message) return;

            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

            try {
                const response = await fetch('reply_discussion.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        product_id: parseInt(productId),
                        parent_id: parseInt(discussionId),
                        message: message
                    })
                });

                const data = await response.json();

                if (data.success) {
                    if (typeof showToast === 'function') showToast('success', 'Balasan berhasil dikirim');
                    // Reload page to show new reply
                    setTimeout(() => {
                        window.location.href = 'dashboard.php?section=discussion';
                    }, 500);
                } else {
                    if (typeof showToast === 'function') showToast('error', data.message || 'Gagal mengirim balasan');
                }
            } catch (err) {
                console.error('Reply error:', err);
                if (typeof showToast === 'function') showToast('error', 'Terjadi kesalahan');
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-paper-plane mr-1"></i>Balas';
                input.value = '';
            }
        });
    });
});
