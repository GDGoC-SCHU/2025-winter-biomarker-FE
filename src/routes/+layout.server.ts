import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async ({ cookies }) => {
    const session = cookies.get("userId");
    const name = cookies.get("name");

    if (session && name) {
        return {
            name: name?.toString()
        }
    } else {
        cookies.delete("userId", { path: "/" });
    }
}