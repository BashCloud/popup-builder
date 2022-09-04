<template>
  <input class="popup-input" :placeholder="element.placeholder" />
</template>

<script>
export default {
  props: ['element'],
};
</script>

<style lang="scss">
.popup-input {
  outline: none;
  border: none;
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 12px 16px;
  width: 100%;
}
</style>
