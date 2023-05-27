import service from '../utils/request'

export const loginRequest = (data) => {
  return service({
    url: 'http://localhost:8080/captcha_email',
    method: 'get',
    params: {
      ...data,
    },
  })
}

export const verifyLogin = (data) => {
  return service({
    url: '',
    method: 'get',
    params: {
      ...data,
    },
  })
}


export const verifySignUp = (data) => {
  return service({
    url: '',
    method: 'get',
    params: {
      ...data,
    },
  })
}

export const signUp = (data) => {
  return service({
    url: '',
    method: 'get',
    params: {
      ...data,
    },
  })
}