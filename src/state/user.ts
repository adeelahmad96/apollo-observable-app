import { createSlice } from '@reduxjs/toolkit';
import { ActionPayload, AddUsersState } from '../interfaces';
import { insert_users_insert_users_returning as AddUserRes} from "../queries/types/insert_users";

export const usersSlice = createSlice({
    name: 'addUser',
    initialState: {
        users: []
    },
    reducers: {
        insertUser: (state: AddUsersState, action: ActionPayload<AddUserRes[]>) => {
            state.users = action.payload
        }
    }
});

export const { insertUser } = usersSlice.actions;

export default usersSlice.reducer;