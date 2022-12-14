import { uid } from '@/utils/uid';
import { createNewRowWithElement } from '@/components/builder/types';

const defaultSchema = {
  id: `pop_${uid()}`,
  display_delay: '5000ms',
  display_animation: 'pulse',
  style: {
    margin: '32px auto', // te be handle differently
    border_radius: '50%',
    height: '600px',
    width: '600px',
    padding: '100px',
    background_color: '#b95555',
    backdrop: {
      background_color: '#000000',
      opacity: '50%',
      blur: '5px',
    },
  },
  rows: [
    createNewRowWithElement('ElementImage', {
      style: {
        opacity: '30%',
      },
    }),
    createNewRowWithElement('ElementTextBox', {
      text: 'All the text and elements in this popup should be editable and draggable',
      style: {
        font_size: '32px',
        color: '#ffffff',
      },
    }),
    createNewRowWithElement('ElementInput'),
    createNewRowWithElement('ElementButton', {
      label: 'Signup Now',
    }),
    createNewRowWithElement('ElementTextBox', {
      text: 'No credit card required. No Surprises',
      style: {
        font_size: '16px',
        color: '#ffffff',
      },
    }),
  ],
  _start_time: new Date(),
  _meta: {
    user_agent: window.navigator.userAgent,
  },
};

export { defaultSchema };
