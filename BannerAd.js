(function() {
  const pageContainer = document.querySelector('.page-container');
  if (pageContainer) {
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

    const text = document.createElement('span');
    text.style.cssText = 'color:#fff; font-size:14px; font-weight:bold;';
    text.textContent = 'Your current mobile app retires July 23rd. Clarity Go is ready.  ';

    const link = document.createElement('a');
    link.href = 'https://support.clarityvoice.com/portal/en/kb/articles/clarity-go-mobile-app';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.cssText = 'color:#fff; font-size:14px; font-weight:bold; text-decoration:underline;';
    link.textContent = ' Download Now.';

    newBanner.appendChild(text);
    newBanner.appendChild(link);
    pageContainer.insertBefore(newBanner, pageContainer.firstChild);

    const currentMargin = parseInt(getComputedStyle(pageContainer).marginTop) || 0;
    pageContainer.style.marginTop = (currentMargin + 40) + 'px';
  }
})();
