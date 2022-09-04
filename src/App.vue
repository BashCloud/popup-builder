<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import 'light-icons/dist/light-icon.css';
export default {};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  background-color: #f6f8fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
