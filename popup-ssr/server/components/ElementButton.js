"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementDefaultStyle = _interopRequireDefault(require("../mixins/elementDefaultStyle.js"));

var _default = {
  template: `<button type="submit" class="popup-btn" :style="elStyle">{{ element.label }}</button>`,
  props: ['element'],
  mixins: [_elementDefaultStyle.default],
  computed: {
    elStyle() {
      return { ...this.elementStyle,
        ...this.textStyle,
        textAlign: this.element.style.text_align || 'center'
      };
    }

  }
};
exports.default = _default;