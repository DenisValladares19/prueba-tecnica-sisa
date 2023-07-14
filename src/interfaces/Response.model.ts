export interface ResponseDTO<T> {
    code: string;
    message: string;
    content: T;
}


export type typeRequest = "GET" | "POST" | "PUT" | "PUT" | "DELETE" | "PATCH";

export interface RequestDTO {
    method: typeRequest,
    url: string,
    data?: any,
    params?: {[key: string]: string},
}