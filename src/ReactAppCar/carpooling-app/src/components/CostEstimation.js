// src/components/CostEstimation.js
import React, { useState } from 'react';

function CostEstimation() {
    const [route, setRoute] = useState('');
    const [seatCount, setSeatCount] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');

    const handleEstimateCost = () => {
        // 基于固定费率或简单算法的成本估算逻辑，可以使用API调用与后端通信
        console.log('Estimating Cost:', { route, seatCount });
        // 这里需要实际的成本估算逻辑
        // 设置估算的成本到状态中
        setEstimatedCost('100'); // 假设成本为100
    };

    return (
        <div>
            <h2>Cost Estimation</h2>
            <input
                type="text"
                placeholder="Route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
            />
            <input
                type="number"
                placeholder="Seat Count"
                value={seatCount}
                onChange={(e) => setSeatCount(e.target.value)}
            />
            <button onClick={handleEstimateCost}>Estimate Cost</button>
            <p>Estimated Cost: ${estimatedCost}</p>
        </div>
    );
}

export default CostEstimation;
