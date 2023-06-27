<script>
    import Icon from 'svelte-icon/Icon.svelte'
    import twitchLogo from '$lib/icons/social-media/twitch.svg?raw';
    import youtubeLogo from '$lib/icons/social-media/youtube.svg?raw';
    import instagramLogo from '$lib/icons/social-media/instagram.svg?raw';
    import twitterLogo from '$lib/icons/social-media/twitter.svg?raw';

    export let name;
    export let pic;
    export let links;
    

    const icons = {
        twitch: twitchLogo,
        youtube: youtubeLogo,
        instagram: instagramLogo,
        twitter: twitterLogo
    };

    const socialIconOptions = {
        width: 25,
        height: 25,
        stroke: "none"
    }

    const trimUrl = (url) => {
        const urlObject = new URL(url);
        return urlObject.hostname.replace(/.+\/\/|www.|\..+/g,'');
    }
</script>


<div style="background-image: url({pic})" class="influencer-card">
    <div class="info">
        <h6>{name}</h6>
        <div class="icons">
            {#each links as link}
                <a href={link.link} target="_blank"><Icon data={icons[trimUrl(link.link)]} {...socialIconOptions} /></a>
            {/each}
        </div>
    </div>
</div>


<style lang="postcss">
    .influencer-card{
        min-height: 16.5rem;
        min-width: 16.5rem;
        @apply
            p-3
            rounded-lg
            flex
            justify-center
            bg-cover
            relative
            before:content-['']
            before:absolute
            before:top-0
            before:left-0
            before:w-full
            before:h-full
            before:bg-gradient-to-t from-mordor-900 to-transparent to-60%
            before:opacity-95
            before:rounded-lg
    }
    
    .info{
        @apply
            mt-auto
            flex
            flex-col
            justify-end
            items-center
            gap-5
            z-50
    }
    .icons{
        @apply
            flex
            gap-2
            items-center
            justify-start
    }
    :global{
        svg{
            @apply
                fill-primary-400
        }
    }
</style>