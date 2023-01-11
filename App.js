import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navigarionbar from "./Components/Navigarionbar";
import TableData from "./Components/TableData";
import Dashboard from "./Components/Dashboard";
import './styles.css'

function App() {
  let [data, setData] = useState([]);
  let [perPage, setPerPage] = useState(50);
  let [showAllData, setShowAllData] = useState(false);
  const urlData = "https://api.coincap.io/v2/assets";

  useEffect(() => {
    const fetchApi = async () => {
      try{
        let response = await axios.get(urlData);
        setData(response.data.data)
      }catch(error){
        console.log(error)
      }
    
  };
  fetchApi(urlData)

  }, []);

  const handleClickEvent = () => {
    if (!showAllData) {
      setShowAllData(true);
    } else {
      setShowAllData(false);
    }
  };

  return (
    <>
  <Navigarionbar />
  {data.length ? <Dashboard data={data} /> : null}

  {data.length ? (
    showAllData ? (
      <TableData data={data} />
    ) : (
      <TableData data={data.slice(0, perPage)} />
    )
  ) : (
    <>Loading</>
  )}
  {showAllData ? (
    <button
      className="btn"
      onClick={() => {
        handleClickEvent();
      }}
    >
      Show less
    </button>
  ) : (
    <div id="btn">
      <button
        className="btn"
        onClick={() => {
          handleClickEvent();
        }}
      >
        Show More
      </button>
    </div>
  )}
</>
);
}

export default App