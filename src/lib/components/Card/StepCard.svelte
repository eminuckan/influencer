<script>
  export let num;
  export let title;
  export let desc;
</script>

<div class="card">
  <div class="card__num">
    {num}
  </div>
  <div class="card__info">
    <h6>{title}</h6>
    <p class="text-xs">{desc}</p>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply bg-mordor-600 
            rounded-lg 
            flex 
            gap-5
            items-center
            justify-between 
            py-5
            px-6
           text-stone-50
  }

  .card__num{
    @apply
        flex
        items-center
        justify-center
        text-mordor-500
        bg-primary-400
        drop-shadow-primary-xl
        rounded-full
        w-16
        h-11
        text-lg
        
  }

  .card__info{
    @apply
        flex
        flex-col
        gap-2
  }

  h6{
    @apply
        m-0
        font-primary
  }

  p{
    @apply
        text-mordor-50
        text-sm
        font-primary
  }


   /* 
        &__info{
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
            h6{
                margin: 0;
                font-family: var(--primary-font);
            }
            p{
                color: rgba(255, 255, 255, 0.5);
                margin: 0;
                font-weight: 400;
            }
        } */;
</style>
