// All products data (same as shop.js)
const products = [
    { id: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', title: 'Laptop Lenovo ThinkPad', price: 3000000, originalPrice: 3500000, discount: 14, condition: 'Mulus', rating: 4.5, reviews: 28, category: 'elektronik', location: 'Jakarta', description: 'Laptop bekas kantor kondisi sangat baik, RAM 8GB, SSD 256GB, layar 14 inch' },
    { id: 2, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', title: 'Sepatu Adidas Original', price: 550000, originalPrice: 650000, discount: 15, condition: 'Seperti Baru', rating: 4.9, reviews: 45, category: 'fashion', location: 'Bandung', description: 'Sepatu original size 42, baru dipakai 2x, masih seperti baru' },
    { id: 3, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400', title: 'Rak Buku Kayu Jati', price: 500000, originalPrice: null, discount: 0, condition: 'Baik', rating: 4.5, reviews: 12, category: 'anorganik', location: 'Surabaya', description: 'Rak buku kayu jati solid, 5 tingkat, cocok untuk ruang kerja' },
    { id: 4, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', title: 'Sofa Minimalis 3 Seater', price: 1200000, originalPrice: 1500000, discount: 20, condition: 'Mulus', rating: 4.8, reviews: 19, category: 'anorganik', location: 'Jakarta', description: 'Sofa minimalis modern, bahan fabric premium, sangat nyaman' },
    { id: 5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', title: 'Headphone Sony WH-1000XM4', price: 850000, originalPrice: 1200000, discount: 29, condition: 'Seperti Baru', rating: 4.7, reviews: 67, category: 'elektronik', location: 'Tangerang', description: 'Headphone noise cancelling terbaik, garansi resmi masih 6 bulan' },
    { id: 6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', title: 'Jam Tangan Fossil', price: 1500000, originalPrice: null, discount: 0, condition: 'Mulus', rating: 4.6, reviews: 23, category: 'fashion', location: 'Yogyakarta', description: 'Jam tangan Fossil original, automatic movement, leather strap' },
    { id: 7, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', title: 'Sepatu Converse All Star', price: 320000, originalPrice: 400000, discount: 20, condition: 'Baik', rating: 4.7, reviews: 34, category: 'fashion', location: 'Semarang', description: 'Converse classic hitam, size 40, kondisi 85%' },
    { id: 8, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400', title: 'Jam Dinding Vintage', price: 250000, originalPrice: null, discount: 0, condition: 'Baik', rating: 4.8, reviews: 8, category: 'anorganik', location: 'Solo', description: 'Jam dinding antik bergaya vintage, masih berfungsi dengan baik' },
    { id: 9, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', title: 'Lampu Meja Modern', price: 150000, originalPrice: 200000, discount: 25, condition: 'Seperti Baru', rating: 4.6, reviews: 15, category: 'anorganik', location: 'Malang', description: 'Lampu meja LED modern, adjustable brightness, USB charging' },
    { id: 10, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', title: 'Jaket Kulit Premium', price: 700000, originalPrice: 900000, discount: 22, condition: 'Mulus', rating: 4.9, reviews: 41, category: 'fashion', location: 'Jakarta', description: 'Jaket kulit asli domba, size L, warna hitam, sangat stylish' },
    { id: 11, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400', title: 'Sneakers Nike Air Max', price: 950000, originalPrice: 1100000, discount: 14, condition: 'Seperti Baru', rating: 4.8, reviews: 52, category: 'fashion', location: 'Bandung', description: 'Nike Air Max original, size 43, baru 1 bulan pakai' },
    { id: 12, image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400', title: 'Kamera Canon EOS M50', price: 2800000, originalPrice: 3200000, discount: 13, condition: 'Mulus', rating: 4.7, reviews: 31, category: 'elektronik', location: 'Jakarta', description: 'Kamera mirrorless Canon M50, lensa kit 15-45mm, shutter count rendah' },
    { id: 13, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', title: 'Buku Koleksi Novel', price: 450000, originalPrice: null, discount: 0, condition: 'Baik', rating: 4.5, reviews: 18, category: 'buku', location: 'Yogyakarta', description: 'Paket 10 novel best seller, kondisi buku masih bagus' },
    { id: 14, image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400', title: 'Keyboard Mechanical RGB', price: 1200000, originalPrice: 1500000, discount: 20, condition: 'Seperti Baru', rating: 4.9, reviews: 73, category: 'elektronik', location: 'Surabaya', description: 'Keyboard mechanical gaming RGB, switch blue, anti-ghosting' },
    { id: 15, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', title: 'Dress Pesta Elegant', price: 650000, originalPrice: 800000, discount: 19, condition: 'Seperti Baru', rating: 4.6, reviews: 26, category: 'fashion', location: 'Jakarta', description: 'Dress pesta mewah, size M, bahan satin premium, hanya pakai 1x' },
    { id: 16, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400', title: 'Lukisan Abstrak Canvas', price: 3500000, originalPrice: null, discount: 0, condition: 'Baru', rating: 4.8, reviews: 9, category: 'anorganik', location: 'Bali', description: 'Lukisan abstrak modern ukuran 100x80cm, karya seniman lokal' },
];

let filteredProducts = [...products];

// Product Card Component
function ProductCard({ id, image, title, price, condition, rating, location }) {
    return `
        <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100">
            <div class="aspect-square bg-gray-100">
                <img src="${image}" alt="${title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-2 line-clamp-2">${title}</h3>
                <p class="text-xl font-bold text-primary mb-2">Rp ${price.toLocaleString('id-ID')}</p>
                <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div class="flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="font-medium">${rating}</span>
                    </div>
                    <span>${location}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">${condition}</span>
                    <button onclick="addToCart(${id})" class="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-green-700 transition">
                        <i class="fas fa-cart-plus mr-1"></i> Keranjang
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render products
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');
    const productCount = document.getElementById('productCount');

    productCount.textContent = productsToRender.length;

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        productGrid.innerHTML = productsToRender.map(product => ProductCard(product)).join('');
    }
}

// Filter products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filteredProducts);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterProducts);

document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', filterProducts);
});

// Initial render
renderProducts(products);

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
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
