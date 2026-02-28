// All products data
const allProducts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', title: 'Laptop Lenovo ThinkPad', price: 3000000, condition: 'Mulus', rating: 4.5, category: 'elektronik', location: 'Jakarta' },
    { id: 2, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', title: 'Sepatu Adidas Original', price: 550000, condition: 'Seperti Baru', rating: 4.9, category: 'fashion', location: 'Bandung' },
    { id: 3, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400', title: 'Rak Buku Kayu Jati', price: 500000, condition: 'Baik', rating: 4.5, category: 'rumah', location: 'Surabaya' },
    { id: 4, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', title: 'Sofa Minimalis 3 Seater', price: 1200000, condition: 'Mulus', rating: 4.8, category: 'rumah', location: 'Jakarta' },
    { id: 5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', title: 'Headphone Sony WH-1000XM4', price: 850000, condition: 'Seperti Baru', rating: 4.7, category: 'elektronik', location: 'Tangerang' },
    { id: 6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', title: 'Jam Tangan Fossil', price: 1500000, condition: 'Mulus', rating: 4.6, category: 'fashion', location: 'Yogyakarta' },
    { id: 7, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', title: 'Sepatu Converse All Star', price: 320000, condition: 'Baik', rating: 4.7, category: 'fashion', location: 'Semarang' },
    { id: 8, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400', title: 'Jam Dinding Vintage', price: 250000, condition: 'Baik', rating: 4.8, category: 'rumah', location: 'Solo' },
    { id: 9, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', title: 'Lampu Meja Modern', price: 150000, condition: 'Seperti Baru', rating: 4.6, category: 'rumah', location: 'Malang' },
    { id: 10, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', title: 'Jaket Kulit Premium', price: 700000, condition: 'Mulus', rating: 4.9, category: 'fashion', location: 'Jakarta' },
    { id: 11, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400', title: 'Sneakers Nike Air Max', price: 950000, condition: 'Seperti Baru', rating: 4.8, category: 'fashion', location: 'Bandung' },
    { id: 12, image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400', title: 'Kamera Canon EOS M50', price: 2800000, condition: 'Mulus', rating: 4.7, category: 'elektronik', location: 'Jakarta' },
    { id: 13, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', title: 'Buku Koleksi Novel', price: 450000, condition: 'Baik', rating: 4.5, category: 'buku', location: 'Yogyakarta' },
    { id: 14, image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400', title: 'Keyboard Mechanical RGB', price: 1200000, condition: 'Seperti Baru', rating: 4.9, category: 'elektronik', location: 'Surabaya' },
    { id: 15, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', title: 'Dress Pesta Elegant', price: 650000, condition: 'Seperti Baru', rating: 4.6, category: 'fashion', location: 'Jakarta' },
    { id: 16, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400', title: 'Lukisan Abstrak Canvas', price: 3500000, condition: 'Baru', rating: 4.8, category: 'rumah', location: 'Bali' },
];

let filteredProducts = [...allProducts];

// Product Card Component
function ProductCard({ image, title, price, condition, rating, location }) {
    return `
        <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden border border-gray-100">
            <div class="aspect-square bg-gray-100">
                <img src="${image}" alt="${title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
            </div>
            <div class="p-3">
                <h3 class="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">${title}</h3>
                <p class="text-lg font-bold text-gray-900 mb-2">Rp ${price.toLocaleString('id-ID')}</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <div class="flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="font-medium">${rating}</span>
                    </div>
                    <span>${location}</span>
                </div>
                <div class="mt-2">
                    <span class="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">${condition}</span>
                </div>
            </div>
        </div>
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

    // Filter
    filteredProducts = allProducts.filter(product => {
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

// Initial render
renderProducts(allProducts);
