async function loadOptions() {
  const options = await browser.storage.sync.get();
  iobrokerInstanceUrl = options.iobrokerInstanceUrl
    ? options.iobrokerInstanceUrl
    : "https://www.iobroker.net/";
  // document.getElementById("scaled-frame").src = iobrokerInstanceUrl;
  document.getElementById("scaled-frame").src = 'http://192.168.2.100:8082/vis/index.html#addon';
  
}

document.addEventListener("DOMContentLoaded", loadOptions);
