export default function (instance) {
  return {
    signUp (signUpForm) {
      return instance
        .post('/api/user/signup', signUpForm)
        .then(response => response.data)
    },
    getPersonalDetail () {
      return instance
        .get('/api/user/detail')
        .then(response => response.data)
    },
    postPersonalDetail (personalDetailForm) {
      return instance
        .post('/api/user/detail', personalDetailForm)
        .then(response => response.data)
    }
  }
}
