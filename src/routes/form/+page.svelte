<script>
	import {
		Input,
		SelectField,
		DatePickerField,
		Radio,
		TextField,
		autoFocus,
		autoHeight,
		blurOnEscape,
		selectOnFocus,
		debounceEvent
	} from 'svelte-ux';
	import mdiCalendar from 'virtual:icons//mdi/calender';
	
  import { onMount } from 'svelte';

  let data = {
    firstName: '',
    lastName: '',
    address: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    comment: '',
    agree: 1
  };

  onMount(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      data = JSON.parse(savedData);
    }
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    data[name] = value;
  }

  function saveData() {
    localStorage.setItem('formData', JSON.stringify(data));
  }

  async function sendData() {
  try {
    const response = await fetch('https://fake-database-endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Data sent successfully');
    } else {
      console.error('Failed to send data');
    }
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

function saveDataForm() {
  sendData();
}
</script>


<main>
	<form on:change={saveDataForm} method="post">
	<div>
		<SelectField {options} on:change={(e) => console.log('on:change', e.detail)} />
		<SelectField {options} on:change={(e) => console.log('on:change', e.detail)} />
		<DatePickerField label="Date of Birth" icon={mdiCalendar} />
		<Radio name="label" bind:group value={1}>Agree</Radio>
		<Radio name="label" bind:group value={2}>Disagree</Radio>
		<TextField label="Comment" multiline />
	</div>
	<div>
		<div class="grid grid-flow-col gap-2">
			<main>
				<div>
					<TextField type="text" placeholder="First Name" bind:value={data.firstName} on:input={handleInputChange} />
					<TextField type="text" placeholder="Last Name" bind:value={data.lastName} on:input={handleInputChange} />
					<TextField type="text" placeholder="Address" bind:value={data.address} on:input={handleInputChange} />
					<DatePickerField label="Date of Birth" icon={mdiCalendar} bind:value={data.dateOfBirth} on:change={handleInputChange} />
					<SelectField {options} on:change={handleInputChange} />
					<TextField type="email" placeholder="Email Address" bind:value={data.email} on:input={handleInputChange} />
					<TextField type="integer" placeholder="Phone" bind:value={data.phone} on:input={handleInputChange} />
					<Radio name="label" bind:group={data.agree} value={1} on:change={handleInputChange}>Agree</Radio>
					<Radio name="label" bind:group={data.agree} value={2} on:change={handleInputChange}>Disagree</Radio>
      <TextField label="Comment" multiline bind:value={data.comment} on:input={handleInputChange} />
    </div>
    <div>
      
    </div>
    <button on:click={saveData}>Save</button>
  		</div>
	</div>
	</form>
</main>
