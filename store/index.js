import { formatSnippetData } from '@/helpers'

export const state = () => ({
  snippets: [],
  width: null
})

export const getters = {
  categories (state) {
    const unordered = state.snippets.reduce((acc, i) => {
      if (!acc[i.category]) acc[i.category] = 0
      acc[i.category] += 1
      return acc
    }, {})
    return Object.keys(unordered)
      .sort()
      .reduce((acc, i) => {
        acc[i] = unordered[i]
        return acc
      }, {})
  }
}

export const mutations = {
  SET_SNIPPETS (state, snippets) {
    state.snippets = snippets
  },
  SET_WIDTH (state, width) {
    state.width = width
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getSnippets')
  },

  async getSnippets ({ commit }) {
    const data = await this.$content({ deep: true, text: true }).fetch()
    const snippets = data.map((i) => formatSnippetData(i))
    snippets.sort((a, b) => (a.date < b.date ? 1 : -1))
    commit('SET_SNIPPETS', snippets)
  }
}
