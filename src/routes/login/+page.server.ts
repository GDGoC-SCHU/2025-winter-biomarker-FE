import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const login_data = cookies.get("userId");
    
    if (login_data) {
        return { login: true };
    } else {
        return { login: false };
    }
}

export const actions = {
    in: async ({ cookies, request }) => {
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");
        
        if (email && email.toString().includes("@") && password) {
            cookies.set("userId", "tempCookie", { path: "/" });
            cookies.set("realId", email?.toString(), { path: "/"});
            redirect(303, "/");
        } else {
            return { success: false };
        }

    },

    out: async ({ cookies }) => {
        cookies.delete("userId", { path: "/" });
        cookies.delete("realId", { path: "/" });

        console.log(cookies.getAll());
        redirect(303, "/");
    }
} satisfies Actions;