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

<style lang="scss">
.popup-text {
  // color: #ffffff;
  // font-size: 16px;
  // line-height: 40px;
  font-weight: 600;
  text-align: center;
}
</style>
