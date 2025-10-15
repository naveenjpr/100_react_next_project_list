import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Add_new_field_api() {
    const [cards, setCards] = useState([]);
    const [imagepath, setimagepath] = useState("");
    console.log(imagepath)

    const API_BASE_URL = 'https://node-j-my-portfolio-mail-send.onrender.com/api/frontend/Addnewfield';

    let viewdat=()=>{
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
    return (

        <>
            <div className={`fixed w-[550px] h-auto border[solid] border-[2px] border-[red] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white
                
                ${status ? "block" : "hidden"}
                `} >

                <div className='grid grid-cols-1 gap-[10px] '>
          <form onSubmit={handleSubmit} encType="multipart/form-data">


                        <div className='relative'>


                            <input type="file" name='imageUrl' accept="image/*" required />

                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-[25px] font-bold text-[black]'>Article Title
                            </label>
                            <input type="text" name='title' className='w-[100%] border-[2px] border-[red]' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-[25px] font-bold text-[black]'>Author name
                            </label>
                            <input type="text" name='author' className='w-[100%] border-[2px] border-[red]' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-[25px] font-bold text-[black]'>Date</label>
                            <input type="date" name='date' className='w-[100%] border-[2px] border-[red]' />
                        </div>
                        <button type="save" className='bg-green-500 text-white px-4 py-2'>Submit</button>


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
  src={`http://localhost:5000/${imagepath}/${card.imageUrl}`}
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
