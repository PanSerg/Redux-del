import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

export const addTask = text => {
    return {
      type: 'tasks/addTask',
      payload: {
        id: nanoid(),
        completed: false,
        text,
      },
    };
};

export const deleteTask = taskId => {
    return {
      type: 'tasks/deleteTask',
      payload: taskId,
    };
};

export const toggleCompleted = taskId => {
    return {
      type: 'tasks/toggleCompleted',
      payload: taskId,
    };
};
export const setStatusFilter = value => {
    return {
      type: 'filters/setStatusFilter',
      payload: value,
    };
};


const MyComponent = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
};