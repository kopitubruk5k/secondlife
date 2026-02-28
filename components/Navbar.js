function Navbar() {
    const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userEmail') || 'user@example.com' : 'user@example.com';
    const userName = userEmail.split('@')[0];

    return `
        <nav class="bg-white shadow-sm sticky top-0 z-50">
            <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <a href="index.html">
                            <img src="assets/logo.png" alt="SecondLife.id" class="h-14">
                        </a>
                    </div>
                    
                    <!-- Right Side: Search, Cart, Profile -->
                    <div class="flex items-center gap-4">
                        <!-- Search Bar -->
                        <div class="hidden md:block w-96">
                            <div class="relative">
                                <input 
                                    type="text" 
                                    placeholder="Cari di SecondLife.id" 
                                    class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Cart -->
                        <button class="relative p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                        </button>
                        
                        ${isLoggedIn ? `
                            <!-- User Profile -->
                            <div class="relative">
                                <button id="profileBtn" class="flex items-center gap-2 hover:bg-gray-50 rounded-lg p-2 transition">
                                    <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                                        ${userName.charAt(0).toUpperCase()}
                                    </div>
                                    <span class="hidden md:block font-medium text-gray-700">${userName}</span>
                                    <i class="fas fa-chevron-down text-xs text-gray-500"></i>
                                </button>
                                
                                <!-- Profile Dropdown -->
                                <div id="profileDropdown" class="hidden absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                                    <div class="px-4 py-3 border-b border-gray-100">
                                        <p class="text-sm font-semibold text-gray-900">${userName}</p>
                                        <p class="text-xs text-gray-500 truncate">${userEmail}</p>
                                    </div>
                                    <a href="dashboard.html" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                                        <i class="fas fa-user text-gray-600"></i>
                                        <span class="text-gray-700">Profil Saya</span>
                                    </a>
                                    <a href="#" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                                        <i class="fas fa-cog text-gray-600"></i>
                                        <span class="text-gray-700">Pengaturan</span>
                                    </a>
                                    <div class="border-t border-gray-100 mt-2 pt-2">
                                        <button onclick="logout()" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition text-red-600 text-left">
                                            <i class="fas fa-sign-out-alt"></i>
                                            <span>Keluar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ` : `
                            <!-- Login & Register Buttons -->
                            <a href="login.html" class="px-5 py-2 text-primary font-medium hover:bg-green-50 rounded-lg transition border border-primary">
                                Masuk
                            </a>
                            <a href="register.html" class="px-5 py-2 bg-primary text-white font-medium rounded-lg hover:bg-green-700 transition shadow-sm">
                                Daftar
                            </a>
                        `}
                    </div>
                </div>
            </div>
        </nav>
    `;
}

// Profile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
        });
        
        document.addEventListener('click', function(e) {
            if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }
});

document.getElementById('navbar').innerHTML = Navbar();
