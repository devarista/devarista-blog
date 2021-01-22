<template>
	<div class="flex flex-col space-y-3">
		<h1 class="font-bold text-4xl">
			{{ article.title }}
		</h1>
		<span class="italic">
			Diunggah pada :
			{{ $moment(article.createdAt).format("DD MMMM YYYY") }}
		</span>
		<!-- <img src="@/assets/images/james.jpg" class="object-cover" /> -->
		<p v-html="article.content"></p>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			article: {},
		};
	},
	methods: {
		getArticle() {
			this.$axios
				.get(`/article/detail/${this.$route.params.id}`)
				.then((res) => {
					this.article = res.data;
				})
				.catch((err) => err);
		},
	},
	mounted() {
		this.getArticle();
	},
};
</script>

<style>
</style>