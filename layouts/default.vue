<template>
	<div class="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200">
		<LazyNavbar />
		<div class="mx-4 md:container md:mx-auto lg:px-36 pb-8">
			<Nuxt />
		</div>
		<LazyFooter />
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
	font-family: "Inter";
}
</style>
