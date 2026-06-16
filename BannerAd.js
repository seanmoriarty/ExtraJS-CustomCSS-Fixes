(function() {
  const existingBanner = document.querySelector('#domain-message');
  if (existingBanner) {
    const newBanner = document.createElement('div');
    newBanner.id = 'custom-domain-banner';
    newBanner.className = 'alert alert-info';
    newBanner.style.cssText = 'text-align:center; margin:0; padding:8px;';
    
    const h5 = document.createElement('h5');
    h5.textContent = 'You are viewing the'; // replace with your content
    newBanner.appendChild(h5);
    
    existingBanner.insertAdjacentElement('afterend', newBanner);

    // Push page content down to account for both banners
    const pageContainer = document.querySelector('.page-container') ||
                          document.getElementById('page-container');
    if (pageContainer) {
      pageContainer.style.marginTop = (newBanner.offsetHeight) + 'px';
    }
  }
})();
