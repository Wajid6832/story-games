import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://68c02ee30b196b9ce1c3870f.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})
//read action
export const showUser = createAsyncThunk("showUser", async () => {
    const response = await fetch("https://68c02ee30b196b9ce1c3870f.mockapi.io/crud");
    try {
        const res = await response.json();
        return res;
    } catch (error) {
        return error;
    }
})


//update action
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => { 
    const response = await fetch(`https://68c02ee30b196b9ce1c3870f.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})


export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData:[],
    },
    reducers:{
        searchUsers:(state,action)=>{
            state.searchData=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                 state.users.push(action.payload);
                //state.users=[...state.users,action.payload]
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // better to store error message
            })
            

            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users=action.payload ;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // better to store error message
            })


            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((ele)=>ele.id === action.payload.id? action.payload : ele)
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // better to store error message
            })
    }


});
export default userDetail.reducer;
export const {searchUsers} = userDetail.actions;