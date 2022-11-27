import { IBodyResponse } from '@/common/interfaces';
import { ApiService } from '@/common/services/api';
import service from '@/plugins/axios';
import { ILoginBody } from '../interfaces';

class AuthService extends ApiService {
    login(body: ILoginBody) {
        return this.client.post<ILoginBody, IBodyResponse<ILoginBody>>(
            `${this.baseUrl}/login`,
            body,
        );
    }
}

export const authService = new AuthService({ baseUrl: '/auth' }, service);
