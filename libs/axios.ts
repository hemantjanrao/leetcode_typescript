import axios, { AxiosResponse } from 'axios';

async function getReq(): Promise<AxiosResponse<any, any>>{
    return axios.get('https://www.google.com');
}

async function name(): Promise<void> {
    const resp = await getReq();
    console.log(resp.headers);
}

name();    