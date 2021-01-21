<template>
	<div>
		<div class="flex flex-col space-y-6">
			<div
				v-for="article in articles"
				:key="article._id"
				class="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 md:items-center"
			>
				<img
					src="@/assets/images/james.jpg"
					class="object-cover w-full md:w-2/6 lg:w-3/6 xl:w-2/6"
				/>
				<div
					class="flex flex-col justify-between space-y-3 md:w-4/6 lg:w-3/6 xl:w-4/6"
				>
					<n-link
						:to="`/artikel/${article.slug}`"
						class="font-bold text-xl underline"
					>
						{{ article.title }}
					</n-link>
					<span class="text-sm"
						>Diunggah pada :
						{{ $moment(article.createdAt).format("DD MMMM YYYY") }}</span
					>
					<span class="text-base">
						{{ article.content.toString().slice(0, 360) }}...
					</span>
					<n-link
						:to="`/artikel/${article.slug}`"
						class="text-base items-center font-medium underline flex space-x-4"
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
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters("search", ["articles"]),
	},
};
</script>

<style>
</style>