import { v4 as uuidv4 } from "uuid";
import { ADD, COMPLETE, DEL, EDIT } from "./Actions_name";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                { id: uuidv4(), task: action.payload, Done: false },
            ];
        case COMPLETE:
            return state.map((el) =>
                el.id === action.payload ? { ...el, Done: !el.Done } : el
            );
        case DEL:
            return state.filter((el) => el.id !== action.payload);
        case EDIT:
            return state.map((el) =>
                el.id === action.payload.id
                    ? { ...el, task: action.payload.task }
                    : el
            );

        default:
            return state;
    }
};
export default reducer;
