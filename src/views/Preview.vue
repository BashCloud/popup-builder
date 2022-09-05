<template>
  <div>Preview Page</div>
</template>

<script>
export default {
  created() {
    let headEl = document.head || document.getElementsByTagName('head')[0];
    let scriptNode = document.createElement('script');
    scriptNode.src = 'http://localhost:3000/pixel.js?id=pop_3JVdwTc18jNsgnOkL01W';
    scriptNode.async = true;
    headEl.appendChild(scriptNode);
  },
};
</script>
