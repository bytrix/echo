import axios from 'axios';

export default async (url: string, options?: any) => {
    const { method = 'get' } = options || {};
    const json = await axios({url, method});
    const responseData = json.data;
    return responseData;
};