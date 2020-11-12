import axios from 'axios'

const profile = axios.create({
  baseURL: 'https://randomuser.me/api/'
})
// const question = axios.create({
//   baseURL: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
// })

export default profile
