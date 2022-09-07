import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  props: ['element'],
  template: `<input class="popup-input" :placeholder="element.placeholder" :style="elStyle" />`,
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
