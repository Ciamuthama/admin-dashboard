<script>
	import Header from './Header.svelte';
	import SideBar from './sidebar.svelte';
	import MdiAlarmOff from '~icons/mdi/account'
	import './styles.css';
	</script>

<div>
	<Header />

	<div class="flex  h-screen">
		<div>
			<SideBar/>
		</div>
		<div>
			<slot />
		</div>
	</div>

	
</div>
