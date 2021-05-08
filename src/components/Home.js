import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import User from "./User";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Home = (props) => {
  const [loaded, setLoaded] = useState([]);
  const [allData, setAllData] = useState([]);
  const fetchMoreData = async () => {
    let arr = loaded;
    let arr2 = allData.slice(arr.length - 1, arr.length + 4);
    arr = [...arr, ...arr2];
    setTimeout(() => {
      setLoaded(arr);
    }, 1000);
  };
  const userData = async () => {
    let { data } = await axios.get("https://randomuser.me/api/?results=500");
    setAllData(data.results);
    let arr = data.results.slice(0, 25);
    setLoaded(arr);
  };
  useEffect(() => {
    if (!localStorage.getItem("isAuthenticated")) {
      props.history.push("/");
    } else {
      userData();
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div
        className="border"
        id="scrollableDiv"
        style={{
          height: 700,
          overflow: "auto",
          borderColor: "red",
        }}
      >
        <InfiniteScroll
          dataLength={loaded.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Loader />}
          scrollableTarget="scrollableDiv"
        >
          {loaded &&
            loaded.map((item) => (
              <div className="row">
                <User
                  id={item.id.value}
                  name={item.name}
                  picture={item.picture}
                />
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
