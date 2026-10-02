import {
  DECREMENT,
  INCREMENT,
  RESET,
} from '../actions/counterActions';

interface CounterState {
  value: number;
}

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

interface ResetAction {
  type: typeof RESET;
}

type CounterAction =
  | IncrementAction
  | DecrementAction
  | ResetAction;

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    case RESET:
      return {
        ...state,
        value: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;