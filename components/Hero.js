function Hero() {
    return `
        <section style="background-color: #faf9f6;" class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Main Banner with Logo -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <!-- Banner -->
                    <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 h-64 flex items-center overflow-hidden relative">
                        <div class="z-10 max-w-xl">
                            <h1 class="text-4xl font-bold text-white mb-3 leading-tight">
                                Kasih Hidup Kedua<br>Untuk Barangmu
                            </h1>
                            <p class="text-lg text-green-50 mb-4">
                                Beli barang berkualitas. Jual tanpa ribet.
                            </p>
                            <div class="flex gap-3">
                                <a href="#" onclick="checkLoginAndRedirect('shop.html'); return false;" class="px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition shadow-lg">
                                    Belanja Sekarang
                                </a>
                                <a href="#" onclick="checkLoginAndRedirect('dashboard.html'); return false;" class="px-6 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition shadow-lg border-2 border-white">
                                    Jual Barang
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Logo -->
                    <div class="hidden lg:flex items-center justify-center">
                        <img src="assets/logo.png" alt="SecondLife.id" class="w-full h-auto max-h-64 object-contain">
                    </div>
                </div>
            </div>
        </section>
    `;
}

document.getElementById('hero').innerHTML = Hero();

document.getElementById('hero').innerHTML = Hero();
