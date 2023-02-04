import React from 'react';
import { MdDelete } from 'react-icons/md';

const Order = ({ order, handleSigleDelete }) => {
    const { customar, masseage, price, serviceName, _id, phone, img } = order
    console.log(order)
    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <button onClick={()=>{handleSigleDelete(_id, serviceName)}} className='btn btn-ghost'><MdDelete className='text-2xl' /></button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div className=''>
                            <div className="font-bold ml-5">{customar}</div>
                            <div className="text-sm ml-5 opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>

                    <div className="font-bold ml-5">{serviceName}</div>
                    <div className="text-sm ml-5 opacity-50">${price}</div>
                </td>
                <th>
                    <label htmlFor="my-modal-5" className="btn btn-ghost">Masseage</label>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            {masseage}
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">Ok</label>
                            </div>
                        </div>
                    </div>
                </th>
                <th>
                    <button className="btn btn-ghost btn-xs">details </button>
                </th>
            </tr>
        </tbody>
    );
};

export default Order;