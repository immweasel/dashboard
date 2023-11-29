export const nameRegex = '[A-Za-zА-Яа-яЁё\\s\\-]+';

export const endpoints = {
  register: '/signup',
  auth: '/signin',
  dashbord: '/dashboard'
}

export const configMainApi = {
  baseApiUrl: 'http://localhost:3000',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json',
  },
  credentials: 'include',
  endpoint: {
    register: '/signup',
    auth: '/signin'
  }
}