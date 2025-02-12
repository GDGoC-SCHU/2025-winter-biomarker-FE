import type { PageServerLoad } from "./$types";

interface GenderType { value: string, text: string };

export const load: PageServerLoad = async () => {

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