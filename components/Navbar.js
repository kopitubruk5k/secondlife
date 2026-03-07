function Navbar() {
    const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userEmail') || 'user@example.com' : 'user@example.com';
    const userName = userEmail.split('@')[0];
    const isSeller = typeof window !== 'undefined' && localStorage.getItem('isSeller') === 'true';
    
    // Detect current path to adjust logo path
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isInSubfolder = currentPath.includes('/user/') || currentPath.includes('/seller/');
    const logoPath = isInSubfolder ? '../assets/logo.png' : 'assets/logo.png';
    const indexPath = isInSubfolder ? '../index.php' : 'index.php';

    return `
        <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div class="px-4">
                <div class="flex items-center h-20">
                    <!-- Logo -->
                    <a href="${indexPath}" class="flex-shrink-0 mr-8">
                        <img src="${logoPath}" alt="SecondLife.id" class="h-14">
                    </a>
                    
                    <!-- Kategori -->
                    <div class="relative mr-6">
                        <button id="categoryBtn" class="text-base font-medium text-gray-700 hover:text-primary transition">
                            Kategori
                        </button>
                        
                        <!-- Category Dropdown -->
                        <div id="categoryDropdown" class="hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                            <a href="${isInSubfolder ? 'shop.php?category=fashion' : 'user/shop.php?category=fashion'}" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition text-sm">
                                <i class="fas fa-tshirt text-gray-500 text-xs"></i>
                                <span class="text-gray-700">Fashion</span>
                            </a>
                            <a href="${isInSubfolder ? 'shop.php?category=elektronik' : 'user/shop.php?category=elektronik'}" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition text-sm">
                                <i class="fas fa-laptop text-gray-500 text-xs"></i>
                                <span class="text-gray-700">Elektronik</span>
                            </a>
                            <a href="${isInSubfolder ? 'shop.php?category=anorganik' : 'user/shop.php?category=anorganik'}" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition text-sm">
                                <i class="fas fa-recycle text-gray-500 text-xs"></i>
                                <span class="text-gray-700">Anorganik</span>
                            </a>
                            <a href="${isInSubfolder ? 'shop.php?category=buku' : 'user/shop.php?category=buku'}" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition text-sm">
                                <i class="fas fa-book text-gray-500 text-xs"></i>
                                <span class="text-gray-700">Buku</span>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Search Bar -->
                    <div class="flex-1 mr-8">
                        <form id="navbarSearchForm" class="relative">
                            <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <input 
                                type="text" 
                                id="navbarSearchInput"
                                placeholder="Cari di Secondlife" 
                                class="w-full pl-11 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-gray-50 hover:bg-white transition"
                            />
                        </form>
                    </div>
                    
                    <!-- Right Icons -->
                    <div class="flex items-center gap-7 ml-auto">
                        <!-- Cart -->
                        <a href="${isInSubfolder ? 'cart.php' : 'user/cart.php'}" class="relative">
                            <svg class="w-8 h-8 text-gray-600 hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span id="cartCount" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 font-bold">0</span>
                        </a>
                        
                        <!-- Notification -->
                        <button onclick="openNotificationsModal()" class="relative">
                            <svg class="w-8 h-8 text-gray-600 hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                            <span id="notificationBadge" class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                        </button>
                        
                        <!-- Mail -->
                        <button onclick="openMessagesModal()" class="relative">
                            <svg class="w-8 h-8 text-gray-600 hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span id="messageBadge" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 font-bold hidden">0</span>
                        </button>
                        
                        ${isLoggedIn ? `
                            <!-- Toko Button -->
                            ${isSeller ? `
                                <a href="${isInSubfolder ? '../seller/dashboard.php' : 'seller/dashboard.php'}" class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    <span class="text-sm font-medium text-gray-700">Toko Saya</span>
                                </a>
                            ` : `
                                <button onclick="openSellerRegistration()" class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    <span class="text-sm font-medium text-gray-700">Toko</span>
                                </button>
                            `}
                            
                            <!-- User Profile -->
                            <div class="relative">
                                <button id="profileBtn" class="flex items-center gap-2 hover:opacity-80 transition">
                                    <div class="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="text-left">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-medium text-gray-700">${userName}</span>
                                            ${isSeller ? `
                                                <span class="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">Penjual</span>
                                            ` : ''}
                                        </div>
                                        <div class="flex items-center gap-1 mt-1" data-verification-badges></div>
                                    </div>
                                </button>
                                
                                <!-- Profile Dropdown -->
                                <div id="profileDropdown" class="hidden absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <div class="px-4 py-3 border-b border-gray-100">
                                        <div class="flex items-center gap-2 mb-1">
                                            <p class="text-sm font-semibold text-gray-900">${userName}</p>
                                            ${isSeller ? `
                                                <span class="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">Penjual</span>
                                            ` : ''}
                                        </div>
                                        <p class="text-xs text-gray-500 truncate">${userEmail}</p>
                                    </div>
                                    <a href="#" onclick="openProfileModal(); return false;" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                                        <i class="fas fa-user text-gray-500 text-base w-5"></i>
                                        <span class="text-gray-700 font-medium">Profil Saya</span>
                                    </a>
                                    <a href="#" onclick="openOrdersModal(); return false;" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                                        <i class="fas fa-shopping-bag text-gray-500 text-base w-5"></i>
                                        <span class="text-gray-700 font-medium">Pesanan Saya</span>
                                    </a>
                                    <a href="#" onclick="openSettingsModal(); return false;" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                                        <i class="fas fa-cog text-gray-500 text-base w-5"></i>
                                        <span class="text-gray-700 font-medium">Pengaturan</span>
                                    </a>
                                    <div class="border-t border-gray-100 mt-2 pt-2">
                                        <button onclick="logout()" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition text-red-600 text-left">
                                            <i class="fas fa-sign-out-alt text-base w-5"></i>
                                            <span class="font-medium">Keluar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ` : `
                            <!-- Login & Register -->
                            <a href="${isInSubfolder ? '../login.php' : 'login.php'}" class="text-sm font-medium text-gray-700 hover:text-primary transition">
                                Masuk
                            </a>
                            <a href="${isInSubfolder ? '../register.php' : 'register.php'}" class="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-green-700 transition">
                                Daftar
                            </a>
                        `}
                    </div>
                </div>
            </div>
        </nav>
    `;
}

// Profile dropdown toggle and navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const categoryBtn = document.getElementById('categoryBtn');
    const categoryDropdown = document.getElementById('categoryDropdown');
    
    // Profile dropdown
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
            categoryDropdown?.classList.add('hidden');
        });
        
        document.addEventListener('click', function(e) {
            if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }

    // Category dropdown
    if (categoryBtn && categoryDropdown) {
        categoryBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            categoryDropdown.classList.toggle('hidden');
            profileDropdown?.classList.add('hidden');
        });
        
        document.addEventListener('click', function(e) {
            if (!categoryDropdown.contains(e.target) && !categoryBtn.contains(e.target)) {
                categoryDropdown.classList.add('hidden');
            }
        });
    }

    // Search functionality
    const searchForm = document.getElementById('navbarSearchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = document.getElementById('navbarSearchInput');
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                const currentPath = window.location.pathname;
                const isInSubfolder = currentPath.includes('/user/') || currentPath.includes('/seller/');
                const shopPath = isInSubfolder ? 'shop.php' : 'user/shop.php';
                window.location.href = `${shopPath}?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }

    // Update cart count
    updateCartCount();
    
    // Update notification badge
    updateNotificationBadge();
    
    // Update message badge
    updateMessageBadge();
    
    // Update verification badges
    if (typeof updateVerificationBadges === 'function') {
        updateVerificationBadges();
    }
});

// Open Seller Registration Modal
function openSellerRegistration() {
    const modal = document.createElement('div');
    modal.id = 'sellerRegistrationModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-md w-full my-8 max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                <h2 class="text-xl font-bold text-gray-900">Daftar Sebagai Penjual</h2>
                <button onclick="closeSellerRegistration()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <form id="sellerRegistrationForm" class="p-6">
                <div class="space-y-4">
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p class="text-sm text-blue-800">
                            <i class="fas fa-info-circle mr-2"></i>
                            Lengkapi data berikut untuk menjadi penjual
                        </p>
                    </div>

                    <!-- Nama Lengkap -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap <span class="text-red-500">*</span></label>
                        <input type="text" id="sellerName" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Masukkan nama lengkap">
                    </div>

                    <!-- Nomor HP -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Nomor HP <span class="text-red-500">*</span></label>
                        <input type="tel" id="sellerPhone" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="08xxxxxxxxxx">
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Email <span class="text-red-500">*</span></label>
                        <input type="email" id="sellerEmail" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="email@example.com">
                    </div>

                    <!-- Password (only if not logged in) -->
                    <div id="passwordFields" class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Password <span class="text-red-500">*</span></label>
                            <input type="password" id="sellerPassword" required minlength="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Minimal 8 karakter">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Konfirmasi Password <span class="text-red-500">*</span></label>
                            <input type="password" id="sellerConfirmPassword" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ulangi password">
                        </div>
                    </div>

                    <!-- Upload KTP -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Upload KTP <span class="text-red-500">*</span>
                            <span class="text-xs text-gray-500 font-normal">(Wajib untuk verifikasi)</span>
                        </label>
                        
                        <!-- Upload Area -->
                        <div id="sellerKtpUploadArea" class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-primary hover:bg-green-50 transition">
                            <i class="fas fa-cloud-upload text-3xl text-gray-400 mb-2"></i>
                            <p class="text-sm text-gray-600 mb-1">Klik atau drag & drop foto KTP</p>
                            <p class="text-xs text-gray-500">Format: JPG, PNG (Maks. 5MB)</p>
                        </div>
                        
                        <!-- Preview Area -->
                        <div id="sellerKtpPreview" class="hidden mt-3"></div>
                        
                        <!-- Hidden File Input -->
                        <input type="file" id="sellerKtpFileInput" accept="image/jpeg,image/png" class="hidden">
                    </div>

                    <!-- Terms -->
                    <div class="flex items-start">
                        <input type="checkbox" id="sellerTerms" required class="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary">
                        <label for="sellerTerms" class="ml-2 text-sm text-gray-600">
                            Saya setuju dengan <a href="#" class="text-primary hover:text-green-700 font-medium">Syarat & Ketentuan Penjual</a>
                        </label>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">
                        Daftar Sebagai Penjual
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeSellerRegistration();
        }
    });

    // Initialize KTP upload for seller
    let sellerKtpData = null;
    const uploadArea = document.getElementById('sellerKtpUploadArea');
    const fileInput = document.getElementById('sellerKtpFileInput');
    
    uploadArea.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/png'];
            if (!validTypes.includes(file.type)) {
                alert('Format file tidak valid! Hanya JPG dan PNG yang diperbolehkan.');
                fileInput.value = '';
                return;
            }
            
            // Validate file size (max 5MB)
            const maxSize = 5 * 1024 * 1024;
            if (file.size > maxSize) {
                alert('Ukuran file terlalu besar! Maksimal 5MB.');
                fileInput.value = '';
                return;
            }
            
            // Convert to base64
            const reader = new FileReader();
            reader.onload = function(e) {
                sellerKtpData = e.target.result;
                const previewContainer = document.getElementById('sellerKtpPreview');
                uploadArea.classList.add('hidden');
                previewContainer.classList.remove('hidden');
                previewContainer.innerHTML = `
                    <div class="relative">
                        <img src="${sellerKtpData}" alt="KTP Preview" class="w-full h-32 object-cover rounded-lg">
                        <button type="button" onclick="this.closest('#sellerKtpPreview').classList.add('hidden'); document.getElementById('sellerKtpUploadArea').classList.remove('hidden'); document.getElementById('sellerKtpFileInput').value = '';" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                            <i class="fas fa-times text-xs"></i>
                        </button>
                    </div>
                    <p class="text-sm text-green-600 mt-2">
                        <i class="fas fa-check-circle"></i> KTP berhasil diunggah
                    </p>
                `;
            };
            reader.readAsDataURL(file);
        }
    });

    // Phone number validation
    document.getElementById('sellerPhone').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Check if user is already logged in to hide/show password fields
    const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isUserLoggedIn) {
        // User already logged in - hide password fields and pre-fill data
        document.getElementById('passwordFields').style.display = 'none';
        document.getElementById('sellerPassword').required = false;
        document.getElementById('sellerConfirmPassword').required = false;
        
        // Pre-fill existing data
        const userName = localStorage.getItem('userName') || '';
        const userEmail = localStorage.getItem('userEmail') || '';
        const userPhone = localStorage.getItem('userPhone') || '';
        
        document.getElementById('sellerName').value = userName;
        document.getElementById('sellerEmail').value = userEmail;
        document.getElementById('sellerPhone').value = userPhone;
        
        // Make them readonly
        document.getElementById('sellerName').readOnly = true;
        document.getElementById('sellerEmail').readOnly = true;
        document.getElementById('sellerPhone').readOnly = true;
    }

    // Form submission
    document.getElementById('sellerRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('sellerName').value;
        const phone = document.getElementById('sellerPhone').value;
        const email = document.getElementById('sellerEmail').value;
        const password = document.getElementById('sellerPassword').value;
        const confirmPassword = document.getElementById('sellerConfirmPassword').value;
        
        // Validate password if not logged in
        if (!isUserLoggedIn) {
            if (password !== confirmPassword) {
                alert('Password dan konfirmasi password tidak cocok!');
                return;
            }
            
            if (password.length < 8) {
                alert('Password minimal 8 karakter!');
                return;
            }
        }
        
        // Validate KTP upload
        if (!sellerKtpData) {
            alert('Upload KTP wajib untuk menjadi penjual!');
            return;
        }
        
        // Save user data
        localStorage.setItem('userName', name);
        localStorage.setItem('userPhone', phone);
        if (!isUserLoggedIn) {
            localStorage.setItem('userPassword', password);
        }
        
        // Set as logged in and seller
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isSeller', 'true');
        
        // Save KTP data
        const ktpInfo = {
            data: sellerKtpData,
            status: 'pending',
            uploadDate: new Date().toISOString()
        };
        localStorage.setItem('userKTP', JSON.stringify(ktpInfo));
        
        closeSellerRegistration();
        
        alert('Selamat! Anda berhasil terdaftar sebagai penjual.\n\nKTP Anda sedang dalam proses verifikasi.\nAnda akan dapat mulai berjualan setelah verifikasi selesai.');
        
        // Reload page to show seller features
        location.reload();
    });
}

function closeSellerRegistration() {
    const modal = document.getElementById('sellerRegistrationModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Open Profile Modal
function openProfileModal() {
    const userName = localStorage.getItem('userName') || 'User';
    const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
    const userPhone = localStorage.getItem('userPhone') || '-';
    
    const modal = document.createElement('div');
    modal.id = 'profileModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                <h2 class="text-2xl font-bold text-gray-900">Profil Saya</h2>
                <button onclick="closeModal('profileModal')" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-4 mb-6 pb-6 border-b">
                    <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        ${userName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">${userName}</h3>
                        <p class="text-gray-600">${userEmail}</p>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                        <input type="text" value="${userName}" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input type="email" value="${userEmail}" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" readonly>
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Nomor HP</label>
                        <input type="tel" value="${userPhone}" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Alamat</label>
                        <textarea rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Masukkan alamat lengkap"></textarea>
                    </div>
                    <button class="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">
                        Simpan Perubahan
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('profileModal');
        }
    });
}

// Open Orders Modal
function openOrdersModal() {
    // Get orders from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    const modal = document.createElement('div');
    modal.id = 'ordersModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 class="text-2xl font-bold text-gray-900">Pesanan Saya</h2>
                <button onclick="closeModal('ordersModal')" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <!-- Order Tabs -->
            <div class="border-b sticky top-[73px] bg-white z-10">
                <div class="flex overflow-x-auto">
                    <button onclick="filterOrders('all')" class="order-tab px-6 py-4 font-semibold text-primary border-b-2 border-primary whitespace-nowrap">
                        Semua
                    </button>
                    <button onclick="filterOrders('pending')" class="order-tab px-6 py-4 font-semibold text-gray-500 hover:text-gray-700 whitespace-nowrap">
                        Belum Bayar
                    </button>
                    <button onclick="filterOrders('packed')" class="order-tab px-6 py-4 font-semibold text-gray-500 hover:text-gray-700 whitespace-nowrap">
                        Dikemas
                    </button>
                    <button onclick="filterOrders('shipped')" class="order-tab px-6 py-4 font-semibold text-gray-500 hover:text-gray-700 whitespace-nowrap">
                        Dikirim
                    </button>
                    <button onclick="filterOrders('completed')" class="order-tab px-6 py-4 font-semibold text-gray-500 hover:text-gray-700 whitespace-nowrap">
                        Selesai
                    </button>
                </div>
            </div>
            
            <div id="ordersContent" class="p-6">
                ${orders.length === 0 ? `
                    <div class="text-center py-12">
                        <i class="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Belum Ada Pesanan</h3>
                        <p class="text-gray-600 mb-6">Yuk mulai belanja dan temukan produk favoritmu!</p>
                        <a href="${isInSubfolder ? 'shop.php' : 'user/shop.php'}" onclick="closeModal('ordersModal')" class="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition">
                            Mulai Belanja
                        </a>
                    </div>
                ` : renderOrdersList(orders, 'all')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('ordersModal');
        }
    });
}

// Render orders list
function renderOrdersList(orders, filter) {
    let filteredOrders = orders;
    
    if (filter !== 'all') {
        filteredOrders = orders.filter(order => order.status === filter);
    }
    
    if (filteredOrders.length === 0) {
        return `
            <div class="text-center py-12">
                <i class="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-600">Tidak ada pesanan dengan status ini</p>
            </div>
        `;
    }
    
    return filteredOrders.map(order => `
        <div class="bg-white border border-gray-200 rounded-xl p-6 mb-4 hover:shadow-md transition">
            <!-- Order Header -->
            <div class="flex items-center justify-between mb-4 pb-4 border-b">
                <div>
                    <p class="text-sm text-gray-500">Order ID: <span class="font-semibold text-gray-900">${order.id}</span></p>
                    <p class="text-xs text-gray-500">${order.date}</p>
                </div>
                <span class="px-4 py-2 rounded-full text-sm font-semibold ${getOrderStatusColor(order.status)}">
                    ${getOrderStatusText(order.status)}
                </span>
            </div>
            
            <!-- Order Items -->
            <div class="space-y-3 mb-4">
                ${order.items.map(item => `
                    <div class="flex gap-3">
                        <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-medium text-gray-900 text-sm line-clamp-1">${item.title}</h4>
                            <p class="text-xs text-gray-500">${item.quantity}x</p>
                            <p class="text-sm font-semibold text-gray-900">Rp ${item.price.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Order Footer -->
            <div class="flex items-center justify-between pt-4 border-t">
                <div>
                    <p class="text-sm text-gray-600">Total Belanja</p>
                    <p class="text-xl font-bold text-gray-900">Rp ${order.total.toLocaleString('id-ID')}</p>
                </div>
                <div class="flex gap-2">
                    ${getOrderActions(order.status, order.id)}
                </div>
            </div>
        </div>
    `).join('');
}

// Get order status color
function getOrderStatusColor(status) {
    const colors = {
        pending: 'bg-yellow-100 text-yellow-700',
        packed: 'bg-blue-100 text-blue-700',
        shipped: 'bg-purple-100 text-purple-700',
        completed: 'bg-green-100 text-green-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
}

// Get order status text
function getOrderStatusText(status) {
    const texts = {
        pending: 'Belum Bayar',
        packed: 'Dikemas',
        shipped: 'Dikirim',
        completed: 'Selesai'
    };
    return texts[status] || status;
}

// Get order actions
function getOrderActions(status, orderId) {
    if (status === 'pending') {
        return `
            <button onclick="payOrder('${orderId}')" class="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition text-sm">
                Bayar Sekarang
            </button>
        `;
    } else if (status === 'shipped') {
        return `
            <button onclick="trackOrder('${orderId}')" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition text-sm">
                Lacak Pesanan
            </button>
            <button onclick="confirmOrder('${orderId}')" class="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition text-sm">
                Pesanan Diterima
            </button>
        `;
    } else if (status === 'completed') {
        return `
            <button onclick="reviewOrder('${orderId}')" class="px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-green-50 transition text-sm">
                Beri Ulasan
            </button>
        `;
    } else {
        return `
            <button onclick="viewOrderDetail('${orderId}')" class="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition text-sm">
                Lihat Detail
            </button>
        `;
    }
}

// Filter orders
function filterOrders(filter) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const content = document.getElementById('ordersContent');
    
    // Update tab styles
    document.querySelectorAll('.order-tab').forEach(tab => {
        tab.classList.remove('text-primary', 'border-b-2', 'border-primary');
        tab.classList.add('text-gray-500');
    });
    event.target.classList.remove('text-gray-500');
    event.target.classList.add('text-primary', 'border-b-2', 'border-primary');
    
    content.innerHTML = renderOrdersList(orders, filter);
}

// Order actions
function payOrder(orderId) {
    alert('Redirect ke halaman pembayaran untuk Order ID: ' + orderId);
    // In real app: window.location.href = `payment.php?orderId=${orderId}`;
}

function trackOrder(orderId) {
    alert('Lacak pesanan: ' + orderId + '\n\nStatus: Dalam pengiriman\nEstimasi tiba: 2-3 hari');
}

function confirmOrder(orderId) {
    if (confirm('Apakah pesanan sudah diterima dengan baik?')) {
        let orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'completed';
            localStorage.setItem('orders', JSON.stringify(orders));
            alert('Terima kasih! Pesanan telah dikonfirmasi.');
            closeModal('ordersModal');
            openOrdersModal();
        }
    }
}

function reviewOrder(orderId) {
    alert('Fitur ulasan akan segera hadir!');
}

function viewOrderDetail(orderId) {
    alert('Lihat detail pesanan: ' + orderId);
}

// Open Settings Modal
function openSettingsModal() {
    const modal = document.createElement('div');
    modal.id = 'settingsModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                <h2 class="text-2xl font-bold text-gray-900">Pengaturan</h2>
                <button onclick="closeModal('settingsModal')" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div class="p-6">
                <div class="space-y-6">
                    <!-- Account Settings -->
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Akun</h3>
                        <div class="space-y-3">
                            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-key text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Ubah Password</span>
                                </div>
                                <i class="fas fa-chevron-right text-gray-400"></i>
                            </button>
                            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-shield-alt text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Keamanan Akun</span>
                                </div>
                                <i class="fas fa-chevron-right text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Notification Settings -->
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Notifikasi</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-bell text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Notifikasi Push</span>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-envelope text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Email Notifikasi</span>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Privacy Settings -->
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Privasi</h3>
                        <div class="space-y-3">
                            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-lock text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Kebijakan Privasi</span>
                                </div>
                                <i class="fas fa-chevron-right text-gray-400"></i>
                            </button>
                            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-file-alt text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Syarat & Ketentuan</span>
                                </div>
                                <i class="fas fa-chevron-right text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- About -->
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Tentang</h3>
                        <div class="space-y-3">
                            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-info-circle text-gray-600"></i>
                                    <span class="font-medium text-gray-900">Tentang SecondLife.id</span>
                                </div>
                                <i class="fas fa-chevron-right text-gray-400"></i>
                            </button>
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <p class="text-sm text-gray-600">Versi 1.0.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('settingsModal');
        }
    });
}

// Open Notifications Modal
function openNotificationsModal() {
    // Get notifications from localStorage or use dummy data
    const notifications = JSON.parse(localStorage.getItem('notifications') || JSON.stringify([
        {
            id: 1,
            type: 'order',
            title: 'Pesanan Dikemas',
            message: 'Pesanan #ORD-001 sedang dikemas oleh penjual',
            time: '5 menit yang lalu',
            read: false,
            icon: 'fa-box'
        },
        {
            id: 2,
            type: 'promo',
            title: 'Promo Spesial!',
            message: 'Diskon 50% untuk kategori Fashion hari ini',
            time: '1 jam yang lalu',
            read: false,
            icon: 'fa-tag'
        },
        {
            id: 3,
            type: 'system',
            title: 'Verifikasi KTP Berhasil',
            message: 'Selamat! Akun penjual Anda telah diverifikasi',
            time: '2 jam yang lalu',
            read: true,
            icon: 'fa-check-circle'
        },
        {
            id: 4,
            type: 'order',
            title: 'Pesanan Dikirim',
            message: 'Pesanan #ORD-002 telah dikirim dengan resi JNE123456',
            time: '1 hari yang lalu',
            read: true,
            icon: 'fa-shipping-fast'
        }
    ]));
    
    const unreadCount = notifications.filter(n => !n.read).length;
    
    const modal = document.createElement('div');
    modal.id = 'notificationsModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">Notifikasi</h2>
                    ${unreadCount > 0 ? `<p class="text-sm text-gray-500 mt-1">${unreadCount} notifikasi belum dibaca</p>` : ''}
                </div>
                <button onclick="closeModal('notificationsModal')" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="p-6">
                ${notifications.length === 0 ? `
                    <div class="text-center py-12">
                        <i class="fas fa-bell-slash text-6xl text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Belum Ada Notifikasi</h3>
                        <p class="text-gray-600">Notifikasi Anda akan muncul di sini</p>
                    </div>
                ` : `
                    <div class="space-y-2">
                        ${notifications.map(notif => `
                            <div onclick="markNotificationAsRead(${notif.id})" class="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer ${!notif.read ? 'bg-blue-50' : ''}">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 rounded-full ${getNotificationIconBg(notif.type)} flex items-center justify-center">
                                        <i class="fas ${notif.icon} ${getNotificationIconColor(notif.type)}"></i>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-start justify-between gap-2">
                                        <h4 class="font-semibold text-gray-900 ${!notif.read ? 'font-bold' : ''}">${notif.title}</h4>
                                        ${!notif.read ? '<span class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>' : ''}
                                    </div>
                                    <p class="text-sm text-gray-600 mt-1">${notif.message}</p>
                                    <p class="text-xs text-gray-500 mt-2">${notif.time}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${unreadCount > 0 ? `
                        <button onclick="markAllNotificationsAsRead()" class="w-full mt-4 py-3 text-primary font-semibold hover:bg-green-50 rounded-lg transition">
                            Tandai Semua Sudah Dibaca
                        </button>
                    ` : ''}
                `}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('notificationsModal');
        }
    });
}

// Get notification icon background color
function getNotificationIconBg(type) {
    const colors = {
        order: 'bg-blue-100',
        promo: 'bg-orange-100',
        system: 'bg-green-100',
        message: 'bg-purple-100'
    };
    return colors[type] || 'bg-gray-100';
}

// Get notification icon color
function getNotificationIconColor(type) {
    const colors = {
        order: 'text-blue-600',
        promo: 'text-orange-600',
        system: 'text-green-600',
        message: 'text-purple-600'
    };
    return colors[type] || 'text-gray-600';
}

// Mark notification as read
function markNotificationAsRead(notifId) {
    let notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    const notif = notifications.find(n => n.id === notifId);
    if (notif) {
        notif.read = true;
        localStorage.setItem('notifications', JSON.stringify(notifications));
        closeModal('notificationsModal');
        openNotificationsModal();
        updateNotificationBadge();
    }
}

// Mark all notifications as read
function markAllNotificationsAsRead() {
    let notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    notifications.forEach(n => n.read = true);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    closeModal('notificationsModal');
    openNotificationsModal();
    updateNotificationBadge();
}

// Update notification badge
function updateNotificationBadge() {
    const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationBadge');
    if (badge) {
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

// Open Messages Modal
function openMessagesModal() {
    // Get messages from localStorage or use dummy data
    const messages = JSON.parse(localStorage.getItem('messages') || JSON.stringify([
        {
            id: 1,
            sender: 'Toko Elektronik Jaya',
            subject: 'Produk yang Anda tanyakan tersedia',
            preview: 'Halo, produk laptop yang Anda tanyakan masih tersedia. Stok terbatas...',
            time: '10 menit yang lalu',
            read: false,
            avatar: 'https://ui-avatars.com/api/?name=Toko+Elektronik+Jaya&background=4ade80&color=fff'
        },
        {
            id: 2,
            sender: 'Admin SecondLife',
            subject: 'Selamat datang di SecondLife.id',
            preview: 'Terima kasih telah bergabung dengan SecondLife.id. Mulai jual beli barang bekas...',
            time: '2 jam yang lalu',
            read: false,
            avatar: 'https://ui-avatars.com/api/?name=Admin&background=3b82f6&color=fff'
        },
        {
            id: 3,
            sender: 'Toko Fashion Murah',
            subject: 'Pesanan Anda telah dikirim',
            preview: 'Pesanan #ORD-001 telah dikirim dengan nomor resi JNE123456789...',
            time: '1 hari yang lalu',
            read: true,
            avatar: 'https://ui-avatars.com/api/?name=Toko+Fashion+Murah&background=ec4899&color=fff'
        }
    ]));
    
    const unreadCount = messages.filter(m => !m.read).length;
    
    const modal = document.createElement('div');
    modal.id = 'messagesModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">Pesan</h2>
                    ${unreadCount > 0 ? `<p class="text-sm text-gray-500 mt-1">${unreadCount} pesan belum dibaca</p>` : ''}
                </div>
                <button onclick="closeModal('messagesModal')" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="p-6">
                ${messages.length === 0 ? `
                    <div class="text-center py-12">
                        <i class="fas fa-envelope-open text-6xl text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Belum Ada Pesan</h3>
                        <p class="text-gray-600">Pesan dari penjual dan pembeli akan muncul di sini</p>
                    </div>
                ` : `
                    <div class="space-y-2">
                        ${messages.map(msg => `
                            <div onclick="openMessageDetail(${msg.id})" class="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer ${!msg.read ? 'bg-blue-50' : ''}">
                                <img src="${msg.avatar}" alt="${msg.sender}" class="w-12 h-12 rounded-full flex-shrink-0">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-start justify-between gap-2 mb-1">
                                        <h4 class="font-semibold text-gray-900 ${!msg.read ? 'font-bold' : ''}">${msg.sender}</h4>
                                        <span class="text-xs text-gray-500 flex-shrink-0">${msg.time}</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700 mb-1 ${!msg.read ? 'font-semibold' : ''}">${msg.subject}</p>
                                    <p class="text-sm text-gray-600 truncate">${msg.preview}</p>
                                </div>
                                ${!msg.read ? '<div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>' : ''}
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('messagesModal');
        }
    });
}

// Open message detail
function openMessageDetail(messageId) {
    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    const message = messages.find(m => m.id === messageId);
    
    if (!message) return;
    
    // Mark as read
    message.read = true;
    localStorage.setItem('messages', JSON.stringify(messages));
    updateMessageBadge();
    
    closeModal('messagesModal');
    
    const modal = document.createElement('div');
    modal.id = 'messageDetailModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex items-center gap-4 sticky top-0 bg-white z-10">
                <button onclick="closeModal('messageDetailModal'); openMessagesModal();" class="text-gray-600 hover:text-gray-900">
                    <i class="fas fa-arrow-left text-xl"></i>
                </button>
                <div class="flex items-center gap-3 flex-1">
                    <img src="${message.avatar}" alt="${message.sender}" class="w-10 h-10 rounded-full">
                    <div>
                        <h3 class="font-semibold text-gray-900">${message.sender}</h3>
                        <p class="text-xs text-gray-500">${message.time}</p>
                    </div>
                </div>
                <button onclick="closeModal('messageDetailModal')" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4">${message.subject}</h2>
                <div class="prose max-w-none">
                    <p class="text-gray-700 leading-relaxed">${message.preview}</p>
                    <p class="text-gray-700 leading-relaxed mt-4">
                        Ini adalah contoh isi pesan lengkap. Dalam implementasi nyata, 
                        pesan lengkap akan ditampilkan di sini dengan format yang lebih detail.
                    </p>
                </div>
                
                <div class="mt-6 pt-6 border-t">
                    <h3 class="font-semibold text-gray-900 mb-3">Balas Pesan</h3>
                    <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tulis balasan Anda..."></textarea>
                    <div class="flex gap-2 mt-3">
                        <button class="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition">
                            <i class="fas fa-paper-plane mr-2"></i>
                            Kirim
                        </button>
                        <button onclick="closeModal('messageDetailModal'); openMessagesModal();" class="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                            Kembali
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('messageDetailModal');
        }
    });
}

// Update message badge
function updateMessageBadge() {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    const unreadCount = messages.filter(m => !m.read).length;
    const badge = document.getElementById('messageBadge');
    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Update cart count badge
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Open cart modal
function openCartModal() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'cartModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-900">Keranjang Belanja</h2>
                <button onclick="closeCartModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto p-6">
                ${cart.length === 0 ? `
                    <div class="text-center py-12">
                        <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                        <p class="text-gray-500 text-lg">Keranjang Anda kosong</p>
                        <a href="${isInSubfolder ? 'shop.php' : 'user/shop.php'}" class="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-700 transition">
                            Mulai Belanja
                        </a>
                    </div>
                ` : `
                    <div class="space-y-4">
                        ${cart.map(item => `
                            <div class="flex gap-4 bg-gray-50 p-4 rounded-lg">
                                <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-cover rounded-lg">
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-900 mb-1">${item.title}</h3>
                                    <p class="text-primary font-bold mb-2">Rp ${item.price.toLocaleString('id-ID')}</p>
                                    <div class="flex items-center gap-2">
                                        <button onclick="updateCartQuantity(${item.id}, -1)" class="w-8 h-8 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                                            <i class="fas fa-minus text-xs"></i>
                                        </button>
                                        <span class="w-12 text-center font-medium">${item.quantity}</span>
                                        <button onclick="updateCartQuantity(${item.id}, 1)" class="w-8 h-8 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                                            <i class="fas fa-plus text-xs"></i>
                                        </button>
                                        <button onclick="removeFromCart(${item.id})" class="ml-auto text-red-500 hover:text-red-700">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-6 pt-6 border-t border-gray-200">
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-lg font-semibold text-gray-900">Total:</span>
                            <span class="text-2xl font-bold text-primary">Rp ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('id-ID')}</span>
                        </div>
                        <button onclick="checkout()" class="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-green-700 transition">
                            Checkout
                        </button>
                    </div>
                `}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCartModal();
        }
    });
}

// Close cart modal
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.remove();
    }
}

// Update cart quantity
function updateCartQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(i => i.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    closeCartModal();
    openCartModal();
}

// Remove from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    closeCartModal();
    openCartModal();
}

// Checkout
function checkout() {
    alert('Fitur checkout akan segera hadir!');
    closeCartModal();
}

document.getElementById('navbar').innerHTML = Navbar();
