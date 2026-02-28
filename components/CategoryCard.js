function CategoryCard({ icon, name }) {
    return `
        <div class="bg-white p-4 rounded-xl hover:shadow-md transition cursor-pointer text-center">
            <div class="text-3xl mb-2 text-green-600">
                <i class="${icon}"></i>
            </div>
            <h3 class="text-sm font-medium text-gray-800">${name}</h3>
        </div>
    `;
}

function Categories() {
    const categories = [
        { icon: 'fas fa-mobile-alt', name: 'Elektronik' },
        { icon: 'fas fa-tshirt', name: 'Fashion' },
        { icon: 'fas fa-home', name: 'Rumah' },
        { icon: 'fas fa-book', name: 'Buku' }
    ];

    return `
        <section class="py-8 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Kategori Populer -->
                    <div class="lg:col-span-2">
                        <h2 class="text-xl font-bold text-gray-900 mb-4">Kategori Populer</h2>
                        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                ${categories.map(cat => CategoryCard(cat)).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Promo Banners -->
                    <div class="space-y-4">
                        <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 flex items-center justify-between">
                            <div>
                                <p class="text-white font-bold text-lg">Gratis Ongkir</p>
                                <p class="text-blue-100 text-sm">Se-Indonesia</p>
                            </div>
                            <i class="fas fa-shipping-fast text-4xl text-white"></i>
                        </div>
                        <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 flex items-center justify-between">
                            <div>
                                <p class="text-white font-bold text-lg">Diskon 5%</p>
                                <p class="text-orange-100 text-sm">s.d. 400rb</p>
                            </div>
                            <i class="fas fa-gift text-4xl text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

document.getElementById('categories').innerHTML = Categories();
