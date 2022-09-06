# Popup Builder

[Click here](https://popup-builder.netlify.app/) to see a live demo in your device. 

## IMPORTANT:
> Root folder contains the code for VueJS application. Also, it uses node-sass, which isn't compatible with with node-version higher than `14.x.x`  
It is recommended to use nodeJS version between `10.x.x` & `14.x.x`, before running `client`. 
  
> `/popup-src/` folder contains the backend code, which is only compatible with node-version higher than `16.x.x`.  
> It is recommended to use nodeJS version higher than `16.x.x`, before running `server`.
 
> You can use `NVM` to temporary change the nodeJS version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development [FRONTEND]
```
npm run client
```

### Run server for popupSDK [BACKEND]
```
npm run server
```

### Compiles and minifies for production
```
npm run build
```

### Display popup in any website:

1. Make sure to run the server code locally:
```
npm run server
```
2. Add this JavaScript line, change `pop_xxxxxxxxxxx` with actual `popup_id`:
```html
<script src="https://localhost:3000/pixel.js?id=pop_xxxxxxxxxxx"></script>
```

![Popup Builder App](https://github.com/BashCloud/popup-builder/blob/master/app-preview.png?raw=true)


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

