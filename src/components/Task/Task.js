import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
// Импортируем генератор экшена
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.Id));
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  
  return (
    <div>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
