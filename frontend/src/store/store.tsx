import { IUser } from '../models/IUser';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { AuthResponce } from '../models/response/AuthResponse';
import API_URL from '../http/index';

export default class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      console.log('error login');
    }
  }

  async registration(login: string, username: string, password: string) {
    try {
      const response = await AuthService.registration(login, username, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      console.log('error register');
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (err) {
      console.log('error logout');
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponce>(`${API_URL}/refresh`);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch(e) {
      console.log('error check');
    }
  }
}