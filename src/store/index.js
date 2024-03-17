import { createSlice } from '@reduxjs/toolkit';

const INITIAL_ITEM = [
  { todoName: 'Learn React', todoDate: '04/01/2024', completed: true },
  {
    todoName: 'Build a todo application in React',
    todoDate: '04/01/2024',
    completed: false,
  },
  { todoName: 'Explore React hooks', todoDate: '04/01/2024', completed: false },
  {
    todoName: 'Learn about React Router',
    todoDate: '04/01/2024',
    completed: false,
  },
  {
    todoName: 'Practice building responsive layouts in React',
    todoDate: '04/01/2024',
    completed: false,
  },
  {
    todoName: 'Learn about state management in React (e.g., using Redux)',
    todoDate: '04/01/2024',
    completed: false,
  },
];

const itemSlice = createSlice({
  name: 'items',
  initialState: INITIAL_ITEM,
  reducers: {
    addItem: (items, action) => {
      console.log(action);
      items.push(action.payload);
    },
    deleteItem: (items, action) => {
      items = items.filter(
        (item) =>
          !(
            item.todoName == action.payload.todoName &&
            item.todoDate == action.payload.todoDate
          )
      );
      return items;
    },
    updateItem: (items, action) => {
      items = items.map((item) =>
        item.todoName == action.payload.todoName
          ? { ...item, completed: !action.payload.completed }
          : item
      );
      if (confirm(`Is ${action.payload.todoName} completed?`)) {
        return items;
      }
    },
  },
});
export const itemSliceAction = itemSlice.actions;

export default itemSlice;
