import React from 'react'
export default function FormInfor({ product, index, handleDeleteProduct, handleUpdateProduct }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.title}</td>
      <td>{product.time}</td>
      <td>{product.status ? "đã xong" : "chưa xong"}</td>
      <td>
        <button onClick={() => {
          handleDeleteProduct(product.id)
        }} className='btn btn-outline-primary'>Delete</button>
        <button onClick={() => {
          handleUpdateProduct(product.id)
        }} className='btn btn-outline-warning'>Update</button>
      </td>
    </tr>
  )
}
