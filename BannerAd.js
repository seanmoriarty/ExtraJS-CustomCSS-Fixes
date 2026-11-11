(function() {

  if (document.getElementById('custom-domain-banner')) {
    return;
  }

  const pageContainer = document.querySelector('.page-container');
  if (pageContainer) {
    const newBanner = document.createElement('div');
    newBanner.className = 'alert alert-info';
    newBanner.id = 'custom-domain-banner';

    // Check if the NS domain banner is visible (either domain-message or mask-bar)
    const nsBanner = document.querySelector('.fixed-container #domain-message');
    const maskBar = document.querySelector('.fixed-container .mask-bar');
    const nsBannerVisible = (nsBanner && nsBanner.offsetHeight > 0) || (maskBar && maskBar.offsetHeight > 0);
    const topOffset = nsBannerVisible ? 40 : 0;

    newBanner.style.cssText = [
      'height:40px',
      'position:fixed',
      'top:' + topOffset + 'px',
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

    newBanner.innerHTML = '<span style="color:#fff; font-size:14px; font-weight:bold;">Clarity Office Anywhere is being replaced by Clarity Go. Switch today for the best mobile experience. <a href="https://support.clarityvoice.com/portal/en/kb/articles/clarity-go-mobile-app" target="_blank" rel="noopener noreferrer" style="color:#fff; font-size:14px; font-weight:bold; text-decoration:underline;">Download Now.</a></span>';

    pageContainer.insertBefore(newBanner, pageContainer.firstChild);

    const currentMargin = parseInt(getComputedStyle(pageContainer).marginTop) || 0;
    pageContainer.style.marginTop = (currentMargin + 40) + 'px';
  }
})();
