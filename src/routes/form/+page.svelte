<script lang="ts">
	import { Form, TextField, Button } from 'svelte-ux';
	import { onMount } from 'svelte';
	import { z } from 'zod';

	// export let data

	// function handleInputChange() {
	// 	data;
	// }

function handleSubmit() {
  localStorage.setItem('data', JSON.stringify(data));
}


	// function saveDataForm() {
	// 	data
	// }

	// let group: number | undefined = undefined;
	let data = {
		name: 'Sean Lynch'
	};

	onMount(() => {
		const savedData = localStorage.getItem('data');
		if (savedData) {
			data = JSON.parse(savedData);
		}
	});

	// const schema = z.object({
	// 	firstName: z.string().nonempty('First name is required').max(10),
	// 	lastName: z.string().nonempty('Last name is required').max(10)
	// });

	// let schemaData = {
	// 	firstName: '',
	// 	lastName: '',
	// };
</script>

<main class="mx-3 mt-9">
	<Form
		
		on:change={(e) => (data = e.detail)}
		on:submit={handleSubmit}
		let:draft
		let:state
		let:errors
	>
		<div class="grid gap-2">
			<TextField
				label="First Name"
				value={draft.firstName}
				on:change={(e) => {
					draft.firstName = e.detail.value;
				}}
				error={errors.firstName}
			/>
			<TextField
				label="Last Name"
				value={draft.lastName}
				on:change={(e) => {
					draft.lastName = e.detail.value;
				}}
				error={errors.lastName}
				required
			/>
		</div>
		<Button type="submit">Save</Button>
		<Button type="reset">Cancel</Button>
		<div class="mt-2">
		<!-- <div>{JSON.stringify(state)}</div> -->
		</div>
	</Form>
</main>
