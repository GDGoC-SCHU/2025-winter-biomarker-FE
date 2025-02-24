import { env } from "$env/dynamic/private";
import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        const company = form.get("company");
        const food = form.get("title");
        const page = form.get("pageNo");

        let req : Response;

        if (company && food) {
            req = await fetch(`http://api.data.go.kr/openapi/tn_pubr_public_nutri_food_info_api?serviceKey=${env.DATA_GO_KR_API_KEY}&pageNo=${page ?? 1}&numOfRows=10&type=json&foodNm=${food}&restNm=${company}`, {
                method: "GET"
            });
        } else if (company) {
            req = await fetch(`http://api.data.go.kr/openapi/tn_pubr_public_nutri_food_info_api?serviceKey=${env.DATA_GO_KR_API_KEY}&pageNo=${page ?? 1}&numOfRows=10&type=json&restNm=${company}`, {
                method: "GET"
            });
        } else if (food) {
            req = await fetch(`http://api.data.go.kr/openapi/tn_pubr_public_nutri_food_info_api?serviceKey=${env.DATA_GO_KR_API_KEY}&pageNo=${page ?? 1}&numOfRows=10&type=json&foodNm=${food}`, {
                method: "GET"
            });
        } else {
            return {
                success: false
            }
        }

        if (req.ok) {
            const result = await req.json();
            
            if (result.response.body) {
                return {
                    success: true,
                    data: result.response.body
                }    
            }
        } 
        
        return {
            success: false
        }
    }
} satisfies Actions;