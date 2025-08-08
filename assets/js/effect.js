// effects.js

document.addEventListener('DOMContentLoaded', () => {
    // Pré-carregador elegante
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="spinner-wrapper">
            <div class="spinner"></div>
            <span class="loading-text">Carregando...</span>
        </div>
    `;
    document.body.appendChild(preloader);

    // Remover após carregamento
    window.addEventListener('load', () => {
        preloader.classList.add('preloader-hide');
        setTimeout(() => preloader.remove(), 1000);
    });
});
