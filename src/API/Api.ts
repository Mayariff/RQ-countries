import axios from "axios";

export const api = {
    get<T>(url: string, params?: object) {
        return axios.get<T>(url, params)
    },
    post<T>(url: string, data: T) {
        return axios.post<T>(url, data)
    },
    patch<T>(url: string, data: T) {
        return axios.patch<T>(url, data)
    },
    delete<T>(url: string) {
        return axios.delete<T>(url)
    }
}