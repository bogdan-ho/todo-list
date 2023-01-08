import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();
const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    updateTask: tasksAdapter.updateOne,
  },
});

export const tasksSelector = tasksAdapter.getSelectors((state) => state.tasks);
export const { actions } = tasksSlice;
export default tasksSlice.reducer;
