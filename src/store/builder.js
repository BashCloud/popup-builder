import { defaultSchema } from './defaultSchema';

const state = {
  schema: defaultSchema,
  activeRowId: '',
  appConfig: {
    highlight_droparea: true,
    preview_device: 'desktop',
  },
};
// --------------------------------------------------

const mutations = {
  setSchema: (state, schema) => {
    state.schema = schema;
  },

  setActiveRowId: (state, activeRowId) => {
    state.activeRowId = activeRowId;
  },
  setAppConfig: (state, appConfig) => {
    state.appConfig = { ...state.appConfig, ...appConfig };
  },
  refreshPage: state => {
    let current_animation = state.schema.display_animation;
    state.schema = { ...state.schema, display_animation: '' };
    setTimeout(() => {
      state.schema = { ...state.schema, current_animation };
    }, 300);
  },
};

// -----------------------------------------------------
const actions = {
  setSchema: ({ commit }, schema) => {
    commit('setSchema', schema);
  },

  setActiveRowId: ({ commit }, activeRowId) => {
    commit('setActiveRowId', activeRowId);
  },
  setAppConfig: ({ commit }, appConfig) => {
    commit('setAppConfig', appConfig);
  },
  refreshPage: ({ commit }) => {
    commit('refreshPage');
  },
};

// -------------------------------------------------------

const getters = {
  getSchema: state => {
    state.schema;
  },
};

const builder = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
export default builder;
