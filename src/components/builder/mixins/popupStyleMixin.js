export default {
  computed: {
    popupBodyStyle() {
      return {
        margin: this.schema.style.margin,
        borderRadius: this.schema.style.border_radius,
        height: this.schema.style.height,
        width: this.schema.style.width,
        padding: this.schema.style.padding,
        backgroundColor: this.schema.style.background_color,
      };
    },
    popupBackdropStyle() {
      const backdropBlur = this.schema?.style?.backdrop?.blur;
      const backdropOpacity = this.schema?.style?.backdrop?.opacity;
      return {
        background: this.schema.style.backdrop.background_color,
        backdropFilter: backdropBlur && `blur(${backdropBlur})`,
        filter: backdropOpacity && `opacity(${backdropOpacity})`,
      };
    },
    popupAnimationClass() {
      return this.schema.style.animation_type ? `animate__animated animate__${this.schema.style.animation_type}` : '';
    },
  },
};
