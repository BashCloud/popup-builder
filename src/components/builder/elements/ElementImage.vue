<template>
  <div>
    <img class="popup-image" :src="element.img_url" :alt="element.img_alt" />
  </div>
</template>

<script>
export default {
  props: ['element'],
};
</script>

<style lang="scss">
.popup-image {
  height: 50px;
  margin: auto;
  display: block;
  opacity: 0.3;
}
</style>
