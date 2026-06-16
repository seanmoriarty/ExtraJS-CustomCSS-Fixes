(function() {
  const fixedContainer = document.querySelector('.fixed-container');
  if (fixedContainer) {
    const newBanner = document.createElement('div');
    newBanner.id = 'custom-domain-banner';
    newBanner.style.cssText = [
      'display:block',
      'width:100%',
      'background-color:#d9edf7',
      'border-bottom:1px solid #bce8f1',
      'color:#31708f',
      'text-align:center',
      'padding:10px 0',
      'font-size:14px',
      'font-weight:bold',
      'box-sizing:border-box',
      'position:relative',
      'z-index:9999'
    ].join(';');

    newBanner.textContent = 'You are viewing the'; // your text here

    fixedContainer.appendChild(newBanner);

    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
      const currentMargin = parseInt(getComputedStyle(pageContainer).marginTop) || 0;
      pageContainer.style.marginTop = (currentMargin + newBanner.offsetHeight) + 'px';
    }
  }
})();
