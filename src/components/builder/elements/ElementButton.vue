<template>
  <button type="submit" class="popup-btn" :style="elStyle">{{ element.label }}</button>
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
        textAlign: this.element.style.text_align || 'center',
      };
    },
  },
};
</script>

<style lang="scss">
.popup-btn {
  outline: none;
  border: none;
  // border-radius: 12px;
  // background-color: #000000;
  // color: #ffffff;
  cursor: pointer;
  // padding: 20px 48px;
  width: 100%;
  // text-align: center;
  // font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
