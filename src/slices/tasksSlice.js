import { createSlice } from "@reduxjs/toolkit";

const initalState = {};

const tasksSlice = createSlice({
  name: 'tasks',
  initalState,
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    completeTask: (state, action) => {

    },
  },
});

