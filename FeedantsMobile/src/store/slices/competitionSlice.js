import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

// Backend sends a machine-readable code; the UI translates it.
const msg = e => e?.response?.data?.code || (e?.response ? 'GENERIC' : 'NETWORK');

export const fetchCompetition = createAsyncThunk('competition/fetch', async (id, { rejectWithValue }) => {
  try { return await api.getCompetition(id); } catch (e) { return rejectWithValue(msg(e)); }
});

export const registerForCompetition = createAsyncThunk('competition/register', async (id, { rejectWithValue }) => {
  try { return await api.registerCompetition(id); } catch (e) { return rejectWithValue(msg(e)); }
});

const initialState = {
  competition: null,
  availability: { maxParticipants: 0, registered: 0, remaining: 0 },
  userState: { isRegistered: false },
  status: 'idle', // idle | loading | success | error
  registrationStatus: 'idle', // idle | registering | registrationSuccess | registrationError
  loading: false,
  registering: false,
  error: null,
  registerError: null,
};

const slice = createSlice({
  name: 'competition',
  initialState,
  reducers: {},
  extraReducers: b => {
    b.addCase(fetchCompetition.pending, s => { s.loading = true; s.status = 'loading'; s.error = null; })
      .addCase(fetchCompetition.fulfilled, (s, { payload }) => {
        s.loading = false; s.status = 'success';
        s.competition = payload.competition; s.availability = payload.availability; s.userState = payload.userState;
      })
      .addCase(fetchCompetition.rejected, (s, { payload }) => { s.loading = false; s.status = 'error'; s.error = payload; })
      .addCase(registerForCompetition.pending, s => {
        s.registering = true; s.registrationStatus = 'registering'; s.registerError = null;
      })
      // Updated ONLY after the backend confirms.
      .addCase(registerForCompetition.fulfilled, (s, { payload }) => {
        s.registering = false; s.registrationStatus = 'registrationSuccess';
        s.availability = payload.availability; s.userState = payload.userState;
      })
      .addCase(registerForCompetition.rejected, (s, { payload }) => {
        s.registering = false; s.registrationStatus = 'registrationError'; s.registerError = payload;
      });
  },
});
export default slice.reducer;
