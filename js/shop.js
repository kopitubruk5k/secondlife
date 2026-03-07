// All products data
const allProducts = [
    // Fashion (6 produk)
    { id: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', title: 'Sepatu Adidas Original', price: 550000, originalPrice: 650000, discount: 15, condition: 'Seperti Baru', rating: 4.9, reviews: 45, category: 'fashion', location: 'Bandung', description: 'Sepatu original size 42, baru dipakai 2x, masih seperti baru' },
    { id: 2, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', title: 'Jam Tangan Fossil', price: 1500000, originalPrice: null, discount: 0, condition: 'Mulus', rating: 4.6, reviews: 23, category: 'fashion', location: 'Yogyakarta', description: 'Jam tangan Fossil original, automatic movement, leather strap' },
    { id: 3, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', title: 'Sepatu Converse All Star', price: 320000, originalPrice: 400000, discount: 20, condition: 'Baik', rating: 4.7, reviews: 34, category: 'fashion', location: 'Semarang', description: 'Converse classic hitam, size 40, kondisi 85%' },
    { id: 4, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', title: 'Jaket Kulit Premium', price: 700000, originalPrice: 900000, discount: 22, condition: 'Mulus', rating: 4.9, reviews: 41, category: 'fashion', location: 'Jakarta', description: 'Jaket kulit asli domba, size L, warna hitam, sangat stylish' },
    { id: 5, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400', title: 'Sneakers Nike Air Max', price: 950000, originalPrice: 1100000, discount: 14, condition: 'Seperti Baru', rating: 4.8, reviews: 52, category: 'fashion', location: 'Bandung', description: 'Nike Air Max original, size 43, baru 1 bulan pakai' },
    { id: 6, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', title: 'Dress Pesta Elegant', price: 650000, originalPrice: 800000, discount: 19, condition: 'Seperti Baru', rating: 4.6, reviews: 26, category: 'fashion', location: 'Jakarta', description: 'Dress pesta mewah, size M, bahan satin premium, hanya pakai 1x' },
    
    // Elektronik (6 produk)
    { id: 7, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', title: 'Laptop Lenovo ThinkPad', price: 3000000, originalPrice: 3500000, discount: 14, condition: 'Mulus', rating: 4.5, reviews: 28, category: 'elektronik', location: 'Jakarta', description: 'Laptop bekas kantor kondisi sangat baik, RAM 8GB, SSD 256GB, layar 14 inch' },
    { id: 8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', title: 'Headphone Sony WH-1000XM4', price: 850000, originalPrice: 1200000, discount: 29, condition: 'Seperti Baru', rating: 4.7, reviews: 67, category: 'elektronik', location: 'Tangerang', description: 'Headphone noise cancelling terbaik, garansi resmi masih 6 bulan' },
    { id: 9, image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400', title: 'Kamera Canon EOS M50', price: 2800000, originalPrice: 3200000, discount: 13, condition: 'Mulus', rating: 4.7, reviews: 31, category: 'elektronik', location: 'Jakarta', description: 'Kamera mirrorless Canon M50, lensa kit 15-45mm, shutter count rendah' },
    { id: 10, image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400', title: 'Keyboard Mechanical RGB', price: 1200000, originalPrice: 1500000, discount: 20, condition: 'Seperti Baru', rating: 4.9, reviews: 73, category: 'elektronik', location: 'Surabaya', description: 'Keyboard mechanical gaming RGB, switch blue, anti-ghosting' },
    { id: 11, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', title: 'iPhone 12 Pro 128GB', price: 7500000, originalPrice: 8500000, discount: 12, condition: 'Mulus', rating: 4.8, reviews: 89, category: 'elektronik', location: 'Jakarta', description: 'iPhone 12 Pro warna Pacific Blue, fullset, battery health 92%' },
    { id: 12, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400', title: 'Laptop Gaming ASUS ROG', price: 12000000, originalPrice: 15000000, discount: 20, condition: 'Seperti Baru', rating: 4.9, reviews: 45, category: 'elektronik', location: 'Bandung', description: 'ASUS ROG Strix G15, RTX 3060, Ryzen 7, RAM 16GB, SSD 512GB' },
    
    // Anorganik (6 produk)
    { id: 13, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400', title: 'Rak Buku Kayu Jati', price: 500000, originalPrice: null, discount: 0, condition: 'Baik', rating: 4.5, reviews: 12, category: 'anorganik', location: 'Surabaya', description: 'Rak buku kayu jati solid, 5 tingkat, cocok untuk ruang kerja' },
    { id: 14, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', title: 'Sofa Minimalis 3 Seater', price: 1200000, originalPrice: 1500000, discount: 20, condition: 'Mulus', rating: 4.8, reviews: 19, category: 'anorganik', location: 'Jakarta', description: 'Sofa minimalis modern, bahan fabric premium, sangat nyaman' },
    { id: 15, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400', title: 'Jam Dinding Vintage', price: 250000, originalPrice: null, discount: 0, condition: 'Baik', rating: 4.8, reviews: 8, category: 'anorganik', location: 'Solo', description: 'Jam dinding antik bergaya vintage, masih berfungsi dengan baik' },
    { id: 16, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', title: 'Lampu Meja Modern', price: 150000, originalPrice: 200000, discount: 25, condition: 'Seperti Baru', rating: 4.6, reviews: 15, category: 'anorganik', location: 'Malang', description: 'Lampu meja LED modern, adjustable brightness, USB charging' },
    { id: 17, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400', title: 'Lukisan Abstrak Canvas', price: 3500000, originalPrice: null, discount: 0, condition: 'Baru', rating: 4.8, reviews: 9, category: 'anorganik', location: 'Bali', description: 'Lukisan abstrak modern ukuran 100x80cm, karya seniman lokal' },
    { id: 18, image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400', title: 'Meja Kerja Kayu', price: 850000, originalPrice: 1000000, discount: 15, condition: 'Mulus', rating: 4.7, reviews: 22, category: 'anorganik', location: 'Yogyakarta', description: 'Meja kerja kayu solid minimalis, ukuran 120x60cm, dengan laci' },
    
    // Buku (6 produk)
    { id: 19, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', title: 'Buku Koleksi Novel', price: 450000, originalPrice: null, discount: 0, condition: 'Baik', rating: 4.5, reviews: 18, category: 'buku', location: 'Yogyakarta', description: 'Paket 10 novel best seller, kondisi buku masih bagus' },
    { id: 20, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400', title: 'Buku Programming Python', price: 180000, originalPrice: 250000, discount: 28, condition: 'Seperti Baru', rating: 4.8, reviews: 34, category: 'buku', location: 'Jakarta', description: 'Buku pemrograman Python lengkap untuk pemula hingga advanced' },
    { id: 21, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400', title: 'Ensiklopedia Anak', price: 320000, originalPrice: 400000, discount: 20, condition: 'Baik', rating: 4.6, reviews: 27, category: 'buku', location: 'Bandung', description: 'Ensiklopedia bergambar untuk anak, 5 jilid lengkap' },
    { id: 22, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400', title: 'Buku Bisnis & Marketing', price: 220000, originalPrice: 300000, discount: 27, condition: 'Mulus', rating: 4.7, reviews: 41, category: 'buku', location: 'Surabaya', description: 'Koleksi buku bisnis dan marketing dari penulis terkenal' },
    { id: 23, image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400', title: 'Komik Manga Set', price: 550000, originalPrice: null, discount: 0, condition: 'Seperti Baru', rating: 4.9, reviews: 56, category: 'buku', location: 'Jakarta', description: 'Set komik manga populer, 20 volume, kondisi sangat baik' },
    { id: 24, image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400', title: 'Buku Resep Masakan', price: 125000, originalPrice: 175000, discount: 29, condition: 'Baik', rating: 4.5, reviews: 19, category: 'buku', location: 'Semarang', description: 'Buku resep masakan Indonesia dan internasional, full color' },
];

let filteredProducts = [...allProducts];

// Load user uploaded products from localStorage
function loadUserProducts() {
    const userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    
    // Merge user products with default products
    const mergedProducts = [...userProducts, ...allProducts];
    
    // Remove duplicates based on ID
    const uniqueProducts = mergedProducts.filter((product, index, self) =>
        index === self.findIndex((p) => p.id === product.id)
    );
    
    return uniqueProducts;
}

// Update allProducts with user products
const allProductsWithUser = loadUserProducts();
filteredProducts = [...allProductsWithUser];

// Product Card Component
function ProductCard({ id, image, title, price, originalPrice, discount, condition, rating, reviews, location }) {
    // Detect if we're in a subfolder
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/user/') || currentPath.includes('/seller/');
    const productDetailPath = isInSubfolder ? 'product-detail.php' : 'user/product-detail.php';

    return `
        <a href="${productDetailPath}?id=${id}" class="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 block">
            <div class="aspect-square bg-gray-100 relative">
                <img src="${image}" alt="${title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
                ${discount > 0 ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">${discount}% OFF</div>` : ''}
            </div>
            <div class="p-3">
                <h3 class="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">${title}</h3>
                <div class="mb-2">
                    ${originalPrice ? `<p class="text-xs text-gray-400 line-through">Rp ${originalPrice.toLocaleString('id-ID')}</p>` : ''}
                    <p class="text-lg font-bold text-gray-900">Rp ${price.toLocaleString('id-ID')}</p>
                </div>
                <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div class="flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="font-medium">${rating}</span>
                        <span class="text-gray-400">(${reviews})</span>
                    </div>
                    <span><i class="fas fa-map-marker-alt"></i> ${location}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">${condition}</span>
                    <span class="text-primary text-sm font-medium">
                        Lihat Detail →
                    </span>
                </div>
            </div>
        </a>
    `;
}


// Render products
function renderProducts(products) {
    const productGrid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');
    const productCount = document.getElementById('productCount');

    productCount.textContent = products.length;

    if (products.length === 0) {
        productGrid.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        productGrid.innerHTML = products.map(product => ProductCard(product)).join('');
    }
}

// Filter and sort products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;

    // Reload products to include any new uploads
    const allProductsWithUser = loadUserProducts();

    // Filter
    filteredProducts = allProductsWithUser.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });

    // Sort
    if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else {
        // newest - keep original order
        filteredProducts = [...filteredProducts];
    }

    renderProducts(filteredProducts);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('sortFilter').addEventListener('change', filterProducts);

// Check URL for search query and category
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('search');
const categoryQuery = urlParams.get('category');

if (searchQuery) {
    document.getElementById('searchInput').value = searchQuery;
}

if (categoryQuery) {
    document.getElementById('categoryFilter').value = categoryQuery;
}

// Apply filters if URL has parameters
if (searchQuery || categoryQuery) {
    filterProducts();
} else {
    // Initial render with user products
    renderProducts(allProductsWithUser);
}

// Add to cart function
function addToCart(productId) {
    const allProductsWithUser = loadUserProducts();
    const product = allProductsWithUser.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count in navbar
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }

    // Show notification
    showNotification('Produk ditambahkan ke keranjang!');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// View product detail
function viewProduct(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-4xl w-full my-8">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-900">Detail Produk</h2>
                <button onclick="closeProductModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Product Image -->
                    <div>
                        <div class="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4 relative">
                            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
                            ${product.discount > 0 ? `<div class="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-2 rounded">${product.discount}% OFF</div>` : ''}
                        </div>
                    </div>
                    
                    <!-- Product Info -->
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">${product.title}</h3>
                        
                        <!-- Price -->
                        <div class="mb-4">
                            ${product.originalPrice ? `<p class="text-lg text-gray-400 line-through">Rp ${product.originalPrice.toLocaleString('id-ID')}</p>` : ''}
                            <p class="text-3xl font-bold text-primary">Rp ${product.price.toLocaleString('id-ID')}</p>
                        </div>
                        
                        <!-- Rating & Reviews -->
                        <div class="flex items-center gap-4 mb-4 pb-4 border-b">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-star text-yellow-400 text-lg"></i>
                                <span class="font-bold text-lg">${product.rating}</span>
                                <span class="text-gray-500">(${product.reviews} ulasan)</span>
                            </div>
                        </div>
                        
                        <!-- Details -->
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-box text-gray-400 w-5"></i>
                                <span class="text-gray-700">Kondisi: <span class="font-semibold">${product.condition}</span></span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fas fa-map-marker-alt text-gray-400 w-5"></i>
                                <span class="text-gray-700">Lokasi: <span class="font-semibold">${product.location}</span></span>
                            </div>
                            <div class="flex items-center gap-3">
                                <i class="fas fa-tag text-gray-400 w-5"></i>
                                <span class="text-gray-700">Kategori: <span class="font-semibold capitalize">${product.category}</span></span>
                            </div>
                        </div>
                        
                        <!-- Description -->
                        <div class="mb-6">
                            <h4 class="font-bold text-gray-900 mb-2">Deskripsi</h4>
                            <p class="text-gray-600">${product.description}</p>
                        </div>
                        
                        <!-- Actions -->
                        <div class="flex gap-3">
                            <button onclick="addToCartFromModal(${product.id})" class="flex-1 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition">
                                <i class="fas fa-cart-plus mr-2"></i>Tambah ke Keranjang
                            </button>
                            <button onclick="buyNow(${product.id})" class="flex-1 bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition">
                                <i class="fas fa-bolt mr-2"></i>Beli Sekarang
                            </button>
                        </div>
                        
                        <!-- Chat Seller -->
                        <button onclick="chatSeller()" class="w-full mt-3 border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-green-50 transition">
                            <i class="fas fa-comments mr-2"></i>Chat Penjual
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function addToCartFromModal(productId) {
    addToCart(productId);
    closeProductModal();
}

function buyNow(productId) {
    addToCart(productId);
    closeProductModal();
    window.location.href = 'checkout.php';
}

function chatSeller() {
    alert('Fitur chat dengan penjual akan segera hadir!');
}
