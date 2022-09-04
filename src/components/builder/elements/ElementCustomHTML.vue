<template>
  <div>
    <div class="popup-html" v-html="element.markup"></div>
  </div>
</template>

<script>
export default {
  props: ['element'],
};
</script>
<style>
.popup-html {
  color: #ffffff;
}
</style>
