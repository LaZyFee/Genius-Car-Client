import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-nine-phi.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            });
    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order?');
        if (proceed) {
            fetch(`https://genius-car-server-nine-phi.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    };

    const handleStatusUpdate = id => {
        fetch(`https://genius-car-server-nine-phi.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            });
    };

    return (
        <div className="p-4">
            <h2 className="text-3xl lg:text-5xl mb-6">You have {orders.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table-auto w-full min-w-max">
                    <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6 text-center"></th>
                            <th className="py-3 px-6 text-center">Name</th>
                            <th className="py-3 px-6 text-center">Job</th>
                            <th className="py-3 px-6 text-center">Favorite Color</th>
                            <th className="py-3 px-6 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {orders.map(order => (
                            <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;