import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const DashboardOrg = () => {
  const { token } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/donations/org', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => setDonations(Array.isArray(data) ? data : []))
    .catch(err => console.error(err));
  }, [token]);

  const handleAction = async (id, status) => {
    const res = await fetch(`http://localhost:5001/api/donations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ status })
    });
    if(res.ok) {
      alert(`Donation ${status}`);
      setDonations(donations.map(d => d._id === id ? { ...d, status } : d));
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Organization Incoming Dashboard</h1>
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="font-bold text-gray-800 text-lg">Live Allocation Pipeline Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold">
                <th className="p-3">Donor</th>
                <th className="p-3">Details</th>
                <th className="p-3">Current Pipeline Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {donations.map((d) => (
                <tr key={d._id} className="hover:bg-gray-50/50">
                  <td className="p-3 font-medium">{d.donor?.name || 'Anonymous'}</td>
                  <td className="p-3">{d.type === 'Food' ? `${d.foodDetails?.items} (Qty: ${d.foodDetails?.quantity})` : 'Money Asset'}</td>
                  <td className="p-3"><span className="px-2.5 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800">{d.status}</span></td>
                  <td className="p-3 space-x-2">
                    {d.status === 'Pending' && (
                      <>
                        <button onClick={() => handleAction(d._id, 'Accepted')} className="bg-brand-primary text-white text-xs px-3 py-1.5 rounded-lg font-bold">Accept</button>
                        <button onClick={() => handleAction(d._id, 'Rejected')} className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {donations.length === 0 && (
                <tr><td colSpan="4" className="text-center p-6 text-gray-400">No incoming dynamic donations recorded yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrg;