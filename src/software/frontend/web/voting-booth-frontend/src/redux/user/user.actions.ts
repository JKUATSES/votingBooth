import userTypes from "./user.types";

export const dispatchError = () => {
  return {
    type: userTypes.USER_ERROR,
  };
};

