import { missions as MissionsType } from "../queries/types/missions";
import { insert_users_insert_users_returning as AddUserRes} from "../queries/types/insert_users";
// export interface MissionInterface {
//     name: String;
// }

export interface MissionStateInterface {
    data: MissionsType
}

export interface ActionPayload<T>{
    payload: T;
}

export interface AddUsersState {
    users: AddUserRes[]
}

export interface StateInterface {
    missions: MissionStateInterface,
    addUser: AddUsersState
}