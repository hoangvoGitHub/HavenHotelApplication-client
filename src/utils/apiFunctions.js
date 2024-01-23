import axios from "axios"
const instance = axios.create({
    baseURL: "http://localhost:8080",
});

export const getAllRooms = async () => {
    try {
        const response = await instance.get("/room");
        return response.data;
    } catch (error) {
        throw new Error('Can not get all rooms');
    }
}

export const getRoomById = async () => {
    try {
        const response = await instance.get("/room/:roomId");
        return response.data;
    } catch (error) {
        throw new Error('Can not find room');
    }
}

export const updateRoom = async () => {
    try {
        const response = await instance.patch("/room/:roomId", {

        });
        return response.data;
    } catch (error) {
        throw new Error('Can not update room');
    }
}