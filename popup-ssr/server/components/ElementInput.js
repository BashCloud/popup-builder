"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementDefaultStyle = _interopRequireDefault(require("../mixins/elementDefaultStyle.js"));

var _default = {
  props: ['element'],
  template: `<input class="popup-input" :placeholder="element.placeholder" :style="elStyle" />`,
  mixins: [_elementDefaultStyle.default],
  computed: {
    elStyle() {
      return { ...this.textStyle,
        ...this.elementStyle
      };
    }

  }
};
exports.default = _default;