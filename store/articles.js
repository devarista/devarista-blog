export const state = () => ({
  articles: [],
  latestArticle: {},
  article: {}
})

export const getters = {
  articles: state => state.articles,
  latestArticle: state => state.latestArticle,
  article: state => state.article
}

export const actions = {
  async fetchArticles({
    commit
  }) {
    try {
      const res = await this.$axios.get('/article')

      commit('SET_ARTICLES', res.data)
    } catch (error) {
      return error
    }
  },

  async fetchLatestArticle({
    commit
  }) {
    try {
      const res = await this.$axios.get('/article/latest')

      commit('SET_LATEST_ARTICLE', res.data)
    } catch (error) {
      return error
    }
  },

  async getArticle({
    commit
  }, data) {
    try {
      const res = await this.$axios.get(`/article/detail/${data}`)

      commit('SET_ARTICLE', res.data)
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  SET_ARTICLES: (state, articles) => state.articles = articles,
  SET_LATEST_ARTICLE: (state, latestArticle) => state.latestArticle = latestArticle,
  SET_ARTICLE: (state, article) => state.article = article,
}
