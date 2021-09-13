import React, { useContext } from "react";
import axios from 'axios';

const Store = React.createContext(null);

export default Store;
export function useDataState() {
    const state = useContext(Store);
    if (!state) {
        throw new Error('Cannot find Provider');
    }
    return state;
}
const baseURL = new URL("http://ec2-3-37-89-245.ap-northeast-2.compute.amazonaws.com");
const baseService = axios.create({
    baseURL: baseURL.toString(),
    'Content-Type': 'application/json',
});

export async function createPlanet(args) {
    const {
        name,
        planetForm,
    } = args;
    try {
        const response = await baseService.post('/post/planet', {
            name,
            planetForm,
        })
        return response.status;
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}
export async function createDiary(title, content, image, planetId) {
    const diaryForm = new FormData();
    diaryForm.append('title', title);
    diaryForm.append('content', content);
    diaryForm.append('image', image);
    diaryForm.enctype = 'multipart/form-data';

    try {
        await baseService.post(`/post/${planetId}/diary`, diaryForm, {
            headers: {
                'Content-type': 'multipart/form-data',
            }}
        )
    } catch (e) {
        console.error("!", e.response.data.error);
    }
}
export async function getAllData() {
    try {
        const result = await baseService.get(`/posts`)
        return result.data;
    } catch (e) {
        console.log('!', e.response);
    }
}
export async function deletePlanet(planetId) {
    const isDelete = {
        isDelete: true,
    };
    try {
        await baseService.patch(`/post/planet/${planetId}`, isDelete);
    } catch (e) {
        console.error("!", e.response.data.error);
    }
}
export async function deleteDiary(diaryId) {
    const isDelete = {
        isDelete: true,
    };
    try {
        await baseService.patch(`/post/diary/${diaryId}`, isDelete);
    } catch (e) {
        console.error("!", e.response.data.error);
    }
}
export async function deleteBlackholePlanet(planetId) {
    try {
        await baseService.delete(`/post/planet/${planetId}`)
    } catch (e) {
        console.error("!", e.response.data.error);
    }
}
export async function deleteBlackholeDiary(diaryId) {
    try {
        await baseService.delete(`/post/diary/${diaryId}`)
    } catch (e) {
        console.error("!", e.response.data.error);
    }
}