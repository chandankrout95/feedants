import axios from 'axios';

// Android emulator -> host machine. Use your LAN IP on a real device.
export const BASE_URL = 'http://10.0.2.2:5000/api';
// Demo identity (replace with real auth token flow)
export const DEMO_USER_ID = 'demo-user-1';

const api = axios.create({ baseURL: BASE_URL, timeout: 15000 });
api.interceptors.request.use(cfg => {
  cfg.headers['x-user-id'] = DEMO_USER_ID;
  return cfg;
});

export const getCompetition = id => api.get(`/competitions/${id}`).then(r => r.data);
export const registerCompetition = id => api.post(`/competitions/${id}/register`).then(r => r.data);
export default api;
