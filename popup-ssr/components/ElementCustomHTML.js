import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  props: ['element'],
  template: `<div>
  <div class="popup-html" v-html="element.markup" :style="elStyle"></div>
</div>`,
  mixins: [elementDefaultStyle],
  computed: {
    elStyle() {
      return {
        ...this.textStyle,
        ...this.elementStyle,
      };
    },
  },
};
