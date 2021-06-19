import authTypes from "../auth/auth.types";

export const requestAuth = () => {
  return {
    type: authTypes.AUTH_REQUEST,
  };
};
