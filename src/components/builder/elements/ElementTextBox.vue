<template>
  <div>
    <div class="popup-text" :style="{ fontSize: element.font_size }">{{ element.text }}</div>
  </div>
</template>

<script>
export default {
  props: ['element'],
};
</script>

<style lang="scss">
.popup-text {
  color: #ffffff;
  font-size: 16px;
  line-height: 40px;
  font-weight: 600;
  text-align: center;
}
</style>
