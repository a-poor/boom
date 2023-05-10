<script lang="ts">
  export let active = false;
  export let locked = false;
  
  function toggle() {
    if (!locked) {
      active = !active;
    }
  }
</script>


{#if active && !locked}
  <button on:click={toggle} class="base-toggle-classes active-and-unlocked">
    <div class="w-5 h-5 bg-white rounded-full shadow-md shadow-neutral-900/50"></div>
  </button>
{/if}

{#if active && locked}
  <button on:click={toggle} class="base-toggle-classes active-and-locked">
    <div class="w-5 h-5 bg-neutral-200/75 rounded-full shadow-md shadow-neutral-900/25"></div>
  </button>
{/if}

{#if !active && !locked}
  <button on:click={toggle} class="base-toggle-classes inactive-and-unlocked">
    <div class="w-5 h-5 bg-white rounded-full shadow-md shadow-neutral-900/50"></div>
  </button>
{/if}

{#if !active && locked}
<button on:click={toggle} class="base-toggle-classes inactive-and-locked">
  <div class="w-5 h-5 bg-neutral-200/75 rounded-full shadow-md shadow-neutral-900/25"></div>
</button>
{/if}

<style lang="postcss">
  .base-toggle-classes {
    @apply 
      w-12 
      h-7 
      rounded-full 
      bg-neutral-300
      px-1 
      flex 
      cursor-pointer
      pointer-events-auto
      items-center
      shadow-inner
      shadow-neutral-800/25

      transition
      duration-300
      ease-in-out
    ;
  }
  .active-and-unlocked {
    @apply justify-end bg-rose-500;
  }
  .active-and-locked {
    @apply justify-end bg-rose-700;
  }
  .inactive-and-unlocked {
    @apply justify-start bg-neutral-300;
  }
  .inactive-and-locked {
    @apply justify-start bg-neutral-500;
  }
</style>
