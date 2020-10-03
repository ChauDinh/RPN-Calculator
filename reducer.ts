/**
 * Redux's action:
 * {
 *    type: 'KIND_OF_ACTION',
 *    payload: { data... }
 * }
 */

const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const OPERATION = "OPERATION";
const CLEAR = "CLEAR";
const SWAP = "SWAP";
const NEGATIVE = "NEGATIVE";

const doMathOperations = (
  num1: string,
  num2: string,
  operator: string
): number | undefined => {
  const x = parseFloat(num1);
  const y = parseFloat(num2);
  if (operator === "pow") {
    return x ** y;
  } else if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return y - x;
  } else if (operator === "X") {
    return y * x;
  } else if (operator === "/") {
    return y / x;
  }
  return undefined;
};

export const pressNumber = (
  number: number
): { type: string; payload: number } => {
  return {
    type: PRESS_NUM,
    payload: number,
  };
};

export const pressEnter = (): { type: string } => {
  return {
    type: ENTER,
  };
};

export const pressOperator = (
  operator: string
): { type: string; payload: string } => {
  return {
    type: OPERATION,
    payload: operator,
  };
};

export const pressClear = (): { type: string } => {
  return {
    type: CLEAR,
  };
};

export const pressSwap = (): { type: string } => {
  return {
    type: SWAP,
  };
};

export const toggleNegative = (
  index: number
): { type: string; payload: number } => {
  return {
    type: NEGATIVE,
    payload: index,
  };
};

const switchBetweenNegativeAndPositive = (number: string): string => {
  if (number.startsWith("-")) {
    return number.slice(1);
  } else {
    return `-${number}`;
  }
};

/**
 * The inputState can be either = append | replace | push
 */
const initialState = { stack: [], inputState: "replace" };
export const reducers = (
  state = initialState,
  { type, payload }: { type: string; payload: number & string }
): any => {
  switch (type) {
    case PRESS_NUM:
      if (state.inputState === "append") {
        return {
          stack: [(state.stack[0] || "0") + payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "replace") {
        return {
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "push") {
        return {
          stack: [payload, ...state.stack],
          inputState: "append",
        };
      }
      break;
    case ENTER:
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        inputState: "replace",
      };
    case OPERATION: {
      return {
        stack: [
          `${doMathOperations(state.stack[0], state.stack[1], payload)}`,
          ...state.stack.slice(2),
        ],
        inputState: "push",
      };
    }
    case CLEAR:
      return initialState;
    case SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: "push",
      };
    case NEGATIVE:
      return {
        stack: state.stack.map((x, i) =>
          payload === i ? switchBetweenNegativeAndPositive(x) : x
        ),
        inputState: state.inputState,
      };
    default:
      return state;
  }
};
