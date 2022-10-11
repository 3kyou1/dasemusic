import App from '../App'
import FindMusic from '../pages/FindMusic'
import List from '../pages/List'
import MyMusic from '../pages/MyMusic'
import {BrowserRouter,Routes,Route}from 'react-router-dom'

const BaseRouter = () =>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/findmusic' element={<FindMusic />}></Route>
            <Route path='/mymusic' element={<MyMusic />}></Route>
            <Route path='/list' element={<List/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter