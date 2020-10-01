/**
 * Redux's action:
 * {
 *    type: 'KIND_OF_ACTION',
 *    payload: { data... }
 * }
 */

const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";

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

/**
 * The inputState can be either = append | replace | push
 */
export const reducers = (
  state = { stack: [], inputState: "replace" },
  { type, payload }: { type: string; payload: number }
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
          ...state,
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      }
      break;
    case ENTER:
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        inputState: "replace",
      };
    default:
      return state;
  }
};
