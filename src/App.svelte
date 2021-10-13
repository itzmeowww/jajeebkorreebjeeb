<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import { sortedfestivals } from "./fest";

  var now = new Date();
  function createDate(date, month){
    var offset = (date == 1 && month == 1)
    return new Date(now.getFullYear() + offset, month - 1, date)
  }

  function isBefore(date, month) {
    var day = createDate(date, month);
    return new Date(day.toDateString()) < new Date(new Date().toDateString());
  }
  
  function getCurrent(){
    var len = sortedfestivals.length;
    for(var i=0; i<len; ++i){
      var date = sortedfestivals[i].date;
      var month = sortedfestivals[i].month;
      if(!isBefore(date, month)){
        return sortedfestivals[i].name;
      }
    }
    return sortedfestivals[len - 1].name;
  }
  
  var now_event = getCurrent();
  
</script>

<svelte:head>
  <title>จะจีบก็รีบจีบ เดี๋ยวไม่ทัน{now_event}</title>
</svelte:head>

<Tailwindcss />
<main>
  <div
    class="w-screen min-h-screen max-w-full flex flex-col justify-center items-center my-container"
  >
    <div class="text-2xl text-center">
      <h2 class="my-2">จะจีบก็รีบจีบ</h2>

      <div>
        <h2 class="my-2 inline">เดี๋ยวไม่ทัน</h2>
        
          {#if isBefore(sortedfestivals[0].date, sortedfestivals[0].month)}
            <h2 class="my-2 inline line-through"> {sortedfestivals[0].name}.</h2>
          {:else}
            <h2 class="my-2 inline">{sortedfestivals[0].name}.</h2>
          {/if}
      </div>
      
      {#each sortedfestivals as festival, i}
        {#if isBefore(sortedfestivals[i].date, sortedfestivals[i].month) && i != 0}
          <h2 class="my-2 ml-20 line-through non-crossed">{festival.name}</h2>
        {:else if i != 0 && isBefore(sortedfestivals[i - 1].date, sortedfestivals[i - 1].month)}
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
