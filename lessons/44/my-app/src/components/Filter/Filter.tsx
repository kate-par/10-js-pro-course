import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { TodoAction } from "store/types";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const toShowAll = useCallback(() => {
    dispatch({
      type: TodoAction.SHOW_ALL,
    });
  }, [dispatch]);

  const toShowDone = useCallback(() => {
    dispatch({
      type: TodoAction.SHOW_DONE,
    });
  }, [dispatch]);

  const toShowTodo = useCallback(() => {
    dispatch({
      type: TodoAction.SHOW_TODO,
    });
  }, [dispatch]);

  return (
    <div className={styles.flexbox}>
      <button className={styles.button} onClick={toShowAll}>
        All
      </button>
      <button className={styles.button} onClick={toShowDone}>
        Done
      </button>
      <button className={styles.button} onClick={toShowTodo}>
        Todo
      </button>
    </div>
  );
};

export default Filter;
