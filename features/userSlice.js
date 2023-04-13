import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

const initialState = {
  username: '',
  isStartSurveyAvailable: true,
  lastDailySurvDate: moment('01/01/2000', 'MM/DD/YYYY')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState: (state, action) => {
      state.name = ''
      state.isStartSurveyAvailable = true;
      state.lastDailySurvDate = moment('01/01/2000', 'MM/DD/YYYY')
    },
    getUsername: (state, action) => {

    },
    changeUsername: (state, action) => {

    },
    logoutUser: (state, action) => {
        state.username = ''
    },
    startSurveyDone: (state, action) => {
      state.isStartSurveyAvailable = false;
    },
    setDailyDate: (state, action) => {
      const today = moment().format('L')
      state.lastDailySurvDate = moment(today, 'MM/DD/YYYY');
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUsername, changeUsername, logoutUser, startSurveyDone, setDailyDate, resetUserState } = userSlice.actions

export const isStartAvailable = (state) => state.user.isStartSurveyAvailable
export const lastDailyDate = (state) => state.user.lastDailySurvDate

export default userSlice.reducer