export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 20000,
        message: 'ok',
        data: {
          token: '341424324'
        }
      }
    }
  },
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 20000,
        message: 'ok',
        data: {
          info: {
            id: 1,
            name: '张三',
            age: 18,
          }
        }
      }
    }
  }
]