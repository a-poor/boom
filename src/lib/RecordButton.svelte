<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let recording = true;

  const dispatch = createEventDispatcher();

  function toggle() {
    recording = !recording;
    dispatch('toggle', { recording });
  }
</script>

<button on:click={toggle} class="w-12 h-12 rounded-full">
  {#if !recording}
    <div class="w-full h-full p-0.5 rounded-full border-[3px] border-neutral-50">
      <div class="w-full h-full bg-rose-600 rounded-full"/>
    </div>
  {:else}
    <div class="w-full h-full p-2 rounded-full border-[3px] border-neutral-50">
      <div class="w-full h-full bg-rose-600 rounded"/>
    </div>
  {/if}
</button>