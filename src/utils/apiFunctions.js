import axios from "axios"
const instance = axios.create({
    baseURL: "http://localhost:8080",
});

// rooms

export const getAllRooms = async () => {
    try {
        const response = await instance.get("/room");
        return response.data;
    } catch (error) {
        throw new Error('Can not get all rooms');
    }
}

export const getRoomById = async (roomId) => {
    try {
        const response = await instance.get(`/room/${roomId}`);
        return response.data;
    } catch (error) {
        throw new Error('Can not find room');
    }
}

export const addRoom = async (room) => {
    try {
        const response = await instance.post("/room", {
            room
        });
        return response.data;
    } catch (error) {
        throw new Error('Can not create new room');
    }
}

export const updateRoom = async (roomId, room) => {
    try {
        const response = await instance.patch(`/room/${roomId}`, {
            room
        });
        return response.data;
    } catch (error) {
        throw new Error('Can not update room');
    }
}

export const deleteRoom = async (roomId) => {
    try {
        const response = await instance.delete(`room/${roomId}`);
        return response.data;
    } catch (error) {
        throw new Error('Can not delete room');
    }
}

// booking

export const getAllBookings = async () => {
    try {
        const response = await instance.get("/booking");
        return response.data;
    } catch (error) {
        throw new Error('Can not get all bookings')
    }
}

export const cancelBooking = async (bookingId) => {
    try {
        const response = await instance.patch(`/booking/${bookingId}`);
        return response.data;
    } catch (error) {
        throw new Error('Can not cancel booking');
    }
}