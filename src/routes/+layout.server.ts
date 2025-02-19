import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async ({ cookies }) => {
    const session = cookies.get("userId");
    const email = cookies.get("realId");

    if (session && email) {
        return {
            email: email.toString()
        }
    } else {
        cookies.delete("userId", { path: "/" });
        cookies.delete("realId", { path: "/" });
    }
}