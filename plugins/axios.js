export default ({ $axios, store }) => {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = localStorage.getItem('token');
  });

  $axios.onResponseError((e) => {
    store.dispatch('addNotification', {
      title: 'Hata',
      message: e.response.data.message
    })
  })

  $axios.onResponse((e) => {
    if (e.config.method === 'get') return

    store.dispatch('addNotification', {
      title: 'Tamamlandı',
      message: e.data.message
    })
  })
}