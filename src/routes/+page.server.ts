import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const user = cookies.get("userId");

    if (!user) {
        redirect(303, "/login?message_type=no_session");
    }
}