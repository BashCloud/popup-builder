<template>
  <div>
    <div class="popup-html" v-html="element.markup" :style="elStyle"></div>
  </div>
</template>

<script>
import elementDefaultStyle from '../mixins/elementDefaultStyle.js';

export default {
  props: ['element'],
  mixins: [elementDefaultStyle],
  computed: {
    elStyle() {
      return {
        ...this.elementStyle,
        ...this.textStyle,
      };
    },
  },
};
</script>
