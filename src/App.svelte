<script lang="ts">
  import Toggle from "./lib/Toggle.svelte";
  import RecordButton from "./lib/RecordButton.svelte";
  
  let recordCamera = true;
  let recordScreen = true;
  let recordAudio = false;
  let isRecording = false;
</script>

<!-- Header -->
<nav class="absolute left-0 right-0 top-0">
  <h1 class="text-center font-mono text-2xl tracking-wide font-semibold uppercase bg-neutral-200 text-neutral-600 mb-4 px-4">
    Boom
  </h1>
</nav>

<main>  
  <div class="w-full h-12"/>

  <!-- All Toggle Sections -->
  <div class="flex flex-col space-y-3 w-[400px] mx-auto">

    <!-- Webcam Section -->
    <!-- Toggle & Name -->
    <div class="flex flex-row space-x-2 px-2">
      <Toggle bind:active={recordCamera} bind:locked={isRecording} />
      <h2 class="font-semibold text-neutral-100">Camera</h2>
    </div>

    <!-- Video Preview -->
    <div class="w-[400px] h-[225px] bg-neutral-900 block"></div>
    <div class="w-full h-2"/>
    
    <!-- Screen Section -->
    <!-- Toggle & Name -->
    <div class="flex flex-row space-x-2 mx-2">
      <Toggle bind:active={recordScreen} bind:locked={isRecording} />
      <h2 class="font-semibold text-neutral-100">Screen</h2>
    </div>

    <!-- Video Preview -->
    <div class="w-[400px] h-[225px] bg-neutral-900 block"></div>
    <div class="w-full h-2"/>

    <!-- Screen Section -->
    <!-- Toggle & Name -->
    <div class="flex flex-row space-x-2 mx-2">
      <Toggle bind:active={recordAudio} bind:locked={isRecording} />
      <h2 class="font-semibold text-neutral-100">Microphone</h2>
    </div>

    <!-- Audio Preview -->
    <div class="w-[400px] h-[100px] bg-neutral-900 block"></div>
    <div class="w-full h-2"/>
  </div>

  <!-- Record Button -->
  <div class="w-fit mx-auto py-2">
    <RecordButton bind:recording={isRecording}/>
  </div>
</main>

{#if isRecording}
  <div class="absolute top-0 left-0 right-0 bottom-0 border-2 border-rose-600 fill-transparent pointer-events-none"/>
{/if}
