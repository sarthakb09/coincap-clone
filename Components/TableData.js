import React from "react";
import { useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';


function TableData ( {data }) {
  let [Ascending, setAscending] = useState(true);

  const handleClickSort = () => {
    if (Ascending) {
      data.sort((a,b) => {
        return a.rank - b.rank;
      })
      setAscending(false);
    } else {
      data.sort((a,b) =>  {
        return b.rank - a.rank;
      })
      setAscending(true);
    }
  }

  return (
    <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Rank
                        {Ascending ? <VscChevronUp onClick={() => {handleClickSort()}} /> : <VscChevronDown onClick={() => {handleClickSort()}} />}
                        </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Vwap (24hr)</th>
                        <th>Supply</th>
                        <th>Volume (24hr)</th>
                        <th>Change (24hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((coin, index) => (
                        <tr key={coin.id}>
                            <td>{index + 1}</td>
                            <td>{coin.name}
                            <img style={{width: "20px", height: "20px", marginRight: "auto"}} src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt='icon'/>
                            </td>
                            <td>
                            {`$${Number(coin.priceUsd).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
                            </td>
                            <td>
                            {`$${(Number(coin.marketCapUsd)/10**9).toFixed(2)}b`}
                            </td>
                            <td>
                            {`$${Number(coin.vwap24Hr).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
                            </td>
                            <td>
                            {`${Number(coin.supply/10**6).toLocaleString(undefined, { maximumFractionDigits: 2 })}m`}
                            </td>
                            <td>
                            {`$${Number(coin.volumeUsd24Hr/10**9).toLocaleString(undefined, { maximumFractionDigits: 2 })}b`}
                            </td>
                            <td>
                            {`${Number(coin.changePercent24Hr).toFixed(2)}%`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
}

export default TableData;