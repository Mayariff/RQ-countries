export type  QueryKeyT = [string, object | undefined];

export type GetInfinitePagesType<T>={
    nextId?: string;
    previousId?: string;
    data: T;
    count: number;
}

export type selectDataType ={
    field: string,
    value: string|number
}