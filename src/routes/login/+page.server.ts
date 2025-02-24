import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

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
            const req = await fetch(`${env.BACKEND_ADDRESS}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            if (req.ok) {
                const data = await req.json();

                cookies.set("userId", data.userId, { path: "/" });
                cookies.set("name", data.name, { path: "/" })
                redirect(303, "/");
            }
        }
        return { success: false };
    },

    out: async ({ cookies }) => {
        cookies.delete("userId", { path: "/" });
        redirect(303, "/");
    }
} satisfies Actions;