<template>
  <div class="builder-footer">
    <div></div>
    <div class="preview-devices">
      <div class="preview-device btn --selected">
        <i class="light-icon-device-laptop"></i>
      </div>
      <div class="preview-device btn">
        <i class="light-icon-device-tablet"></i>
      </div>
      <div class="preview-device btn">
        <i class="light-icon-device-mobile"></i>
      </div>
    </div>
    <div class="footer-actions">
      <div class="btn save-btn">SAVE</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.builder-footer {
  position: fixed;
  z-index: 1001;
  background-color: #ffffff;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 56px;
  padding: 12px;
  padding-left: 440px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.preview-devices {
  display: flex;
  gap: 12px;
  .preview-device {
    border: 1px solid #777777;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    &.--selected {
      background-color: #000000;
      color: #ffffff;
    }
  }
}
.btn {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
}
.save-btn {
  background-color: #000000;
  color: #ffffff;
  padding: 8px 24px;
}
</style>
