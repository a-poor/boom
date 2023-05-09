<script lang="ts">
  import Toggle from "./lib/Toggle.svelte";
  import RecordButton from "./lib/RecordButton.svelte";



</script>

<main>
  <!-- Header -->
  <h1 class="text-center font-mono text-2xl tracking-wide font-semibold uppercase bg-stone-200 mb-2">
    Boom
  </h1>
  
  <!-- All Toggle Sections -->
  <div class="flex flex-col space-y-1 w-[400px] mx-auto">

    <!-- Webcam Section -->
    <!-- Toggle & Name -->
    <div class="flex flex-row space-x-2 mx-2">
      <Toggle onToggle={({active}) => { console.log(`active=${active}`) }}/>
      <h2>Camera</h2>
    </div>
    <!-- Video Preview -->
    <div class="mx-2">
      <div class="w-[400px] h-[225px] my-2 bg-neutral-900 block"></div>
    </div>
    
    <!-- Screen Section -->
    <!-- Toggle & Name -->
    <div class="flex flex-row space-x-2 mx-2">
      <Toggle onToggle={({active}) => { console.log(`active=${active}`) }}/>
      <h2>Screen</h2>
    </div>
    <!-- Video Preview -->
    <div class="mx-2">
      <div class="w-[400px] h-[225px] my-2 bg-neutral-900 block"></div>
    </div>

    <!-- Screen Section -->
    <!-- Toggle & Name -->
    <div class="flex flex-row space-x-2 mx-2">
      <Toggle onToggle={({active}) => { console.log(`active=${active}`) }}/>
      <h2>Microphone</h2>
    </div>
    <!-- Audio Preview -->
    <div class="mx-2">
      <div class="w-[400px] h-[100px] my-2 bg-neutral-900 block"></div>
    </div>
  </div>

  <!-- Record Button -->
  <div class="w-fit mx-auto py-2">
    <RecordButton />
  </div>

</main>

<style>
</style>
