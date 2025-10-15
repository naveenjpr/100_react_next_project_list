import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Add_new_field_api() {
    const [cards, setCards] = useState([]);
    const [imagepath, setimagepath] = useState("");
    console.log(imagepath)

    const API_BASE_URL = 'https://node-j-my-portfolio-mail-send.onrender.com/api/frontend/Addnewfield';

    let viewdat = () => {
        axios.post(`${API_BASE_URL}/view`)
            .then((result) => {

                setimagepath(result.data.imageurlpath)
                setCards(result.data.data)

            }

            )

            .catch((error) => {


                console.log(error)
            })

    }

    useEffect(() => {
        viewdat()
    }, []);
    const [status, setstatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        axios.post(`${API_BASE_URL}/add`, formData)
            .then((result) => {
                setstatus(false)
                viewdat()

            })

            .catch((error) => {


                console.log(error)
            })

    };
    const [preImagePath, setPreImagePath] = useState('');


    let imagePreview = (event) => {
        try {
            let currentUrl = URL.createObjectURL(event.target.files[0]);
            setPreImagePath(currentUrl);
        } catch {
            setPreImagePath('');
        }
    };
    return (

        <>
            <div className={`fixed w-[550px] h-auto border[solid] border-[2px] border-[red] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white
                
                ${status ? "block" : "hidden"}
                `} >

               <div className="max-w-[600px] mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200">
  <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
    
    {/* Image Upload Section */}
    <div className="flex flex-col items-center gap-3">
      <label className="text-lg font-semibold text-gray-800">Upload Image</label>
      <input
        type="file"
        name="imageUrl"
        onChange={imagePreview}
        accept="image/*"
        className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      {preImagePath && (
        <img
          src={preImagePath}
          alt="Preview"
          className="w-[150px] h-[150px] object-cover rounded-lg border border-gray-300 shadow-sm"
        />
      )}
    </div>

    {/* Article Title */}
    <div className="flex flex-col">
      <label className="text-lg font-semibold text-gray-800 mb-1">Article Title</label>
      <input
        type="text"
        name="title"
        placeholder="Enter article title"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Author Name */}
    <div className="flex flex-col">
      <label className="text-lg font-semibold text-gray-800 mb-1">Author Name</label>
      <input
        type="text"
        name="author"
        placeholder="Enter author name"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Date */}
    <div className="flex flex-col">
      <label className="text-lg font-semibold text-gray-800 mb-1">Date</label>
      <input
        type="date"
        name="date"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow transition-all duration-200"
    >
      Submit
    </button>

  </form>
</div>

            </div>
            <div className='w-full bg-slate-400 min-h-screen'>
                <h1 className="text-center font-bold text-3xl my-4">Create New Field</h1>

                <div className=' max-w-[1170px] mx-auto'>

                    <button className='my-[10px] bg-blue-500 text-white px-4 py-2 float-right' onClick={() => setstatus(true)}>Add new field</button>

                    <div className='w-full grid grid-cols-3 gap-[10px] mt-[10px]'>

                        <div className="w-full">

                            <div className="overflow-hidden rounded-lg shadow-lg">

                                <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />

                                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        Article Title

                                    </h1>
                                    <p className="text-grey-darker text-sm">
                                        11/1/19
                                    </p>
                                </div>

                                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <p className="ml-2 text-sm">
                                        Author Name
                                    </p>
                                    <span className="hidden">Like</span>
                                    <i className="fa fa-heart"></i>
                                </div>

                            </div>

                        </div>


                        {/* Dynamically added cards */}
                        {cards.map((card, index) => (
                            <div key={index} className="w-full">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        alt="Placeholder"
                                        className="block h-[120px] w-full"
                                        src={`node-j-my-portfolio-mail-send.onrender.com/${imagepath}/${card.imageUrl}`}
                                    />
                                    <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            {card.title}
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            {card.date}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <p className="ml-2 text-sm">
                                            {card.author}
                                        </p>
                                        <span className="hidden">Like</span>
                                        <i className="fa fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>


    )
}
