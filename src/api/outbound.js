import axios from './api.request';

// get gross
export const getGross = () => {
    return axios.request({
        url: `api/v1/outbounds/statistics`,
        method: 'get',
    });
};
