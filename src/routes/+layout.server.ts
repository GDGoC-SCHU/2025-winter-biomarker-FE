import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async ({ cookies }) => {
    const session = cookies.get("userId");
    const email = cookies.get("realId");
    const name = cookies.get("name");

    if (session && email && name) {
        return {
            email: email.toString(),
            name: name?.toString()
        }
    } else {
        cookies.delete("userId", { path: "/" });
        cookies.delete("realId", { path: "/" });
    }
}