function togglePasswordVisibility() {
    var passwordInput = document.getElementById('psw');
    var showPasswordCheckbox = document.getElementById('showPassword');

    // Ndrysho tipin e input-it nga password në text dhe anasjelltas
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';

  }
 

  