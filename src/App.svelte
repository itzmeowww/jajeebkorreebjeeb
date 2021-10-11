<script>
  import Tailwindcss from "./Tailwindcss.svelte";

  const festivals = ["วาเลนไทน์", "มาฆบูชา", "สงกรานต์", "ปีใหม่"]
</script>

<Tailwindcss />
<main>
  <div
    class="w-screen min-h-screen max-w-full flex flex-col justify-center items-center my-container"
  >
    <div class="text-2xl text-center">
      <h2 class="my-2">จะจีบก็รีบจีบ</h2>

      <div>
        <h2 class="my-2 inline">เดี๋ยวไม่ทัน</h2>
        <h2 class="my-2 inline line-through"> {festivals[0]}.</h2>
      </div>
      
      {#each festivals as festival, i}
        {#if i != festivals.length - 1 && i != 0}
          <h2 class="my-2 ml-20 line-through">{festival}</h2>
        {:else if i != 0}
          <h2 class="my-2 ml-20">{festival}</h2>
        {/if}
      {/each}
    </div>
    <a
      class="text-lg mt-36 no-underline"
      href="https://twitter.com/SkyandSunn/status/1447135525614219264?s=20"
      >ที่มา</a
    >
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Sarabun&display=swap");
  * {
    font-family: "Sarabun", sans-serif;
  }
</style>
