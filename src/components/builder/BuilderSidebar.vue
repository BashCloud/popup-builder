<template>
  <div>
    <div style="margin-top: 12px">ELEMENTS</div>
    <section>
      <Container behaviour="copy" group-name="builder" :get-child-payload="getChildPayload" class="el-list">
        <Draggable class="el-item" :id="element.type" v-for="element in elementsList" :key="element.type">
          <div class="el-item__icon">
            <i :class="element.icon" />
          </div>
          <div class="el-item__name">{{ element.name }}</div>
        </Draggable>
      </Container>
    </section>
  </div>
</template>

<script>
import { Container, Draggable } from '../smooth-dnd/main';
import { elementsList } from './elements/Elements.js';
export default {
  name: 'BuilderSidebar',
  components: {
    Container,
    Draggable,
  },
  data() {
    return {
      elementsList: elementsList,
    };
  },
  computed: {
    schema() {
      return this.$store.state.builder.schema;
    },
  },
  methods: {
    getChildPayload(index) {
      return this.elementsList[index];
    },
  },
};
</script>

<style lang="scss">
.el-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 6px 16px;
}
.el-item {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
  color: black;
  border-radius: 4px;
  font-size: 12px;
  width: 100%;
  height: 84px;
  width: 84px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px;
  cursor: pointer;
  opacity: 1;
  // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, color 0.3s, transform 0.3s, opacity 0.3s;
  /* will-change: transform, box-shadow; */
  &.--disabled {
    pointer-events: none !important;
    opacity: 0.5;
  }
}

.el-item__icon i {
  font-size: 28px;
}

.el-list:not(.--dragging) .el-item:hover {
  background-color: #607c8a;
  color: #ffffff;
  /* color: teal;
    background: #f2f5f6; */
  /* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05); */
}

.el-item__name {
  text-align: center;
  /* margin-top: 8px; */
}
</style>
