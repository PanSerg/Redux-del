import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';
import css from './StatusFilter.module.css';
// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(state => state.filters.status);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
