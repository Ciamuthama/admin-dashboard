<script>
	import { Chart, Svg, Axis, Spline, Highlight, TooltipItem, Text, Tooltip } from 'layerchart';
	import { scaleOrdinal, scaleTime } from 'd3-scale';
	import { flatGroup } from 'd3-array';
	import { formatDate, PeriodType } from 'svelte-ux/utils/date';
	import { format } from 'date-fns';
	import ChartData from '../../data/chart.json';


	

	const multiSeriesFlatData = ChartData;

	const dataByFruit =
		flatGroup(multiSeriesFlatData, (d) => d.fruit)
	

	const fruitColors = {
		apples: 'red',
		bananas: 'yellow',
		oranges: 'oranges',
		
	};
</script>

<main class="w-full h-[320px]">
	<div class="h-[300px] p-4 border rounded">
		<Chart
			data={multiSeriesFlatData}
			x="date"
			xScale={scaleTime()}
			y="value"
			yDomain={[0, null]}
			yNice
			r="fruit"
			rScale={scaleOrdinal()}
			rDomain={Object.keys(fruitColors)}
			rRange={Object.values(fruitColors)}
			padding={{ left: 16, bottom: 24, right: 48 }}
			tooltip={{ mode: 'voronoi' }}
			let:rScale
		>
			<Svg>
				<Axis placement="left" grid rule />
				<Axis placement="bottom" format={(d) => formatDate(d, PeriodType.Day, 'short')} rule />
				{#each dataByFruit as [fruit, data]}
					{@const color = rScale(fruit)}
					<Spline {data} class="stroke-2" stroke={color}>
						<svelte:fragment slot="end">
							<circle r={4} fill={color} />
							<Text
								value={fruit}
								verticalAnchor="middle"
								dx={6}
								dy={-2}
								class="text-xs"
								fill={color}
							/>
						</svelte:fragment>
					</Spline>
				{/each}
				<Highlight points lines />
			</Svg>
			<Tooltip header={(data) => format(data.date, 'eee, MMMM do')} let:data>
				<TooltipItem label={data.fruit} value={data.value} />
			</Tooltip>
		</Chart>
	</div>
</main>
