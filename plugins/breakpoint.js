export default ({ store }) => {
  window.onNuxtReady(() => {
    store.commit('SET_WIDTH', window.innerWidth)
    window.addEventListener(
      'resize',
      () => store.commit('SET_WIDTH', window.innerWidth),
      { passive: true }
    )
  })
}
