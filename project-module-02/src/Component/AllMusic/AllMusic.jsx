import React from 'react'
import './AllMusic.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSongIndex } from '../../Redux/Reducer/SongSlice'

const AllMusic = () => {
  const listMusic = useSelector(state => state.listMusic)
  const dispatch = useDispatch()
  // console.log(listMusic);
  const playMusic = item => {
    dispatch(setSongIndex(item));
  }
  return (
    <div className='Allmusic-wrapper'>
      {listMusic.map((item, idx) => {
        return (
          <div key={idx} onClick={() => playMusic(item)}>
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

export default AllMusic