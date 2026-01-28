import instance from "./axios";

export const getPizzasArr = async () => {
    const response = await instance.get("/items");
    return response.data;
}