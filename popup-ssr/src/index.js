import express from 'express';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { promises as fs } from 'fs';

import ElementButton from './components/ElementButton.js';
import ElementInput from './components/ElementInput.js';
import ElementCustomHTML from './components/ElementCustomHTML.js';
import ElementImage from './components/ElementImage.js';
import ElementTextBox from './components/ElementTextBox.js';

import popupStyleMixin from './mixins/popupStyleMixin.js';

import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';

const fbApp = initializeApp(firebaseConfig);
const firestore = getFirestore(fbApp);

const server = express();
server.get('/pixel.js', async (req, res) => {
  try {
    const css = await fs.readFile('./static/style.min.css', 'utf8');
    const js = await fs.readFile('./static/script.min.js', 'utf8');

    const { id } = req.query;
    const docRef = doc(firestore, 'popups', id);
    const docSnap = await getDoc(docRef);

    const schema = docSnap.data();

    const app = createSSRApp({
      data: () => ({
        schema: schema,
      }),
      mixins: [popupStyleMixin],
      components: {
        ElementButton,
        ElementInput,
        ElementCustomHTML,
        ElementImage,
        ElementTextBox,
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
  `,
    });

    renderToString(app)
      .then(html => {
        const popupDom = `<style>${css}</style>${html}`;
        const result = `const popupDom = \`${popupDom}\`; const displayDelay = ${parseFloat(schema.display_delay, 10)}; const popupWidth = ${parseFloat(schema.style.width)}; ${js}`;
        res.setHeader('content-type', 'text/javascript');
        res.send(result);
      })
      .catch(err => {
        console.log(err);
        res.send('console.log("Something went wrong !")');
      });
  } catch (err) {
    res.send('console.log("Something went wrong !!")');
  }
});

let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`ready ==> http://localhost://${port}`);
});
