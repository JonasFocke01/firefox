async function loadOptions() {
  const options = await browser.storage.sync.get();
  iobrokerInstanceUrl = options.iobrokerInstanceUrl
    ? options.iobrokerInstanceUrl
    : 'https://www.iobroker.net/';
  document.getElementById('scaled-frame').src = iobrokerInstanceUrl;
}

document.addEventListener('DOMContentLoaded', loadOptions);
