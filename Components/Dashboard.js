import React from "react";
import "../styles.css";

function Dashboard({ data }) {
  let marketCap = 0,
    exchangeVol = 0,
    assets = 0,
    exchanges = 0,
    markets = 0,
    btcDomIndex = 0;
  data.forEach((coinData) => {
    marketCap += Number(coinData.marketCapUsd);
    exchangeVol += Number(coinData.volumeUsd24Hr);
    assets += coinData.vwap24Hr;
  });
  return (
    <div>
        <section className="Table-header">
        <h5 className="header-1">
          <span id="content1" style={{color:'white'}}>MARKET CAP</span>
          <br/>
          <span id="content2" style={{ fontSize: "15.0pt",color:'white' }}>
            $1.65T
          </span>
        </h5>
        <h5 className="header-2">
          <span id="content1" style={{color:'white'}}>EXCHANGE VOL</span>
          <span id="content2" style={{ fontSize: "15.0pt",color:'white' }}>
            $130.29B
          </span>
        </h5>
        <h5 className="header-3">
          <span id="content1" style={{color:'white'}}>ASSETS</span>
          <span id="content2" style={{ fontSize: "15.0pt",color:'white' }}>
            1,737
          </span>
        </h5>
        <h5 className="header-4">
          <span id="content1" style={{color:'white'}}>EXCHANGES</span>
          <span id="content2" style={{ fontSize: "15.0pt",color:'white' }}>
            90
          </span>
        </h5>
        <h5 className="header-5">
          <span id="content1" style={{color:'white'}}>MARKETS</span>
          <span id="content2" style={{ fontSize: "15.0pt",color:'white' }}>
            10,085
          </span>
        </h5>
        <h5 className="header-6">
          <span id="content1" style={{color:'white'}}>DOM INDEX</span>
          <span id="content2" style={{ fontSize: "15.0pt",color:'white' }}>
            45.0%
          </span>
        </h5>
      </section>
    </div>
  );
}

export default Dashboard;
