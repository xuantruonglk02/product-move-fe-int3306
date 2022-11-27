import { AxiosResponse } from 'axios';
import { HttpStatus, OrderDirection } from './constants';

export interface IBodyResponse<T = Record<string, string | number>>
    extends AxiosResponse {
    success: boolean;
    isRequestError?: boolean;
    code: HttpStatus;
    message: string;
    data: T;
    errors?: { key: string; message: string; errorCode: HttpStatus }[];
}

export interface ICommonGetListQuery {
    page?: number;
    limit?: number;
    keyword?: string;
    orderBy?: string;
    orderDirection?: OrderDirection;
}

export interface IGetListResponse<T> {
    items: T[];
    totalItems: number;
}
