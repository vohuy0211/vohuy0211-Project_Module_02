import React from 'react'
import './VnMusic.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSongIndex } from '../../Redux/Reducer/SongSlice'
const VnMusic = () => {
    const listMusic = useSelector(state => state.listMusic)
    const listMusicVN = listMusic.filter(state => state.country === "Việt Nam")

    const  dispatch = useDispatch();
    const playMusicVn = item => {
        dispatch(setSongIndex(item))
    }
    return (
        <div className='Allmusic-wrapper'>
            {listMusicVN.map((item, idx) => {
                return (
                    <div key={idx} onClick={() => playMusicVn(item)}>
                        <div className='music'>
                            <img src={item.img} />
                            <div>
                                <h5>{item.name}</h5>
                                <p>{item.creator}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VnMusic