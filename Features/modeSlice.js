import {createSlice} from '@reduxjs/toolkit'

const initalState = {
    object: 10245,
    apiData: {}
}

export const modeSlice = createSlice({
    name: 'modes',
    initialState,
    reducers: { 
        setData: (state, action) => {
            return {...state, apiData: action.payload}
        },
        clearData: () => {
            return initialState
        },
        inputId: (state, action) => {
            return {...state, objectId: action.payload}
        },
        incrememntId: (state) => {
            return {...state, objectId: state.object + 1}
        },
        decrementId: (state) => {
            return {...state, objectId: state.objectId - 1}
        }
    }
})

export const {setData, clearData, incrementId, decrementId, inputId} = dataSlice.actions

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch (`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer 

