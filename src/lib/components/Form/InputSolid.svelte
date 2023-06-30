<script>
  export let id;
  export let name;
  export let label;
  export let type;
  export let placeholder;
  export let autocomplete;
  export let required;
</script>

<div class="group">
    <label for="password" class="label">{label}</label>
    <div class="input-container">
        <input {id} {name} {type} {placeholder} {autocomplete} {required} />
    </div>
</div>



<style lang="postcss">
    .group{
        @apply
            space-y-1
    }
    .input-container{
        @apply mt-1
    }
    label {
        @apply block text-sm font-medium text-zinc-50 opacity-70;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: 2px solid #484848;
      -webkit-text-fill-color: #fafafa;
      -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset;
    }

  input {
    border: 2px solid #484848;

    @apply block py-3 
            box-border
            min-h-0
            min-w-0
            overflow-hidden
            w-full
            rounded-lg 
            bg-mordor-500 
            text-zinc-50 
            placeholder-mordor-300
            focus:ring-0 
            focus:ring-offset-0
            focus:border-primary-400 
            ease-in-out
            duration-300
            sm:text-base;
  }
</style>
