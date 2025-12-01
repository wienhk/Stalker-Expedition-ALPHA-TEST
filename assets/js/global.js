// colocar no seu <script> ou arquivo JS
document.querySelectorAll('.container-imagem .logo img').forEach(img => {
  img.setAttribute('draggable', 'false');
  img.addEventListener('dragstart', e => e.preventDefault());
  img.addEventListener('contextmenu', e => e.preventDefault());

  // impede que a imagem seja incluída numa seleção ao arrastar o mouse
  img.addEventListener('pointerdown', e => e.preventDefault());
  img.addEventListener('mousedown', e => e.preventDefault());
});