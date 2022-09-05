<template>
  <div>
    <h4>Preview Page</h4>
  </div>
</template>

<script>
export default {
  created() {
    let popupId = this.$route.query.id;
    let headEl = document.head || document.getElementsByTagName('head')[0];
    let scriptNode = document.createElement('script');
    scriptNode.src = `http://localhost:3000/pixel.js?id=${popupId}`;
    scriptNode.async = true;
    headEl.appendChild(scriptNode);
  },
};
</script>
