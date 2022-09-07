import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  props: ['element'],
  template: `  <div>
  <div class="popup-text" :style="elStyle">{{ element.text }}</div>
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
