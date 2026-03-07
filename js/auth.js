// Authentication utility functions
// Since we migrated to PHP Sessions, we no longer rely on localStorage for auth state.

function checkSellerAndRedirect() {
    // Check via API or we can just rely on the PHP redirect
    window.location.href = 'seller/dashboard.php';
}

function openSellerRegistration() {
    // Redirect to a PHP page or seller registration flow
    window.location.href = 'register.php?role=seller';
}

function logout() {
    window.location.href = 'logout.php';
}

function openNotificationsModal() {
    alert("Fitur notifikasi akan segera hadir!");
}

function openMessagesModal() {
    alert("Fitur pesan akan segera hadir!");
}
