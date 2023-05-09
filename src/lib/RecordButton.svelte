<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  let recording = true;
  const dispatch = createEventDispatcher();

  function toggle() {
    recording = !recording;
    dispatch('toggle', { recording });
  }
</script>

<button on:click={toggle} class="w-10 h-10 bg-rose-600 rounded-full">
  <!-- A -->
  {#if recording}
    <svg 
      class="fill-none mx-1 my-1 stroke-2 stroke-rose-200" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    </svg>
    {:else}
    <svg 
      class="fill-none mx-1 my-1 stroke-2 stroke-rose-200" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 5m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
    </svg>
  {/if}
</button>