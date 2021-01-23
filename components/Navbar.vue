<template>
	<div class="border border-b border-gray-200 dark:border-gray-900 mb-6">
		<div class="mx-4 md:container md:mx-auto py-4">
			<div class="flex justify-between items-center">
				<div class="flex space-x-9 items-center">
					<n-link to="/" class="text-xl md:text-2xl font-medium"
						>Devarista</n-link
					>
					<div class="text-md hidden lg:flex space-x-4 items-center">
						<n-link to="/">Home</n-link>
						<n-link to="/alur-belajar">Alur Belajar</n-link>
						<n-link to="/kategori">Kategori</n-link>
						<n-link to="/tentang">Tentang</n-link>
					</div>
				</div>
				<div class="flex space-x-4">
					<div
						class="w-auto rounded-md bg-gray-200 dark:bg-gray-900 flex items-center space-x-2 py-1 px-4"
					>
						<input
							type="text"
							v-model="search"
							@keypress.enter="searchArticle"
							placeholder="Belajar vue..."
							class="text-sm md:text-base rounded-md w-20 bg-transparent dark:bg-transparent focus:outline-none border-none focus:border-0 py-0 px-0 ring-0 focus:ring-0"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							class="w-4 md:w-5 text-gray-400"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
					<button class="focus:outline-none" @click="toggleDarkMode">
						<svg
							v-if="!isDark"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-5 md:w-6 text-gray-700"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-5 md:w-6 text-gray-300"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</button>
					<button
						class="focus:outline-none lg:hidden"
						@click="isMenuOpen = true"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							class="w-5 md:w-6 text-gray-700 dark:text-gray-200"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- // ! Mobile Menu -->

		<div class="fixed inset-0 overflow-hidden" v-if="isMenuOpen">
			<div class="absolute inset-0 overflow-hidden">
				<div
					class="absolute inset-0 bg-gray-700 dark:bg-white bg-opacity-75 transition-opacity"
					aria-hidden="true"
				></div>
				<section
					class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
					aria-labelledby="slide-over-heading"
				>
					<div class="relative w-screen max-w-md">
						<div
							class="h-full flex flex-col py-4 bg-white dark:bg-gray-800 shadow-xl overflow-y-hidden"
						>
							<div class="px-4 sm:px-6 flex justify-between items-center">
								<h2 id="slide-over-heading" class="text-2xl font-medium">
									Devarista
								</h2>
								<button
									@click="isMenuOpen = false"
									class="rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
								>
									<span class="sr-only">Close panel</span>
									<!-- Heroicon name: x -->
									<svg
										class="h-6 w-6 text-gray-800 dark:text-gray-100"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div class="mt-6 relative flex-1 px-4 sm:px-6">
								<!-- Replace with your content -->
								<div class="text-md flex flex-col space-y-3">
									<n-link to="/">Home</n-link>
									<n-link to="/alur-belajar">Alur Belajar</n-link>
									<n-link to="/kategori"> Kategori </n-link>
									<n-link to="/tentang">Tentang</n-link>
								</div>
								<!-- /End replace -->
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			isDark: false,
			isMenuOpen: false,
			search: null,
		};
	},
	methods: {
		...mapActions("search", ["searchArticles"]),
		toggleDarkMode() {
			let htmlClasses = document.querySelector("html").classList;

			if (localStorage.theme === "dark") {
				htmlClasses.remove("dark");
				localStorage.removeItem("theme");
				this.isDark = false;
			} else {
				this.isDark = true;
				htmlClasses.add("dark");
				localStorage.theme = "dark";
			}
		},

		searchArticle() {
			this.searchArticles(this.search);
			this.search = "";
			this.$router.push("/search");
		},
	},
	mounted() {
		// / On page load or when changing themes, best to add inline in `head` to avoid FOUC
	},
};
</script>

<style>
</style>