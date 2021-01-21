<template>
	<div class="flex flex-col space-y-4">
		<h1 class="text-3xl font-bold">Kategori Pembelajaran</h1>
		<hr />
		<div
			class="grid grid-flow-row grid-cols-2 grid-rows-2 md:grid-rows-2 md:grid-cols-4 gap-4"
		>
			<div v-for="category in categories" :key="category._id">
				<n-link :to="`/kategori/${category.slug}`" class="">
					<div
						class="p-5 bg-gray-800 dark:bg-gray-100 flex justify-center items-center max-w-xs min-w-max h-32"
					>
						<span class="text-2xl font-bold text-gray-100 dark:text-gray-800">{{
							category.name
						}}</span>
					</div>
				</n-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters("category", ["categories"]),
	},
	methods: {
		...mapActions("category", ["fetchCategories"]),
	},
	mounted() {
		this.fetchCategories();
	},
};
</script>

<style>
</style>