import { ADD_ENTRY, DELETE_ENTRY, UPDATE_ENTRY } from "../constants/contants";

export const addEntry = (data) => ({
  type: ADD_ENTRY,
  payload: data,
});

export const deleteEntry = (id) => ({
  type: DELETE_ENTRY,
  payload: id,
});

export const updateEntry = (updatedEntry) => ({
    type: UPDATE_ENTRY,
    payload: updatedEntry,
  });
