import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';
import { User } from '../types/user.type';

interface UserState {
  data?: User;
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.data = action.payload;
    },
    removeUser(state) {
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return void (state.data = action.payload.user.data);
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
