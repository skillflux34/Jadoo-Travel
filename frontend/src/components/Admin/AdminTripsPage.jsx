import React, { useEffect, useState } from 'react';
import api from "../../api/axiosConfig";
import { toast } from 'react-toastify';
import Loader from '../Loader';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const AdminTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({ title: '', destination: '', price: '', start_date: '', end_date: '', image_url: '' });
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const fetchTrips = async () => {
    try {
      const res = await api.get('/trips');
      setTrips(res.data);
    } catch (err) {
      toast.error("Failed to fetch trips");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/trips/${editingId}`, formData);
        toast.success("Trip updated successfully!");
      } else {
        await api.post('/trips', formData);
        toast.success("New trip added!");
      }
      setFormData({ title: '', destination: '', price: '', start_date: '', end_date: '', image_url: '' });
      setEditingId(null);
      setIsModalOpen(false);
      fetchTrips();
    } catch (err) {
      toast.error("Operation failed");
    }
  };

  const handleEdit = (trip) => {
    setFormData({ 
        title: trip.title, 
        destination: trip.destination,
        price: trip.price, 
        start_date: trip.start_date,
        end_date: trip.end_date, 
        image_url: trip.image_url 
    });
    setEditingId(trip.id);
    setIsModalOpen(true);
  };

    const openDeleteModal = (id) => {
        setDeleteId(id);
    };

   const confirmDelete = async () => {
    try {
        await api.delete(`/trips/${deleteId}`);
        
        toast.success("Trip deleted successfully");
        
        fetchTrips(); 
    } catch (err) {
        const errorMsg = err.response?.data?.detail || "Delete failed";
        toast.error(errorMsg);
    } finally {
        setDeleteId(null);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#FFF9F1] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#181E4B]">Manage Destinations</h1>
          <button 
            onClick={() => { setIsModalOpen(true); setEditingId(null); setFormData({title:'', price:'', image_url:''}); }}
            className="flex items-center gap-2 bg-[#DF6951] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            <FiPlus /> Add New Trip
          </button>
        </div>

        {/* Trips Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-6">Preview</th>
                <th className="p-6">Title</th>
                <th className="p-6">Price (Rs.)</th>
                <th className="p-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <img src={trip.image_url} alt="" className="w-20 h-12 object-cover rounded-lg shadow-sm" />
                  </td>
                  <td className="p-6 font-semibold text-[#181E4B]">{trip.title}</td>
                  <td className="p-6 text-gray-600">{trip.price}</td>
                  <td className="p-6">
                    <div className="flex justify-center gap-4">
                      <button onClick={() => handleEdit(trip)} className="text-blue-500 hover:scale-110 transition-transform"><FiEdit2 size={20} /></button>
                      <button onClick={() => openDeleteModal(trip.id)} className="text-red-500 hover:scale-110 transition-transform"><FiTrash2 size={20} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
              <h2 className="text-2xl font-bold text-[#181E4B] mb-6">
                {editingId ? "Edit Trip" : "Create New Trip"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" placeholder="Trip Title" required
                    className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#DF6951]"
                    value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <input 
                    type="text" placeholder="Destination" required
                    className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#DF6951]"
                    value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
                <div className="flex gap-4">
                    <input 
                    type="date" placeholder="Start Date" required
                    className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#DF6951]"
                    value={formData.start_date} onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                    />
                    <input 
                    type="date" placeholder="End Date" required
                    className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#DF6951]"
                    value={formData.end_date} onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                    />
                </div>
                <input 
                    type="number" placeholder="Price (Rs.)" required
                    className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#DF6951]"
                    value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
                <input 
                    type="text" placeholder="Image URL" required
                    className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#DF6951]"
                    value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                />
                <div className="flex gap-4 mt-6">
                  <button type="submit" className="flex-1 bg-[#181E4B] text-white py-4 rounded-xl font-bold">
                    {editingId ? "Update Trip" : "Save Trip"}
                  </button>
                  <button 
                    type="button" onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteId && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] backdrop-blur-sm">
                <div className="bg-white rounded-[30px] p-10 w-full max-w-md shadow-2xl text-center">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiTrash2 size={40} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-[#181E4B] mb-2">Are you sure?</h2>
                <p className="text-gray-500 mb-8">This action cannot be undone. This trip will be removed from all destinations.</p>
                
                <div className="flex gap-4">
                    <button 
                    onClick={() => {
                        confirmDelete(deleteId);
                        setDeleteId(null);
                    }}
                    className="flex-1 bg-red-500 text-white py-4 rounded-xl font-bold hover:bg-red-600 transition-all"
                    >
                    Yes, Delete
                    </button>
                    <button 
                    onClick={() => setDeleteId(null)}
                    className="flex-1 bg-gray-100 text-[#181E4B] py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                    >
                    Cancel
                    </button>
                </div>
                </div>
            </div>
            )}

      </div>
    </div>
  );
};

export default AdminTripsPage;

