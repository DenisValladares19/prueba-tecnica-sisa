export enum ActionEnum {
    FETCH_INIT = "FETCH_INIT",
    FETCH_ERROR = "FETCH_ERROR",
    FETCH_SUCCESS = "FETCH_SUCCESS"
}

type Payload<T> = {data: T, message: string}

export type ActionResponse<T>  = | 
    {type: ActionEnum.FETCH_INIT} |
    {type: ActionEnum.FETCH_SUCCESS, payload: Payload<T>} |
    {type: ActionEnum.FETCH_ERROR}