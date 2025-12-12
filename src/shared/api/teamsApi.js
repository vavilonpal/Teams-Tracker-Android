import api from './apiConnect';

export const getAllTeams = async () => {
    const res = await api.get('/teams');
    return res.data;
};

export const getTeamById = async (id) => {
    const res = await api.get(`/teams/${id}`);
    return res.data;
};

export const createTeam = async (teamData) => {
    const res = await api.post('/teams', teamData);
    return res.data;
};

export const updateTeam = async (id, teamData) => {
    const res = await api.put(`/teams/${id}`, teamData);
    return res.data;
};

export const deleteTeam = async (id) => {
    const res = await api.delete(`/teams/${id}`);
    return res.data;
};
