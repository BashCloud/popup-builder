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
  <div class="popup-text" :style="elStyle">{{ element.text }}</div>
</div>`,
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