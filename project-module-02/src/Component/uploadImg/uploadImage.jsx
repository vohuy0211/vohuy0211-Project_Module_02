import React, { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';

const UploadImage = () => {
    const [imageList, setImageList] = useState([])
    const handleOnChange = (e) => {
        const fileImage = e.target.files[0];
        if (!fileImage) return;

        const storages = storage
        const imgRefs = ref(storages, `image/${fileImage.name}`).put(fileImage)
        uploadBytes(imgRefs, fileImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                setImageList([ ...imageList, url ])
            });
        })
    }
    return (
        <div>
            <input type='file' onChange={handleOnChange} />
            {imageList && imageList.map((img) => <img src={img}/>)}
        </div>
    )
}

export default UploadImage