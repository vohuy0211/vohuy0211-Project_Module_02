import axiosClient from "./AxiosClient";

class MusicAPI {
    static getAllMusic() {
        const url = "/listMusic";
        return axiosClient.get(url);
    }


    //ADMINS
    static addMusic(param) {
        const url = "/listMusic";
        return axiosClient.post(url,param);
    }
}

export default MusicAPI;