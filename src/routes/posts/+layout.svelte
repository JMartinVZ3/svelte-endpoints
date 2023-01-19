<script lang="ts">
	import type { LayoutData } from "./$types";

    export let data: LayoutData

</script>

<div class="layout">

    <aside>
        <nav>
            <h1>Posts</h1>

            <ul>
                {#each data.posts as { slug, title } }
                    <li>
                        <a href="/posts/{slug}">{title}</a>
                    </li>
                {/each}
            </ul>

        </nav>
    </aside>

    <main>
        <slot />
    </main>

</div>

<style lang="postcss"> 

    .layout {
        @apply grid grid-flow-row grid-cols-3 gap-4
    }

    aside {
        @apply col-span-1
    }

    main {
        @apply col-span-2
    }

    a:hover {
        @apply text-green-400 underline
    }

</style>