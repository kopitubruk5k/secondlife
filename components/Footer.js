function Footer() {
    return `
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <img src="assets/logo.png" alt="SecondLife.id" class="h-16 mb-4">
                        <p class="text-sm">Kasih hidup kedua untuk barangmu dengan marketplace terpercaya dan ramah lingkungan.</p>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Tentang</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-primary transition">Tentang Kami</a></li>
                            <li><a href="#" class="hover:text-primary transition">Karir</a></li>
                            <li><a href="#" class="hover:text-primary transition">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Bantuan</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-primary transition">Pusat Bantuan</a></li>
                            <li><a href="#" class="hover:text-primary transition">Cara Belanja</a></li>
                            <li><a href="#" class="hover:text-primary transition">Cara Jual</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Ikuti Kami</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-primary transition">Instagram</a></li>
                            <li><a href="#" class="hover:text-primary transition">Facebook</a></li>
                            <li><a href="#" class="hover:text-primary transition">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2026 SecondLife.id. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

document.getElementById('footer').innerHTML = Footer();
