import api from '../http/index';
import { AxiosResponse } from 'axios';
import { AuthResponce } from '../models/response/AuthResponse';

export default class AuthService {

  static async login(login: string, password: string): Promise<AxiosResponse<AuthResponce>> {
    return api.post<AuthResponce>('/auth/login', {login, password});
  }

  static async registration(login: string, username: string, password: string): Promise<AxiosResponse<AuthResponce>> {
    return api.post<AuthResponce>('/auth/register', {login, username, password});
  }

  static async logout(): Promise<void> {
    return api.post('/logout');
  }
}