<template>
  <div @click="activeRowId = ''">
    <!----------------------------------------------PLAYGROUND------------------------------------------------------------>
    <section class="popup-pg" v-if="schema">
      <div class="popup-pg__body-wrap">
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
      </div>
    </section>
  </div>
</template>

<script>
import './Playground.scss';
import { Container, Draggable } from '../smooth-dnd/main';
import PlaygroundElements from './elements/Index.vue';
import dragPlaygroundRowsMixin from './mixins/dragPlaygroundRowsMixin';
export default {
  name: 'BuilderPlayground',
  mixins: [dragPlaygroundRowsMixin],
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
      return this.schema.rows.splice(rowIndex, 1);
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
