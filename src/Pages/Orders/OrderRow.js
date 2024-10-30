import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-nine-phi.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service]);

    return (
        <tr className="hover:bg-gray-100">
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-16 h-16 sm:w-24 sm:h-24">
                            {orderService?.img && <img src={orderService.img} alt={serviceName} className="rounded" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm">{serviceName}</div>
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td className="text-center">Purple</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;