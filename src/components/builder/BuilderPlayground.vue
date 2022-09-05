<template>
  <div @click="activeRowId = ''">
    <!----------------------------------------------PLAYGROUND------------------------------------------------------------>
    <section class="popup-pg" v-if="schema">
      <div class="popup-pg__body-wrap" :style="popupBodyStyle" :class="popupAnimationClass">
        <div class="popup-pg__body">
          <container @drop="dndDrop" @dragStart="dndDragStart" @dragEnd="dndDragEnd" group-name="builder" v-if="schema" style="height: 100%">
            <draggable v-for="(row, rowIndex) in schema.rows" :key="row.id">
              <div
                class="popup-pg__row"
                :class="{
                  '--selected': activeRowId === row.id,
                  '--hovered': hoverRowIndex === rowIndex,
                  '--hidden': element.is_hidden,
                }"
                v-for="element in row.elements"
                :key="element.id"
                @click.stop="selectRow(rowIndex)"
                @mouseover.stop="selectHoverRow(rowIndex)"
                @mouseleave.stop="hoverRowIndex = ''"
              >
                <PlaygroundElements :element="element" />

                <div class="popup-pg__row-mover" :class="{ '--active': activeRowId === row.id || hoverRowIndex === rowIndex }" title="Move">
                  <i class="light-icon-grip-vertical" />
                </div>

                <div class="popup-pg__row-actions" v-if="activeRowId === row.id">
                  <div class="popup-pg__row-action-btn" @click.stop="duplicateRow(rowIndex)" title="Duplicate">
                    <i class="light-icon-copy" />
                  </div>
                  <div class="popup-pg__row-action-btn" @click.stop="deleteRow(rowIndex)" title="Delete">
                    <i class="light-icon-trash" />
                  </div>
                </div>
              </div>
            </draggable>
          </container>
        </div>
        <template v-if="appConfig.highlight_droparea">
          <div class="padding-guideline --vertical --left" :style="{ left: decodePadding(schema.style.padding).left }"></div>
          <div class="padding-guideline --vertical --right" :style="{ right: decodePadding(schema.style.padding).right }"></div>
          <div class="padding-guideline --horizontal --top" :style="{ top: decodePadding(schema.style.padding).top }"></div>
          <div class="padding-guideline --horizontal --bottom" :style="{ bottom: decodePadding(schema.style.padding).bottom }"></div>
        </template>
      </div>
      <div class="popup-backdrop" :style="popupBackdropStyle"></div>
    </section>
  </div>
</template>

<script>
import './Playground.scss';
import './Preview.scss';
import './elements.scss';
import { Container, Draggable } from '../smooth-dnd/main';
import PlaygroundElements from './elements/Index.vue';
import dragPlaygroundRowsMixin from './mixins/dragPlaygroundRowsMixin';
import popupStyleMixin from './mixins/popupStyleMixin.js';

export default {
  name: 'BuilderPlayground',
  mixins: [dragPlaygroundRowsMixin, popupStyleMixin],
  components: {
    PlaygroundElements,
    Container,
    Draggable,
  },

  data() {
    return {
      hoverRowIndex: '',
      dragging: false,
    };
  },

  computed: {
    activeRowId: {
      get: function () {
        return this.$store.state.builder.activeRowId;
      },
      set: function (newValue) {
        this.$store.dispatch('builder/setActiveRowId', newValue);
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
    appConfig: {
      get: function () {
        return this.$store.state.builder.appConfig;
      },
      set: function (newValue) {
        this.$store.dispatch('builder/setAppConfig', newValue);
      },
    },
  },

  watch: {
    'schema.display_animation': {
      handler(newValue) {
        // hack to prevent smooth dnd in playground.
        setTimeout(() => {
          let popupBodyEl = document.getElementsByClassName('popup-pg__body-wrap');
          if (popupBodyEl) {
            popupBodyEl[0].className = 'popup-pg__body-wrap animate__animated';
          }
        }, 1000);
      },
      immediate: true,
    },
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
  },

  methods: {
    handleKeyDown(ev) {
      const key = ev.which || ev.keyCode; // Detecting keyCode
      // Detecting Ctrl
      const ctrlPressed = ev.ctrlKey ? ev.ctrlKey : key === 17 ? true : false;
      // If key pressed is V and if ctrl is true.
      if (ctrlPressed) {
        switch (key) {
          case 68: // D
            ev.preventDefault();
            if (this.activeRowId) {
              const rowIndex = this.schema.rows.findIndex(row => row.id === this.activeRowId);
              this.duplicateRow(rowIndex);
            }
            break;
        }
      }
    },
    // ------------------------------------------
    selectRow(rowIndex) {
      let activeRow = this.schema.rows[rowIndex];
      if (activeRow) {
        this.activeRowId = activeRow.id;
        this.hoverRowIndex = ''; // to prevent hover state, if any
      }
    },
    selectHoverRow(rowIndex) {
      if (!this.activeRowId && !this.dragging) {
        // to prevent hover, if any-row is active
        this.hoverRowIndex = rowIndex;
      }
    },

    duplicateRow(rowIndex) {
      this.addNewElement(this.schema.rows[rowIndex].elements[0].element_type, rowIndex + 1, 'DuplicateElement');
    },

    deleteRow(rowIndex) {
      this.activeRowId = '';
      this.schema.rows.splice(rowIndex, 1);
    },
    decodePadding(value) {
      const val_array = value ? value.split(' ') : ['0px'];
      const length = val_array.length;
      if (length == 1) {
        const [all] = val_array;
        return { top: all, right: all, bottom: all, left: all };
      } else if (length == 2) {
        const [y, x] = val_array;
        return { top: y, bottom: y, left: x, right: x };
      } else if (length == 3) {
        const [_top, _right, _bottom] = val_array;
        return { top: _top, bottom: _bottom, right: _right, left: 0 };
      } else if (length == 4) {
        const [_top, _right, _bottom, _left] = val_array;
        return { top: _top, bottom: _bottom, right: _right, left: _left };
      }
    },
    unbindEventListeners() {
      window.removeEventListener('keydown', this.handleKeyDown);
    },
  },
  beforeDestroy() {
    this.unbindEventListeners();
  },
};
</script>
