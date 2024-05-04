
import listMusicSlice from "./ListMusicSlice";
import userSlice from "./UserSlice";
import SongSlice from "./SongSlice";
import listFavoriteSlice from "./MusicFavoriteSlice";



export const rootReducer = {
    user: userSlice,
    listMusic: listMusicSlice,
    songSlice: SongSlice,
    listFavorite : listFavoriteSlice,
}