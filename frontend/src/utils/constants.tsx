export const nameRegex = '[A-Za-zА-Яа-яЁё\\s\\-]+';

export const endpoints = {
  register: '/signup',
  auth: '/signin'
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