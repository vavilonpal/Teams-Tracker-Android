// src/shared/api/matchesApi.js
import api from './apiConnect';

export const getAllMatches = async () => {
    const res = await api.get('/matches');
    return res.data;
};

export const getMatchById = async (id) => {
    const res = await api.get(`/matches/${id}`);
    return res.data;
};

export const createMatch = async (matchData) => {
    const res = await api.post('/matches', matchData);
    return res.data;
};

export const updateMatch = async (id, matchData) => {
    const res = await api.put(`/matches/${id}`, matchData);
    return res.data;
};

export const deleteMatch = async (id) => {
    const res = await api.delete(`/matches/${id}`);
    return res.data;
};
