<template>
  <div class="accordion_container" :class="{ '--sub-menu': subMenu }">
    <div class="accordion-nav-list__category" :class="{ '--active': activeGroup === label, '--sub-menu': subMenu }" @click.stop="$emit('toggle', label)">
      <div class="accordion-nav-list__category-label">{{ label }}</div>
      <i :class="activeGroup === label ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
    </div>
    <LvCollapsible :show="activeGroup === label" class="category-items">
      <slot></slot>
    </LvCollapsible>
  </div>
</template>

<script>
import LvCollapsible from 'lightvue/collapsible';

export default {
  name: 'properties-group',
  components: {
    LvCollapsible,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    activeGroup: {
      type: String,
    },
    subMenu: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.accordion_container.--sub-menu {
  border: 1px solid #edf2f6;
  border-radius: 6px;
  margin-bottom: 8px;
  &:first-child {
    margin-top: 8px;
  }
  // background-color: #fafafa;
}
.accordion-nav-list__category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-top: 1px solid #edf2f6;
  border-left: 4px solid rgba(0, 0, 0, 0);

  color: #203d4a;
  cursor: pointer;
  font-size: 18px;

  transition: all 0.3s ease-in-out;
  &.--sub-menu {
    border-top: none;
    font-size: 16px;
    padding: 8px;
    font-weight: 300;
    border-radius: 4px;
    background-color: #fafafa;
  }
  &:hover {
    background-color: #edf2f6;
  }
  &.--active {
    background-color: #edf2f6;
    color: #203d4a;
    border-left: 4px solid #cbd5e0;
    // font-weight: 600;
  }

  .accordion-nav-list__category-label {
    display: flex;
    align-items: center;
  }
  i {
    font-size: 20px;
    margin-right: 8px;
    min-width: 20px;
    height: 20px;
  }
}
.category-items {
  padding: 12px;
}
</style>
