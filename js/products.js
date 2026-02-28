// Dummy product data
const products = [
    { id: 1, image: '📱', title: 'iPhone 12 Pro 128GB', price: 'Rp 7.500.000', condition: 'Seperti Baru', location: 'Jakarta', category: 'elektronik' },
    { id: 2, image: '💻', title: 'MacBook Air M1 2020', price: 'Rp 11.000.000', condition: 'Mulus', location: 'Bandung', category: 'elektronik' },
    { id: 3, image: '👟', title: 'Nike Air Max 90', price: 'Rp 850.000', condition: 'Baik', location: 'Surabaya', category: 'fashion' },
    { id: 4, image: '📷', title: 'Canon EOS M50', price: 'Rp 5.200.000', condition: 'Seperti Baru', location: 'Yogyakarta', category: 'elektronik' },
    { id: 5, image: '🎮', title: 'PlayStation 5 Digital', price: 'Rp 6.500.000', condition: 'Mulus', location: 'Jakarta', category: 'elektronik' },
    { id: 6, image: '⌚', title: 'Apple Watch Series 7', price: 'Rp 4.200.000', condition: 'Seperti Baru', location: 'Tangerang', category: 'elektronik' },
    { id: 7, image: '🪑', title: 'Herman Miller Aeron', price: 'Rp 8.500.000', condition: 'Baik', location: 'Jakarta', category: 'rumah' },
    { id: 8, image: '📖', title: 'Koleksi Harry Potter', price: 'Rp 450.000', condition: 'Baik', location: 'Semarang', category: 'buku' },
    { id: 9, image: '👔', title: 'Kemeja Batik Premium', price: 'Rp 250.000', condition: 'Seperti Baru', location: 'Solo', category: 'fashion' },
    { id: 10, image: '🎧', title: 'Sony WH-1000XM4', price: 'Rp 3.200.000', condition: 'Mulus', location: 'Jakarta', category: 'elektronik' },
    { id: 11, image: '👜', title: 'Tas Kulit Asli', price: 'Rp 1.500.000', condition: 'Baik', location: 'Bandung', category: 'fashion' },
    { id: 12, image: '🛋️', title: 'Sofa Minimalis 3 Seater', price: 'Rp 4.500.000', condition: 'Mulus', location: 'Surabaya', category: 'rumah' },
    { id: 13, image: '📚', title: 'Ensiklopedia Britannica', price: 'Rp 2.800.000', condition: 'Baik', location: 'Jakarta', category: 'buku' },
    { id: 14, image: '⌨️', title: 'Mechanical Keyboard RGB', price: 'Rp 1.200.000', condition: 'Seperti Baru', location: 'Malang', category: 'elektronik' },
    { id: 15, image: '👗', title: 'Dress Pesta Elegant', price: 'Rp 650.000', condition: 'Seperti Baru', location: 'Jakarta', category: 'fashion' },
    { id: 16, image: '🖼️', title: 'Lukisan Abstrak Modern', price: 'Rp 3.500.000', condition: 'Mulus', location: 'Bali', category: 'rumah' },
];

let filteredProducts = [...products];

// Product Card Component
function ProductCard({ image, title, price, condition, location }) {
    return `
        <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden border border-gray-100">
            <div class="aspect-square bg-gray-200 flex items-center justify-center text-6xl">
                ${image}
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-2 line-clamp-2">${title}</h3>
                <p class="text-xl font-bold text-primary mb-2">${price}</p>
                <div class="flex justify-between text-sm text-gray-500">
                    <span>${condition}</span>
                    <span>${location}</span>
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
