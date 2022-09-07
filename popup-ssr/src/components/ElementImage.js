import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  props: ['element'],
  template: `  <div>
  <img class="popup-image" :src="element.img_url" :alt="element.img_alt" :style="elStyle" />
</div>`,
  mixins: [elementDefaultStyle],
  computed: {
    elStyle() {
      return {
        ...this.elementStyle,
      };
    },
  },
};
