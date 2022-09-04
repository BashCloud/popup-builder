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
  },
};
