<template>
  <div class="builder-footer">
    <div style="width: 206px"></div>
    <div class="preview-devices">
      <div class="preview-device btn" :class="{ '--selected': appConfig.preview_device === 'desktop' }" @click="setPreviewDevice('desktop')">
        <i class="light-icon-device-laptop"></i>
      </div>
      <div class="preview-device btn" :class="{ '--selected': appConfig.preview_device === 'tablet' }" @click="setPreviewDevice('tablet')">
        <i class="light-icon-device-tablet"></i>
      </div>
      <div class="preview-device btn" :class="{ '--selected': appConfig.preview_device === 'mobile' }" @click="setPreviewDevice('mobile')">
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
    pageRefresh() {
      let current_animation = this.schema.display_animation;
      this.schema.display_animation = '';
      setTimeout(() => {
        this.schema.display_animation = current_animation;
      }, 300);
    },
    setPreviewDevice(newDevice) {
      this.appConfig.preview_device = newDevice;
      let deviceScreen = document.querySelector('.pulkit-device .screen');
      let popupWidth = parseFloat(this.schema.style.width);
      let deviceWidth = deviceScreen.clientWidth;
      switch (newDevice) {
        case 'desktop': {
          deviceWidth = 1024;
          break;
        }
        case 'tablet': {
          deviceWidth = 576;
          break;
        }
        case 'mobile': {
          deviceWidth = 375;
          break;
        }
      }
      if (deviceWidth < popupWidth + 64) {
        let scaleRatio = deviceWidth / (popupWidth + 64);
        deviceScreen.style.setProperty('--popup-scale', scaleRatio);
      } else {
        deviceScreen.style.setProperty('--popup-scale', 1);
      }
      this.pageRefresh();
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
  padding-left: 320px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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
