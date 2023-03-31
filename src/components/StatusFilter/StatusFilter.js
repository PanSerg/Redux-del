import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
// Импортируем генератор экшена
import { setStatusFilter } from '../../redux/actions';
// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';

export const StatusFilter = () => {
  // 2.Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  // 1.Получаем значение фильтра из состояния Redux
  const filter = useSelector(state => state.filters.status);

  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
      
      <Button selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
      
      <Button selected={filter === statusFilters.completed}
      onClick={()=>handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
