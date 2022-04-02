//Custom hook created to make input validation more modular
import { useReducer } from "react";
import { InputState } from '../../types'


enum ActionKind {
  Input = "INPUT",
  Blur = "BLUR",
  Reset = "RESET",
  Submit = "SUBMIT",
}

type Action = {
  type: ActionKind;
  value?: string | EventTarget;
};


//Init state
const initialInputState = {
  value: "",
  isTouched: false,
};


//Dispatched actions sent here
const inputStateReducer = (state: InputState, action: Action): InputState => {
  if (action.type === "INPUT" && typeof action.value === "string") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  if (action.type === "SUBMIT") {
    return { isTouched: true, value: state.value };
  }

  throw new Error();
};

const useInputValidate = (validateValue: (a: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch({ type: ActionKind.Input, value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: ActionKind.Blur });
  };

  const reset = () => {
    dispatch({ type: ActionKind.Reset });
  };

  const submitHandler = () => {
    dispatch({ type: ActionKind.Submit });
  };

  return {
    value: inputState.value,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    isValid: valueIsValid,
    reset,
    submitHandler,
    inputState,
  };
};

export default useInputValidate;
