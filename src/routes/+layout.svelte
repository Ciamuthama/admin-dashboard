<script>
	import Header from './Header.svelte';
	import MdiAlarmOff from '~icons/mdi/settings'
	import './styles.css';
	import Setting from '~icons/mdi/folder-settings-outline'
	import {Button} from 'svelte-ux'
</script>

<div class="app">
	<Header />

	<Button>
		hello
	</Button>
	<slot />

	<footer>
		<Setting />
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		<MdiAlarmOff />
	</footer>
</div>

<style lang="postcss">
	
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
