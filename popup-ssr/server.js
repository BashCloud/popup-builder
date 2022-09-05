import express from 'express';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

import ElementButton from './components/ElementButton.js';
import ElementInput from './components/ElementInput.js';
import ElementCustomHTML from './components/ElementCustomHTML.js';
import ElementImage from './components/ElementImage.js';
import ElementTextBox from './components/ElementTextBox.js';

import popupStyleMixin from './mixins/popupStyleMixin.js';
import { readFile } from 'fs/promises';
const server = express();

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccountKey from './serviceAccountKey.js';

initializeApp({
  credential: cert(serviceAccountKey),
});
const db = getFirestore();

server.get('/pixel.js', async (req, res) => {
  try {
    const css = await readFile('./style.min.css', 'utf8');
    const js = await readFile('./script.js', 'utf8');
    const { id } = req.query;
    const schemaSnapshot = await db.collection('popups').doc(id).get();
    const schema = schemaSnapshot.data();
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
  <style>${css}</style>
  `,
    });

    renderToString(app).then(html => {
      const popupDom = `<style>${css}</style>${html}`;
      const result = `const popupDom = \`${popupDom}\`; 
        const displayDelay = ${parseFloat(schema.display_delay, 10)}; 
        const popupWidth = ${parseFloat(schema.style.width)}; 
        ${js}; 
      `;
      res.setHeader('content-type', 'text/javascript');
      res.send(result);
    });
  } catch (err) {
    res.send('Something went wrong !!');
  }
});

server.listen(3000, () => {
  console.log('ready');
});
