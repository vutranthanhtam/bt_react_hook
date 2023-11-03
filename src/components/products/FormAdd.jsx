import React from 'react'

export default function FormAdd({setForm, handleAddProduct}) {
  return (
    <div className='productForm_component'>
        <form onSubmit={(event) => {
            event.preventDefault();
            handleAddProduct({
                id: Date.now() * Math.random(),
                title: event.target.title.value,
                time: event.target.time.value,
                status: event.target.status.value == "1" ? true : false
            })
            
            setForm(false)
        }} className='form_content'>
            <button onClick={() => {
                setForm(false)
            }} className='btn-form_close btn btn-outline-danger'>X</button>

            <div className='form_fields'>
                <p>title :</p> <input type="text"  name='title'/>
            </div>
            <div className='form_fields'>
                <p>time :</p> <input type="date" name='time'/>
            </div>
            <div className='form_fields'>
                <p>status :</p>
                 Đã xong <input type="radio" name='status' value={"true"} />
                 Chưa xong <input type="radio" name='status' value={"false"} checked/>
            </div>
            <button type='submit' className='btn-submit_form btn btn-outline-success'>Add</button>
        </form>
    </div>
  )
}
