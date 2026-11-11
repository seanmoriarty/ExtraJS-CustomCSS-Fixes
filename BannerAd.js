(function() {

  // Bump the version suffix if you ever want a new/changed banner to reappear
  // for users who dismissed the old one.
  const DISMISS_KEY = 'clarityGoBannerDismissed_v1';

  // Already on the page, or previously dismissed -> do nothing.
  if (document.getElementById('custom-domain-banner')) {
    return;
  }

  try {
    if (localStorage.getItem(DISMISS_KEY) === 'true') {
      return;
    }
  } catch (e) {
    // localStorage unavailable (privacy mode, blocked storage) - show the banner anyway.
  }

  const pageContainer = document.querySelector('.page-container');
  if (!pageContainer) {
    return;
  }

  const BANNER_HEIGHT = 40;

  const newBanner = document.createElement('div');
  newBanner.className = 'alert alert-info';
  newBanner.id = 'custom-domain-banner';

  // Check if the NS domain banner is visible (either domain-message or mask-bar)
  const nsBanner = document.querySelector('.fixed-container #domain-message');
  const maskBar = document.querySelector('.fixed-container .mask-bar');
  const nsBannerVisible = (nsBanner && nsBanner.offsetHeight > 0) || (maskBar && maskBar.offsetHeight > 0);
  const topOffset = nsBannerVisible ? 40 : 0;

  newBanner.style.cssText = [
    'height:' + BANNER_HEIGHT + 'px',
    'position:fixed',
    'top:' + topOffset + 'px',
    'left:0',
    'right:0',
    'visibility:visible',
    'text-align:center',
    'margin:0',
    'padding:0 44px', // side padding keeps the text from running under the X
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

  // Close button, pinned to the far right of the banner.
  // The banner is position:fixed, so absolute positioning is relative to it.
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Dismiss banner');
  closeBtn.title = 'Dismiss';
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = [
    'position:absolute',
    'right:12px',
    'top:50%',
    'transform:translateY(-50%)',
    'background:transparent',
    'border:0',
    'padding:0 6px',
    'margin:0',
    'color:#fff',
    'font-size:22px',
    'font-weight:bold',
    'line-height:1',
    'cursor:pointer',
    'opacity:.85'
  ].join(';');
  closeBtn.addEventListener('mouseenter', function() { closeBtn.style.opacity = '1'; });
  closeBtn.addEventListener('mouseleave', function() { closeBtn.style.opacity = '.85'; });

  newBanner.appendChild(closeBtn);
  pageContainer.insertBefore(newBanner, pageContainer.firstChild);

  // Push page content down, remembering the original inline value so we can restore it exactly.
  const originalInlineMargin = pageContainer.style.marginTop;
  const currentMargin = parseInt(getComputedStyle(pageContainer).marginTop, 10) || 0;
  pageContainer.style.marginTop = (currentMargin + BANNER_HEIGHT) + 'px';

  closeBtn.addEventListener('click', function() {
    try {
      localStorage.setItem(DISMISS_KEY, 'true');
    } catch (e) {
      // Storage blocked - banner still closes for this page view.
    }
    newBanner.remove();
    pageContainer.style.marginTop = originalInlineMargin;
  });

})();
