import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import db from "$lib/database";

export const load: PageServerLoad = async ({ params, parent }) => {

    const parentData = await parent()
    console.log(parentData);

    const post = await db.post.findUnique({
        where: { slug: params.slug }
    })

    if (!post) {
        throw error(404, 'Post not found')
    }

    return { post }

}