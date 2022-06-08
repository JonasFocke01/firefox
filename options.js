async function saveOptions(e) {
  e.preventDefault();

  const iobrokerInstanceUrl = document.getElementById(
    'iobrokerInstanceUrl'
  ).value;
  const settings = {
    iobrokerInstanceUrl,
  };
  browser.storage.sync.set(settings);
}

async function loadOptions() {
  const options = await browser.storage.sync.get();
  document.getElementById('iobrokerInstanceUrl').value =
    options.iobrokerInstanceUrl;
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('myForm').addEventListener('submit', saveOptions);
