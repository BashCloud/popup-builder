<template>
  <input class="popup-input" :placeholder="element.placeholder" :style="elStyle" />
</template>

<script>
import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  props: ['element'],
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
</script>
