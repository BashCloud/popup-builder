<template>
  <div style="display: flex; justify-content: center; padding: 32px; height: 100%; overflow-y: auto">
    <div class="pulkit-device" :class="{ desktop: activeDeviceType === 'desktop', ipad: activeDeviceType === 'tablet', 'iphone-x': activeDeviceType === 'mobile' }">
      <div class="top-bar"></div>
      <!----- --------------------------------------- -->
      <div class="screen" :class="{ ipad: activeDeviceType === 'tablet' }">
        <div class="notification-bar" v-if="activeDeviceType !== 'desktop'">
          <div class="notification-bar__icons">
            <div class="notification-bar__time">{{ notificationTime }}</div>
            <i class="light-icon-settings"></i>
            <i class="light-icon-brand-instagram"></i>
          </div>
          <div class="notification-bar__icons">
            <i class="light-icon-chart-bar"></i>
            <i class="light-icon-wifi"></i>
            <i class="light-icon-battery-3"></i>
          </div>
        </div>
        <div class="safari" :class="{ 'mobile-browser': activeDeviceType === 'tablet' || activeDeviceType === 'mobile' }">
          <div class="dots" v-if="activeDeviceType === 'desktop'">
            <div class="dot-1"></div>
            <div class="dot-2"></div>
            <div class="dot-3"></div>
          </div>
          <div v-if="activeDeviceType === 'mobile' || activeDeviceType === 'tablet'" class="mobile-browser__home">
            <i class="light-icon-home"></i>
          </div>
          <div class="safari-url" :class="{ 'mobile-url': activeDeviceType === 'tablet' || activeDeviceType === 'mobile' }">
            <div style="display: flex; align-items: center; max-width: calc(100% - 76px)" @click="copyUrl()">
              <i class="light-icon-lock browser-icons"></i>
              <div class="preview-url">{{ showCode ? embedCode : previewUrl }}</div>
            </div>
            <div class="address-actions">
              <i class="light-icon-refresh" @click="pageRefresh()" :title="'Refresh'"></i>
              <i class="light-icon-copy" @click="copyUrl()" :title="'Copy URL'"></i>
              <i class="light-icon-code" :class="{ '--active': showCode }" @click="showCode = !showCode" :title="'Show install code'"></i>
              <i class="light-icon-external-link" @click.stop="openInNewTab()" title="Open link in new tab"></i>
            </div>
          </div>
        </div>
        <div class="actual-preview light-scrollbar">
          <slot></slot>
        </div>
      </div>
      <!-- only for mobile device -->
      <div v-if="activeDeviceType === 'mobile'">
        <div class="notch">
          <div class="camera"></div>
          <div class="speaker"></div>
        </div>
        <div class="top-bar"></div>
        <div class="sleep"></div>
        <div class="bottom-bar"></div>
        <div class="volume"></div>
        <div class="overflow">
          <div class="shadow shadow--tr"></div>
          <div class="shadow shadow--tl"></div>
          <div class="shadow shadow--br"></div>
          <div class="shadow shadow--bl"></div>
        </div>
        <div class="inner-shadow"></div>
      </div>
      <div class="home" v-if="activeDeviceType === 'tablet'"></div>
    </div>
  </div>
</template>

<script>
import copyToClipboard from '@/utils/copy-to-clipboard.js';

import Tooltip from 'lightvue/tooltip';

export default {
  data() {
    return {
      showCode: false,
      notificationTime: this.currentTime(),
    };
  },
  directives: {
    tooltip: Tooltip,
  },
  computed: {
    activeDeviceType: {
      get: function () {
        return this.$store.state.builder.appConfig.preview_device;
      },
    },
    schema: {
      get: function () {
        return this.$store.state.builder.schema;
      },
      set: function (newValue) {
        this.$store.dispatch('builder/setSchema', newValue);
      },
    },
    previewUrl() {
      if (this.schema) {
        return `https://popup-builder.netlify.app/preview?id=${this.schema.id}`;
      } else {
        return 'https://popup-builder.netlify.app/preview?id=';
      }
    },
    embedCode() {
      if (this.schema) {
        return '<' + 'script src=' + `"https://popups-builder.herokuapp.com/pixel.js?id=${this.schema.id}" async` + '></' + 'script>';
      } else {
        return '<' + 'script src=' + `"https://popups-builder.herokuapp.com/pixel.js?id=" async` + '></' + 'script>';
      }
    },
  },
  methods: {
    copyUrl() {
      copyToClipboard(this.showCode ? this.embedCode : this.previewUrl)
        .then(() => {
          console.log(this.showCode ? 'Code Copied' : 'URL Copied');
          // this.copied = true;
          // clearTimeout(this.timer);
          // this.timer = setTimeout(() => {
          //   this.copied = false;
          //   this.timer = null;
          // }, 1000);
        })
        .catch(() => {});
    },
    openInNewTab() {
      window.open(this.previewUrl, '_blank');
    },
    pageRefresh() {
      let current_animation = this.schema.display_animation;
      this.schema.display_animation = '';
      setTimeout(() => {
        this.schema.display_animation = current_animation;
      }, 300);
    },
    currentTime() {
      let today = new Date();
      let time = today.getHours() + ':' + today.getMinutes();
      return time;
    },
    updateDeviceType(newDevice) {
      this.activeDeviceType = newDevice;
    },
  },
};
</script>

<style lang="scss">
@import './device.scss';
@import './deviceToggle.scss';
@import './lightScroll.scss';
</style>
