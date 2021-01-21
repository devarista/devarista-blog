export const state = () => ({
  articles: []
})

export const getters = {
  articles: state => state.articles
}

export const actions = {
  async searchArticles({
    commit
  }, data) {
    try {
      const res = await this.$axios.get(`/article/${data}`)
      commit("SET_ARTICLES", res.data)
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  SET_ARTICLES: (state, articles) => state.articles = articles
}
