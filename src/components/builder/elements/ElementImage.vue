<template>
  <div>
    <img class="popup-image" :src="element.img_url" :alt="element.img_alt" :style="elStyle" />
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
      };
    },
  },
};
</script>

<style lang="scss">
.popup-image {
  height: 50px;
  margin: auto;
  display: block;
  // opacity: 0.3;
}
</style>
