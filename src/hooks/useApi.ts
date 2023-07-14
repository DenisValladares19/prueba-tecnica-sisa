import { useReducer } from "react";
import { ActionEnum, ActionResponse } from "../interfaces/Action.model";
import { StateResponse } from "../interfaces/StateResponse.model";
import { RequestDTO } from "../interfaces/Response.model";

function reducer <T>(state: StateResponse<T>, action: ActionResponse<T>): StateResponse<T> {
    switch (action.type) {
        case ActionEnum.FETCH_INIT: return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }

        case ActionEnum.FETCH_SUCCESS: return {
            ...state,
            isLoading: false,
            isError: false, 
            isSuccess: true,
            data: action.payload.data,
            message: action.payload.message
        }

        case ActionEnum.FETCH_ERROR: return {
            ...state, 
            isLoading: false,
            isError: true, 
            isSuccess: false
        }
    
        default:
            return state;
    }
}

 function useApi<T>() {
    const initialState: StateResponse<T> = {
        isError: false,
        isLoading: false,
        isSuccess: false,
        data: undefined,
        message: "",
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetcher = async (config: RequestDTO) => {
        try {
            dispatch({type: ActionEnum.FETCH_INIT})
            const response = await fetch(config.url, {
                method: config.method as string,
                body: config.data ? JSON.stringify(config.data) : ""
            })

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const data = await response.json();

            dispatch({
                type: ActionEnum.FETCH_SUCCESS, 
                payload: { data: data as T, message: "success operation" }
            })
            return {data: data as T, ok: true}
        } catch (error) {
            console.log("[error useApi]", error)
            dispatch({type: ActionEnum.FETCH_ERROR})
            return { ok: false}
        }
    }



    return [state, fetcher]
}

export default useApi;
