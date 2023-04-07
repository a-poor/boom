<script lang="ts">
  enum RecordType {
    ScreenAndCam = "screen-and-cam",
    ScreenOnly = "screen-only",
    CamOnly = "cam-only",
  }
  const commonRecordTabClasses = "flex flex-col items-center justify-center w-full h-16 border border-neutral-300 text-sm";
  const activeRecordTab = commonRecordTabClasses + " bg-neutral-50 text-blue-500";
  const inactiveRecordTab = commonRecordTabClasses + " bg-neutral-200 text-neutral-700";
  
  let recordType: RecordType = RecordType.ScreenAndCam;
</script>

<main class="bg-neutral-50"> 
  <div class="flex mx-2 my-2">
    <div class="text-xl font-medium">
      Boom
    </div>
    <div class="flex-grow"/>
    <div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>      
      </button>
    </div>
  </div>

  <div class="grid grid-cols-3 grid-rows-1">
    <button 
      class={recordType === RecordType.ScreenAndCam ? activeRecordTab : inactiveRecordTab}
      on:click={() => recordType = RecordType.ScreenAndCam}
    >
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg> 
      </div>
      <div>
        Screen and Camera
      </div>
    </button>
    <button 
      class={recordType === RecordType.ScreenOnly ? activeRecordTab : inactiveRecordTab}
      on:click={() => recordType = RecordType.ScreenOnly}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
        </svg>        
      </div>
      <div>
        Screen Only
      </div>
    </button>
    <button 
      class={recordType === RecordType.CamOnly ? activeRecordTab : inactiveRecordTab}
      on:click={() => recordType = RecordType.CamOnly}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>        
      </div>
      <div>
        Camera Only
      </div>
    </button>
  </div>

</main>


<style>  
</style>