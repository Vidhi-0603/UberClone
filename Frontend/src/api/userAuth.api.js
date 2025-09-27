import axiosInstance from "../utils/axiosInstance.js";


export const registerUser = async ({ firstname, lastname, email, password }) => {
    const { data } = await axiosInstance.post("/user/register", { firstname, lastname, email, password, role:'user' });    
    return data;
}

export const loginUser = async ({ email, password }) => {
    const { data } = await axiosInstance.post("/user/login", { email, password, role: 'user' });
    return data;
}

export const logoutUser = async () => {
    const { data } = await axiosInstance.post("/user/logout");
    return data;
}