document.addEventListener('DOMContentLoaded', function() {
  const flash = document.getElementById('flashContainer');
  if (flash) {
    const target = flash.parentElement.nextElementSibling;
    if (target && target.id === 'domain-message') {
      const inner = document.createElement('div');
      const h5 = document.createElement('h5');
      h5.textContent = 'Download Clarity Go';
      inner.appendChild(h5);
      target.appendChild(inner);
    }
  }
});
