<template>
  <div class="home">
    <BuilderRoot />
  </div>
</template>

<script>
// @ is an alias to /src
import BuilderRoot from '@/components/builder/BuilderRoot.vue';
export default {
  name: 'Home',
  components: {
    BuilderRoot,
  },
};
</script>
