<template>
  <component :is="tag" :class="$options.wrapperClass">
    <slot></slot>
  </component>
</template>

<script>
import { constants } from 'smooth-dnd';
import { getTagProps, validateTagProp } from './utils';
export default {
  name: 'Draggable',
  props: {
    tag: {
      validator: validateTagProp,
      default: 'div',
    },
  },
  wrapperClass: constants.wrapperClass,
};
</script>
<style>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: initial !important;
}
</style>
