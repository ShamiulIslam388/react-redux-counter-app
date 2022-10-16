import { INC, DECRE, RESET } from "./constants";
export const incrementCount = () => {
  return {
    type: INC
  };
};

export const decrementCount = () => {
  return {
    type: DECRE
  };
};

export const resetCount = () => {
  return {
    type: RESET
  };
};
