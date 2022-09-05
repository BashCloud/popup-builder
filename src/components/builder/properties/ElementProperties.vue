<template>
  <div>
    <property-field label="Padding">
      <LvBoxModel bottom-bar v-model="activeElement.style.padding" />
    </property-field>
    <property-field label="Margin">
      <LvBoxModel bottom-bar v-model="activeElement.style.margin" />
    </property-field>
    <property-field label="Border Radius">
      <LvUnitInput bottom-bar v-model="activeElement.style.border_radius" />
    </property-field>
    <property-field label="Background Color">
      <LvColorPicker bottom-bar v-model="activeElement.style.background_color" />
    </property-field>
    <div v-if="textualElements.includes(activeElement.element_type)">
      <property-field label="Text Color">
        <LvColorPicker bottom-bar v-model="activeElement.style.color" />
      </property-field>
      <property-field label="Font Size">
        <LvUnitInput bottom-bar v-model="activeElement.style.font_size" />
      </property-field>
    </div>
    <property-field label="Opacity">
      <LvUnitInput bottom-bar v-model="activeElement.style.opacity" :units="['%']" />
    </property-field>
    <property-field label="Image URL" v-if="activeElement.element_type === 'ElementImage'">
      <lvInput bottom-bar v-model="activeElement.img_url" />
    </property-field>
    <property-field label="Text Content" v-if="activeElement.element_type === 'ElementTextBox'">
      <lvTextArea bottom-bar auto-resize v-model="activeElement.text" />
    </property-field>
    <property-field label="HTML Content" v-if="activeElement.element_type === 'ElementCustomHTML'">
      <lvTextArea bottom-bar auto-resize v-model="activeElement.markup" />
    </property-field>
    <property-field label="Button Label" v-if="activeElement.element_type === 'ElementButton'">
      <lvInput bottom-bar v-model="activeElement.label" />
    </property-field>
  </div>
</template>

<script>
import customizationsMixin from '../mixins/customizationsMixin.js';

export default {
  mixins: [customizationsMixin],
  data() {
    return {
      textualElements: ['ElementButton', 'ElementCustomHTML', 'ElementInput', 'ElementTextBox'],
    };
  },
};
</script>
