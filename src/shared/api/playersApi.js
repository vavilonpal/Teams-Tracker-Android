import api from './apiConnect';

export const getAllPlayers = async () => {
    const res = await api.get('/players');
    return res.data;
};

export const getPlayerById = async (id) => {
    const res = await api.get(`/players/${id}`);
    return res.data;
};

export const createPlayer = async (playerData) => {
    const res = await api.post('/players', playerData);
    return res.data;
};

export const updatePlayer = async (id, playerData) => {
    const res = await api.put(`/players/${id}`, playerData);
    return res.data;
};

export const deletePlayer = async (id) => {
    const res = await api.delete(`/players/${id}`);
    return res.data;
};
