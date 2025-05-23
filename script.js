document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    function generatePassword() {
        let chars = '';
        let password = '';

        if (uppercaseCheckbox.checked) chars += uppercase;
        if (lowercaseCheckbox.checked) chars += lowercase;
        if (numbersCheckbox.checked) chars += numbers;
        if (symbolsCheckbox.checked) chars += symbols;

        if (chars === '') {
            alert('Selecione pelo menos uma opção!');
            return;
        }

        const length = parseInt(lengthInput.value);
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        passwordInput.value = password;
    }

    function copyPassword() {
        if (passwordInput.value === '') {
            alert('Gere uma senha primeiro!');
            return;
        }

        passwordInput.select();
        document.execCommand('copy');
        
        // Feedback visual
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => {
            copyBtn.textContent = 'Copiar';
        }, 2000);
    }

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);
}); 