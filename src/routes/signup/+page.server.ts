import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

interface GenderType { value: string, text: string };

export const load: PageServerLoad = async ({ cookies }) => {
    const login_data = cookies.get("userId");
    
    if (login_data) {
        redirect(303, "/")
    }

    let genderList: GenderType[] = [
        { value: "male", text: "남성" },
        { value: "female", text: "여성" },
        { value: "other", text: "기타/선택하지 않음"}
    ];

    function shuffleGenderSelector(array: GenderType[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    shuffleGenderSelector(genderList);

    return { genderList: genderList };
}

export const actions = {
    default: async ({ cookies, request }) => {
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");
        const name = form.get("name");
        const gender = form.get("gender");

        if (email && email.toString().includes("@") && password && gender && name) {
            const req = await fetch(`${env.BACKEND_ADDRESS}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    gender: gender
                })
            })

            if (req.ok) {
                const data = await req.json();
                
                cookies.set("userId", data.userId, { path: "/" });
                cookies.set("name", name?.toString(), { path: "/"}); 
                return { success: true };
            } else {
                const data = await req.json();
                
                return { success: false };
            }
        } else {
            return { success: false };
        }

    }
} satisfies Actions;