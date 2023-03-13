import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: [],
}

export const userSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    editEntry: (state, action) => {
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
    addEntry: (state, action) => {
        state.entries = [...state.entries, action.payload]
    },
    removeEntry: (state, action) => {
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

export const { editEntry, addEntry, removeEntry } = userSlice.actions

export const getEntries = (state) => {
    
}

export default userSlice.reducer