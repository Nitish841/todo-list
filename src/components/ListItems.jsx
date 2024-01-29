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
      {items.map((item) => (
        <li className="list-group-item listItem">
          <div>{item}</div>
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
            UPDATE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListItmes;
