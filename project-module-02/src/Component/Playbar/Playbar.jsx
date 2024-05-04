import React, { useEffect, useState } from 'react'
import './Playbar.css'
import { GiEternalLove, GiMicrophone } from "react-icons/gi"
import { LuMoreHorizontal } from "react-icons/lu"
import { BsPlayCircle } from "react-icons/bs"
import { FiPauseCircle, FiVolume1 } from "react-icons/fi"
import { CgPlayTrackNextO, CgPlayTrackPrevO } from "react-icons/cg"
import { BiMoviePlay } from "react-icons/bi"
import { MdOutlineDesktopWindows } from "react-icons/md"
import { LuListStart } from "react-icons/lu"
import { useDispatch, useSelector } from 'react-redux'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { clearSongIndex } from '../../Redux/Reducer/SongSlice'
import { AiOutlinePlusCircle } from "react-icons/ai"
import { addToListMusic } from '../../Redux/Reducer/MusicFavoriteSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Playbar = () => {
    const [index, setIndex] = useState(0)
    const listMusic = useSelector(state => state.listMusic);
    const playMusic = useSelector(state => state.songSlice);
    // console.log("33333", playMusic);
    // console.log("list Mucsic", listMusic);
    // console.log("listMusic =======>", listMusic)
    const dispatch = useDispatch()

    const handleClickPrevious = () => {
        setIndex((index) => {
            return index == 0 ? listMusic.length - 1 : index - 1
        })
    }
    const handleClickNext = () => {
        setIndex((index) => {
            return index == listMusic.length - 1 ? 0 : index + 1
        })
    }

    // console.log("add====>", selectedSong);
    const addMusic = () => {

        const selectedSong = listMusic[index];
        dispatch(addToListMusic(selectedSong))
        let findIndex = -1;
        for (let i = 0; i < listMusic.length; i++) {
            if (listMusic[i].id === selectedSong.id) {
                findIndex = i;
                break;
            }
        }
        if (findIndex !== -1) {
            toast.info('Bài nhạc này đã thêm vào danh sách', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        } else {
            dispatch(addToListMusic(selectedSong));
            toast.success('Thêm thành công', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }

    const songIndex = listMusic?.findIndex((music) => +music.id == +playMusic.id);
    useEffect(() => {
        (songIndex != -1) ? setIndex(songIndex) : setIndex(0)
    }, [songIndex])

    return (
        <div className='wrapper-playbar'>
            <div className='playbar-left'>
                <img src={listMusic[index]?.img} />
                <div className='playbar-name'>
                    <h4>{listMusic[index]?.name}</h4>
                    <p>{listMusic[index]?.creator}</p>
                </div>
                <div className='item-icon'>
                    <GiEternalLove />
                </div>
                <div className='item-icon'>
                    <LuMoreHorizontal />
                </div>
                <div className='item-icon' onClick={() => { addMusic(songIndex) }}>
                    <AiOutlinePlusCircle />
                </div>
            </div>
            <div>
                <AudioPlayer
                    style={{ borderRadius: "1rem", backgroundColor: "#130c1c", width: "500px", height: "90px" }}
                    autoPlay
                    src={listMusic[index]?.link}
                    onPlay={e => console.log("onPlay")}
                    showSkipControls={true}
                    showJumpControls={false}
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                    onEnded={handleClickNext}
                // other props here
                />
            </div>
            <div className='playbar-right'>
                <div>
                    <BiMoviePlay />
                </div>
                <div>
                    <GiMicrophone />
                </div>
                <div>
                    <MdOutlineDesktopWindows />
                </div>
                <div>
                    <LuListStart />
                </div>
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='light'
                />
            </div>
        </div>
    )
}
