import axios from "axios"

async function getRequest(url) {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`https://vastloop.com/blog/wp-json/wp/v2/${url}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        resolve(err)
      })
  })
  return promise
}

const API = {
  getRequest,
}

export default API
