import { createNewElement, createNewRow } from '../types/index.js';
import { uid } from '@/utils/uid';
import deepClone from '@/utils/deepClone.js';

export default {
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    dndDragStart(e) {
      this.dragging = true;
    },
    dndDragEnd(e) {
      this.dragging = false;
    },
    dndDrop(e) {
      console.log(this.schema);
      this.dragging = false;
      if (e.payload && !e.removedIndex) {
        this.addNewElement(e.payload.type, e.addedIndex); // when we drag new element in playground
      } else {
        this.moveRow(e.removedIndex, e.addedIndex);
      }
    },
    addNewElement(type, i, method) {
      if (method === 'DuplicateElement') {
        const elementData = this.schema.rows[i - 1].elements[0];
        const newElObj = { ...deepClone(elementData), id: uid() };
        this.addRow(newElObj, i);
      } else {
        this.addRow(createNewElement(type), i);
      }
    },
    moveRow(fromIndex, toIndex) {
      console.log(`Moving row from ${fromIndex} to ${toIndex}`);

      let removedRow = this.schema.rows[fromIndex];
      // Deleting fromIndex
      this.schema.rows.splice(fromIndex, 1);
      // Adding toIndex
      this.schema.rows.splice(toIndex, 0, removedRow);
    },
    addRow(newElObj, toIndex) {
      let newRow = createNewRow({
        elements: [newElObj],
      });
      this.schema.rows.splice(toIndex, 0, newRow);
    },
  },
};
