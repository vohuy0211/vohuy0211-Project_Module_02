import logo from './logo.svg';
import './App.css';
import { Home } from './HomePages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SignUp } from './Component/Sign-Up/Sign-Up';
import { SignIn } from './Component/Sign-In/Sign-In';
import UploadImage from './Component/uploadImg/uploadImage';
import AllMusic from './Component/AllMusic/AllMusic';
import VnMusic from './Component/VnMusic/VnMusic';
import MusicEL from './Component/MusicEL/MusicEL';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleCallMusicAPI } from './Redux/Reducer/ListMusicSlice';
import Detail from './Component/Detail/Detail';
import FavoritePlaylist from './Component/FavoritePlaylist/FavoritePlaylist';
import AdminCheck from './Component/AdminCheck/AdminCheck';
import CheckUser from './Component/CheckUser/CheckUser';
import CheckListMusic from './Component/CheckListMusic/CheckListMusic';
import LoginLayout from './Layout/LoginLayout';




function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleCallMusicAPI()).unwrap();
  }, [])

  const user = JSON.parse(localStorage.getItem("users"))

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='all-music' element={<AllMusic />} />
          <Route path='vn-music' element={<VnMusic />} />
          <Route path='el-music' element={<MusicEL />} />
        </Route>
        <Route>
          <Route path="sign-up" element={<LoginLayout><SignUp/></LoginLayout>} />
          <Route path="sign-in" element={<LoginLayout><SignIn/></LoginLayout>} />
        </Route>
        <Route path='/uploadImage' element={<UploadImage />} />
        <Route path='/favorite-list' element={<FavoritePlaylist />} />
        <Route path='/admin' element={<AdminCheck />}/>
        <Route path='/user' element={<CheckUser />}/>
        <Route path='/listMusic' element={<CheckListMusic/>}/>
      </Routes>
    </div>
  );
}

function ProtectedRoute({ user, children }) {
  console.log("test user", user)
  if (user) {
    return children;
  }
  return <Navigate to="/sign-in" replace state={{ from: '/favorite-list' }} />
}

export default App;
