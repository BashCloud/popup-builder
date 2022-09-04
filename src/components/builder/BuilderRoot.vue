<template>
  <div class="builder-layout">
    <div class="builder-sidebar">
      <builder-sidebar />
    </div>
    <div class="builder-playground">
      <BuilderPlayground />
    </div>
  </div>
</template>

<script>
import builderStore from '@/store/builder.js';
import BuilderSidebar from './BuilderSidebar.vue';
import BuilderPlayground from './BuilderPlayground.vue';
export default {
  components: {
    BuilderSidebar,
    BuilderPlayground,
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
  .builder-sidebar {
    text-align: left;
    max-width: 320px;
    min-width: 320px;
    background-color: #fff;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .builder-playground {
    flex-grow: 1;
  }
}
</style>
