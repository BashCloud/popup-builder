"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementDefaultStyle = _interopRequireDefault(require("../mixins/elementDefaultStyle.js"));

var _default = {
  props: ['element'],
  template: `  <div>
  <img class="popup-image" :src="element.img_url" :alt="element.img_alt" :style="elStyle" />
</div>`,
  mixins: [_elementDefaultStyle.default],
  computed: {
    elStyle() {
      return { ...this.elementStyle
      };
    }

  }
};
exports.default = _default;