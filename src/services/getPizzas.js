import instance from "./axios";

export const getPizzasArr = async ({categoryId, sortType}) => {
    // const params = {sortType, categoryId};
    const categoryPart = categoryId > 0 ? `category=${categoryId}&` : '';
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const response = await instance.get(`/items?${categoryPart}&sortBy=${sortType.sortProperty.replace('-', '')}&order=${order}`);
    return response.data;
}