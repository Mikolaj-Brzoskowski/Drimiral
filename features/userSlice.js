import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

const initialState = {
  username: '',
  isStartSurveyDone: false,
  lastDailySurvDate: '01/04/2023'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState: (state, action) => {
      state.name = ''
      state.isStartSurveyDone = false;
      state.lastDailySurvDate = '01/04/2023'
    },
    getUsername: (state, action) => {

    },
    changeUsername: (state, action) => {

    },
    logoutUser: (state, action) => {
        state.username = ''
    },
    startSurveyDone: (state, action) => {
      state.isStartSurveyDone = true;
    },
    setDailyDate: (state, action) => {
      var date = moment();
      var currentDate = date.format('D/MM/YYYY');
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUsername, changeUsername, logoutUser, startSurveyDone, setDailyDate, resetUserState } = userSlice.actions

export const isStartAvailable = (state) => state.user.isStartSurveyDone

export default userSlice.reducer