"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _vue = require("vue");

var _serverRenderer = require("vue/server-renderer");

var _fs = require("fs");

var _ElementButton = _interopRequireDefault(require("./components/ElementButton.js"));

var _ElementInput = _interopRequireDefault(require("./components/ElementInput.js"));

var _ElementCustomHTML = _interopRequireDefault(require("./components/ElementCustomHTML.js"));

var _ElementImage = _interopRequireDefault(require("./components/ElementImage.js"));

var _ElementTextBox = _interopRequireDefault(require("./components/ElementTextBox.js"));

var _popupStyleMixin = _interopRequireDefault(require("./mixins/popupStyleMixin.js"));

var _firebaseConfig = require("./firebaseConfig.js");

var _app = require("firebase/app");

var _lite = require("firebase/firestore/lite");

const fbApp = (0, _app.initializeApp)(_firebaseConfig.firebaseConfig);
const firestore = (0, _lite.getFirestore)(fbApp);
const server = (0, _express.default)();
server.get('/pixel.js', async (req, res) => {
  try {
    const css = await _fs.promises.readFile('./static/style.min.css', 'utf8');
    const js = await _fs.promises.readFile('./static/script.min.js', 'utf8');
    const {
      id
    } = req.query;
    const docRef = (0, _lite.doc)(firestore, 'popups', id);
    const docSnap = await (0, _lite.getDoc)(docRef);
    const schema = docSnap.data();
    const app = (0, _vue.createSSRApp)({
      data: () => ({
        schema: schema
      }),
      mixins: [_popupStyleMixin.default],
      components: {
        ElementButton: _ElementButton.default,
        ElementInput: _ElementInput.default,
        ElementCustomHTML: _ElementCustomHTML.default,
        ElementImage: _ElementImage.default,
        ElementTextBox: _ElementTextBox.default
      },
      template: `<section class="popup-pg" v-if="schema">
    <div class="popup-pg__body-wrap" :style="popupBodyStyle" :class="popupAnimationClass">
      <div class="popup-pg__body">
        <div v-for="(row, rowIndex) in schema.rows" :key="row.id">
          <div class="popup-pg__row" v-for="element in row.elements" :key="element.id">
            <component :is="element.element_type" :element="element" />
          </div>
        </div>
      </div>
    </div>
    <div class="popup-backdrop" :style="popupBackdropStyle"></div>
  </section>
  `
    });
    (0, _serverRenderer.renderToString)(app).then(html => {
      const popupDom = `<style>${css}</style>${html}`;
      const result = `const popupDom = \`${popupDom}\`; const displayDelay = ${parseFloat(schema.display_delay, 10)}; const popupWidth = ${parseFloat(schema.style.width)}; ${js}`;
      res.setHeader('content-type', 'text/javascript');
      res.send(result);
    }).catch(err => {
      console.log(err);
      res.send('console.log("Something went wrong !")');
    });
  } catch (err) {
    res.send('console.log("Something went wrong !!")');
  }
});
server.listen(3000, () => {
  console.log('ready ==> http://localhost://3000');
});