<template>
  <div>
    <h3>Preview Page</h3>
    <p>Please wait a few seconds, to see the magic...</p>
  </div>
</template>

<script>
export default {
  created() {
    let popupId = this.$route.query.id;
    let headEl = document.head || document.getElementsByTagName('head')[0];
    let scriptNode = document.createElement('script');
    scriptNode.src = `https://popups-builder.herokuapp.com/pixel.js?id=${popupId}`;
    scriptNode.async = true;
    headEl.appendChild(scriptNode);
  },
};
</script>
