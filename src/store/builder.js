import { defaultSchema } from './defaultSchema';

const state = {
  schema: defaultSchema,
  activeRowId: '',
};
// --------------------------------------------------

const mutations = {
  setSchema: (state, schema) => {
    state.schema = schema;
  },

  setActiveRowId: (state, activeRowId) => {
    state.activeRowId = activeRowId;
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
