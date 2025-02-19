import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

interface GenderType { value: string, text: string };

export const load: PageServerLoad = async ({ cookies }) => {
    const login_data = cookies.get("userId");
    
    if (login_data) {
        redirect(303, "/")
    }

    let genderList: GenderType[] = [
        { value: "male", text: "남성" },
        { value: "female", text: "여성" },
        { value: "undefined", text: "기타/선택하지 않음"}
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
        const gender = form.get("gender");
        
        if (email && email.toString().includes("@") && password && gender) {
            cookies.set("userId", "tempCookie", { path: "/" });
            cookies.set("realId", email?.toString(), { path: "/"});
            return { success: true };
        } else {
            return { success: false };
        }

    }
} satisfies Actions;