Looking at the screenshot, the banner isn't full width and isn't fixed. Two fixes — match the .fixed-container positioning and add position:fixed:
javascript(function() {
  const fixedContainer = document.querySelector('.fixed-container');
  const pageContainer = document.querySelector('.page-container');
  
  if (fixedContainer && pageContainer) {
    const newBanner = document.createElement('div');
    newBanner.className = 'alert alert-info';
    newBanner.id = 'custom-domain-banner';
    newBanner.style.cssText = [
      'height:40px',
      'position:fixed',
      'top:40px',
      'left:0',
      'right:0',
      'visibility:visible',
      'text-align:center',
      'margin:0',
      'padding:0',
      'box-shadow:0 3px 7px rgba(0,0,0,.35)',
      'border-radius:0',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'width:100%',
      'box-sizing:border-box',
      'background-color:#e57027',
      'border-color:#c45e1e',
      'z-index:9999'
    ].join(';');

    const link = document.createElement('a');
    link.href = 'YOUR_URL_HERE';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.cssText = 'color:#fff; font-size:14px; font-weight:bold; text-decoration:underline;';
    link.textContent = 'Download Clarity Go';

    newBanner.appendChild(link);
    fixedContainer.appendChild(newBanner);

    // Push page content down to account for both fixed banners
    const currentMargin = parseInt(getComputedStyle(pageContainer).marginTop) || 0;
    pageContainer.style.marginTop = (currentMargin + 40) + 'px';
  }
})();
