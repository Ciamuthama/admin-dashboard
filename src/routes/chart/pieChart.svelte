<script lang="ts">
	import { Chart, Svg, Pie, Tooltip, TooltipItem } from 'layerchart';
	import { scaleOrdinal, scaleTime } from 'd3-scale';
	import { format } from 'svelte-ux';

	
	let data = [
		{ value: 48, date: '2022-01-01', keyColors:"#8664C6", activity:"Tasks"},
		{ value: 24, date: '2022-01-02', keyColors:"#1CA1C1", activity:"Meeting"},
		{ value: 19, date: '2022-01-03',keyColors: "#FDBF4C", activity:"Calls"},
		{ value: 12, date: '2022-01-06',keyColors: "#F8643F", activity:"Mail"}
		];

	
	let colorKeys = ['red', 'green', 'blue'];
	let keyColors = ["#8664C6", "#1CA1C1", "#FDBF4C","#F8643F"];
</script>

<main>
	<h1 class="text-base font-bold text-center">Pie Chart</h1>
	
		<div class="h-[300px]">
			<Chart
			  {data}
			  x="value"
			  r="date"
			  rScale={scaleOrdinal()}
			  rDomain={colorKeys}
			  rRange={keyColors}
			  tooltip={{ mode: "manual" }}
			  let:tooltip
			>
			  <Svg>
				<Pie {tooltip} />
			  </Svg>
			  <Tooltip header={(data) => format(data.date, 'eee, MMMM do')} let:data>
				<TooltipItem
				  label="value"
				  value={data.activity}
				  format="integer"
				  valueAlign="right"
				/>
				 </Tooltip>
			</Chart>
		  </div>
</main>
