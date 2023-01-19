<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

    function formatDate(date: Date) {
        return new Intl.DateTimeFormat('en', {dateStyle: 'long'}).format(date);
    }

</script>

<hgroup>
    <h1>{data.post.title}</h1>
    <h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="mt-5 text-justify">
    {@html data.post.content}
</div>

<div>
    <h3 class="text-xl font-semibold mt-4">Posts</h3>

    <ul>
        {#each data.posts as { slug, title } }
            <li>
                <a href="/posts/{slug}">{title}</a>
            </li>
        {/each}
    </ul>
</div>

<style lang="postcss">
    h2 {
        @apply text-gray-400
    }
    a {
        @apply text-green-400
    }
    a:hover {
        @apply underline
    }

</style>