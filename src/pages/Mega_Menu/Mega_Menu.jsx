import React from "react"

export default function Mega_Menu() {
  const Mens_mega_menu_categories = [
    {
      heading: "Topwear",
      items: [
        "T-Shirts",
        "Casual Shirts",
        "Formal Shirts",
        "Sweatshirts",
        "Sweaters",
        "Jackets",
        "Blazers & Coats",
        "Suits",
        "Rain Jackets",
      ],
    },

    {
      heading: "Bottomwear",
      items: [
        "Jeans",
        "Casual Trousers",
        "Formal Trousers",
        "Shorts",
        "Track Pants & Joggers",
      ],
    },

    {
      heading: "Footwear",
      items: [
        "Casual Shoes",
        "Sports Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals & Floaters",
        "Flip Flops",
        "Socks",
      ],
    },
    {
      heading: "Sports & Active Wear",
      items: [
        "Sports Shoes",
        "Sports Sandals",
        "Active T-Shirts",
        "Track Pants & Shorts",
        "Tracksuits",
        "Jackets & Sweatshirts",
        "Sports Accessories",
        "Swimwear",
      ],
    },

    {
      heading: "Fashion Accessories",
      items: [
        "Wallets",
        "Belts",
        "Perfumes & Body Mists",
        "Trimmers",
        "Deodorants",
        "Ties, Cufflinks & Pocket Squares",
        "Accessory Gift Sets",
        "Caps & Hats",
        "Mufflers, Scarves & Gloves",
        "Phone Cases",
        "Rings & Wristwear",
        "Helmets",
      ],
    },

    {
      heading: "Innerwear & Sleepwear",
      items: [
        "Briefs & Trunks",
        "Boxers",
        "Vests",
        "Sleepwear & Loungewear",
        "Thermals",
      ],
    },
    {
      heading: "Indian & Festive Wear",
      items: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"],
    },
    {
      heading: "Gadgets",
      items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    },
    {
      heading: "Sunglasses & Frames",
      items: [],
    },
    {
      heading: "Watches",
      items: [],
    },

    {
      heading: "Bags & Backpacks",
      items: [],
    },
    {
      heading: "Luggages & Trolleys",
      items: [],
    },
  ]

  const women_mega_menu_categories = [
    {
      heading: "Indian & Fusion Wear",
      items: [
        "Kurtas & Suits",
        "Kurtis, Tunics & Tops",
        "Sarees",
        "Ethnic Wear",
        "Leggings, Salwars & Churidars",
        "Skirts & Palazzos",
        "Dress Materials",
        "Lehenga Cholis",
        "Dupattas & Shawls",
        "Jackets",
        "Belts, Scarves & More",
        "Watches & Wearables",
      ],
    },
    {
      heading: "Western Wear",
      items: [
        "Dresses",
        "Tops",
        "Tshirts",
        "Jeans",
        "Trousers & Capris",
        "Shorts & Skirts",
        "Co-ords",
        "Playsuits",
        "Jumpsuits",
        "Shrugs",
        "Sweaters & Sweatshirts",
        "Jackets & Coats",
        "Blazers & Waistcoats",
      ],
    },

    {
      heading: "Footwear",
      items: [
        "Flats",
        "Casual Shoes",
        "Heels",
        "Boots",
        "Sports Shoes & Floaters",
      ],
    },
    {
      heading: "Sports & Active Wear",
      items: ["Clothing", "Footwear", "Sports Accessories", "Sports Equipment"],
    },
    {
      heading: "Lingerie & Sleepwear",
      items: [
        "Bra",
        "Briefs",
        "Shapewear",
        "Sleepwear & Loungewear",
        "Swimwear",
        "Camisoles & Thermals",
      ],
    },
    {
      heading: "Beauty & Personal Care",
      items: [
        "Makeup",
        "Skincare",
        "Premium Beauty",
        "Lipsticks",
        "Fragrances",
      ],
    },
    {
      heading: "Gadgets",
      items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    },
    {
      heading: "Jewellery",
      items: ["Fashion Jewellery", "Fine Jewellery", "Earrings"],
    },
    {
      heading: "Backpacks",
      items: [],
    },
    {
      heading: "Handbags, Bags & Wallets",
      items: [],
    },
    {
      heading: "Luggages & Trolleys",
      items: [],
    },
    {
      heading: "Plus Size",
      items: [],
    },
    {
      heading: "Maternity",
      items: [],
    },
    {
      heading: "Sunglasses & Frames",
      items: [],
    },
  ]

  const kids_mega_menu_categories = [
    {
      category: "Boys Clothing",
      items: [
        "T-Shirts",
        "Shirts",
        "Shorts",
        "Jeans",
        "Trousers",
        "Clothing Sets",
        "Ethnic Wear",
        "Track Pants & Pyjamas",
        "Jacket, Sweater & Sweatshirts",
        "Party Wear",
        "Innerwear & Thermals",
        "Nightwear & Loungewear",
        "Value Packs",
      ],
    },
    {
      category: "Girls Clothing",
      items: [
        "Dresses",
        "Tops",
        "Tshirts",
        "Clothing Sets",
        "Lehenga choli",
        "Kurta Sets",
        "Party wear",
        "Dungarees & Jumpsuits",
        "Skirts & shorts",
        "Tights & Leggings",
        "Jeans, Trousers & Capris",
        "Jacket, Sweater & Sweatshirts",
        "Innerwear & Thermals",
        "Nightwear & Loungewear",
        "Value Packs",
      ],
    },
    {
      category: "Footwear",
      items: [
        "Casual Shoes",
        "Flipflops",
        "Sports Shoes",
        "Flats",
        "Sandals",
        "Heels",
        "School Shoes",
        "Socks",
      ],
    },
    {
      category: "Toys & Games",
      items: [
        "Learning & Development",
        "Activity Toys",
        "Soft Toys",
        "Action Figure / Play set",
      ],
    },
    {
      category: "Infants",
      items: [
        "Bodysuits",
        "Rompers & Sleepsuits",
        "Clothing Sets",
        "Tshirts & Tops",
        "Dresses",
        "Bottom wear",
        "Winter Wear",
        "Innerwear & Sleepwear",
        "Infant Care",
        "Home & Bath",
        "Personal Care",
      ],
    },
    {
      category: "Kids Accessories",
      items: [
        "Bags & Backpacks",
        "Watches",
        "Jewellery & Hair accessory",
        "Sunglasses",
        "Masks & Protective Gears",
        "Caps & Hats",
      ],
    },
    {
      category: "Brands",
      items: [
        "H&M",
        "Max Kids",
        "Pantaloons",
        "United Colors Of Benetton Kids",
        "YK",
        "U.S. Polo Assn. Kids",
        "Mothercare",
        "HRX",
      ],
    },
  ]
  const home_mega_menu_Categories = [
    {
      category: "Bed Linen & Furnishing",
      items: [
        "Bed Runners",
        "Mattress Protectors",
        "Bedsheets",
        "Bedding Sets",
        "Blankets, Quilts & Dohars",
        "Pillows & Pillow Covers",
        "Bed Covers",
        "Diwan Sets",
        "Chair Pads & Covers",
        "Sofa Covers",
      ],
    },
    {
      category: "Flooring",
      items: ["Floor Runners", "Carpets", "Floor Mats & Dhurries", "Door Mats"],
    },
    {
      category: "Bath",
      items: [
        "Bath Towels",
        "Hand & Face Towels",
        "Beach Towels",
        "Towels Set",
        "Bath Rugs",
        "Bath Robes",
        "Bathroom Accessories",
        "Shower Curtains",
      ],
    },
    {
      category: "Lamps & Lighting",
      items: [
        "Floor Lamps",
        "Ceiling Lamps",
        "Table Lamps",
        "Wall Lamps",
        "Outdoor Lamps",
        "String Lights",
      ],
    },
    {
      category: "Home Décor",
      items: [
        "Plants & Planters",
        "Aromas & Candles",
        "Clocks",
        "Mirrors",
        "Wall Décor",
        "Festive Decor",
        "Pooja Essentials",
        "Wall Shelves",
        "Fountains",
        "Showpieces & Vases",
        "Ottoman",
      ],
    },
    {
      category: "Cushions & Cushion Covers",
      items: ["Curtains", "Furniture", "Home Gift Sets"],
    },
    {
      category: "Kitchen & Table",
      items: [
        "Table Runners",
        "Dinnerware & Serveware",
        "Cups and Mugs",
        "Bakeware & Cookware",
        "Kitchen Storage & Tools",
        "Bar & Drinkware",
        "Table Covers & Furnishings",
      ],
    },
    {
      category: "Storage",
      items: [
        "Bins",
        "Hangers",
        "Organisers",
        "Hooks & Holders",
        "Laundry Bags",
      ],
    },
  ]

  const beauty_mega_menu_Categories = [
    {
      category: "Makeup",
      items: [
        "Lipstick",
        "Lip Gloss",
        "Lip Liner",
        "Mascara",
        "Eyeliner",
        "Kajal",
        "Eyeshadow",
        "Foundation",
        "Primer",
        "Concealer",
        "Compact",
        "Nail Polish",
      ],
    },
    {
      category: "Skincare, Bath & Body",
      items: [
        "Face Moisturiser",
        "Cleanser",
        "Masks & Peel",
        "Sunscreen",
        "Serum",
        "Face Wash",
        "Eye Cream",
        "Lip Balm",
        "Body Lotion",
        "Body Wash",
        "Body Scrub",
        "Hand Cream",
        "Baby Care",
        "Masks",
      ],
    },
    {
      category: "Haircare",
      items: [
        "Shampoo",
        "Conditioner",
        "Hair Cream",
        "Hair Oil",
        "Hair Gel",
        "Hair Color",
        "Hair Serum",
        "Hair Accessory",
      ],
    },
    {
      category: "Top Brands",
      items: [
        "Lakme",
        "Maybelline",
        "L'Oreal",
        "Philips",
        "Bath & Body Works",
        "THE BODY SHOP",
        "Biotique",
        "Mamaearth",
        "MCaffeine",
        "Nivea",
        "Lotus Herbals",
        "L'Oreal Professionnel",
        "KAMA AYURVEDA",
        "M.A.C",
        "Forest Essentials",
      ],
    },
    {
      category: "Fragrances",
      items: ["Perfume", "Deodorant", "Body Mist"],
    },
    {
      category: "Appliances",
      items: ["Hair Straightener", "Hair Dryer", "Epilator"],
    },
    {
      category: "Men's Grooming",
      items: ["Trimmers", "Beard Oil", "Hair Wax"],
    },
    {
      category: "Beauty Gift & Makeup Set",
      items: ["Beauty Gift", "Makeup Kit"],
    },

    {
      category: "Premium Beauty",
      items: [],
    },
    {
      category: "Wellness & Hygiene",
      items: [],
    },
  ]

  return (
    <>
      <header className="w-full shadow-lg py-5 h-screen ">
        <h1 className="text-center bg-black text-[35px] text-white py-[20px]">
          Mega menu
        </h1>
        <div className="border-[2px] border-[solid] shadow-lg ">
          <div className="max-w-[95%] mx-auto flex  items-center justify-between relative">
            {/* Logo on the Left */}
            {/* <div className=" w-[20%]  border-[solid] bg-red-400 ">logo</div> */}

            {/* Navigation Center */}
            <nav className="flex justify-start w-[80%]  ">
              <ul className="flex space-x-5  ">
                <li className="group cursor-pointer table md:text-[25px] text-[13px] hover:text-[red] text-center ">
                  Men
                  {/* Dropdown */}
                  <div className=" hidden group-hover:block absolute left-0 top-[100%] w-full max-h-[calc(100vh-50px)] overflow-auto shadow-lg bg-[#5f9ea0]">
                    {/* */}
                    <div className="text-left flex  flex-wrap w-[100%] justify-start items-start md:gap-4 gap-9 p-[5px]  overflow-auto">
                      {Mens_mega_menu_categories.map((category, index) => (
                        <div
                          key={index}
                          className="w-[18%] text-[13px] mb-1" // Dividing width evenly for 3 columns with a gap
                        >
                          {/* Category Heading */}
                          <h1 className="text-white font-semibold mb-2 ">
                            {category.heading}
                          </h1>

                          {/* Category Items */}
                          <div className="font-medium border-b text- border-[solid] pb-[5px]">
                            {category.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="block hover:text-pink-500 cursor-pointer"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="group md:px-[10px] border-l-2 border-l-gray-300 cursor-pointer table md:text-[25px] text-[13px] hover:text-[red] text-center ">
                  Women
                  <div className="hidden group-hover:block absolute left-0 top-[100%] w-full max-h-[calc(100vh-50px)] overflow-auto shadow-lg bg-white px-4 py-5">
                    <div className="flex text-left flex-wrap justify-between gap-6">
                      {women_mega_menu_categories.map((category, index) => (
                        <div key={index} className="w-[18%] text-[14px] mb-5">
                          {/* Category Heading */}
                          <h1 className="text-pink-500 font-semibold mb-3">
                            {category.heading}
                          </h1>

                          {/* Category Items */}
                          <div className="space-y-1">
                            {category.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="block text-gray-700 hover:text-pink-500 cursor-pointer"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="group md:px-[10px] border-l-2 border-l-gray-300 cursor-pointer table md:text-[25px] text-[13px] hover:text-[red] text-center ">
                  Kids
                  {/* Dropdown */}
                  <div className="hidden group-hover:block absolute left-0 top-[100%] w-full max-h-[calc(100vh-50px)] overflow-auto shadow-lg bg-black px-4 py-5">
                    {/* */}
                    <div className="text-left flex  flex-wrap w-[100%] justify-start items-start md:gap-4 gap-12 p-[5px]  overflow-auto">
                      {kids_mega_menu_categories.map((value, index) => (
                        <div
                          key={index}
                          className="w-[18%] text-[13px] mb-5" // Dividing width evenly for 3 columns with a gap
                        >
                          {/* Category Heading */}
                          <h1 className="text-pink-600 font-semibold mb-2 ">
                            {value.category}
                          </h1>

                          {/* Category Items */}
                          <div className="font-medium border-b border-[solid] text-white pb-[5px]">
                            {value.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="block text-white hover:text-pink-500 cursor-pointer"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>{" "}
                <li className="group md:px-[10px] border-l-2 border-l-gray-300 cursor-pointer table md:text-[25px] text-[13px] hover:text-[red] text-center ">
                  Home & Living{" "}
                  <div className="hidden group-hover:block absolute left-0 top-[100%] w-full max-h-[calc(100vh-50px)] overflow-auto shadow-lg bg-[#7fffd4] px-4 py-5">
                    <div className="flex text-left flex-wrap justify-start gap-9">
                      {home_mega_menu_Categories.map((category, index) => (
                        <div key={index} className="w-[18%] text-[14px] mb-5">
                          {/* Category Heading */}
                          <h1 className="text-pink-500 font-semibold mb-3">
                            {category.category}
                          </h1>

                          {/* Category Items */}
                          <div className="space-y-1">
                            {category.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="block text-gray-700 hover:text-pink-500 cursor-pointer"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="group md:px-[10px] border-l-2 border-l-gray-300 cursor-pointer table md:text-[25px] text-[13px] hover:text-[red] text-center ">
                  Beauty{" "}
                  <div className="hidden group-hover:block absolute left-0 top-[100%] w-full max-h-[calc(100vh-50px)] overflow-auto shadow-lg bg-[#7fff00] px-4 py-5">
                    <div className="flex text-left flex-wrap justify-between gap-x-10">
                      {beauty_mega_menu_Categories.map((v, i) => (
                        <div key={i} className="w-[10%] text-[14px] mb-5">
                          {/* Category Heading */}
                          <h1 className="text-pink-500 font-semibold mb-3">
                            {v.category}
                          </h1>

                          {/* Check if items exist */}
                          {v.items.length > 0 ? (
                            <div className="space-y-1">
                              {v.items.map((item, itemIndex) => (
                                <span
                                  key={itemIndex}
                                  className="block text-gray-700 hover:text-pink-500 cursor-pointer"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-500 italic">Coming Soon</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
