<h1>The MDSv example</h1>
<p>You can use components and a logic inside doc:</p>
<Block color="red"><p>My <code>data</code> list:
{#each data as item}
<p>{item}</p>
{/each}</p>
</Block>


<script context="module">
export const META = {};
import Block from './Block.svelte';
import { data } from './my_data.js';
</script>