export interface StateResponse <T>{ 
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    data?: T
    message: string
}