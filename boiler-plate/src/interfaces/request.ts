export default interface Request {
    url: string;
    method: Methods;
    body: string;
    headers: string;
}

export enum Methods {
    get = "get",
    post = "post",
    default = 'get'
}
