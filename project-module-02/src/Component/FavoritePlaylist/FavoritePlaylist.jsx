import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Headers } from '../Headers/headers'
import { Playbar } from '../Playbar/Playbar'
// import { GrMusic } from 'react-icons/gr';
// import { AiOutlinePlayCircle } from 'react-icons/ai';
import './FavoritePlaylist.css'
// import { AiOutlineLike } from 'react-icons/ai'
// import { RiMoreFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
// import { setSongIndex } from '../../Redux/Reducer/SongSlice';
import { CiMusicNote1 } from 'react-icons/ci';
import { BsPlayCircle } from 'react-icons/bs';
import { setSongIndex } from '../../Redux/Reducer/SongSlice'
const FavoritePlaylist = () => {

    const listFavorite = useSelector(state => state.listFavorite);
    const dispatch = useDispatch();

    const playMusic = song => {
        // console.log("Lấy dữ liệu =====>",song);
        dispatch(setSongIndex(song));
    }
    console.log("1111", listFavorite);
    return (
        <div>
            <div>
                <Navbar />
                <Headers />
                <Playbar />
            </div>
            <div className='wrapper-listFavorite'>
                <h1>Danh sách nhạc yêu thích của tôi</h1>
                <table className='table-list'>
                    <thead className='thead-list'>
                        <th></th>
                        <th>Music</th>
                        <th>Name Music</th>
                        <th>Creator</th>
                        <th>Actions</th>
                    </thead >
                    {listFavorite.map((song, index) => {
                        return (
                            <tbody className='thead-body' key={index}>
                                <td className='thead-body-tdImg'><CiMusicNote1 /></td>
                                <td ><img src={song.img} alt="" /></td>
                                <td><h4>{song.name}</h4></td>
                                <td className='thead-body-name'><i>{song.creator}</i></td>
                                <td className='thead-body-tdImg' onClick={() => playMusic(song)}><BsPlayCircle /></td>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default FavoritePlaylist