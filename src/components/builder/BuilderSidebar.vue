<template>
  <div>
    <h3>Design Interactive Popup</h3>
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
  data() {
    return {
      activeGroup: 'General Settings',
    };
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
h3 {
  text-align: center;
  padding: 12px;
  text-transform: uppercase;
  opacity: 0.7;
}
</style>
