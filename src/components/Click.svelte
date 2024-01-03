<script lang="ts">
  let count = 0;

  function handleClick() {
    count = count + 1;
  }
</script>

<div class="flex flex-col justify-center">
  <h1 class="text-xl">{count}</h1>
  <button
    on:click={handleClick}
    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Click Me
  </button>
</div>
