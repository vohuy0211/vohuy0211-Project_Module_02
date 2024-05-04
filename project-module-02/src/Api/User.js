import axiosClient from "./AxiosClient";

export class UserAPI {
    static register(param) {
        const url = '/register';
        return axiosClient.post(url, param)
    }
    static login(param) {
        const url = '/login';
        return axiosClient.post(url, param)
    }

    static getAllUsers() {
        const AllUsers = "/users";
        // console.log("11111",AllUsers);
        return axiosClient.get(AllUsers)
    }
    static statusUsers(id) {
        const url = `/users/${id}`;
        return axiosClient.patch(url);
    }
    
}

