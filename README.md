A firefox plugin to show the iobroker page in an iframe

## How to test in firefox (consult documentation of your browser on this step)
* go to about:debugging in you browser
* click 'Load Temporary Add-on'
* choose the manifest.json

## How to build
* npm install
* npm run web-ext --overwrite-dest
* new .zip can be uploaded to firefox