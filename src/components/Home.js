import React ,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import User from './User'
import InfiniteScroll from 'react-infinite-scroll-component';




const Home = (props) => {
    const [loaded, setLoaded] = useState([])
    const [allData, setAllData] = useState([])
    const fetchMoreData = async () =>{
        let arr = loaded;
        let arr2 = allData.slice(arr.length-1,arr.length+4)
        arr = [...arr,...arr2]
        console.log(arr);
        setTimeout(() => {
            setLoaded(arr)
            
          }, 1000);
        
        

    }
    const userData = async() =>{
        let {data}  = await axios.get('https://randomuser.me/api/?results=500')
        console.log(data.results)
        setAllData(data.results)
        let arr = data.results.slice(0,20)
        setLoaded(arr)
        
    }
    useEffect(() => {
        if (!localStorage.getItem('isAuthenticated')) {
            props.history.push('/');
          } else {
              userData()
          }
    }, [])
  return (
    <div >
      <Navbar/>
      <div
      className="border"
  id="scrollableDiv"
  style={{
    height: 500,
    overflow: 'auto',
    borderColor:'red'
    // display: 'flex',
    // flexDirection: 'column',
  }}
>

      <InfiniteScroll
    dataLength={loaded.length}
    next={fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={true}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
     {loaded && loaded.map((item)=> (

<div className="row">

<User id ={item.id.value} name={item.name} picture={item.picture} />

</div>

))}
  </InfiniteScroll>
  </div>

    
    </div>
  )
}

export default Home
