import { AuthenticateUserPayload } from "../features/signin/authSlice";
export const getFullName = (user: AuthenticateUserPayload) => {
  return !user ? "-----" : `${user?.firstName} ${user?.lastName}`;
};
