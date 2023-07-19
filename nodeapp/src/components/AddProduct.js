import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {
    const[product,setProduct]=useState({});

    const handleChange = (e) =>{
        setProduct({
            ...product,[e.target.name]:e.target.value
        })
    }

 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(product);
    addProduct(product)
 };

 const addProduct = async(product) => {
    const res = await axios.post("http://localhost:8080/products",product);
    console.log(res.data);
    // if (res.data) {
    //   setProduct(res.data);
    // }
  };
  return (
    <form action="" onSubmit={handleSubmit} className='bg-slate-300 w-full px-4 py-4 lg:py-10 lg:px-20'>
        <fieldset className=' w-full'>
            <legend>Add Product</legend>
            <div className='form-group'>
                <label htmlFor="title">title</label>
                <div className="input">
                    <input id='title' name='title' placeholder='title' onChange={handleChange} type="text" />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="price">Price</label>
                <div className="input">
                    <input id='price' name='price' placeholder='price' onChange={handleChange} type="number" />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="category">category</label>
                <div className="input">
                <select name="category" id="category" onChange={handleChange}>
                    <option value="">choose</option>
                    <option value="smartphone">SmartPhones</option>
                    <option value="laptop">laptop</option>

                </select>
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="thumbnail">thumbnail</label>
                <div className="input">
                    <input id='thumbnail' name='thumbnail' placeholder='thumbnail' onChange={handleChange} type="text" />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="brand">Brand</label>
                <div className="input">
                <select name="brand" id="brand" onChange={handleChange}>
                    <option value="">choose</option>
                    <option value="samsung">Samsung</option>
                    <option value="oppo">Oppo</option>
                    <option value="realme">Realme</option>

                </select>
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="discount">Discount</label>
                <div className="input">
                    <input id='discount' name='discount' placeholder='discount' onChange={handleChange} type="number" />
                </div>
            </div>
            <div className='form-group'>
               <button type='submit'>Add Product</button>
            </div>
        </fieldset>
    </form>
  )
}

export default AddProduct