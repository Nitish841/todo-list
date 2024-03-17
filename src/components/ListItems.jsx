import { useDispatch, useSelector } from 'react-redux';
import { itemSliceAction } from '../store';

const ListItmes = () => {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(itemSliceAction.deleteItem(item));
  };
  const handleUpdate = (item) => {
    dispatch(itemSliceAction.updateItem(item));
  };
  return (
    <ul className="list-group">
      {items.map((item) =>
        item.completed == true ? (
          <li
            key={item.todoName}
            className="list-group-item listItem completed"
          >
            <div id="todoitem">
              <div id="name">{item.todoName}</div>
              <div id="date">{item.todoDate}</div>
            </div>
            <div id="button">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                REMOVE
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleUpdate(item)}
              >
                DONE
              </button>
            </div>
          </li>
        ) : (
          <li key={item.todoName} className="list-group-item listItem">
            <div id="todoitem">
              <div id="name">{item.todoName}</div>
              <div id="date">{item.todoDate}</div>
            </div>
            <div id="button">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                REMOVE
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleUpdate(item)}
              >
                DONE
              </button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default ListItmes;
