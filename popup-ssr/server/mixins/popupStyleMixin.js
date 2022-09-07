"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  computed: {
    popupBodyStyle() {
      return {
        margin: this.schema.style.margin,
        borderRadius: this.schema.style.border_radius,
        height: this.schema.style.height,
        width: this.schema.style.width,
        padding: this.schema.style.padding,
        backgroundColor: this.schema.style.background_color
      };
    },

    popupBackdropStyle() {
      var _this$schema, _this$schema$style, _this$schema$style$ba, _this$schema2, _this$schema2$style, _this$schema2$style$b;

      const backdropBlur = (_this$schema = this.schema) === null || _this$schema === void 0 ? void 0 : (_this$schema$style = _this$schema.style) === null || _this$schema$style === void 0 ? void 0 : (_this$schema$style$ba = _this$schema$style.backdrop) === null || _this$schema$style$ba === void 0 ? void 0 : _this$schema$style$ba.blur;
      const backdropOpacity = (_this$schema2 = this.schema) === null || _this$schema2 === void 0 ? void 0 : (_this$schema2$style = _this$schema2.style) === null || _this$schema2$style === void 0 ? void 0 : (_this$schema2$style$b = _this$schema2$style.backdrop) === null || _this$schema2$style$b === void 0 ? void 0 : _this$schema2$style$b.opacity;
      return {
        background: this.schema.style.backdrop.background_color,
        backdropFilter: backdropBlur && `blur(${backdropBlur})`,
        filter: backdropOpacity && `opacity(${backdropOpacity})`
      };
    },

    popupAnimationClass() {
      return this.schema.display_animation ? `animate__animated animate__${this.schema.display_animation}` : '';
    }

  }
};
exports.default = _default;