<template>
  <div class="builder-layout">
    <builder-sidebar class="builder-sidebar" />
    <div class="builder-playground">
      <DevicePreviewToggle>
        <BuilderPlayground />
      </DevicePreviewToggle>
    </div>
    <BuilderFooter />
  </div>
</template>

<script>
import 'animate.css';
import builderStore from '@/store/builder.js';
import BuilderSidebar from './BuilderSidebar.vue';
import BuilderPlayground from './BuilderPlayground.vue';
import BuilderFooter from './BuilderFooter.vue';
import DevicePreviewToggle from '@/components/preview/DevicePreviewToggle.vue';
export default {
  components: {
    BuilderSidebar,
    BuilderPlayground,
    BuilderFooter,
    DevicePreviewToggle,
  },
  created() {
    this.$store.registerModule('builder', builderStore);
  },
};
</script>

<style lang="scss">
.builder-layout {
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
  .builder-sidebar {
    z-index: 1000;
    text-align: left;
    max-width: 320px;
    min-width: 320px;
    background-color: #fff;
    overflow-y: auto;
    padding-bottom: 60px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .builder-playground {
    flex-grow: 1;
    height: calc(100vh - 56px);
    .popup-pg {
      height: 100%;
      position: relative !important;
    }
  }
}
</style>
