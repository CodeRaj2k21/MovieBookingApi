using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieBookingApi.Models
{
    public class BookingItem
    {
        public long Id { get; set; }
        public DateTime ShowTime { get; set; }
        public string Venue { get; set; }
        public string Currency { get; set; }
        public double Price { get; set; }
    }
}
