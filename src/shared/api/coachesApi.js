import api from './apiConnect';

export const getAllCoaches = async () => {
    const res = await api.get('/coaches');
    return res.data;
};

export const getCoachById = async (id) => {
    const res = await api.get(`/coaches/${id}`);
    return res.data;
};

export const createCoach = async (coachData) => {
    const res = await api.post('/coaches', coachData);
    return res.data;
};

export const updateCoach = async (id, coachData) => {
    const res = await api.put(`/coaches/${id}`, coachData);
    return res.data;
};

export const deleteCoach = async (id) => {
    const res = await api.delete(`/coaches/${id}`);
    return res.data;
};
