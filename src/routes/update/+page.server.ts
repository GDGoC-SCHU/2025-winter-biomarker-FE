import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

interface GenderType { value: string, text: string };

export const load: PageServerLoad = async ({ cookies }) => {
    const gender = cookies.get("gender");    

    return { gender: gender };
}