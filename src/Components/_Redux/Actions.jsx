import { ADD, COMPLETE, DEL, EDIT } from "./Actions_name";

export const add = (payload) => {
    return {
        type: ADD,
        payload,
    };
};
export const complete = (payload) => {
    return {
        type: COMPLETE,
        payload,
    };
};
export const del = (payload) => {
    return {
        type: DEL,
        payload,
    };
};
export const edit = (payload) => {
    return {
        type: EDIT,
        payload,
    };
};
