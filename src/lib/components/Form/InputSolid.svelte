<script>
    export let type;
    export let name;
    export let placeholder;

</script>

<input class="input-solid" type={type} name={name} placeholder={placeholder} />

<style lang="postcss">
    .input-solid{
        all: unset;
        box-sizing: border-box;
        background-color: var(--dark-color);
        padding: var(--space-sm) var(--space-md);
        border-radius: var(--radius);
        transition: all ease-in-out 0.3s;
        width: 100% ;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.612);
        &:focus, &:hover{
            border: 1px solid var(--primary-dark-color);
            box-shadow: 0 0 0 2px var(--primary-color);
        }
    }
</style>