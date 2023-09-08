import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2500'
});


export const GET = async (url) => {
    try {
        const resp = await api.get(url);
        return resp.data;
    } catch (error) {
        handleError(error);
    }
}

export const POST = async (url, body) => {
    try {
        const resp = await api.post(url, body);
        throw 'ww';
        return resp.data;
    } catch (error) {
        handleError(error);
    }
}

const handleError = (error) => {
    if (typeof (error) == 'string') {
        alert(error)
    } else if (error.message) {
        alert(error.message);
    } else {
        alert(error.response.data.message);
    }

}
