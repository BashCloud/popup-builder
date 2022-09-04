<template>
  <div>
    <PropertiesGroup label="General Settings" :activeGroup="activeGroup" @toggle="setActiveGroup">
      <GeneralSettings />
    </PropertiesGroup>
    <PropertiesGroup label="Add Elements" :activeGroup="activeGroup" @toggle="setActiveGroup">
      <AllElements />
    </PropertiesGroup>
    <PropertiesGroup v-if="activeRowId" label="Element Properties" :activeGroup="activeGroup" @toggle="setActiveGroup">
      <ElementProperties />
    </PropertiesGroup>
  </div>
</template>

<script>
import customizationsMixin from './mixins/customizationsMixin.js';
import GeneralSettings from './properties/GeneralSettings.vue';
import AllElements from './properties/AllElements.vue';
import ElementProperties from './properties/ElementProperties.vue';

export default {
  name: 'BuilderSidebar',
  mixins: [customizationsMixin],
  components: {
    GeneralSettings,
    AllElements,
    ElementProperties,
  },
  watch: {
    activeRowId(newValue) {
      this.activeGroup = newValue ? 'Element Properties' : 'Add Elements';
    },
  },
};
</script>

<style lang="scss">
.lv-colorpicker-wrapper {
  display: block !important;
}
</style>
