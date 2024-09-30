document.getElementById('passwordForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the inputs (optional: check if new password and confirm password match)
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Optional: you can validate that the new passwords match
    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // Show the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    
    // Optional: You could also clear the form fields after showing the success message
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
});
