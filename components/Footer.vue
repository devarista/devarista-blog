<template>
	<div
		class="flex flex-col space-y-1 py-8 border-t border-gray-300 dark:border-gray-900"
	>
		<div
			class="mx-4 lg:px-36 md:container md:mx-auto flex flex-col space-y-4 lg:flex-row-reverse lg:justify-between items-center lg:space-y-0 lg:space-x-4"
		>
			<div class="flex space-x-4 w-full items-center md:w-1/2 justify-end">
				<img
					src="@/assets/images/arza.jpg"
					class="w-28 xl:w-36 object-cover rounded-full"
				/>
				<div class="flex flex-col items-end space-y-3">
					<span>Author : Arza Aldi Kusuma</span>
					<span
						>Github :
						<a
							href="https://github.com/devarista"
							target="_blank"
							class="underline"
							rel="noopener noreferrer"
							>Devarista</a
						>
					</span>
					<span
						>Instagram :
						<a
							href="https://instagram.com/arza.ak"
							target="_blank"
							class="underline"
							rel="noopener noreferrer"
							>@arza.ak</a
						></span
					>
				</div>
			</div>
			<div
				class="w-full flex flex-col space-y-4 items-start text-3xl font-bold md:w-1/2"
			>
				<span>"Do Anything, Get Everything"</span>
				<span class="text-base">Devarista, 2021</span>
			</div>
		</div>
		<div class="mx-4 md:container md:mx-auto flex justify-center py-4">
			<span> Copyright &copy; Devarista {{ year }} </span>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		year() {
			const date = new Date();
			return date.getFullYear();
		},
	},
};
</script>

<style>
</style>