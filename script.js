document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const mainApp = document.getElementById('main-app');
    const loginButton = document.getElementById('login-button');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const logoutButton = document.querySelector('.logout-button'); // Get the logout button

    // --- Login Functionality ---
    loginButton.addEventListener('click', () => {
        const email = emailInput.value;
        const password = passwordInput.value;

        // Basic validation (you'd replace this with actual authentication)
        if (email === 'user@example.com' && password === 'password123') {
            loginScreen.classList.remove('active');
            mainApp.classList.remove('hidden');
            // Show the dashboard by default after login
            document.querySelector('.nav-item[data-tab="dashboard-screen"]').click();
        } else {
            alert('Invalid email or password. Try user@example.com / password123');
        }
    });

    // --- Tab Navigation Functionality ---
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked nav item
            item.classList.add('active');

            // Show the corresponding tab content
            const targetTabId = item.getAttribute('data-tab');
            document.getElementById(targetTabId).classList.add('active');

            // Optional: Hide the add transaction button if not on transactions screen
            const addTransactionBtn = document.querySelector('.add-transaction-btn');
            if (addTransactionBtn) {
                if (targetTabId === 'transactions-screen') {
                    addTransactionBtn.style.display = 'flex'; // Or 'block' if not using flex for centering
                } else {
                    addTransactionBtn.style.display = 'none';
                }
            }
        });
    });

    // --- Logout Functionality ---
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Hide main app and show login screen
            mainApp.classList.add('hidden');
            loginScreen.classList.add('active');
            // Clear inputs (optional)
            emailInput.value = '';
            passwordInput.value = '';
            // Reset active tabs for next login
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
        });
    }

    // Initialize: Hide the main app and show login screen initially
    mainApp.classList.add('hidden');
    loginScreen.classList.add('active');
});