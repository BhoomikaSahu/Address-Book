import { ADD_ENTRY, DELETE_ENTRY } from "../constants/contants";

const initialState = {
  entries: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.payload),
      };
    case "UPDATE_ENTRY":
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry.id === action.payload.id ? action.payload : entry
        ),
      };
    default:
      return state;
  }
};
