import React, { useEffect, useState } from 'react';
import api from "../../api/axiosConfig";
import { toast } from 'react-toastify';

import Loader from '../Loader';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const response = await api.get('/admin/bookings');
      setBookings(response.data);
    } catch (err) {
      toast.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await api.patch(`/admin/bookings/${bookingId}/status`, { status: newStatus });
      toast.success(`Booking ${newStatus}`);

      fetchBookings(); 
    } catch (err) {
      toast.error("Status update failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#181E4B]">Admin Booking Management</h1>
          <span className="bg-[#FF9901] text-white px-4 py-2 rounded-full text-sm font-semibold">
            {bookings.length} Total Bookings
          </span>
        </div>

        <div className="bg-white rounded-[35px] shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#181E4B] text-white">
              <tr>
                <th className="p-5 font-semibold">User Name</th>
                <th className="p-5 font-semibold">Email</th>
                <th className="p-5 font-semibold">Trip Name</th>
                <th className="p-5 font-semibold">Status</th>
                <th className="p-5 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-5 text-[#181E4B] font-medium">{booking.user_name}</td>
                  <td className="p-5 text-gray-500">{booking.user_email}</td>
                  <td className="p-5 text-[#181E4B]">{booking.user_trip}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                      booking.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-5 flex justify-center gap-3">
                    <button 
                      onClick={() => handleStatusChange(booking.id, "Confirmed")}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-all"
                    >
                      Confirm
                    </button>
                    <button 
                      onClick={() => handleStatusChange(booking.id, "Cancelled")}
                      className="bg-[#DF6951] hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-all"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {bookings.length === 0 && (
            <div className="p-10 text-center text-gray-400">No bookings found in the system.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

