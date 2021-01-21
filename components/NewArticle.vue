<template>
	<div class="flex flex-col space-y-3">
		<div class="w-full overflow-hidden">
			<img src="@/assets/images/hitesh.jpg" class="" />
		</div>
		<div class="flex flex-col space-y-2">
			<n-link
				:to="`/artikel/${latestArticle.slug}`"
				class="font-bold text-3xl underline"
			>
				{{ latestArticle.title }}
			</n-link>
			<span class="text-sm"
				>Diunggah pada :
				{{ $moment(latestArticle.createdAt).format("DD MMMM YYYY") }}</span
			>
			<div class="text-base">
				{{ latestArticle.content }}
			</div>
			<n-link
				:to="`/artikel/${latestArticle.slug}`"
				class="text-base items-center font-medium underline flex space-x-10"
			>
				<span>Baca selengkapnya</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					class="w-4"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</n-link>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters("articles", ["latestArticle"]),
	},
	methods: {
		...mapActions("articles", ["fetchLatestArticle"]),
	},
	mounted() {
		this.fetchLatestArticle();
	},
};
</script>

<style>
</style>