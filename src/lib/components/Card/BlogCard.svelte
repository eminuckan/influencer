<script>
  import Badge from "../Badge/Badge.svelte";

</script>
<div class="post">
    <div class="post__image-holder">
        <img src="/img/blog-posts/blog-1.png" alt="Blog Post 1">
    </div>
    <a href="/post-1"><h6 class="capitalize">Labore veniam id nulla id mollit anim.</h6></a>
    <span class="post__date text-xs">Haziran, 2023</span>
    <p class="text-sm">Esse pariatur adipisicing qui qui sunt ut commodo sunt laborum enim...</p>
</div>

<style lang="postcss">
    .post{
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        align-items: flex-start;
        background-color: var(--gray-color);
        border-radius: var(--radius);
        padding: var(--space-md);

        &__image-holder{
            img{
                max-width: 100%;
                border-radius: var(--radius);
            }
        }

        h6,p,span{
            margin: 0;
        }

        span{
            color: var(--light-color);
        }

        a{
            cursor: pointer;
            h6{
                transition: color ease-in-out 0.3s;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }


        
    }
</style>