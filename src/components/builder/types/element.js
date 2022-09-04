import { uid } from '@/utils/uid';

export function createNewElement(type, defaults, configs) {
  let newElementDefaults = {
    width: '100%',
    z_index: 1,
    top: '0px',
    left: '0px',
    is_hidden: false,
    custom_id: '',
  };
  let newElement;
  switch (type) {
    case 'ElementInput': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementInput',
        read_only: false,
        label: '',
        placeholder: 'E-mail',
        name: uid(),
        required: false,
      };
      break;
    }

    case 'ElementButton': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementButton',
        read_only: true,
        name: 'Btn',
        button_type: 'normal',
        label: 'Signup Now',
        push: false,
        outlined: false,
        required: false,
        align: 'center',
        background_color: '',
        font_color: '',
        btn_width: '300px',
        btn_margin: '12px',
        hidden: false,
        cta_action_value: '',
      };
      break;
    }

    // case 'ElementRating': {
    //   newElement = {
    //     ...newElementDefaults,
    //     element_type: 'ElementRating',
    //     read_only: false,
    //     name: 'Rating',
    //     required: false,
    //     increment: 1,
    //     showRating: true,
    //     maxRating: 5,
    //     active_color: '	#ffe234',
    //     inactive_color: '#d8d8d8',
    //     star_size: 20,
    //     label: 'Enter a label',
    //   };
    //   break;
    // }
    case 'ElementTextBox': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementTextBox',
        read_only: true,
        text: 'Add new Text Here',
        font_size: '',
        required: false,
      };
      break;
    }

    case 'ElementImage': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementImage',
        read_only: true,
        img_url: 'http://cdn.onlinewebfonts.com/svg/img_530228.png',
        img_alt: '',
        width: '300px',
        height: '300px',
        margin: 0,
        align: 'center',
      };
      break;
    }

    case 'ElementCustomHTML': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementCustomHTML',
        read_only: false,
        markup: 'Custom <b>HTML</b> block',
      };
      break;
    }
  }
  return {
    ...newElementDefaults,
    ...newElement,
    ...defaults,
    id: uid(),
  };
}
