<script lang="ts">
import PointChart from './pointChart.svelte'
import PieChart from './pieChart.svelte'
import LineChart from './lineChart.svelte'
</script>

<main>
	<div class="mb-5">
		<PieChart/>
	</div>
	<div class="mb-5">
		<PointChart/>
	</div>
	<div class="mb-3">
		<LineChart/>
	</div>
	
</main>