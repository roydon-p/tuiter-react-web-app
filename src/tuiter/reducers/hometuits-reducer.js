import { createSlice } from "@reduxjs/toolkit";
// import tuits from '../data/home-tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "profilepic": "../../tuiter/images/nasalogo.png",
// };
//
// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]: (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findTuitsThunk.fulfilled]: (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findTuitsThunk.rejected]: (state) => {
                                               state.loading = false
                                           },
                                       [deleteTuitThunk.fulfilled] : (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = state.tuits.filter(t => t._id !== payload)
                                           },
                                       [createTuitThunk.fulfilled]: (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [updateTuitThunk.fulfilled]: (state, { payload }) => {
                                           state.loading = false
                                           state.tuits = payload
                                       },

                                   },
                                   reducers: {
                                       // deleteTuit(state, action) {
                                       //     const index = state
                                       //         .findIndex(tuit =>
                                       //                        tuit._id === action.payload);
                                       //     state.splice(index, 1);
                                       // },
                                       // createTuit(state, action) {
                                       //     state.unshift({
                                       //                       ...action.payload,
                                       //                       ...templateTuit,
                                       //                       _id: (new Date()).getTime(),
                                       //                   })
                                       // }
                                   }
                               });



// export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;