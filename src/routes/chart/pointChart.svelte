<script lang="ts">
	import { Chart, Svg, Axis, Area, Points } from 'layerchart';

	let data =
		[
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0.1
			},
			{
				x: 3,
				y: 0.2
			},
			{
				x: 4,
				y: 0.3
			},
			{
				x: 5,
				y: 0.4
			},
			{
				x: 6,
				y: 0.5
			},
			{
				x: 7,
				y: 0.6
			},
			{
				x: 8,
				y: 0.7
			},
			{
				x: 9,
				y: 0.8
			},
			{
				x: 10,
				y: 0.9
			}
		]

  let curve: undefined = undefined
	let showLine = true;
	let tweened = true;
	let showPoints = true;
</script>

<main class="h-[320px] w-[700px]">
	<div class="h-[300px] p-4 border rounded">
		<Chart {data} x="x" y="y" yNice padding={{ left: 16, bottom: 24 }}>
			<Svg>
				<Axis placement="left" grid rule />
				<Axis placement="bottom" rule />
				<Area
					{curve}
					line={showLine && { class: 'stroke-accent-500 stroke-2' }}
					{tweened}
					class="fill-accent-500/30"
				/>
				{#if showPoints}
					<Points {tweened} />
				{/if}
			</Svg>
		</Chart>
	</div>
</main>
