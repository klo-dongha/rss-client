export default ({$axios, error: ctxError}) => {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url) // 요청 때마다 url 출력
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)

    if (code === 422) {
      console.log('422 in')
      ctxError({statusCode: 422, message: 'Route Error'})
    }
    return Promise.resolve(false)
  })
}
