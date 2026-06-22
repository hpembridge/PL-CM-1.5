(function () {
  // ── Styles ──────────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --fbk-spacing-val: 16;
      --fbk-height-val: 48;
      --fbk-spacing: calc(var(--fbk-spacing-val)*1px);
      --fbk-height: calc(var(--fbk-height-val)*1px);
      --fbk-gap: calc(var(--fbk-spacing-val)*1px);
    }
    #fbk-btn {
      position: fixed;
      top: 0;
      right: var(--fbk-spacing);
      width: var(--fbk-height);
      height: var(--fbk-height);
      border-radius: 0 0 30% 30%;
      background: var(--status-warning-bg);
      border: solid 1px var(--status-warning-border);
      border-top: none;
      color: var(--status-warning-border);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9000;
      transition: transform 0.2s ease, background 0.2s ease;
      outline: none;
    }
    #fbk-btn:hover { transform: scale(1.07); }
    #fbk-btn i { font-size: 24px; }
    #fbk-overlay {
      position: fixed;
      inset: 0;
      z-index: 8998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.28s ease;
    }
    #fbk-overlay.active { pointer-events: all; }
    #fbk-panel {
      position: fixed;
      top: calc((var(--fbk-height-val)) * 1px + var(--fbk-gap));
      right: var(--fbk-spacing);
      width: var(--container-aside);
      background: #fff;
      z-index: 8999;
      border-radius: 8px;
      transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(-8px) scale(0.97);
      pointer-events: none;
      border: solid 1.5px var(--status-warning-border);
      overflow: hidden;
    }
    #fbk-panel.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }
    .fbk-body { overflow-y: auto; }
    .fbk-body iframe {
      width: 100%;
      height: calc(100vh - (var(--fbk-height-val)) * 1px - var(--fbk-gap) - var(--fbk-spacing));
      border: none;
      display: block;
    }
  `;
  document.head.appendChild(style);

  // ── HTML ────────────────────────────────────────────────────────────────────
  const html = `
    <button id="fbk-btn" title="Share feedback" aria-label="Open feedback form">
      <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
    </button>
    <div id="fbk-overlay"></div>
    <div id="fbk-panel" role="dialog" aria-modal="true" aria-label="Feedback form">
      <div class="fbk-body">
        <iframe
          src="https://app.smartsheet.com/b/form/019ee10f622d716491684bd499b1a0f9"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
          title="Feedback form"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);

  // ── Behaviour ───────────────────────────────────────────────────────────────
  const btn     = document.getElementById('fbk-btn');
  const panel   = document.getElementById('fbk-panel');
  const overlay = document.getElementById('fbk-overlay');
  const icon    = btn.querySelector('i');

  function open() {
    panel.classList.add('open');
    overlay.classList.add('active');
    icon.className = 'fa-solid fa-xmark';
  }
  function shut() {
    panel.classList.remove('open');
    overlay.classList.remove('active');
    icon.className = 'fa-solid fa-comment-dots';
  }

  btn.addEventListener('click', () => panel.classList.contains('open') ? shut() : open());
  overlay.addEventListener('click', shut);
})();
