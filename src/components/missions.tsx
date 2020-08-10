import React, { useEffect, useState } from 'react';
import { missions as MissionsType, missions_missions as MissionType} from "../queries/types/missions";
import { Mission } from './mission';
import { useGetMissionHook } from '../state/getMissionHook';

export const Missions = () => {
  const [missions, setMissions] = useState<MissionsType>();
  const missionsData = useGetMissionHook();

  useEffect(() => {
    setMissions(missionsData);
  },[missionsData]);

  return (
      <div>
          <div>These are Missions</div>
          {
          missions?.missions?.map((mission: MissionType | null, index: number) => {
            return(
              mission?.name ? <Mission key={index} name={mission.name} /> : <></>
            )
          })
          }
      </div>
  );
}