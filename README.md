# 🚀 100 JavaScript / React Projects

A growing collection of **100+ hands-on React mini-projects** built with **React 18 + Vite**, showcasing a wide range of UI patterns, APIs, browser features, and modern React concepts.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [All Projects & Routes](#-all-projects--routes)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Key Dependencies](#-key-dependencies)
- [Deployment](#-deployment)

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite 6 | Build tool & dev server |
| React Router DOM v7 | Client-side routing |
| Redux Toolkit | State management |
| Tailwind CSS v3 | Utility-first styling |
| React Helmet Async | SEO / meta tags |
| React Toastify | Toast notifications |
| Axios | HTTP requests |
| TensorFlow.js + BodyPix | AI background removal |
| Face-api.js | Face detection |
| Tesseract.js | OCR (Image to Text) |
| FFmpeg (WASM) | Video/audio processing |
| pdf-lib / pdfjs-dist | PDF handling |
| React Easy Crop | Image cropping |
| React Slick | Carousel/slider |
| Lightbox.js React | Image lightbox |

---

## 📁 Project Structure

```
hundred-javascript-project/
├── public/                        # Static assets
│   ├── YOGESHSCHOOL/              # School project assets
│   ├── naveen.png
│   ├── multipleimsge.png
│   ├── singleimage.png
│   ├── imgi_1_LPT-LOGO-BLack-1.png
│   ├── robots.txt
│   └── vite.svg
│
├── src/
│   ├── main.jsx                   # App entry point, all routes defined here
│   ├── App.jsx                    # Root App component
│   ├── index.css                  # Global styles
│   ├── App.css                    # App-level styles
│   ├── data.jsx                   # Shared static data
│   │
│   ├── Common page/               # Shared/reusable page components
│   │   ├── Header.jsx             # Global header/navigation
│   │   ├── Insurance.jsx          # Insurance landing page
│   │   └── SEO.jsx                # SEO helmet wrapper
│   │
│   ├── assets/                    # Image and icon assets
│   │
│   └── pages/                     # All mini-project pages (44+ folders)
│       ├── Home.jsx               # Project listing home page
│       ├── Accordion/             # FAQ accordion component
│       ├── Add_new_field/         # Dynamic field addition (localStorage & API)
│       ├── All_pdf_convert_one_pdf/   # Merge multiple PDFs into one
│       ├── Authentication/        # Login & Register pages
│       ├── Bg Remover/            # AI-powered background remover
│       ├── Calculator/            # Scientific/basic calculator
│       ├── CharacterLimitedInput/ # Input with character limit counter
│       ├── context_api/           # Context API demo (MainContext)
│       ├── digital-clock/         # Digital clock / countdown timer
│       ├── Editable/              # Editable navbar & logo (localStorage + API)
│       ├── form_data_show_to_table/   # Form → Table data display
│       ├── Hastag_generaator/     # Hashtag generator tool
│       ├── Header_Menu_navbar/    # Responsive header/menu navbar
│       ├── Image crop/            # Interactive image cropper
│       ├── Image-to-WebP-Converter/   # Convert images to WebP format
│       ├── image_drag_drope/      # Drag & drop image upload
│       ├── ImageToText/           # OCR - extract text from images
│       ├── letter_count/          # Letter/character counter
│       ├── Light_box/             # Image lightbox gallery
│       ├── Loading/               # Loading spinner/skeleton demos
│       ├── Mega_Menu/             # Mega menu navigation component
│       ├── Modalshow/             # Modal dialog component
│       ├── Movie/                 # Movie listing/search (API)
│       ├── multi-step-form/       # Multi-step form (localStorage & API variants)
│       ├── NotFoundPage/          # 404 Not Found page
│       ├── password_generator/    # Random password generator
│       ├── percentage/            # Percentage calculator
│       ├── Practics_notes_daily/  # Daily practice notes
│       ├── prime_number/          # Prime number checker/generator
│       ├── Product_filter/        # Product listing with category filter
│       ├── Product_find_price_filter/ # Product filter by price range
│       ├── Quiz_app/              # Interactive quiz application
│       ├── Randomcolor/           # Random color palette generator
│       ├── React_pagination/      # Pagination component demo
│       ├── Reserved_Keywords/     # JavaScript reserved keywords list
│       ├── SliderType/            # Image/content slider types
│       ├── Tapinng/               # Tabbed navigation component
│       ├── To_do_List/            # To-do list with CRUD
│       ├── toolkit-project/       # Redux Toolkit state management demo
│       ├── Tooltip/               # Custom tooltip component
│       ├── useRef/                # useRef hook demo
│       ├── Weather_app/           # Live weather app (API)
│       ├── Word_counter/          # Word & character counter
│       └── wordpress/             # WordPress API integration
│
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js               # ESLint rules
├── vercel.json                    # Vercel deployment config (SPA rewrites)
└── package.json                   # Project metadata & dependencies
```

---

## 📌 All Projects & Routes

| # | Project Name | Route |
|---|---|---|
| 1 | Home | `/` |
| 2 | FAQ Accordion | `/Faq` |
| 3 | PDF Merger | `/All_pdf_convert_one_pdf` |
| 4 | Calculator | `/calculator` |
| 5 | Form → Table | `/FormDataShowToTable` |
| 6 | Header Menu Navbar | `/Header_Menu_navbar` |
| 7 | Image to Text (OCR) | `/ImageToText` |
| 8 | Letter Count | `/Letter_count` |
| 9 | Lightbox Gallery | `/LightBox` |
| 10 | Mega Menu | `/Mega_Menu` |
| 11 | Modal Dialog | `/Modalshow` |
| 12 | Movie App | `/Movie` |
| 13 | Password Generator | `/Password` |
| 14 | Percentage Calculator | `/Percentage` |
| 15 | Prime Number | `/PrimeNumber` |
| 16 | Product Filter | `/ProductFilter` |
| 17 | Product Price Filter | `/Product_find_price_filter` |
| 18 | Random Color | `/Randomcolor` |
| 19 | Tabbing (Tabs) | `/Tapinng` |
| 20 | Weather App | `/WeatherApp` |
| 21 | Word Counter | `/Word_counter` |
| 22 | Tooltip | `/Tooltip` |
| 23 | Slider Types | `/SliderType` |
| 24 | BG Remover (AI) | `/BgRemover` |
| 25 | Hashtag Generator | `/Hash-tag-Generator` |
| 26 | Image → WebP Converter | `/Image-to-WebP-Converte` |
| 27 | Digital Clock / Countdown | `/Count_Down` |
| 28 | To-Do List | `/To_do_list` |
| 29 | Quiz App | `/QuizApp` |
| 30 | Reserved Keywords | `/Reserved_Keywords` |
| 31 | WordPress Integration | `/Wordpress` |
| 32 | Daily Practice Notes | `/Practics_notes_daily` |
| 33 | Loading Animations | `/Loading` |
| 34 | useRef Demo | `/UseRef` |
| 35 | React Pagination | `/React_pagination` |
| 36 | Login | `/Login` |
| 37 | Register | `/Register` |
| 38 | Redux Toolkit Demo | `/Toolkit` |
| 39 | Editable Navbar | `/Editable/navbar` |
| 40 | Editable Logo | `/Editable/logo` |
| 41 | Edit Navbar/Logo (LocalStorage) | `/Edit_navbar_or_logo_localstorage` |
| 42 | Editable Navbar (API) | `/Editable_navbar_api` |
| 43 | Add New Field (LocalStorage) | `/Add_new_field_localStorage` |
| 44 | Add New Field (API) | `/Add_new_field_api` |
| 45 | Multi-Step Form | `/multistep-form/*` |
| 46 | Multi-Step Form (API) | `/multistep-form-api/:id?*` |
| 47 | Multi-Step Form Table | `/multi_step_form_table` |
| 48 | Character Limited Input | `/CharacterLimitedInput` |
| 49 | Image Crop | `/ImageCrop` |
| 50 | Drag & Drop Images | `/Drag_drope` |
| 51 | Insurance Page | `/Insurance` |
| — | 404 Not Found | `*` |

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project folder
cd hundred-javascript-project

# Install all dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Vite HMR dev server |
| Build | `npm run build` | Create production bundle |
| Preview | `npm run preview` | Preview production build |
| Lint | `npm run lint` | Run ESLint checks |

---

## 📚 Key Dependencies

### Production

| Package | Version | Use |
|---|---|---|
| `react` | ^18.3.1 | Core UI library |
| `react-router-dom` | ^7.1.1 | Client-side routing |
| `@reduxjs/toolkit` | ^2.8.2 | Redux state management |
| `react-redux` | ^9.2.0 | React-Redux bindings |
| `axios` | ^1.7.9 | HTTP client |
| `react-helmet-async` | ^3.0.0 | Dynamic SEO meta tags |
| `react-toastify` | ^11.0.2 | Toast notifications |
| `react-icons` | ^5.4.0 | Icon library |
| `react-paginate` | ^8.3.0 | Pagination |
| `react-slick` | ^0.30.3 | Carousel/slider |
| `react-easy-crop` | ^5.5.3 | Image cropping |
| `lightbox.js-react` | ^1.4.7 | Lightbox gallery |
| `pdf-lib` | ^1.17.1 | PDF generation/merging |
| `pdfjs-dist` | ^5.1.91 | PDF rendering |
| `tesseract.js` | ^6.0.0 | OCR engine |
| `face-api.js` | ^0.22.2 | Face detection (AI) |
| `@tensorflow/tfjs` | ^4.22.0 | TensorFlow.js |
| `@tensorflow-models/body-pix` | ^2.2.1 | Body/BG segmentation |
| `@ffmpeg/ffmpeg` | ^0.12.15 | FFmpeg WASM |

### Dev

| Package | Version | Use |
|---|---|---|
| `vite` | ^6.0.5 | Build tool |
| `tailwindcss` | ^3.4.17 | CSS framework |
| `@vitejs/plugin-react` | ^4.3.4 | React Babel plugin |
| `eslint` | ^9.17.0 | Code linting |

---

## 🚀 Deployment

This project is configured for **Vercel** deployment with SPA client-side routing support via `vercel.json`.

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel
```

All routes are rewritten to `index.html` so React Router handles navigation correctly.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-project-name`
3. Add your mini-project inside `src/pages/YourProjectName/`
4. Register the route in `src/main.jsx`
5. Add it to the home page listing
6. Commit and open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using React + Vite — a practical playground for learning modern JavaScript & React patterns.
