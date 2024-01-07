import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: [],
}

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    resetGoalsState: (state) => {
        state.entries = [];
    },
    editGoal: (state, action) => {
        const index = state.entries.findIndex(entry => entry.id === action.payload.id);

        let newEntries = [...state.entries]

        if (index >= 0) {
           newEntries[index] = action.payload
        }
        else {
            console.warn(
                `Cant edit entry id: ${action.payload.id}, does not exists.`
            )
        }

        state.entries = newEntries;
    },
    addGoal: (state, action) => {
        state.entries = [...state.entries, action.payload]
    },
    removeGoal: (state, action) => {
        const index = state.entries.findIndex(entry => entry.id === action.payload.id);

        let newEntries = [...state.entries]

        if (index >= 0) {
            newEntries.splice(index, 1)
        }
        else {
            console.warn(
                `Cant remove entry id: ${action.payload.id}, does not exists.`
            )
        }

        state.entries = newEntries;
    }
  },
})

export const { editGoal, addGoal, removeGoal, resetGoalsState } = goalsSlice.actions

export const getGoals = (state) => state.goals.entries

export default goalsSlice.reducer