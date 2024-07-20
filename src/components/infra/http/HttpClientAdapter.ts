import axios, { AxiosInstance } from "axios";
import HttpClient from "./HttpClient";

export default class HttpClientAdapter implements HttpClient {
    private axiosInstance: AxiosInstance | null = null

    constructor () {
      const baseURL = 'http://localhost:89/'
      this.axiosInstance = axios.create({
        baseURL,
        headers: {
           'Content-Type': 'application/json' 
        }
      })   
    }

    async get(url: string, configs?: object | undefined): Promise<any> {
        return this.axiosInstance?.get(url, configs);
    }
    async post(url: string, body: any, configs?: object | undefined): Promise<any> {
        return this.axiosInstance?.post(url, body, configs);
    }
    async put(url: string, body: any, configs?: object | undefined): Promise<any> {
        return this.axiosInstance?.put(url, body, configs);
    }
    async delete(url: string, configs?: object | undefined): Promise<any> {
        return this.axiosInstance?.delete(url, configs);
    }
}