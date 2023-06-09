import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from 'redux/selectors';
import { getTask } from 'redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(getTask);
  // Получаем значение фильтра из состояния Redux
  const statusFilter = useSelector(getStatusFilter);
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
      <ul>
        {visibleTasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
  );
};
