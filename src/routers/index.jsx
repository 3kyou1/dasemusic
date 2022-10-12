import App from '../App'
import MusicList from '../pages/MusicList'
import Leaderboard from '../pages/Leaderboard'
import MyMusic from '../pages/MyMusic'
import AuditionList from '../pages/AuditionList'
import MyCollection from '../pages/MyCollection'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Search from '../pages/Search'

const BaseRouter = () =>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/musiclist' element={<MusicList />}></Route>
                <Route path='/leaderboard' element={<Leaderboard />}></Route>
                <Route path='/mymusic' element={<MyMusic/>}>
                    <Route path='/mymusic/auditionlist' element={<AuditionList/>}></Route>
                    <Route path='/mymusic/mycollection' element={<MyCollection/>}></Route>
                </Route>
                <Route path='/search' element={<Search/>}></Route>
            </Route>
            
            
        </Routes>
    </BrowserRouter>
)

export default BaseRouter