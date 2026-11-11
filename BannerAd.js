(function() {

  // ---- Banner content -------------------------------------------------------
  // Edit this to change the message. Any change to this string (text, link,
  // styling) automatically re-shows the banner to users who dismissed the old one.
  const MESSAGE_HTML = '<span style="color:#fff; font-size:14px; font-weight:bold;">Clarity Office Anywhere is being replaced by Clarity Go. Switch today for the best mobile experience. <a href="https://support.clarityvoice.com/portal/en/kb/articles/clarity-go-mobile-app" target="_blank" rel="noopener noreferrer" style="color:#fff; font-size:14px; font-weight:bold; text-decoration:underline;">Download Now!</a></span>';

  // ---- Dismissal tracking ---------------------------------------------------
  // Stores a fingerprint of the message the user dismissed (not just "true").
  // On load we compare it to the current message's fingerprint; if they differ,
  // the message has changed and the banner shows again.
  const DISMISS_KEY = 'clarityBannerDismissedHash';
  const LEGACY_KEYS = ['clarityGoBannerDismissed_v1']; // from the earlier version

  // Small, fast string hash (djb2). Not cryptographic - only used to detect change.
  function hashString(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
    }
    return (hash >>> 0).toString(36);
  }

  const messageHash = hashString(MESSAGE_HTML);

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
  }
  function storageRemove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* storage blocked */ }
  }

  // Clean up the old boolean flag so it doesn't linger.
  LEGACY_KEYS.forEach(storageRemove);

  // Already on the page, or this exact message was dismissed -> do nothing.
  if (document.getElementById('custom-domain-banner')) {
    return;
  }
  if (storageGet(DISMISS_KEY) === messageHash) {
    return;
  }

  const pageContainer = document.querySelector('.page-container');
  if (!pageContainer) {
    return;
  }

  // ---- Build banner ---------------------------------------------------------
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
    // Lowest positive layer: stays above normal page content as it scrolls,
    // but below anything the portal positions with a z-index (save messages,
    // modals, dropdowns, tooltips).
    'z-index:1'
  ].join(';');

  newBanner.innerHTML = MESSAGE_HTML;

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

  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    // Ignore programmatic clicks (e.g. portal scripts calling .click()/trigger('click')).
    // Only a real user click should persist the dismissal.
    if (!e.isTrusted) {
      return;
    }

    // Remember which message was dismissed. A new message produces a new hash,
    // so this stops matching and the banner shows again.
    storageSet(DISMISS_KEY, messageHash);
    newBanner.remove();
    pageContainer.style.marginTop = originalInlineMargin;
  });

})();
