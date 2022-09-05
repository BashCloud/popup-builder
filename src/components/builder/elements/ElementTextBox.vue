<template>
  <div>
    <div class="popup-text" :style="elStyle">{{ element.text }}</div>
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
