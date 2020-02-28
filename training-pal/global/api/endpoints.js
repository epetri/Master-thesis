//const URL = 'https://yellow-emu-67.localtunnel.me';
import Constants from 'expo-constants';
const { manifest } = Constants;
const URL = `http://${manifest.debuggerHost.split(':').shift()}:8000/`;
let call = {
  REGISTER: () => {
    return URL + 'api/register';
  },
  LOGIN: () => {
    return URL + 'api/login';
  }
};

export default call;
