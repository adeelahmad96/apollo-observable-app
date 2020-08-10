import { createSlice } from '@reduxjs/toolkit';
import { MissionStateInterface, ActionPayload } from '../interfaces';
import { missions as MissionsType} from "../queries/types/missions";

export const missionSlice = createSlice({
    name: 'mission',
    initialState: {
        data: {missions: []}
    },
    reducers: {
        getMission: (state: MissionStateInterface, action: ActionPayload<MissionsType>) => {
            state.data = action.payload
        }
    }
});

export const { getMission } = missionSlice.actions;

export default missionSlice.reducer;