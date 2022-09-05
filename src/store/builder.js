import { defaultSchema } from './defaultSchema';

const state = {
  schema: defaultSchema,
  activeRowId: '',
  appConfig: {
    highlight_droparea: true,
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
    state.appConfig = appConfig;
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
