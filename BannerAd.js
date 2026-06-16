(function() {
  const flash = document.getElementById('flashContainer');
  if (flash) {
    const target = flash.parentElement.nextElementSibling;
    if (target && target.id === 'domain-message') {
      const inner = document.createElement('div');
      const h5 = document.createElement('h5');
      h5.textContent = 'You are viewing the';
      inner.appendChild(h5);
      target.appendChild(inner);

      // Push page content down to prevent logo overlap
      const bannerHeight = target.offsetHeight;
      const pageContainer = document.getElementById('page-container') || 
                            document.querySelector('.page-container');
      if (pageContainer) {
        pageContainer.style.marginTop = bannerHeight + 'px';
      }
    }
  }
})();
