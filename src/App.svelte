<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import { festivals } from "./fest";

  var now = new Date()
  function isBefore(date) {
    return new Date(date.toDateString()) < new Date(new Date().toDateString());
  }
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
        
          {#if isBefore(new Date(now.getFullYear(), festivals[0].month, festivals[0].date))}
            <h2 class="my-2 inline line-through"> {festivals[0].name}.</h2>
          {:else}
            <h2 class="my-2 inline">{festivals[0].name}.</h2>
          {/if}
      </div>
      
      {#each festivals as festival, i}
        {#if isBefore(new Date(now.getFullYear(), festivals[i].month, festivals[i].date)) && i != 0}
          <h2 class="my-2 ml-20 line-through non-crossed">{festival.name}</h2>
        {:else if i != 0 && isBefore(new Date(now.getFullYear(), festivals[i-1].month, festivals[i-1].date))}
          <h2 class="my-2 ml-20 crossed">{festival.name}</h2>
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
