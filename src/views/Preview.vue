<template>
  <div>
    <h3>Preview Page</h3>
    <p>Please wait a few seconds, to see the magic...</p>
    <div class="timer" v-if="popupDelay !== -1">{{ countDown }}</div>
  </div>
</template>

<script>
export default {
  created() {
    const baseUrl = 'https://popups-builder.herokuapp.com/pixel.js';
    // const baseUrl = 'http://localhost:3000/pixel.js';
    let popupId = this.$route.query.id;
    let headEl = document.head || document.getElementsByTagName('head')[0];
    let scriptNode = document.createElement('script');
    scriptNode.src = `${baseUrl}?id=${popupId}`;
    scriptNode.async = true;
    headEl.appendChild(scriptNode);

    this.countDownTimer();
  },
  data() {
    return {
      countDown: 10000,
      popupDelay: -1,
    };
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        if (this.popupDelay === -1 && window.popupDisplayDelay) {
          this.popupDelay = popupDisplayDelay;
          this.countDown = parseInt(popupDisplayDelay / 1000) - 1;
          console.log('Popup initialized');
        }
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
};
</script>
<style lang="scss">
.timer {
  font-size: 64px;
  margin: 120px auto;
}
</style>
