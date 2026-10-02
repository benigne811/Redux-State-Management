import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import {
  decrement,
  increment,
  reset,
} from '../store/actions/counterActions';
import styles from './Counter.module.css';

const Counter = () => {
  const count = useSelector(
    (state: RootState) => state.counter.value,
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>

      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;