<template>
  <div class="prop-field">
    <label class="prop-field__label" v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['label'],
};
</script>

<style lang="scss">
.prop-field {
  margin-bottom: 8px;
  .prop-field__label {
    font-size: 14px;
    margin-bottom: 4px;
    display: block;
  }
}
</style>
