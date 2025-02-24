import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const userId = cookies.get("userId");

        const body = {
            "height": data.get("height"),
            "weight": data.get("weight"),
            "body_fat_percentage": data.get("body_fat_percentage"),
            "skeletal_muscle_mass": data.get("skeletal_muscle_mass"),
            "bmr": data.get("bmr"),
            "body_fat_mass": data.get("body_fat_mass"),
            "goal": data.get("goal")
        }
        
        if (userId) {
            const req = await fetch(`${env.BACKEND_ADDRESS}/user/health/add/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (req.ok) {
                return {
                    success: true
                }
            }
        }
        
        return {
            success: false
        }
    }
} satisfies Actions