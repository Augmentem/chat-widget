(function () {
  const widgetStyles = `
    #augmentem-chat-button {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      background-color: #7c3aed;
      color: white;
      border: none;
      border-radius: 9999px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      font-size: 24px;
      cursor: pointer;
      z-index: 9999;
    }
    #augmentem-chat-iframe {
      position: fixed;
      bottom: 96px;
      right: 24px;
      width: 360px;
      height: 520px;
      border: none;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      display: none;
      z-index: 9999;
      overflow: hidden;
    }
  `;

  const style = document.createElement('style');
  style.innerHTML = widgetStyles;
  document.head.appendChild(style);

  const iframe = document.createElement('iframe');
  iframe.id = 'augmentem-chat-iframe';
  iframe.src = 'https://vrso.vercel.app';
  document.body.appendChild(iframe);

  const button = document.createElement('button');
  button.id = 'augmentem-chat-button';
  button.innerHTML = '💬';
  button.onclick = () => {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  };
  document.body.appendChild(button);
})();
