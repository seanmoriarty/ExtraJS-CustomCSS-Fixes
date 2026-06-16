(function() {
  const fixedContainer = document.querySelector('.fixed-container');
  if (fixedContainer) {
    const newBanner = document.createElement('div');
    newBanner.id = 'custom-domain-banner';
    newBanner.className = 'alert alert-info';
    newBanner.style.cssText = 'text-align:center; margin:0; padding:8px; width:100%;';

    const h5 = document.createElement('h5');
    h5.style.cssText = 'margin:0; color:#31708f;';
    h5.textContent = 'You are viewing the';
    newBanner.appendChild(h5);

    fixedContainer.appendChild(newBanner);

    // Push page content down to account for added banner height
    const pageContainer = document.querySelector('.page-container') ||
                          document.getElementById('page-container');
    if (pageContainer) {
      const currentMargin = parseInt(pageContainer.style.marginTop) || 0;
      pageContainer.style.marginTop = (currentMargin + newBanner.offsetHeight) + 'px';
    }
  }
})();
