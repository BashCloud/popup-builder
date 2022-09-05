import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  template: `<button type="submit" class="popup-btn" :style="elStyle">{{ element.label }}</button>`,
  props: ['element'],
  mixins: [elementDefaultStyle],
  computed: {
    elStyle() {
      return {
        ...this.elementStyle,
        ...this.textStyle,
        textAlign: this.element.style.text_align || 'center',
      };
    },
  },
};
