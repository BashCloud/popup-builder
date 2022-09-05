import LvToggleSwitch from 'lightvue/toggle-switch';
import LvInput from 'lightvue/input';
import LvColorPicker from 'lightvue/color-picker';
import LvButton from 'lightvue/button';
import LvTextArea from 'lightvue/textarea';
import LvRangeSlider from 'lightvue/range-slider';
import LvDropdown from 'lightvue/dropdown';
import LvCollapsible from 'lightvue/collapsible';
import LvUnitInput from '@/components/common/unit-input';
import LvBoxModel from '@/components/common/box-model';

import PropertyField from '../properties/PropertyField.vue';
import PropertiesGroup from '../properties/PropertiesGroup.vue';

export default {
  components: {
    LvToggleSwitch,
    LvInput,
    LvColorPicker,
    LvButton,
    LvTextArea,
    LvRangeSlider,
    LvDropdown,
    LvCollapsible,
    LvUnitInput,
    LvBoxModel,

    PropertyField,
    PropertiesGroup,
  },
  data() {
    return {
      activeGroup: '',
    };
  },
  methods: {
    setActiveGroup(newGroup) {
      this.activeGroup = this.activeGroup === newGroup ? '' : newGroup;
    },
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
    activeRowId() {
      return this.$store.state.builder.activeRowId;
    },
    activeElement() {
      let rowIndex = this.schema.rows.findIndex(row => row.id === this.activeRowId);
      if (rowIndex === -1) {
        return null;
      } else {
        return this.schema.rows[rowIndex].elements[0];
      }
    },
  },
};
