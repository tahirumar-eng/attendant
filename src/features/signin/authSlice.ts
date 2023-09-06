import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Row } from "../setting";

export type UserRole = "user" | "admin";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  pincode: string;
  role: UserRole;
  totalHrs: number;
  dailyAvgHrs: number;
  needsPinChange: boolean;
};

export type AuthenticateUserPayload = User | null;

export interface AuthState {
  users: Array<User>;
  authenicatedUser: AuthenticateUserPayload;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const initialState: AuthState = {
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      position: "Developer",
      role: "user",
      pincode: "1234",
      needsPinChange: false,
      totalHrs: 160, // Dummy value for totalHrs
      dailyAvgHrs: 7.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      position: "Designer",
      role: "admin",
      pincode: "1234",
      needsPinChange: false,
      totalHrs: 145, // Dummy value for totalHrs
      dailyAvgHrs: 6.8, // Dummy value for dailyAvgHrs
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      position: "Manager",
      role: "user",
      pincode: "0000", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 140, // Dummy value for totalHrs
      dailyAvgHrs: 7.0, // Dummy value for dailyAvgHrs
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      email: "emily@example.com",
      position: "Marketing",
      role: "user",
      pincode: "4321",
      needsPinChange: false,
      totalHrs: 155, // Dummy value for totalHrs
      dailyAvgHrs: 7.2, // Dummy value for dailyAvgHrs
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Wilson",
      email: "david@example.com",
      position: "HR",
      role: "admin",
      pincode: "9876",
      needsPinChange: false,
      totalHrs: 150, // Dummy value for totalHrs
      dailyAvgHrs: 7.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 6,
      firstName: "Sophia",
      lastName: "Lee",
      email: "sophia@example.com",
      position: "Developer",
      role: "user",
      pincode: "0000", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 135, // Dummy value for totalHrs
      dailyAvgHrs: 6.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 7,
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael@example.com",
      position: "Manager",
      role: "user",
      pincode: "5678",
      needsPinChange: false,
      totalHrs: 170, // Dummy value for totalHrs
      dailyAvgHrs: 8.0, // Dummy value for dailyAvgHrs
    },
    {
      id: 8,
      firstName: "Emma",
      lastName: "Taylor",
      email: "emma@example.com",
      position: "Designer",
      role: "admin",
      pincode: "3456",
      needsPinChange: false,
      totalHrs: 140, // Dummy value for totalHrs
      dailyAvgHrs: 6.0, // Dummy value for dailyAvgHrs
    },
    {
      id: 9,
      firstName: "William",
      lastName: "Clark",
      email: "william@example.com",
      position: "Developer",
      role: "user",
      pincode: "0000", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 125, // Dummy value for totalHrs
      dailyAvgHrs: 6.2, // Dummy value for dailyAvgHrs
    },
    {
      id: 10,
      firstName: "Olivia",
      lastName: "Jones",
      email: "olivia@example.com",
      position: "Marketing",
      role: "user",
      pincode: "0000", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 145, // Dummy value for totalHrs
      dailyAvgHrs: 7.0, // Dummy value for dailyAvgHrs
    },
    {
      id: 11,
      firstName: "James",
      lastName: "Brown",
      email: "james@example.com",
      position: "HR",
      role: "admin",
      pincode: "1234",
      needsPinChange: false,
      totalHrs: 155, // Dummy value for totalHrs
      dailyAvgHrs: 7.8, // Dummy value for dailyAvgHrs
    },
    {
      id: 12,
      firstName: "Ava",
      lastName: "White",
      email: "ava@example.com",
      position: "Manager",
      role: "user",
      pincode: "7654",
      needsPinChange: false,
      totalHrs: 160, // Dummy value for totalHrs
      dailyAvgHrs: 7.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 13,
      firstName: "Benjamin",
      lastName: "Evans",
      email: "benjamin@example.com",
      position: "Designer",
      role: "admin",
      pincode: "0000",
      needsPinChange: true,
      totalHrs: 140, // Dummy value for totalHrs
      dailyAvgHrs: 6.8, // Dummy value for dailyAvgHrs
    },
    {
      id: 14,
      firstName: "Mia",
      lastName: "Miller",
      email: "mia@example.com",
      position: "Developer",
      role: "user",
      pincode: "0000", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 150, // Dummy value for totalHrs
      dailyAvgHrs: 7.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 15,
      firstName: "Elijah",
      lastName: "Wilson",
      email: "elijah@example.com",
      position: "Marketing",
      role: "user",
      pincode: "8888",
      needsPinChange: false,
      totalHrs: 145, // Dummy value for totalHrs
      dailyAvgHrs: 6.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 16,
      firstName: "Charlotte",
      lastName: "Moore",
      email: "charlotte@example.com",
      position: "HR",
      role: "admin",
      pincode: "6543",
      needsPinChange: false,
      totalHrs: 120, // Dummy value for totalHrs
      dailyAvgHrs: 6.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 17,
      firstName: "William",
      lastName: "Brown",
      email: "william@example.com",
      position: "Manager",
      role: "user",
      pincode: "9999",
      needsPinChange: false,
      totalHrs: 160, // Dummy value for totalHrs
      dailyAvgHrs: 7.5, // Dummy value for dailyAvgHrs
    },
    {
      id: 18,
      firstName: "Amelia",
      lastName: "Johnson",
      email: "amelia@example.com",
      position: "Designer",
      role: "admin",
      pincode: "9876",
      needsPinChange: false,
      totalHrs: 140, // Dummy value for totalHrs
      dailyAvgHrs: 6.0, // Dummy value for dailyAvgHrs
    },
    {
      id: 19,
      firstName: "Liam",
      lastName: "Davis",
      email: "liam@example.com",
      position: "Developer",
      role: "user",
      pincode: "1111", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 80, // Dummy value for totalHrs
      dailyAvgHrs: 4.0, // Dummy value for dailyAvgHrs
    },
    {
      id: 20,
      firstName: "Sophia",
      lastName: "Smith",
      email: "sophia@example.com",
      position: "Marketing",
      role: "user",
      pincode: "2222", // Set to "0000" for needsPinChange true
      needsPinChange: true,
      totalHrs: 90, // Dummy value for totalHrs
      dailyAvgHrs: 4.5, // Dummy value for dailyAvgHrs
    },
  ],
  authenicatedUser: null,
  isAdmin: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<Row>) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.firstName = action.payload.firstName;
        user.lastName = action.payload.lastName;
        user.email = action.payload.email;
        user.position = action.payload.position;
      }
    },
    removeUser: (state, action: PayloadAction<number>) => {
      const users = state.users.filter((usr) => usr.id !== action.payload);
      state.users = users;
    },
    logout: (state) => {
      state.authenicatedUser = null;
      state.isAdmin = false;
      state.isAuthenticated = false;
    },
    changePincodeRequest: (
      state,
      action: PayloadAction<AuthenticateUserPayload>
    ) => {
      state.authenicatedUser = action.payload;
      state.isAuthenticated = true;
    },
    changeUserPincode: (
      state,
      action: PayloadAction<{ newPincode: string; userId: number }>
    ) => {
      const user = state.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        user.pincode = action.payload.newPincode;
        user.needsPinChange = false;
        state.isAuthenticated = true;
        state.isAdmin = user.role === "admin";
      }
    },
    authenticateUser: (state, action: PayloadAction<User>) => {
      state.authenicatedUser = action.payload;
      state.isAuthenticated = true;
      state.isAdmin = action.payload.role === "admin";
    },
  },
});

export const {
  addUser,
  updateUser,
  removeUser,
  logout,
  authenticateUser,
  changeUserPincode,
  changePincodeRequest,
} = authSlice.actions;

export const selectUsers = (state: RootState) => state.auth.users;
export const selectAuthenicatedUser = (state: RootState) =>
  state.auth.authenicatedUser;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
