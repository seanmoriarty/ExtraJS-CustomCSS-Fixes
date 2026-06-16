(function() {
  const pageContainer = document.querySelector('.page-container');
  if (pageContainer) {
    const newBanner = document.createElement('div');
    newBanner.className = 'alert alert-info';
    newBanner.id = 'custom-domain-banner';
    newBanner.style.cssText = [
      'height:40px',
      'position:relative',
      'visibility:visible',
      'text-align:center',
      'margin-bottom:0',
      'padding:0',
      'box-shadow:0 3px 7px rgba(0,0,0,.35)',
      'border-radius:0',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'width:100%',
      'box-sizing:border-box',
      'background-color:#FABB6E',
      'border-color:#F9A15A'
    ].join(';');

    const link = document.createElement('a');
    link.href = 'YOUR_URL_HERE';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.cssText = 'color:#7a4000; font-size:14px; font-weight:bold; text-decoration:underline;';
    link.textContent = 'Download Clarity Go';

    newBanner.appendChild(link);
    pageContainer.insertBefore(newBanner, pageContainer.firstChild);
  }
})();
