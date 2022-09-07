"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: ['element'],
  computed: {
    textStyle() {
      return {
        color: this.element.style.color,
        fontSize: this.element.style.font_size,
        fontWeight: this.element.style.font_weight,
        lineHeight: this.element.style.line_height,
        textAlign: this.element.style.text_align
      };
    },

    elementStyle() {
      return {
        backgroundColor: this.element.style.background_color,
        padding: this.element.style.padding,
        margin: this.element.style.margin,
        borderRadius: this.element.style.border_radius,
        opacity: this.element.style.opacity
      };
    }

  }
};
exports.default = _default;