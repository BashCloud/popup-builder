import { uid } from '@/utils/uid';
import { createNewElement } from './element';

export function createNewRow(defaults, configs) {
  let newRowDefaults = {
    config: '',
    type: '',
    visibility: true,
    elements: [],
  };
  return {
    ...newRowDefaults,
    ...defaults,
    id: 'row_' + uid(),
  };
}

export function createNewRowWithElement(elementType, elementDefaults) {
  return createNewRow({
    elements: [createNewElement(elementType, elementDefaults)],
  });
}
