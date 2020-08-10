import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { MISSION_NAMES } from '../queries/index';
import { useDispatch, useSelector } from 'react-redux';
import { getMission } from './mission';
import { StateInterface } from '../interfaces';
import { missions as MissionsType} from "../queries/types/missions";

export const useGetMissionHook = () => {
    const dispatch = useDispatch();
    const missionsData = useSelector((state: StateInterface) => state.missions.data); 
    const { data } = useQuery<MissionsType>(MISSION_NAMES);
    useEffect(() => {
        if(data?.missions){
            dispatch(getMission(data));
        }
    },[data, dispatch]);
    return missionsData;
}