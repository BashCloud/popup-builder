<template>
  <div>
    <PropertiesGroup label="Popup" sub-menu :activeGroup="activeGroup" @toggle="setActiveGroup">
      <property-field label="Padding">
        <LvBoxModel bottom-bar v-model="schema.style.padding" />
      </property-field>
      <property-field>
        <LvToggleSwitch label="Highlight drop-area" bottom-bar v-model="appConfig.highlight_droparea" />
      </property-field>
      <property-field label="Width">
        <LvUnitInput bottom-bar v-model="schema.style.width" :units="['px', 'em', 'rem', 'vh', 'vw']" />
      </property-field>
      <property-field label="Height">
        <LvUnitInput bottom-bar v-model="schema.style.height" :units="['px', 'em', 'rem', 'vh', 'vw']" />
      </property-field>
      <property-field label="Border Radius">
        <LvUnitInput bottom-bar v-model="schema.style.border_radius" />
      </property-field>
      <property-field label="Background Color">
        <LvColorPicker bottom-bar v-model="schema.style.background_color" />
      </property-field>
    </PropertiesGroup>
    <PropertiesGroup label="Backdrop" sub-menu :activeGroup="activeGroup" @toggle="setActiveGroup">
      <property-field label="Background Color">
        <LvColorPicker bottom-bar v-model="schema.style.backdrop.background_color" />
      </property-field>
      <property-field label="Opacity">
        <LvUnitInput bottom-bar v-model="schema.style.backdrop.opacity" :units="['%']" />
      </property-field>
      <property-field label="Background Blur">
        <LvUnitInput bottom-bar v-model="schema.style.backdrop.blur" :units="['px']" />
      </property-field>
    </PropertiesGroup>

    <PropertiesGroup label="Close Button" sub-menu :activeGroup="activeGroup" @toggle="setActiveGroup">
      <property-field label="Close button will be available soon !"> </property-field>
    </PropertiesGroup>
    <PropertiesGroup label="Submit Action" sub-menu :activeGroup="activeGroup" @toggle="setActiveGroup">
      <property-field label="Submit action will be available soon !"> </property-field>
    </PropertiesGroup>
    <PropertiesGroup label="Display settings" sub-menu :activeGroup="activeGroup" @toggle="setActiveGroup">
      <property-field label="Popup Animation">
        <lvDropdown bottom-bar :options="animationTypes" v-model="schema.style.animation_type" />
      </property-field>
      <property-field label="Popup Delay">
        <LvUnitInput bottom-bar v-model="schema.display_delay" :units="['ms']" />
      </property-field>
    </PropertiesGroup>
  </div>
</template>

<script>
import customizationsMixin from '../mixins/customizationsMixin.js';

export default {
  mixins: [customizationsMixin],
  data() {
    return {
      animationTypes: ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRigh', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'jackInTheBox', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'lightSpeedInRight', 'lightSpeedInLeft'],
    };
  },
  computed: {
    appConfig: {
      get: function () {
        return this.$store.state.builder.appConfig;
      },
      set: function (newValue) {
        this.$store.dispatch('builder/setAppConfig', newValue);
      },
    },
  },
};
</script>
