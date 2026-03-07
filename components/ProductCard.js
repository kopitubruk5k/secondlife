function ProductCard({ id, image, title, price, condition, rating, badge }) {
    // Detect if we're in a subfolder
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/user/') || currentPath.includes('/seller/');
    const productDetailPath = isInSubfolder ? 'product-detail.php' : 'user/product-detail.php';
    
    return `
        <a href="${productDetailPath}?id=${id}" class="bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden border border-gray-100 block">
            <div class="relative aspect-square bg-gray-100">
                <img src="${image}" alt="${title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="hidden w-full h-full items-center justify-center text-6xl bg-gray-100">
                    <i class="fas fa-shopping-cart text-gray-400"></i>
                </div>
                ${badge ? `<span class="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">${badge}</span>` : ''}
            </div>
            <div class="p-4">
                <h3 class="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">${title}</h3>
                <p class="text-lg font-bold text-gray-900 mb-2">${price}</p>
                <div class="flex items-center justify-between text-sm">
                    <div class="flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="font-medium text-gray-700">${rating}</span>
                    </div>
                    <span class="text-xs text-gray-500">${condition}</span>
                </div>
            </div>
        </a>
    `;
}

// Load all products including user uploads
function loadAllProducts() {
    const userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    
    // Map user products to match the format
    const formattedUserProducts = userProducts.map(p => ({
        id: p.id,
        image: p.image || 'https://via.placeholder.com/400',
        title: p.title,
        price: `Rp ${p.price.toLocaleString('id-ID')}`,
        condition: p.condition || 'Baik',
        rating: '4.5',
        badge: p.discount > 0 ? `${p.discount}% OFF` : ''
    }));
    
    return formattedUserProducts;
}

function FeaturedProducts() {
    const defaultProducts = [
        { id: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', title: 'Laptop Lenovo ThinkPad', price: 'Rp 3.000.000', condition: 'Mulus', rating: '4.5', badge: '' },
        { id: 2, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', title: 'Sepatu Adidas Original', price: 'Rp 550.000', condition: 'Seperti Baru', rating: '4.9', badge: 'LIKE NEW' },
        { id: 3, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400', title: 'Rak Buku Kayu Jati', price: 'Rp 500.000', condition: 'Baik', rating: '4.5', badge: '' },
        { id: 4, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', title: 'Sofa Minimalis 3 Seater', price: 'Rp 1.200.000', condition: 'Mulus', rating: '4.8', badge: '' },
        { id: 5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', title: 'Headphone Sony WH-1000XM4', price: 'Rp 850.000', condition: 'Seperti Baru', rating: '4.7', badge: '' },
        { id: 6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', title: 'Jam Tangan Fossil', price: 'Rp 1.500.000', condition: 'Mulus', rating: '4.6', badge: '' }
    ];
    
    // Merge user products with default products
    const userProducts = loadAllProducts();
    const allProducts = [...userProducts, ...defaultProducts].slice(0, 6);

    return `
        <section class="py-16 bg-white">
            <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i class="fas fa-shopping-cart text-green-600"></i>
                    Produk Unggulan
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    ${allProducts.map(product => ProductCard(product)).join('')}
                </div>
            </div>
        </section>
    `;
}

function LatestProducts() {
    const defaultProducts = [
        { id: 7, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', title: 'Sepatu Converse All Star', price: 'Rp 320.000', condition: 'Baik', rating: '4.7', badge: 'LIKE NEW' },
        { id: 8, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400', title: 'Jam Dinding Vintage', price: 'Rp 250.000', condition: 'Baik', rating: '4.8', badge: '' },
        { id: 1, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', title: 'Laptop Lenovo ThinkPad', price: 'Rp 3.000.000', condition: 'Mulus', rating: '4.5', badge: '' },
        { id: 2, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', title: 'Sepatu Adidas Original', price: 'Rp 550.000', condition: 'Seperti Baru', rating: '4.9', badge: '' },
        { id: 5, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400', title: 'Headphone Sony WH-1000XM4', price: 'Rp 850.000', condition: 'Seperti Baru', rating: '4.8', badge: '' },
        { id: 6, image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400', title: 'Jam Tangan Fossil', price: 'Rp 1.500.000', condition: 'Mulus', rating: '4.7', badge: '' }
    ];
    
    // Merge user products with default products (show latest first)
    const userProducts = loadAllProducts();
    const allProducts = [...userProducts, ...defaultProducts].slice(0, 6);

    return `
        <section class="py-16 bg-white">
            <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i class="fas fa-recycle text-green-600"></i>
                    Barang Terbaru
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    ${allProducts.map(product => ProductCard(product)).join('')}
                </div>
            </div>
        </section>
    `;
}

document.getElementById('featured').innerHTML = FeaturedProducts();
document.getElementById('latest').innerHTML = LatestProducts();
