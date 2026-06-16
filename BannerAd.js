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
      'box-sizing:border-box'
    ].join(';');

    const text = document.createElement('span');
    text.style.cssText = 'color:#31708f; font-size:14px; font-weight:bold;';
    text.textContent = 'You are viewing the';

    newBanner.appendChild(text);
    pageContainer.insertBefore(newBanner, pageContainer.firstChild);
  }
})();
