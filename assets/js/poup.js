// popup.js

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('matricula-popup');
  const btnWhats = document.getElementById('btn-whatsapp');
  const btnClose = document.getElementById('btn-close');
  const STORAGE_KEY = 'matriculaFechadaPopup';

  if (!sessionStorage.getItem(STORAGE_KEY)) {
    popup.style.display = 'flex';
  }

  btnWhats.addEventListener('click', () => {
    window.open('https://wa.me/5599999999999?text=Olá,%20quero%20saber%20sobre%20as%20matrículas%20para%202026', '_blank');
    popup.style.display = 'none';
    sessionStorage.setItem(STORAGE_KEY, 'true');
  });

  btnClose.addEventListener('click', () => {
    popup.style.display = 'none';
    sessionStorage.setItem(STORAGE_KEY, 'true');
  });
});
