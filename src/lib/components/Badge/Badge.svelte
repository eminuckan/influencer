<script>
    export let text = "Badge";
    export let type = "primary";

    let color;
    switch(type){
        case "primary":
            color = "#ccff33";
            break;
        case "dark":
            color = "#191919";
            break;
        case "light":
            color = "#f6f6f6";
            break;
    }
</script>


<span class="badge" style="background-color: {color}; color: {type == 'dark' ? 'var(--body-color)' : 'rgb(0 0 0 / 80%)'}">{text}</span>


<style lang="postcss">
    .badge{
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius);
    }
</style>