import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import itemSlice, { itemSliceAction } from '../store';
const AddTodo = () => {
  const dispatch = useDispatch();
  const todoRef = useRef();
  const todoDateRef = useRef();
  const handleClick = () => {
    dispatch(
      itemSliceAction.addItem({
        todoName: todoRef.current.value,
        todoDate: todoDateRef.current.value,
        completed: false,
      })
    );
    todoRef.current.value = '';
    todoDateRef.current.value = '';
  };
  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        Todo-item
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        ref={todoRef}
      />
      <input
        type="date"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        ref={todoDateRef}
      />
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
