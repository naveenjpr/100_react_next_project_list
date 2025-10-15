import React, { useEffect, useState } from 'react'

export default function Add_new_field_localStorage() {
    const [cards, setCards] = useState([]);

     // Load cards from localStorage when component mounts
    useEffect(() => {
        const savedCards = localStorage.getItem('addnewdata');
        if (savedCards) {
            setCards(JSON.parse(savedCards));
        }
    }, []);

    // Save cards to localStorage whenever cards state changes
    useEffect(() => {
        localStorage.setItem('addnewdata', JSON.stringify(cards));
    }, [cards]);

    let addNewCard = () => {

        const newCard = {
            id: Date.now(), // unique id based on timestamp
            title: `Article Title ${cards.length + 1}`,
            date: new Date().toLocaleDateString(),
            author: `Author Name ${cards.length + 1}`,
            imageUrl: `https://picsum.photos/600/400/?random&t=${Date.now()}` // adding timestamp to get different images
        };
        setCards([...cards, newCard]);

    }

    return (

        <div className='w-full bg-slate-400 min-h-screen'>
            <div className=' max-w-[1170px] mx-auto boder-[solid] border-[2px] border-[red]'>

                <button className='my-[10px] bg-blue-500 text-white px-4 py-2 float-right' onClick={addNewCard}>Add new field</button>

                <div className='w-full grid grid-cols-3 gap-[10px] mt-[10px]'>

                    <div className="w-full">

                        <article className="overflow-hidden rounded-lg shadow-lg">

                            <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    Article Title

                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </footer>

                        </article>

                    </div>


                    {/* Dynamically added cards */}
                    {cards.map((card) => (
                        <div key={card.id} className="w-full">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    alt="Placeholder"
                                    className="block h-auto w-full"
                                    src={card.imageUrl}
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
    )

}
