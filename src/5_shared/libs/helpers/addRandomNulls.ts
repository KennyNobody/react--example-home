import { PostArticleType } from '4_entities/Post';

const addRandomNulls = (inputArray: PostArticleType[]): (PostArticleType | null)[] => {
    const resultArray: (PostArticleType | null)[] = [];
    const nullInterval = 6; // интервал для проверки массива на вставку null
    const nullPosition = [1, 2, 6]; // позиции для вставки null

    for (let i = 0; i < inputArray.length; i += 1) {
        resultArray.push(inputArray[i]);

        if (nullPosition.includes(i % nullInterval)) {
            resultArray.push(null);
        }
    }

    return resultArray;
};

export {
    addRandomNulls,
};
