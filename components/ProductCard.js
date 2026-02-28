function ProductCard({ image, title, price, condition, rating, badge }) {
    return `
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden border border-gray-100">
            <div class="relative aspect-square bg-gray-100">
                <img src="${image}" alt="${title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="hidden w-full h-full items-center justify-center text-6xl bg-gray-100">
                    📦
                </div>
                ${badge ? `<span class="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">${badge}</span>` : ''}
            </div>
            <div class="p-4">
                <h3 class="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">${title}</h3>
                <p class="text-lg font-bold text-gray-900 mb-2">${price}</p>
                <div class="flex items-center justify-between text-sm">
                    <div class="flex items-center gap-1">
                        <span class="text-yellow-400">⭐</span>
                        <span class="font-medium text-gray-700">${rating}</span>
                    </div>
                    <span class="text-xs text-gray-500">${condition}</span>
                </div>
            </div>
        </div>
    `;
}

function FeaturedProducts() {
    const products = [
        { image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', title: 'Laptop Lenovo', price: 'Rp 3.000.000', condition: 'Solo', rating: '4.5', badge: '' },
        { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', title: 'Sepatu Adidas', price: 'Rp 550.000', condition: 'Bay', rating: '4.9', badge: 'LIKE YOUR' },
        { image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400', title: 'Rak Buku', price: 'Rp 500.000', condition: 'Solo', rating: '4.5', badge: '' },
        { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', title: 'Sofa Minimalis', price: 'Rp 1.200.000', condition: 'Solo', rating: '4.8', badge: '' },
        { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', title: 'Headphone Sony', price: 'Rp 850.000', condition: 'Mulus', rating: '4.7', badge: '' },
        { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', title: 'Jam Tangan', price: 'Rp 1.500.000', condition: 'Baik', rating: '4.6', badge: '' }
    ];

    return `
        <section class="py-16" style="background-color: #faf9f6;">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i class="fas fa-shopping-cart text-green-600"></i>
                    Produk Unggulan
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    ${products.map(product => ProductCard(product)).join('')}
                </div>
            </div>
        </section>
    `;
}

function LatestProducts() {
    const products = [
        { image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', title: 'Converse', price: 'Rp 320.000', condition: 'Like', rating: '4.7', badge: 'LIKE YOUR' },
        { image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400', title: 'Sangat Baik', price: 'Rp 250.000', condition: 'Bay', rating: '4.8', badge: 'REJECT BIDO' },
        { image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', title: 'Bekas Layak', price: 'Rp 150.000', condition: 'Bolo', rating: '4.6', badge: '' },
        { image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', title: 'Like New', price: 'Rp 700.000', condition: 'Toaye', rating: '4.9', badge: '' },
        { image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400', title: 'Sneakers Nike', price: 'Rp 950.000', condition: 'Mulus', rating: '4.8', badge: '' },
        { image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400', title: 'Kamera Canon', price: 'Rp 2.800.000', condition: 'Baik', rating: '4.7', badge: '' }
    ];

    return `
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i class="fas fa-recycle text-green-600"></i>
                    Barang Terbaru
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    ${products.map(product => ProductCard(product)).join('')}
                </div>
            </div>
        </section>
    `;
}

document.getElementById('featured').innerHTML = FeaturedProducts();
document.getElementById('latest').innerHTML = LatestProducts();
