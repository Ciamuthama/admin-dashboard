<script lang="ts">
	import { Chart, Svg, Pie } from 'layerchart';
	
	let data = [
		{ value: 10, date: '2022-01-01' },
		{ value: 20, date: '2022-01-02' },
		{ value: 15, date: '2022-01-03' }
		// Add more data points as needed
	];

	function scaleOrdinal() {
		return scaleOrdinal().domain(['red', 'green', 'blue']).range(['#FF0000', '#00FF00', '#0000FF']);
	}

	let colorKeys = ['red', 'green', 'blue'];
	let keyColors = ['#FF0000', '#00FF00', '#0000FF'];
</script>

<main class="w-[343px] h-[320px]">
	<h1>Pie Chart</h1>
	<div class="h-[300px] p-4 border rounded">
		<Chart {data} x="value" r="date" rScale={scaleOrdinal()} rDomain={colorKeys} rRange={keyColors}>
			<Svg>
				<Pie innerRadius={100} />
			</Svg>
		</Chart>
	</div>
</main>
