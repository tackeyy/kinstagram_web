import axios from 'axios'

export default {
  get (url, data) {
    axios.get(url)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
