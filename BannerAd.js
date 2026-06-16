(function() {
  const fixedContainer = document.querySelector('.fixed-container');
  if (fixedContainer) {
    const newBanner = document.createElement('div');
    newBanner.id = 'custom-domain-banner';
    newBanner.className = 'alert alert-info';

    const container = document.createElement('div');
    container.className = 'domain-message-container';

    const text = document.createElement('div');
    text.className = 'domain-message-text';
    text.style.cssText = 'text-align:center; color:#31708f; font-size:14px; font-weight:bold;';
    text.textContent = 'You are viewing the'; // your text here

    container.appendChild(text);
    newBanner.appendChild(container);
    fixedContainer.appendChild(newBanner);

    // Adjust page margin
    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
      const currentMargin = parseInt(getComputedStyle(pageContainer).marginTop) || 0;
      pageContainer.style.marginTop = (currentMargin + newBanner.offsetHeight) + 'px';
    }
  }
})();
