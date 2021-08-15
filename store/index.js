export const state = () => ({
  drawer: true,
  fixed: false,
  rightDrawer: false,
  clipped: false,
  miniVariant: false,
})

export const modules = {
};

export const mutations = {
  SET_DRAWER(state, val) {
    console.log('SETTING DRAWER TO', val)
    state.drawer = val
  },
  SET_FIXED(state, val) {
    console.log('SETTING FIXED TO', val)
    state.fixed = val
  },
  SET_RIGHT_DRAWER(state, val) {
    console.log('SETTING RIGHT DRAWER TO', val)
    state.rightDrawer = val
  },
  SET_CLIPPED(state, val) {
    console.log('SETTING CLIPPED TO', val)
    state.clipped = val
  },
  SET_MINI_VARIANT(state, val) {
    console.log('SETTING MINI VARIANT TO', val)
    state.miniVariant = val
  },
}

export const getters = {
}