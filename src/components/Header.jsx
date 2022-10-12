import React ,{useState,useEffect}from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import { Layout, Menu,Input } from 'antd'
import Image from '../assets/logo.jpg'
import '../assets/base.scss'
import './scss/Header.scss'



const { Header } = Layout;
const { Search } = Input;
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem('歌单', 'musiclist' ),
    getItem('排行榜', 'leaderboard'),
    getItem('我的音乐', 'mymusic' ),
  ];  
function MusicHeader () {
    const [defaultKey,setDefaultKey] = useState(items[1].label)
    const navigate = useNavigate()
    const location = useLocation()
    
    const onSearch = (value) => {
      setTimeout(()=>{
        navigate('/search')
      }, 1000)
    };
    
    const onClick = (e) => {
        navigate('/'+e.key)
        setDefaultKey(e.key)
  };
  
  useEffect(()=>{
    let path = location.pathname
    let key = path.split('/')[1]
    setDefaultKey(key)
  },[location.pathname])
        
    return(
        <Header className="header" >
            <div>
                <div className="logo">
                    <img src={Image} alt="" className='logo'></img>
                </div>
                <div className='menu-div'>
                    <Menu theme="dark" mode="horizontal" onClick={onClick} defaultSelectedKeys={[defaultKey]} items={items} style={{width:400}}/>
                </div>
                <div className='search-div'>
                    <Search placeholder="搜索音乐" onSearch={onSearch}  style={{width:200,float:'right',margin:'16px'}}/>
                </div>
                
            </div>
            
        </Header>
    )
    
};



export default MusicHeader;