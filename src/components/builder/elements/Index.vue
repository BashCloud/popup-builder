<template>
  <div>
    <component :is="element.element_type" :element="element" />
  </div>
</template>

<script>
import ElementInput from './ElementInput.vue';
import ElementImage from './ElementImage.vue';
import ElementButton from './ElementButton.vue';
import ElementTextBox from './ElementTextBox.vue';
import ElementCustomHTML from './ElementCustomHTML.vue';
export default {
  props: ['element'],
  components: {
    ElementInput,
    ElementImage,
    ElementButton,
    ElementTextBox,
    ElementCustomHTML,
  },
};
</script>
