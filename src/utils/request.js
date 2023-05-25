
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Global from './Global'






const instance = axios.create({
  baseURL: Global.BASE_URL,
  // timeout: 1000000000,
  timeout: 10000,
  // headers: {"env":"moneyworx"}
})

instance.interceptors.request.use(
  async config => {
    

    const token = await AsyncStorage.getItem('token')
    const activeApp = await AsyncStorage.getItem('activeApp')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }


    config.headers.env = activeApp === 'loan'?'aspiro':'monieworx'

   
    // config.timeout = 2000000;
    config.timeout = 200000


  
    return config
  },
  err => {
   
    return Promise.reject(err)
  },
)



export default instance
