document.addEventListener('DOMContentLoaded', function () {
    const managerData = [
        { id: 'SamAakhib', password: '2029' },
        { id: 'Rhyhr', password: '1996' },
        
        // Add more manager IDs and passwords as needed
        // { id: 'AnotherManager', password: 'AnotherPassword' },
    ];

    const passwordPromptKey = 'passwordPrompted';
    const isPasswordPrompted = sessionStorage.getItem(passwordPromptKey);

    // Check if the current page is not the login page and the password hasn't been prompted
    if (!isPasswordPrompted && window.location.pathname !== '/login.html') {
        // Redirect to login page
        window.location.href = 'login.html';
    }

    const loginForm = document.querySelector('#loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const managerID = document.getElementById('managerID').value;
            const password = document.getElementById('password').value;

            const manager = managerData.find(manager => manager.id === managerID);

            if (!manager || password !== manager.password) {
                alert('Incorrect Manager ID or password');
            } else {
                alert('Login successful!');
                sessionStorage.setItem(passwordPromptKey, 'true');
                window.location.href = 'index.html'; // Redirect to the index page
            }
        });
    }
});
