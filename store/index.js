import { formatSnippetData } from '@/helpers'

export const state = () => ({
  snippets: []
})

export const getters = {
  categories (state) {
    return state.snippets.reduce((acc, i) => {
      if (!acc[i.category]) acc[i.category] = 0
      acc[i.category] += 1
      return acc
    }, {})
  }
}

export const mutations = {
  SET_SNIPPETS (state, snippets) {
    state.snippets = snippets
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
