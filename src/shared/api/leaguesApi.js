import api from './apiConnect';

export const getAllLeagues = async () => {
    const res = await api.get('/leagues');
    return res.data;
};

export const getLeagueById = async (id) => {
    const res = await api.get(`/leagues/${id}`);
    return res.data;
};

export const createLeague = async (leagueData) => {
    const res = await api.post('/leagues', leagueData);
    return res.data;
};

export const updateLeague = async (id, leagueData) => {
    const res = await api.put(`/leagues/${id}`, leagueData);
    return res.data;
};

export const deleteLeague = async (id) => {
    const res = await api.delete(`/leagues/${id}`);
    return res.data;
};
