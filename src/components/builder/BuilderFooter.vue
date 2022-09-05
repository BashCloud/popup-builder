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
      <button class="btn preview-btn" @click="previewChanges" :disabled="isSaved === false">PREVIEW</button>
      <button class="btn save-btn" @click="saveChanges">SAVE</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  data() {
    return {
      isSaved: false,
    };
  },
  computed: {
    schema: {
      get: function () {
        return this.$store.state.builder.schema;
      },
      set: function (newValue) {
        this.$store.dispatch('builder/setSchema', newValue);
      },
    },
    appConfig: {
      get: function () {
        return this.$store.state.builder.appConfig;
      },
      set: function (newValue) {
        this.$store.dispatch('builder/setAppConfig', newValue);
      },
    },
  },
  methods: {
    async saveChanges() {
      await firebase.firestore().collection('popups').doc(this.schema.id).set(this.schema);
      console.log('Saved !!', this.schema.id);
      alert('Your design is saved !!');
      this.isSaved = true;
    },
    async previewChanges() {
      if (!this.isSaved) {
        alert('Please save your changes first !!');
        return;
      }
      window.open(`/preview?id=${this.schema.id}`, '_blank');
    },
  },
};
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
.footer-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  &:disabled {
    opacity: 0.3;
    // pointer-events: none;
  }
}
.save-btn {
  background-color: #000000;
  color: #ffffff;
  padding: 8px 24px;
}
.preview-btn {
  background-color: #ffffff;
  color: #000000;
  padding: 8px 24px;
  border: 1px solid #000000;
}
</style>
