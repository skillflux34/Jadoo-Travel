import React, { useEffect, useState } from 'react';
import api from "../../api/axiosConfig";
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

import Loader from '../Loader';

const BookingsPage = () => {
  const { user } = useAuth();
  const [trips, setTrips] = useState([]);
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const isAdmin = user?.role === 'admin';

  const fetchData = async () => {
    try {
      const requests = [api.get('/trips')];
      if (!isAdmin) {
        requests.push(api.get('/my-bookings'))
      }

      const [tripsRes, bookingsRes] = await Promise.all(requests);
      setTrips(tripsRes.data);

      if (!isAdmin && bookingsRes) {
        setMyBookings(bookingsRes.data);
      }
    } catch (err) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAdmin]);

  const handleCreateBooking = async (tripId) => {
    if (isAdmin) {
      toast.error("Admins cannot create bookings.");
      return;
    }

    try {
      await api.post('/bookings', { trip_id: tripId });
      toast.success("Booking Request Sent!");
      fetchData(); 
    } catch (err) {
      toast.error(err.response?.data?.detail || "Booking failed");
    }
  };

  const isTripBooked = (tripId) => {
    if (isAdmin) return false;
    return myBookings.some(booking => booking.trip_id === tripId || booking.id === tripId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="w-[90%] md:w-[80%] mx-auto py-10">
        
        <section className={isAdmin ? "mb-0" : "mb-16"}>
          <h2 className="text-sm font-bold text-[#DF6951] uppercase tracking-widest mb-2">Top Destinations</h2>
          <h1 className="text-4xl font-bold text-[#181E4B] mb-8">
            {isAdmin ? "Manage Available Destinations" : "Book Your Next Adventure"}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip) => {
              const alreadyBooked = isTripBooked(trip.id);
              
              return (
                <div key={trip.id} className="bg-white rounded-[30px] shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={trip.image_url} 
                      alt={trip.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#181E4B]">{trip.title}</h3>
                      <span className="text-[#DF6951] font-bold">Rs. {trip.price}</span>
                    </div>
                    
                    {!isAdmin ? (
                      <button 
                        onClick={() => handleCreateBooking(trip.id)}
                        disabled={alreadyBooked} 
                        className={`w-full py-3 rounded-xl font-bold transition-colors ${
                          alreadyBooked 
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-[#FF9901] text-white hover:bg-[#e68a00] cursor-pointer" 
                        }`}
                      >
                        {alreadyBooked ? "Already Booked" : "Book Now"}
                      </button>
                    ) : (
                      <div className="w-full py-3 text-center rounded-xl bg-gray-100 text-[#181E4B] font-semibold">
                        View Only Mode
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {!isAdmin && (
          <>
            <hr className="border-gray-200 mb-16" />
            <section>
              <h2 className="text-3xl font-bold text-[#181E4B] mb-8">My Booking History</h2>
              <div className="bg-white rounded-[30px] shadow-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[#181E4B] border-b">
                    <tr>
                      <th className="p-6 font-bold">Trip</th>
                      <th className="p-6 font-bold">Date Booked</th>
                      <th className="p-6 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myBookings.map((b) => (
                      <tr key={b.id} className="border-b border-gray-50 last:border-0">
                        <td className="p-6 font-medium text-[#181E4B]">{b.trip_name}</td>
                        <td className="p-6 text-gray-500">{new Date(b.booked_at).toLocaleDateString()}</td>
                        <td className="p-6">
                          <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                            b.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                            b.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-[#FF9901]'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;

