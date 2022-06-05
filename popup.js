async function loadOptions() {
  const options = await browser.storage.sync.get();
  document.getElementById("iobrokerInstanceUrl").src =
    options.iobrokerInstanceUrl;
}

document.addEventListener("DOMContentLoaded", loadOptions);
