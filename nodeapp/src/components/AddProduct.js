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
  };
  return (
    <form action="" onSubmit={handleSubmit} className='bg-slate-300 w-full h-[100vh] px-4 py-4 lg:py-10 lg:px-20'>
        <fieldset className=' w-full px-36'>
            <legend>Add Product</legend>
            <div className='form-group class="mb-6"'>
                <label class="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-600" htmlFor="title">title</label>
                <div className="input">
                    <input 
                    class="w-full py-2 px-2 border bg-white border-gray-300 rounded focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                     id='title' name='title' placeholder='title' onChange={handleChange} type="text" />
                </div>
            </div>
            <div className='form-group class="mb-6"'>
                <label class="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-600" htmlFor="price">Price</label>
                <div className="input">
                    <input 
                    class="w-full py-2 px-2 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                     id='price' name='price' placeholder='price' onChange={handleChange} type="number" />
                </div>
            </div>
            <div className='form-group class="mb-6"'>
                <label class="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-600" htmlFor="category">category</label>
                <div className="input">
                <select className='w-full py-2 px-2 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800' name="category" id="category" onChange={handleChange}>
                    <option value="">choose</option>
                    <option value="smartphone">SmartPhones</option>
                    <option value="laptop">laptop</option>

                </select>
                </div>
            </div>
            <div className='form-group class="mb-6"'>
                <label class="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-600" htmlFor="thumbnail">thumbnail</label>
                <div className="input">
                    <input 
                    class="w-full py-2 px-2 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                     id='thumbnail' name='thumbnail' placeholder='thumbnail' onChange={handleChange} type="text" />
                </div>
            </div>
            <div className='form-group class="mb-6"'>
                <label class="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-600" htmlFor="brand">Brand</label>
                <div className="input">
                <select className='w-full py-2 px-2 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800' name="brand" id="brand" onChange={handleChange}>
                    <option value="">choose</option>
                    <option value="samsung">Samsung</option>
                    <option value="oppo">Oppo</option>
                    <option value="realme">Realme</option>
                    <option value="asus">Asus</option>
                    <option value="hp">Hp</option>
                    <option value="apple">Apple</option>
                    <option value="iphone">Iphone</option>
                    <option value="del">Del</option>


                </select>
                </div>
            </div>
            <div className='form-group class="mb-6"'>
                <label class="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-600" htmlFor="discountPercentage">Discount</label>
                <div className="input">
                    <input 
                    class="w-full py-2 px-2 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                     id='discountPercentage' name='discountPercentage' placeholder='discountPercentage' onChange={handleChange} type="number" />
                </div>
            </div>
            <div className='form-group class=" mt-3"'>
               <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='submit'>Add Product</button>
            </div>
        </fieldset>
    </form>
  )
}

export default AddProduct