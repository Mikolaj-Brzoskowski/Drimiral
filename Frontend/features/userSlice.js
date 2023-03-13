import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsername: (state, action) => {

    },
    changeUsername: (state, action) => {

    },
    logoutUser: (state, action) => {
        state.username = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUsername, changeUsername, logoutUser } = userSlice.actions

export default userSlice.reducer