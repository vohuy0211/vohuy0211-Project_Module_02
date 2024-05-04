import React from 'react'
import './MusicClassic.css'
const MusicClassic = () => {
    return (
        <div className='wrapper-list-music-chill'>
            <h1><i>Tuổi trẻ và cổ điển</i></h1>
            <div className='list-chill'>
                <div className='list-chill-item'>
                    <img src="./cls-img.jfif" alt="" />
                    <div>
                        <p>Nhạc cổ điển</p>
                    </div>
                </div>
                <div className='list-chill-item'>
                    <img src="./cls-img-1.jfif" alt="" />
                    <div>
                        <p>Nhạc Việt khơi lồng</p>
                    </div>
                </div>
                <div className='list-chill-item'>
                    <img src="./cls-img-2.jfif" alt="" />
                    <div>
                        <p>Hãy cứ yêu đi vì cuộc đời cho phép</p>
                    </div>
                </div>
                <div className='list-chill-item'>
                    <img src="./cls-img-3.jfif" alt="" />
                    <div>
                        <p>Hãy cho tinh thần thoải mái bên những giai điệu V-POP</p>
                    </div>
                </div>
                <div className='list-chill-item'>
                    <img src="./cls-img-4.jfif" alt="" />
                    <div>
                        <p>Mùa đông 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicClassic