import { uid } from '@/utils/uid';

export function createNewElement(type, defaults, configs) {
  let textDefaultStyle = {
    color: '',
    font_size: '',
    font_weight: '',
    line_height: '',
    text_align: '',
  };
  let newElementDefaults = {
    width: '100%',
    z_index: 1,
    top: '0px',
    left: '0px',
    is_hidden: false,
    custom_id: '',
    style: {
      background_color: '',
      padding: '',
      margin: '8px',
      border_radius: '',
      opacity: '',
    },
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
        style: {
          ...newElementDefaults.style,
          ...textDefaultStyle,
          border_radius: '12px',
          background_color: '#ffffff',
          font_size: '18px',
          padding: '12px 16px',
        },
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
        style: {
          ...newElementDefaults.style,
          ...textDefaultStyle,
          background_color: '#000000',
          color: '#ffffff',
          padding: '20px 48px',
          border_radius: '12px',
          font_size: '20px',
          text_align: 'center',
        },
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
        style: {
          ...newElementDefaults.style,
          ...textDefaultStyle,
          color: '#d7d7d7',
        },
      };
      break;
    }

    case 'ElementImage': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementImage',
        read_only: true,
        img_url: 'https://popup-builder.netlify.app/stars_dummy.png',
        img_alt: '',
        width: '300px',
        height: '300px',
        margin: 0,
        align: 'center',
        style: {
          ...newElementDefaults.style,
          margin: '8px auto',
        },
      };
      break;
    }

    case 'ElementCustomHTML': {
      newElement = {
        ...newElementDefaults,
        element_type: 'ElementCustomHTML',
        read_only: false,
        markup: 'Custom <b>HTML</b> block',
        style: {
          ...newElementDefaults.style,
          ...textDefaultStyle,
          color: '#d7d7d7',
        },
      };
      break;
    }
  }
  let defaultGivenStyles = {};
  if (defaults && defaults.style) {
    defaultGivenStyles = defaults.style;
    delete defaults.style;
  }
  return {
    ...newElementDefaults,
    ...newElement,
    ...defaults,
    style: {
      ...newElementDefaults.style,
      ...newElement.style,
      ...defaultGivenStyles,
    },
    id: `el_${uid()}`,
  };
}
