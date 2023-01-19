<script lang="ts">
    import { page } from '$app/stores'

    import "../app.css";
</script>

<svelte:head>
    <title>{$page.data.post?.title}</title>
</svelte:head>

<div class="m-[20px]"> 
    <nav>
        <ul class="flex flex-row gap-4">
            <li>
                <a href="/" class="text-green-400">Home</a>
            </li>
            <li>
                <a href="/posts" class="text-green-400">Posts</a>
            </li>
        </ul>
    </nav>
    <slot/>    
</div>


<style lang="postcss">
    :global(html) {
      background-color: theme(colors.black);
      color: theme(colors.white);
    }

    :global(h1) {
        @apply text-2xl font-bold
    }

</style>