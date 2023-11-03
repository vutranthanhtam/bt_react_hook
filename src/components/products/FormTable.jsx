import React, { useState } from 'react'
import FormAdd from './FormAdd';
import FormInfor from './FormInfor';
import './form.scss'
export default function FormTable() {
    const [products, setProducts] = useState([
        {
          title: "job1",
          time: "11/1/2013",
          status: false 
        },
      ])
    const [form, setForm] = useState(false);

    function handleAddProduct(newProduct) {
        setProducts([...products, newProduct])
    }

    function handleDeleteProduct(productId) {
        setProducts(products.filter(product => product.id != productId))
    }
    
    function handleUpdateProduct(productId) {
        setProducts(products.map(product => {
            if (product.id == productId) {
                product.title = prompt("nhập title mới"),
                product.time = prompt("nhập time mới"),
                product.status = prompt("nhập status mới") ? true : false
            }
            return product
        }
        ))
    }
    return (
        <>
            <button onClick={() => {
                setForm(true)
            }} className='btn btn-outline-success'>Add</button>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return <FormInfor handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} key={Date.now() * Math.random()} product={product}  index={index}/>        
                        })
                        
                    }
                </tbody>
            </table>
            {
                form && <FormAdd handleAddProduct={handleAddProduct} setForm={setForm}/>
            }
        </>
    )
}
