<script>
	import { Chart, Svg, Axis, Spline, Highlight, TooltipItem, Text } from 'layerchart';
	import { scaleOrdinal, scaleTime } from 'd3-scale';
	import { formatDate, PeriodType } from 'svelte-ux/utils/date';

	const multiSeriesFlatData = [
		{ date: new Date('2022-01-01'), value: 10, fruit: 'apple' },
		{ date: new Date('2022-01-02'), value: 15, fruit: 'banana' }
		// Add more data points as needed
	];

	const dataByFruit = Object.entries(
		multiSeriesFlatData.reduce((acc, row) => {
			if (!acc[row.fruit]) acc[row.fruit] = [];
			acc[row.fruit].push(row);
			return acc;
		}, {})
	);

	const fruitColors = {
		apple: 'red',
		banana: 'yellow'
		// Add more fruit colors as needed
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
					<Spline {...data} class="stroke-2" stroke={color}>
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
			<Tooltip header={(d) => formatDate(d.date, 'eee, MMMM do')} let:data>
				<TooltipItem label={data.fruit} value={data.value} />
			</Tooltip>
		</Chart>
	</div>
</main>
