<template>
  <button type="submit" class="popup-btn">{{ element.label }}</button>
</template>

<script>
export default {
  props: ['element'],
};
</script>

<style lang="scss">
.popup-btn {
  outline: none;
  border: none;
  border-radius: 12px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  padding: 20px 48px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
