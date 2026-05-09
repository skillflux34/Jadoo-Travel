import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import { TbLocationFilled, TbEdit, TbTrash } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import Loader from '../Loader';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  
  // Form State for Admin
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    days: '',
    image_url: ''
  });

  // 1. Fetch All Destinations
  const fetchAll = async () => {
    try {
      const response = await api.get("/featured-destinations");
      setDestinations(response.data);
    } catch (error) {
      console.error("Error fetching all destinations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // 2. Handle Form Submission (Admin Only)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (editId) {
            await api.put(`/featured-destinations/${editId}`, formData);
            toast.success("Updated Successfully!")
        } else {
            await api.post("/featured-destinations", formData);
            toast.success("Destination Added Successfully!");
        }
      setFormData({ title: '', price: '', days: '', image_url: '' });
      fetchAll();
    } catch (error) {
      toast.error("Action Failed");
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setFormData({
        title: item.title,
        price: item.price,
        days: item.days,
        image_url: item.image_url
    });
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  const handleDelete = async () => {
    try {
        await api.delete(`/featured-destinations/${showDeleteModal}`);
        setShowDeleteModal(null);
        fetchAll();
    } catch (error) {
        toast.error("Delete Failed!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  };

  return (
    <div className="w-[85%] mx-auto py-10">
      
      {/* ADMIN SECTION: Add New Form */}
      {user?.role === 'admin' && (
        <motion.div layout className="bg-gray-50 p-8 rounded-3xl shadow-inner mb-16 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-[#181E4B]">
            {editId ? "Edit Destination" : "Add New Destination"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input type="text" placeholder="Title" className="p-3 rounded-xl border" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <input type="text" placeholder="Price" className="p-3 rounded-xl border" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
            <input type="text" placeholder="Days" className="p-3 rounded-xl border" value={formData.days} onChange={(e) => setFormData({...formData, days: e.target.value})} required />
            <input type="text" placeholder="Image URL" className="p-3 rounded-xl border" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} required />
            <div className="lg:col-span-4 flex gap-2">
                <button type="submit" className="cursor-pointer flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">
                    {editId ? "Update Destination" : "Save Destination"}
                </button>
                {editId && <button onClick={() => {setEditId(null); setFormData({title:'',price:'',days:'',image_url:''})}} className="cursor-pointer hover:bg-gray-500 hover:text-white px-6 py-3 rounded-xl text-gray-500 border-gray-600 border">Cancel</button>}
            </div>
          </form>
        </motion.div>
      )}

      {/* Grid with Edit/Delete Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations.map((item) => (
          <div key={item.id} className="relative shadow-lg rounded-[30px] overflow-hidden bg-white group transition-all">
            
            {/* Admin Controls Overlay */}
            {user?.role === 'admin' && (
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(item)} className="cursor-pointer p-2 bg-white/90 text-blue-600 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all"><TbEdit size={20}/></button>
                    <button onClick={() => setShowDeleteModal(item.id)} className="cursor-pointer p-2 bg-white/90 text-red-600 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-all"><TbTrash size={20}/></button>
                </div>
            )}

            <div className="h-72 overflow-hidden">
              <img src={item.image_url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="p-6">
              <div className="flex justify-between text-black font-semibold text-lg mb-4">
                <span>{item.title}</span>
                <span>Rs. {item.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <TbLocationFilled />
                <span className='text-sm font-semibold'>{item.days} Days Trip</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl">
              <div className="text-red-500 flex justify-center mb-4"><TbTrash size={50}/></div>
              <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
              <p className="text-gray-500 mb-6">You want to delete this destination? This action cannot be undone.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowDeleteModal(null)} className="cursor-pointer flex-1 py-3 bg-gray-100 rounded-xl font-semibold">Cancel</button>
                <button onClick={handleDelete} className="cursor-pointer flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700">Delete</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Destination;

