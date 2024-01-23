<script lang="ts">
    import { Chart, Svg, Axis, Area, Points } from "layerchart"; 


    let data = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 15 },
 
];

let curve = "curveMonotoneX";
let showLine = true;
let tweened = true;
let showPoints = true;

</script>

<main class="h-[320px] w-[1028px]">
    <div class="h-[300px] p-4 border rounded">
    <Chart {data} x="x" y="y" yNice padding={{ left: 16, bottom: 24 }}>
      <Svg>
        <Axis placement="left" grid rule />
        <Axis placement="bottom" rule />
        <Area
          {curve}
          line={showLine && { class: "stroke-accent-500 stroke-2" }}
          {tweened}
          class="fill-accent-500/30"
        />
        {#if showPoints}
          <Points {tweened} />
        {/if}
      </Svg>
    </Chart>
  </div></main>