// CarpoolBackend/Models/Ride.cs
using System;

namespace CarpoolBackend.Models
{
    public class Ride
    {
        public int Id { get; set; }
        public string DriverName { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public DateTime DepartureTime { get; set; }
        public int AvailableSeats { get; set; }
        // 添加其他属性...

        // 导航属性，表示与该行程相关的乘客
        public List<Passenger> Passengers { get; set; }
    }
}