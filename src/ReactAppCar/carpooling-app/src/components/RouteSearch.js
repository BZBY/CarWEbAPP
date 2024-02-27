// src/components/RouteSearch.js
import React, { useState } from 'react';

function RouteSearch() {
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchRoute = () => {
        // 路线搜索逻辑，可以使用API调用与后端通信
        console.log('Searching Route:', { startPoint, endPoint });
        // 这里需要实际的路线搜索逻辑
        // 设置搜索结果到状态中（假数据）
        setSearchResults([
            { id: 1, startPoint: 'A', endPoint: 'B', distance: '10km', seatsAvailable: 2 },
            { id: 2, startPoint: 'B', endPoint: 'C', distance: '15km', seatsAvailable: 4 },
        ]);
    };

    return (
        <div>
            <h2>Route Search</h2>
            <input
                type="text"
                placeholder="Start Point"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Point"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
            />
            <button onClick={handleSearchRoute}>Search Route</button>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>
                        <p>Route: {result.startPoint} to {result.endPoint}</p>
                        <p>Distance: {result.distance}</p>
                        <p>Seats Available: {result.seatsAvailable}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RouteSearch;
