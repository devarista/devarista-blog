export const state = () => ({
  categories: []
})

export const getters = {
  categories: state => state.categories
}

export const actions = {
  async fetchCategories({
    commit
  }) {
    try {
      const res = await this.$axios.get('/category')

      commit("SET_CATEGORIES", res.data)
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  SET_CATEGORIES: (state, categories) => state.categories = categories
}
