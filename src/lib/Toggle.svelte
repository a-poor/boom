<script lang="ts">
  export let onToggle: ({ active }: { active: boolean }) => void | undefined = undefined;

  let active = false;
  
  const activeToggleClasses = "justify-end bg-fuchsia-600";
  const inactiveToggleClasses = "justify-start bg-neutral-300";
  $: stateClasses = active ? activeToggleClasses : inactiveToggleClasses;

  function toggle() {
    // Update state...
    active = !active;
    
    // Invoke callback...
    if (onToggle) { 
      onToggle({ active });
    }
  }
</script>

<div 
  on:click={toggle}
  on:keypress={toggle}

  class="
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
    
    transition
    duration-300
    ease-in-out

    {stateClasses}
  "
>
  <div class="w-5 h-5 bg-white rounded-full shadow-md">
  </div>
</div>

<style>
</style>
