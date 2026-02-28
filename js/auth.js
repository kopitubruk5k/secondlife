// Simple authentication system using localStorage

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Set user as logged in
function setLoggedIn(email) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
}

// Logout user
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Get user email
function getUserEmail() {
    return localStorage.getItem('userEmail') || 'user@example.com';
}

// Check login and redirect
function checkLoginAndRedirect(targetPage) {
    if (isLoggedIn()) {
        window.location.href = targetPage;
    } else {
        // Show alert and redirect to register
        if (confirm('Anda harus login terlebih dahulu untuk mengakses fitur ini. Ingin mendaftar sekarang?')) {
            window.location.href = 'register.html';
        }
    }
}

// Protect page - redirect to login if not logged in
function protectPage() {
    if (!isLoggedIn()) {
        alert('Silakan login terlebih dahulu!');
        window.location.href = 'login.html';
    }
}
