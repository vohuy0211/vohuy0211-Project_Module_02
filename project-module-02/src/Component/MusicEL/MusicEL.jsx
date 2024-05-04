import React from 'react'
import './MusicEL.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSongIndex } from '../../Redux/Reducer/SongSlice'
const MusicEL = () => {
    const listMusic = useSelector(state => state.listMusic)

    const ElMusic = listMusic.filter(state => state.country === "Quốc tế")

    const dispatch = useDispatch();
    const playMusicEl = item => {
        dispatch(setSongIndex(item))
    }

    return (
        <div className='Allmusic-wrapper'>
            {ElMusic.map((item, idx) => {
                return (
                    <div key={idx} onClick={() => playMusicEl(item)}>
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

export default MusicEL