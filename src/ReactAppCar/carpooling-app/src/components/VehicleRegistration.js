// src/components/VehicleRegistration.js
import React, { useState } from 'react';

function VehicleRegistration() {
    const [vehicleType, setVehicleType] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [seatCount, setSeatCount] = useState('');

    const handleRegisterVehicle = () => {
        // 处理车辆注册逻辑，可以使用API调用与后端通信
        console.log('Registering Vehicle:', { vehicleType, licensePlate, seatCount });
    };

    return (
        <div>
            <h2>Vehicle Registration</h2>
            <input
                type="text"
                placeholder="Vehicle Type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
            />
            <input
                type="text"
                placeholder="License Plate"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Seat Count"
                value={seatCount}
                onChange={(e) => setSeatCount(e.target.value)}
            />
            <button onClick={handleRegisterVehicle}>Register Vehicle</button>
        </div>
    );
}

export default VehicleRegistration;
