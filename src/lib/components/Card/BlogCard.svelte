<script>
  export let url;
  export let title;
  export let description;
  export let imageUrl;
  
</script>


<a class="w-full h-96 md:w-1/3 relative rounded-lg bg-cover" 
    href={url}
    style="background-image: url({imageUrl});"
  >
    <div class="absolute left-0 top-0 w-full h-full z-10 rounded-lg"
      style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
    <div class="p-4 absolute bottom-0 left-0 z-20">
      <span class="px-4 py-2 rounded-lg bg-mordor-800 text-zinc-50 inline-flex items-center justify-center mb-2">Science</span>
      <h3 class="font-primary font-semibold text-zinc-50 leading-tight">{title}</h3>
      <p class="text-zinc-50 opacity-60">{description}</p>
    </div>
</a>

