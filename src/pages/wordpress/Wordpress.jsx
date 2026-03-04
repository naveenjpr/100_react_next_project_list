import React from "react";
import Header from "../../Common page/Header";
import { FaArrowCircleRight } from "react-icons/fa";
import Appearcance from "../../assets/Screenshot 2025-04-29 223126.png";
import note1 from "../../assets/wordpress/Screenshot 2025-05-01 191537.png";
import note2 from "../../assets/wordpress/Screenshot 2025-05-01 192111.png";
import note3 from "../../assets/wordpress/Screenshot 2025-05-01 192546.png";
import note4 from "../../assets/wordpress/Screenshot 2025-05-01 193333.png";
import note5 from "../../assets/wordpress/Screenshot 2025-05-01 213149.png";
import note6 from "../../assets/wordpress/Screenshot 2025-05-01 213647.png";
import note7 from "../../assets/wordpress/Screenshot 2025-05-01 214232.png";
import { HiH3 } from "react-icons/hi2";
import SEO from "../../Common page/SEO";

export default function Wordpress() {
  const navItems = [
    { id: "Appearance", text: "Appearance" },
    {
      id: "Customize-sidebar-change-Widgets",
      text: "Customize-sidebar-change-Widgets",
    },
    { id: "Customize", text: "Customize" },
    { id: "Sidebar", text: "Sidebar" },
    { id: "Inside-theme-install", text: "Inside-theme-install" },
    { id: "Logochange", text: "Logo-change" },
    { id: "Logositeiconsiteidentiny", text: "Logo-site-icons-iteidentiny" },
    { id: "One-Page-Website-Rules", text: "One-Page-Website-Rules" },
    { id: "Paidtheme", text: "Paid-theme" },
    { id: "Passwordlostpasswordchnage", text: "Password-lost password-change" },
    { id: "Plugin_name", text: "Plugin_name" },
    { id: "Post_add", text: "Post_add" },
    { id: "Slider_apply_pc_full_width", text: "Slider_apply_pc_full_width" },
    { id: "Sticky_page", text: "Sticky_page" },
    { id: "Upload_file_size_change", text: "Upload_file_size_change" },
    { id: "Username_databasename", text: "Username_databasename" },
    { id: "Contact7form", text: "Contact7form" },
    { id: "AdvancedContactform7DB", text: "AdvancedContactform7DB" },
    { id: "WPForms_Contact_Form", text: "WPForms_Contact_Form" },
    { id: "SMTP_configure-3", text: "SMTP_configure" },
    { id: "Elementor_details", text: "Elementor_details" },
    { id: "Preloader_use", text: "Preloader_use" },
    { id: "Recapha", text: "Recapha" },
    { id: "Seo", text: "Seo" },
    { id: "Website_role", text: "Website_role" },
  ];
  return (
    <>
      <Header />
      <div className="w-[100%] bg-white border-b-2 border-[grey] sticky top-[50px] left-0">
        <ul className="flex max-w-[95%] mx-auto lg:flex-wrap overflow-auto md:gap-[10px] gap-[4px] justify-start items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="bg-gray-200 hover:text-[blue] cursor-pointer p-2 text-[red] font-medium"
            >
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[100%] ">
        <h1 className="text-3xl text-center py-[10px] font-bold mb-8 text-blue-700">
          WordPress notes
        </h1>
        {/* Appearance Menu Options start */}
        <div className="w-[95%] grid grid-cols-1 mx-auto">
          <Appearance />
          <CustomizesidebarchangeWidgets />
          <Customize />
          <Sidebar />
          <Insidethemeinstall />
          <Logochange />
          <Logositeiconsiteidentiny />
          <OnePageWebsiteRules />
          <Paidtheme />
          <Passwordlostpasswordchnage />
          <Plugin_name />
          <Post_add />
          <Slider_apply_pc_full_width />
          <Sticky_page />
          <Upload_file_size_change />
          <Username_databasename />
          <Contact7form />
          <AdvancedContactform7DB />
          <WPForms_Contact_Form />
          <SMTP_configure />
          <Elementor_details />
          <Preloader_use />
          <Recapha />
          <Seo />
          <Website_role />
        </div>
        {/* customize, sidebar change,Widgets start */}
      </div>
    </>
  );
}

function Appearance() {
  return (
    <>
      <div
        className="mb-12  border-[2px] border-[black] my-[10px]"
        id="Appearance"
      >
        <h2 className="text-2xl font-semibold text-center text-[red] mb-4 ">
          Appearance Menu Options
          <img src={Appearcance} className="" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              1) Themes
            </h3>
            <p className="text-gray-700">
              Manage and change your WordPress themes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              2) Customize
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Site Identity (Logo, Site Title, Tagline, Favicon)</li>
              <li>Colors</li>
              <li>Menus</li>
              <li>Widgets</li>
              <li>Homepage Settings</li>
              <li>Additional CSS</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              3) Widgets
            </h3>
            <p className="text-gray-700 mb-2">
              Sidebar, footer, or any widget area to add content (text, images,
              menus, etc.).
            </p>
            <p className="text-gray-700">Drag and drop interface.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">4) Menus</h3>
            <p className="text-gray-700 mb-2">
              Create and manage navigation menus.
            </p>
            <p className="text-gray-700">
              Add custom links, pages, posts to menus.
            </p>
            <p className="text-gray-700">
              Assign menu locations (e.g., header, footer).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              5) Theme File Editor
            </h3>
            <p className="text-gray-700 mb-2">
              Edit theme files directly (PHP, CSS files like style.css,
              functions.php).
            </p>
            <p className="text-red-600 font-medium">
              Note: Risky - mistakes can take down your site.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              6) Background/Header Image
            </h3>
            <p className="text-gray-700">
              Theme-specific options to customize background/header images.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              7) Templates/Patterns
            </h3>
            <p className="text-gray-700">
              In Gutenberg themes, customize or create templates and patterns.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Settings Options
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              1. General Settings
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Site Title</span> - Your website
                name
              </li>
              <li>
                <span className="font-medium">Tagline</span> - Short description
              </li>
              <li>
                <span className="font-medium">WordPress Address (URL)</span> -
                Site root URL
              </li>
              <li>
                <span className="font-medium">Site Address (URL)</span> - Access
                URL
              </li>
              <li>
                <span className="font-medium">Admin Email Address</span> - For
                notifications
              </li>
              <li>
                <span className="font-medium">Membership</span> - User
                registration
              </li>
              <li>
                <span className="font-medium">New User Default Role</span> -
                Subscriber, Editor etc.
              </li>
              <li>Timezone, Date Format, Time Format settings</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              2. Writing Settings
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Default Post Category</span>
              </li>
              <li>
                <span className="font-medium">Default Post Format</span> -
                Standard, Video etc.
              </li>
              <li>
                <span className="font-medium">Post via Email</span> (rarely
                used)
              </li>
              <li>
                <span className="font-medium">Update Services</span> - Ping
                services on new posts
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              3. Reading Settings
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Your homepage displays</span> -
                Latest posts or static page
              </li>
              <li>
                <span className="font-medium">Blog pages show at most</span> -
                Posts per page
              </li>
              <li>
                <span className="font-medium">Syndication feeds</span> - Items
                in RSS feed
              </li>
              <li>
                <span className="font-medium">For each article in a feed</span>{" "}
                - Full text or summary
              </li>
              <li>
                <span className="font-medium">Search engine visibility</span> -
                Block search engines
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              4. Discussion Settings
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Default post settings</span> -
                Allow comments
              </li>
              <li>
                <span className="font-medium">Other comment settings</span> -
                Required fields
              </li>
              <li>
                <span className="font-medium">Email notifications</span> for
                comments
              </li>
              <li>
                <span className="font-medium">Comment moderation</span> rules
              </li>
              <li>
                <span className="font-medium">Blacklist</span> - Block words/IPs
              </li>
              <li>
                <span className="font-medium">Avatars</span> display settings
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              5. Media Settings
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Image sizes</span> - Thumbnail,
                Medium, Large
              </li>
              <li>
                <span className="font-medium">Uploading files</span> - Save
                location
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              6. Permalinks Settings
            </h3>
            <p className="text-gray-700 mb-2">
              Define URL structure (SEO-friendly options):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Plain</li>
              <li>Day and name</li>
              <li>Month and name</li>
              <li>Numeric</li>
              <li>Post name (most used)</li>
              <li>Custom structure</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3 text-blue-500">
              7. Privacy Settings
            </h3>
            <p className="text-gray-700">
              Set a Privacy Policy page (required if collecting user data).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function CustomizesidebarchangeWidgets() {
  return (
    <>
      <div
        className="bg-gray-50 text-gray-800 font-sans p-4 md:p-6 border-[2px] border-[black] my-[10px]"
        id="Customize-sidebar-change-Widgets"
      >
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold  mb-2 text-[red]">
              WordPress Widgets{" "}
            </h1>
          </header>

          {/* <!-- Core Widgets Section --> */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Core WordPress Widgets
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* <!-- Widget Cards --> */}
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Text/HTML</h3>
                <p className="text-gray-600 text-sm">
                  Add custom text, HTML or shortcodes
                </p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Search</h3>
                <p className="text-gray-600 text-sm">Adds a search box</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Recent Posts</h3>
                <p className="text-gray-600 text-sm">
                  Shows most recent articles
                </p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">
                  Recent Comments
                </h3>
                <p className="text-gray-600 text-sm">
                  Displays latest comments
                </p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Archives</h3>
                <p className="text-gray-600 text-sm">Monthly post archives</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Categories</h3>
                <p className="text-gray-600 text-sm">List of all categories</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Tag Cloud</h3>
                <p className="text-gray-600 text-sm">Visual display of tags</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Calendar</h3>
                <p className="text-gray-600 text-sm">Post calendar</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Image</h3>
                <p className="text-gray-600 text-sm">Insert an image</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Gallery</h3>
                <p className="text-gray-600 text-sm">Display image gallery</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Audio/Video</h3>
                <p className="text-gray-600 text-sm">Media players</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Custom Menu</h3>
                <p className="text-gray-600 text-sm">
                  Display navigation menus
                </p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Meta</h3>
                <p className="text-gray-600 text-sm">
                  Login, RSS, WordPress.org links
                </p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">Pages</h3>
                <p className="text-gray-600 text-sm">List of all pages</p>
              </div>

              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-600 mb-1">RSS</h3>
                <p className="text-gray-600 text-sm">Display RSS feeds</p>
              </div>
            </div>
          </section>

          {/* <!-- eCommerce Widgets --> */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                🛒 eCommerce Widgets (WooCommerce)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">
                  Product Search
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">
                  Product Categories
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">Cart</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">Product Tags</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">
                  Top Rated Products
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">
                  Recently Viewed
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">Price Filter</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-600 mb-1">Layered Nav</h3>
                <p className="text-gray-600 text-sm">(filtering)</p>
              </div>
            </div>
          </section>

          {/* <!-- Social Media Widgets --> */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                📱 Social Media Widgets
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-purple-600 mb-1">Social Icons</h3>
                <p className="text-gray-600 text-sm">(by many plugins)</p>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-purple-600 mb-1">
                  Facebook Like Box
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-purple-600 mb-1">
                  Instagram Feed
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-purple-600 mb-1">
                  Twitter Timeline
                </h3>
              </div>
            </div>
          </section>

          {/* <!-- Advanced Plugin Widgets --> */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                📊 Advanced Plugin Widgets
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">
                  Contact Forms
                </h3>
                <p className="text-gray-600 text-sm">(Contact Form 7)</p>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">Testimonials</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">Google Maps</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">
                  Newsletter Signup
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">
                  Table of Contents
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">Weather</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">
                  Polls/Surveys
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">
                  Events Calendar
                </h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">Team Members</h3>
              </div>
              <div className="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-orange-600 mb-1">
                  Countdown Timer
                </h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
function Customize() {
  return (
    <div
      className="bg-gray-50 min-h-screen p-1 font-sans border-[2px] border-[black] my-[10px]"
      id="Customize"
    >
      <div className="max-w-[90%] mx-auto bg-white rounded-lg shadow-md ">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-6">
          (Appearance → Customize)
        </h1>

        <p className="text-lg mb-6 text-gray-700">
          अपनी वेबसाइट को बिना कोडिंग के एडिट करने के लिए मुख्य ऑप्शन:
        </p>

        {/* Site Identity */}
        <div className="mb-6 p-5 border-l-4 border-blue-400 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            1. Site Identity (वेबसाइट की पहचान)
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Logo</span> - अपना लोगो अपलोड करें
            </li>
            <li>
              <span className="font-medium">Site Title & Tagline</span> -
              वेबसाइट का नाम और टैगलाइन
            </li>
            <li>
              <span className="font-medium">Site Icon (Favicon)</span> -
              ब्राउज़र टैब में दिखने वाला छोटा आइकन
            </li>
          </ul>
        </div>

        {/* Colors & Background */}
        <div className="mb-6 p-5 border-l-4 border-purple-400 bg-purple-50 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
            <span className="bg-purple-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            2. Colors & Background (रंग और बैकग्राउंड)
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Main Color Scheme</span> - बटन,
              लिंक्स का कलर
            </li>
            <li>
              <span className="font-medium">Background Color/Image</span> - पेज
              की बैकग्राउंड इमेज या कलर
            </li>
          </ul>
        </div>

        {/* Header & Navigation */}
        <div className="mb-6 p-5 border-l-4 border-green-400 bg-green-50 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
            <span className="bg-green-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            3. Header & Navigation (हैडर और मेन्यू)
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Header Image</span> - टॉप पर बैनर
              इमेज
            </li>
            <li>
              <span className="font-medium">Menu Setup</span> - नेविगेशन मेन्यू
              (Home, About, Contact आदि)
            </li>
            <li>
              <span className="font-medium">Sticky Header</span> - स्क्रॉल करते
              समय हैडर को फिक्स रखें
            </li>
          </ul>
        </div>

        {/* Homepage Settings */}
        <div className="mb-6 p-5 border-l-4 border-yellow-400 bg-yellow-50 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700 mb-3 flex items-center">
            <span className="bg-yellow-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            4. Homepage Settings (होमपेज सेटअप)
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Static Page</span> - होमपेज के लिए
              कस्टम पेज चुनें
            </li>
            <li>
              <span className="font-medium">Blog Posts</span> - लेटेस्ट पोस्ट्स
              को होमपेज पर दिखाएं
            </li>
          </ul>
        </div>

        {/* Widgets */}
        <div className="mb-6 p-5 border-l-4 border-red-400 bg-red-50 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700 mb-3 flex items-center">
            <span className="bg-red-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </span>
            5. Widgets (साइडबार/फुटर एलिमेंट्स)
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Sidebar</span> - सर्च बार, रेसेंट
              पोस्ट्स, कैटेगरीज जोड़ें
            </li>
            <li>
              <span className="font-medium">Footer</span> - कॉपीराइट टेक्स्ट,
              सोशल मीडिया आइकन्स
            </li>
          </ul>
        </div>

        {/* Additional CSS */}
        <div className="mb-6 p-5 border-l-4 border-indigo-400 bg-indigo-50 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
            <span className="bg-indigo-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            6. Additional CSS (एडवांस्ड स्टाइलिंग)
          </h2>
          <p className="text-gray-700 pl-8">
            अपनी खुद की CSS कोड डालकर डिज़ाइन कस्टमाइज़ करें
          </p>
        </div>

        {/* Theme-Specific Options */}
        <div className="p-5 border-l-4 border-pink-400 bg-pink-50 rounded-lg">
          <h2 className="text-xl font-semibold text-pink-700 mb-3 flex items-center">
            <span className="bg-pink-100 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            7. Theme-Specific Options (थीम के अनुसार)
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Fonts</span> - टेक्स्ट का स्टाइल और
              साइज़
            </li>
            <li>
              <span className="font-medium">Layout</span> - पोस्ट्स की कॉलम
              संख्या
            </li>
            <li>
              <span className="font-medium">Social Media Links</span> - फेसबुक,
              इंस्टाग्राम के लिंक
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <>
      <div
        className="bg-gray-50 p-4 md:p-6 font-sans border-[2px] border-[black] my-[10px]"
        id="Sidebar"
      >
        <div className="max-w-[90%] mx-auto bg-white rounded-lg shadow-md ">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-4">
            WordPress में Sidebar की Position कैसे बदलें?
          </h1>

          <p className="text-gray-700 mb-6">
            WordPress में साइडबार की पोजीशन बदलने के लिए आपको थीम सेटिंग्स या
            कस्टम कोड का उपयोग करना होगा। यहां सभी तरीके हिंदी में समझाए गए हैं:
          </p>

          {/* Method 1 */}
          <div className="mb-8 p-5 border-l-4 border-green-400 bg-green-50 rounded-lg">
            <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
              <span className="bg-green-100 p-2 rounded-full mr-3 text-green-700">
                1
              </span>
              थीम कस्टमाइज़र से (सबसे आसान तरीका)
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>WordPress डैशबोर्ड में जाएं</li>
              <li>Appearance → Customize पर क्लिक करें</li>
              <li>Widgets सेक्शन में जाएं</li>
              <li>
                अगर थीम सपोर्ट करती है तो आपको Sidebar Position का ऑप्शन मिलेगा
              </li>
              <li>यहां से Left/Right/None में से चुनें</li>
            </ol>
          </div>

          {/* Method 2 */}
          <div className="mb-8 p-5 border-l-4 border-blue-400 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-3 text-blue-700">
                2
              </span>
              थीम ऑप्शन्स से (कुछ थीम्स में)
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Appearance → Theme Options में जाएं</li>
              <li>Layout Settings ढूंढें</li>
              <li>Sidebar Position या Page Layout चुनें</li>
              <li>
                सामान्य विकल्प:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Left Sidebar</li>
                  <li>Right Sidebar</li>
                  <li>No Sidebar (Full Width)</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Method 3 */}
          <div className="p-5 border-l-4 border-purple-400 bg-purple-50 rounded-lg">
            <h2 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
              <span className="bg-purple-100 p-2 rounded-full mr-3 text-purple-700">
                3
              </span>
              पेज बिल्डर से (Elementor, Divi, Beaver Builder)
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>पेज एडिटर में पेज खोलें</li>
              <li>पेज बिल्डर लॉन्च करें</li>
              <li>Page Settings या Layout Options में जाएं</li>
              <li>Sidebar Position चुनें</li>
              <li>सेव करें</li>
            </ol>
            <div className="mt-4 p-3 bg-white rounded border border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium">नोट:</span> अलग-अलग पेज बिल्डर्स
                में यह ऑप्शन अलग जगह पर मिल सकता है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Insidethemeinstall() {
  return (
    <div
      className="p-4 border-[2px] border-[black] my-[10px]"
      id="Inside-theme-install"
    >
      <h1 className="text-2xl font-bold text-center text-[red] mb-4">
        WordPress Theme Installation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            WAMP Server me Astra Theme install kare:
          </h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>https://wordpress.org/themes/ open karo</li>
            <li>wamserver folder open,</li>
            <li>www folder ke aandhar, // wapserver ke liye</li>
            <li>blog_website mere folder ka name hai,</li>
            <li>wp-content folder ke andhar,</li>
            <li>themes name ka folder hai,</li>
            <li>
              folder me paste karna hai jo mene (astra theme) download kiya hai,
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            XAMPP ke andar Astra Theme install karne ka tarika:
          </h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>https://wordpress.org/themes/ open karo</li>
            <li>Astra theme download karo (zip file me)</li>
            <li>XAMPP ka folder open karo</li>
            <li>htdocs folder ke andar jao</li>
            <li>
              blog_website naam ka folder open karo (ye aapki WordPress site
              hai)
            </li>
            <li>Uske andar wp-content folder open karo</li>
            <li>Uske andar themes naam ka folder open karo</li>
            <li>Astra theme ka zip file extract karo</li>
            <li>
              Extract hone ke baad jo astra folder milega, usse copy/paste karo:
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          paid them download karne ke liye:
        </h2>
        <p>https://themelock.com/eng/</p>
      </div>
    </div>
  );
}

function Logochange() {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-sm border-[2px] border-[black] my-[10px]"
      id="Logochange"
    >
      <h1 className="text-2xl font-bold mb-4 text-red-600 text-center">
        WordPress me Logo Kaise Change Kare
      </h1>

      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Method 1: Customizer se
          </h2>
          <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-600">
            <li>WordPress admin panel me jao</li>
            <li>
              Left sidebar me{" "}
              <span className="bg-gray-100 px-2 py-1 rounded">Appearance</span>{" "}
              par click karo
            </li>
            <li>
              <span className="bg-gray-100 px-2 py-1 rounded">Customize</span>{" "}
              option par click karo
            </li>
            <li>
              <span className="bg-gray-100 px-2 py-1 rounded">Header</span> ya{" "}
              <span className="bg-gray-100 px-2 py-1 rounded">
                Site Identity
              </span>{" "}
              ka option dhundo (theme ke hisaab se wording thoda alag ho sakta
              hai)
            </li>
            <li>Logo upload karne ka option dikhega</li>
            <li>Apna logo select karo aur save changes karo</li>
          </ol>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Method 2: Theme Options se
          </h2>
          <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-600">
            <li>WordPress admin panel me jao</li>
            <li>
              <span className="bg-gray-100 px-2 py-1 rounded">Appearance</span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                Theme Options
              </span>{" "}
              par jao
            </li>
            <li>
              <span className="bg-gray-100 px-2 py-1 rounded">
                Header Settings
              </span>{" "}
              ya{" "}
              <span className="bg-gray-100 px-2 py-1 rounded">
                Logo Settings
              </span>{" "}
              dhundo
            </li>
            <li>Logo upload ka option use karo</li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
          <h3 className="font-medium text-yellow-800">Important Notes:</h3>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-yellow-700">
            <li>Kuch themes me logo size adjust karne ka option milta hai</li>
            <li>
              Logo ke liye recommended size: 350x100 pixels (theme ke hisaab se
              alag ho sakta hai)
            </li>
            <li>
              Logo transparent background me PNG format me best dikhta hai
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Logositeiconsiteidentiny() {
  return (
    <div
      className=" w-[100%] p-4 bg-white rounded-lg shadow-sm  mx-auto border-[2px] border-[black] my-[10px]"
      id="Logositeiconsiteidentiny"
    >
      <h1 className="text-2xl font-bold mb-6 text-red-600 text-center border-b pb-2">
        WordPress me Site Title, Tagline aur Site Icon Kaise Set Kare
      </h1>

      <div className="space-y-6">
        {/* First Method */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Pehla Tarika (Customizer se):
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>WordPress admin panel me jao</li>
              <li>
                Left sidebar me{" "}
                <span className="bg-gray-100 px-2 py-1 rounded font-medium">
                  Appearance
                </span>{" "}
                par click karo
              </li>
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded font-medium">
                  Customize
                </span>{" "}
                option par click karo
              </li>
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded font-medium">
                  Site Identity
                </span>{" "}
                section me jao
              </li>
              <li>
                Yahan aapko teen options milenge:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Site Title</span> - Apne
                    website ka naam
                  </li>
                  <li>
                    <span className="font-medium">Tagline</span> - Website ka
                    short description
                  </li>
                  <li>
                    <span className="font-medium">Site Icon</span> - Favicon
                    (browser tab me dikhne wala chota icon)
                  </li>
                </ul>
              </li>
              <li>Changes save karo</li>
            </ol>
          </div>

          {/* Second Method */}
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Dusra Tarika (Settings se):
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>WordPress admin panel me jao</li>
              <li>
                Left sidebar me{" "}
                <span className="bg-gray-100 px-2 py-1 rounded font-medium">
                  Settings
                </span>{" "}
                par click karo
              </li>
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded font-medium">
                  General
                </span>{" "}
                option par click karo
              </li>
              <li>
                Yahan aapko milenge:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Site Title</span>
                  </li>
                  <li>
                    <span className="font-medium">Tagline</span>
                  </li>
                </ul>
              </li>
              <li>
                Site Icon ke liye aapko pehle tarike (Customizer) ka use karna
                hoga
              </li>
              <li>Changes save karo</li>
            </ol>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">
            Important Notes:
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-yellow-700">
            <li>
              Site Icon (Favicon) ke liye recommended size: 512x512 pixels
            </li>
            <li>
              Site Title SEO ke liye important hai, isme keywords shamil karein
            </li>
            <li>Tagline typically 10-12 words me hona chahiye</li>
            <li>
              Changes save karne ke baad cache clear karein agar changes
              immediately na dikhe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function OnePageWebsiteRules() {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-sm w-[98%] mx-auto border-[2px] border-[black] my-[10px]"
      id="One-Page-Website-Rules"
    >
      <h1 className="text-2xl font-bold mb-6 text-red-600 text-center border-b pb-2">
        One Page Website Setup Guide
      </h1>

      <div className="space-y-6">
        {/* Notes Section */}
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800">Note-1:</h3>
            <p className="text-blue-700">
              One page ke website (Portfolio, Freelancers / Personal Branding,
              Product Launch / App Promo, Event / Conference Website, Small
              Business / Startup, Resume / CV Website, Coming Soon / Under
              Construction Page)
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800">Note-2:</h3>
            <p className="text-red-700">
              Bloging ke website kabhi bhi one page ke liye nahi hoti hai
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800">Note-3:</h3>
            <p className="text-yellow-700">
              Upper ke site ake bhi page call nahi hoga. One page me custom link
              banane te hai
            </p>
          </div>
        </div>

        {/* Step 1 */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            1) Home Page Setup
          </h2>
          <p className="text-gray-600 mb-2">
            Home page ko main page banana hai:
          </p>
          <div className="ml-4">
            <h3 className="font-medium text-gray-700">Method 1:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-gray-600">
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded">Settings</span>{" "}
                → <span className="bg-gray-100 px-2 py-1 rounded">Reading</span>{" "}
                par jao
              </li>
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  A static page (select below)
                </span>{" "}
                ko select karo
              </li>
              <li>"Home" page ko select karo</li>
            </ol>

            <h3 className="font-medium text-gray-700 mt-3">Method 2:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-gray-600">
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  Appearance
                </span>{" "}
                →{" "}
                <span className="bg-gray-100 px-2 py-1 rounded">Customize</span>{" "}
                par jao
              </li>
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  Homepage Settings
                </span>{" "}
                par jao
              </li>
              <li>
                <span className="bg-gray-100 px-2 py-1 rounded">Homepage</span>{" "}
                → "home" select karo
              </li>
            </ol>
          </div>
        </div>

        {/* Step 2 */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            2) Menu Setup
          </h2>
          <p className="text-gray-600 mb-2">
            Appearance → Menu → Custom Links:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
            <div className="bg-gray-50 p-2 rounded">
              <p>
                <span className="font-medium">URL:</span> #home
              </p>
              <p>
                <span className="font-medium">Link Text:</span> Home
              </p>
              <p className="text-sm text-gray-500">
                (Ye page Home page wala page nahi hai, custom link wala home
                page hai)
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p>
                <span className="font-medium">URL:</span> #about
              </p>
              <p>
                <span className="font-medium">Link Text:</span> About
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p>
                <span className="font-medium">URL:</span> #price
              </p>
              <p>
                <span className="font-medium">Link Text:</span> Price
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p>
                <span className="font-medium">URL:</span> #faq
              </p>
              <p>
                <span className="font-medium">Link Text:</span> Faq
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p>
                <span className="font-medium">URL:</span> #testimonial
              </p>
              <p>
                <span className="font-medium">Link Text:</span> Testimonial
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            3) Elementor Section Setup
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Elementor ke andhar three dots per click karo</li>
            <li>Layout, Style, Advanced options open honge</li>
            <li>Advanced option me jana hai</li>
            <li>
              CSS ID dena hai (har section ke liye alag):
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <div className="bg-gray-50 p-2 rounded">
                  <p>
                    <span className="font-medium">Advanced → CSS ID:</span> home
                  </p>
                  <p className="text-sm text-gray-500">(# ka use nahi karna)</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p>
                    <span className="font-medium">Advanced → CSS ID:</span>{" "}
                    about
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p>
                    <span className="font-medium">Advanced → CSS ID:</span>{" "}
                    price
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p>
                    <span className="font-medium">Advanced → CSS ID:</span> faq
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p>
                    <span className="font-medium">Advanced → CSS ID:</span>{" "}
                    testimonial
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Paidtheme() {
  return (
    <div
      className="w-[95%] mx-auto p-4 text-[16px] text-gray-800 leading-relaxed border-[2px] border-[black] my-[10px]"
      id="Paidtheme"
    >
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
        Paid Theme Install Inside Folder
      </h1>

      <p className="mb-4">
        <strong>wamserver → www → travel</strong> (is name folder datebase hai)
        → <strong>wp-content → themes → parent or child theme</strong> ko{" "}
        <strong>unzip</strong> karno
      </p>

      <p className="mb-4">
        Ab jao <strong>WordPress admin</strong> me:
      </p>

      <p className="mb-4">
        <strong>Appearance &gt; Themes</strong>
      </p>

      <p className="mb-4">
        Aapko <strong>Traveltour</strong> aur <strong>Traveltour Child</strong>{" "}
        dono dikhai denge.
      </p>

      <p className="mb-4">
        Aap{" "}
        <span className="font-semibold text-green-600">
          Child Theme (traveltour-child)
        </span>{" "}
        ko <strong>Activate</strong> karo{" "}
        <span className="font-semibold">(recommended)</span>.
      </p>

      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 mt-4">
        <p className="mb-2 font-semibold text-yellow-700">📌 Note:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Child theme active karge koi child me kabhi bhi update nahi aata
          </li>
          <li>Isse future updates ke baad aapke changes safe rahenge</li>
        </ul>
      </div>
    </div>
  );
}

function Passwordlostpasswordchnage() {
  return (
    <div
      className="w-full p-4 md:p-10 bg-gray-50 text-gray-800 border-[2px] border-[black] my-[10px]"
      id="Passwordlostpasswordchnage"
    >
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        WordPress User Password Reset (phpMyAdmin)
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 1: phpMyAdmin Open Karo
          </h2>
          <p>
            Browser me jao:{" "}
            <span className="text-blue-600 font-medium">
              http://localhost/phpmyadmin
            </span>
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 2: Database Select Karo
          </h2>
          <p>
            Left sidebar me apne WordPress wale <strong>database</strong> ko
            select karo (example: <code>travel</code>).
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 3: Table - <code>wp_users</code>
          </h2>
          <p>
            <code>wp_users</code> table pe click karo, phir{" "}
            <strong>Browse</strong> tab pe click karo.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 4: Row Edit Karo
          </h2>
          <p>
            Jis user ka password change karna hai uske{" "}
            <strong>Edit (✏️)</strong> icon pe click karo.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 5: Username & Password Set Karo
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>user_login:</strong> demo
            </li>
            <li>
              <strong>user_pass:</strong> demo
            </li>
            <li>
              <strong>Function:</strong> MD5 select karo
            </li>
          </ul>
        </div>

        {/* Step 6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 6: Save Karo
          </h2>
          <p>
            Scroll down karke <strong>Go</strong> ya <strong>Save</strong>{" "}
            button dabao.
          </p>
        </div>

        {/* Step 7 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Step 7: Login Page
          </h2>
          <p>
            Browser me open karo:{" "}
            <span className="text-blue-600">http://localhost/wp-login.php</span>
          </p>
          <p className="mt-2">
            Username: <strong>demo</strong>
            <br />
            Password: <strong>demo</strong>
          </p>
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <p className="text-yellow-700">
          <strong>Note:</strong> Dashboard se password change karne ke liye:{" "}
          <br />
          Users → All Users → Edit → Set New Password → Update Profile
        </p>
        <p className="mt-2 text-red-600 font-medium">
          ⚠️ WordPress Address (URL) aur Site Address (URL) mat change karo —
          site down ho sakti hai.
        </p>
      </div>
    </div>
  );
}

function Plugin_name() {
  const plugins = [
    {
      name: "Smart Slider 3",
      author: "Nextendweb",
      purpose: "Create modern, responsive sliders with animations",
    },
    {
      name: "Smush",
      author: "WPMU DEV",
      purpose: "Image optimization and compression",
    },
    {
      name: "Recent Posts Widget With Thumbnails",
      author: "Unknown",
      purpose: "Display recent posts with thumbnails in sidebar",
    },
    {
      name: "WP News and Scrolling Widgets",
      author: "Essential Plugins by WP OnlineSupport",
      purpose: "Auto-playing news ticker functionality",
    },
    {
      name: "Elementor Pro",
      author: "Elementor",
      purpose: "Advanced page building functionality",
    },
    {
      name: "Under Construction",
      author: "WebFactory",
      purpose: "Show under construction page during development",
    },
    {
      name: "Contact Form 7",
      author: "Takayuki Miyoshi",
      purpose: "Create and manage contact forms for sending emails",
    },
    {
      name: "Advanced Contact form 7 DB",
      author: "Vsourz Digital",
      purpose: "Store and view contact form submissions in dashboard",
    },
    {
      name: "Popup Maker",
      author: "Daniel Iser",
      purpose: "Create popups, lightboxes and popup contact forms",
    },
    {
      name: "WPForms",
      author: "Syed Balkhi",
      purpose: "Form builder for contact forms, payments and surveys",
    },
    {
      name: "Yoast SEO",
      author: "Yoast",
      purpose: "Search engine optimization tools",
    },
    {
      name: "Rank Math SEO",
      author: "Rank Math",
      purpose: "Alternative SEO plugin with AI features",
    },
    {
      name: "WP Rocket",
      author: "WP Media",
      purpose: "Premium caching and performance optimization",
    },
    {
      name: "RSS Feed Widget",
      author: "Fahad Mahmood",
      purpose: "Display RSS feeds in widgets",
    },
    {
      name: "Visual Portfolio, Photo Gallery & Post Grid",
      author: "Nikita",
      purpose: "Create portfolios and galleries",
    },
    {
      name: "Preloader",
      author: "Alobaidi",
      purpose: "Add loading animation while page loads",
    },
    {
      name: "Accordion FAQ",
      author: "wpshopmart",
      purpose: "Create FAQ accordions compatible with page builders",
    },
    {
      name: "GTranslate",
      author: "edo888",
      purpose: "Multilingual translation for website",
    },
    {
      name: "Responsive Menu",
      author: "ExpressTech Systems",
      purpose: "Create mobile-friendly menus",
    },
    {
      name: "WP User Frontend",
      author: "Tareq Hasan",
      purpose: "Frontend user profiles, memberships and content restriction",
    },
    {
      name: "WooCommerce",
      author: "Automattic",
      purpose: "Ecommerce functionality",
    },
    {
      name: "YITH Request a Quote for WooCommerce",
      author: "YITHEMES",
      purpose: "Add quote request functionality to WooCommerce",
    },
    {
      name: "Smush Image Optimization",
      author: "WPMU DEV",
      purpose: "Image optimization, WebP conversion and lazy loading",
    },
    {
      name: "Autoptimize",
      author: "Optimizing Matters",
      purpose: "Optimize JS, CSS, HTML and fonts for performance",
    },
  ];
  return (
    <div className="border-[2px] border-[black] my-[10px]" id="Plugin_name">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        {" "}
        wordpress Plugin_name
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {plugins.map((plugin, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-800">{plugin.name}</h2>
            <p className="text-sm text-gray-500 mb-2">By {plugin.author}</p>
            <p className="text-gray-600">{plugin.purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Post_add() {
  return (
    <div
      className="w-[100%]  mx-auto p-6 bg-white rounded-xl shadow-md border-[2px] border-[black] my-[10px]"
      id="Post_add"
    >
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6"></h2>
      <div className="w-[95%] grid grid-cols-2 mx-auto p-6 bg-white rounded-xl shadow-md">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Step 1: WordPress Admin Mein Login Kare
          </h3>
          <p className="mb-4">
            Apni website ke URL ke aage{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">/wp-admin</code> add
            kare (example:{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              yourwebsite.com/wp-admin
            </code>
            )
          </p>
          <p className="mb-6">Apna username aur password daalkar login kare</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Step 2: Posts Section Mein Jaaye
          </h2>
          <p className="mb-4">Left sidebar menu se:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>➡️ "Posts" par click kare</li>
            <li>➡️ "Add New" button par click kare</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Step 3: Post Ka Content Add Kare
          </h2>
          <p className="mb-2">
            ✔ <strong>Title (Heading):</strong>
          </p>
          <p className="mb-4">Upar wale box mein apne post ka title likhe</p>

          <p className="mb-2">
            ✔ <strong>Main Content:</strong>
          </p>
          <p className="mb-4">Neeche wale editor mein apna content likhe</p>

          <p className="mb-2">Formatting ke liye:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Bold/Italic karne ke liye toolbar use kare</li>
            <li>Heading (H2, H3) add kar sake hai</li>
          </ul>

          <p className="mb-4">Media add karne ke liye:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>"+" button ya "Add Media" button par click kare</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Step 4: Category aur Tags Set Kare
          </h2>
          <p className="mb-2">Right sidebar mein:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              🔹 <strong>Categories:</strong>
              <br />
              Existing categories select kare
              <br />
              Ya "Add New Category" se nayi category banae
            </li>
            <li>
              🔹 <strong>Tags:</strong>
              <br />
              Related tags comma se separate karke enter kare
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Step 5: Featured Image Set Kare
          </h2>
          <p className="mb-2">Right sidebar mein:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>"Featured Image" section dhundhe</li>
            <li>"Set featured image" par click kare</li>
            <li>
              Media library se image select kare ya nayi image upload kare
            </li>
            <li>"Set featured image" button par click kare</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Step 6: Preview Dekhe (Optional)
          </h2>
          <p className="mb-2">Right sidebar mein "Publish" section mein:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              👀 "Preview" button par click karke post kaise dikhega dekh sakte
              hai
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Step 7: Post Publish Kare
          </h2>

          <ul className="list-disc pl-6 mb-6">
            <li>✅ "Publish" button par click karke post live kare</li>
            <li>
              ✅ Ya "Save Draft" par click karke baad mein publish kar sake hai
            </li>
          </ul>

          <hr className="my-8" />

          <p className="text-lg font-medium mb-2">
            blog wale page ko folder ke andhar se change karne ke liye
          </p>
          <code className="block bg-gray-100 p-4 rounded">
            wamserver → www → travel → (ye mere database ka name hai) →
            wp-content → themes → index.php
          </code>
        </div>
      </div>
    </div>
  );
}

function Slider_apply_pc_full_width() {
  return (
    <div
      className=" border-[2px] border-[black] my-[10px]"
      id="Slider_apply_pc_full_width"
    >
      <h2
        className="
      text-3xl font-bold text-center text-red-600 mb-6
      "
      >
        slider apply pc full width
      </h2>
      <div>
        <h1>WampServer me</h1>
        <p>1. www wale folder me</p>
        <p>
          2. Apni website folder me (meri website ka naam:{" "}
          <strong>blog_website</strong>)
        </p>
        <p>3. wp-content</p>
        <p>4. themes</p>
        <p>5. Zita (abhi Zita theme use kar raha hu)</p>
        <p>6. header.php (isko VS Code me open karenge)</p>

        <div>
          <img src={note4} />
        </div>

        <div>
          <p>
            <strong>Note 1:</strong> Ye slider sabhi pages (Home, About, Course,
            Blog) par dikhai dega. Abhi ye code ka use liya hai:
          </p>
          <img src={note1} alt="Slider on all pages" />
        </div>

        <div>
          <p>
            <strong>Note 2:</strong> Agar sirf ek page (Home page) par dikhana
            hai to <code>if</code> condition lagani padegi.
          </p>
          <img src={note2} alt="Slider on home page only" />
        </div>

        <div>
          <p>
            <strong>Note 3:</strong> Agar sirf do pages (Home aur About Us) par
            dikhana hai to About Us page edit karo. URL dekhne par page ID milti
            hai (e.g., <code>post=9</code>), to us ID ke hisaab se condition
            lagakar code paste karenge.
          </p>
          <img src={note3} alt="Slider on home and about us pages" />
        </div>
      </div>
    </div>
  );
}

function Sticky_page() {
  return (
    <div
      className="w-[100%] border-[2px] border-[black] my-[10px]"
      id="Sticky_page"
    >
      <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
        How to Set a Static Homepage in WordPress
      </h3>
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-md  ">
        {/* Method 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Method 1: Via WordPress Dashboard
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>
                Go to{" "}
                <strong className="text-gray-800">
                  WordPress Dashboard → Settings → Reading
                </strong>
                .
              </li>
              <li>
                Under{" "}
                <strong className="text-gray-800">
                  "Your homepage displays"
                </strong>
                , select{" "}
                <strong className="text-gray-800">A static page</strong>.
              </li>
              <li>
                <strong className="text-gray-800">Homepage dropdown:</strong>{" "}
                Select your desired page (e.g., "Home").
              </li>
              <li>
                <strong className="text-gray-800">Posts page dropdown:</strong>{" "}
                Select "Blog".
              </li>
              <li>
                Click <strong className="text-gray-800">Save Changes</strong>.
              </li>
            </ol>
          </div>

          {/* Method 2 */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Method 2: Via Customizer
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>
                Go to{" "}
                <strong className="text-gray-800">
                  Appearance → Customize → Homepage Settings
                </strong>
                .
              </li>
              <li>
                Select <strong className="text-gray-800">A static page</strong>.
              </li>
              <li>
                Choose your <strong className="text-gray-800">Homepage</strong>{" "}
                (e.g., "Home").
              </li>
              <li>
                Choose a <strong className="text-gray-800">Posts page</strong>{" "}
                (e.g., "Blog").
              </li>
              <li>
                Click <strong className="text-gray-800">Publish</strong>.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Upload_file_size_change() {
  return (
    <div
      className="bg-gray-50 p-6 rounded-lg shadow-md w-[98%] mx-auto border-[2px] border-[black] my-[10px]"
      id="Upload_file_size_change"
    >
      <h2 className="text-2xl text-center font-bold text-red-600 mb-4  pb-2">
        PHP Configuration Settings upload file size change
      </h2>

      <div className="w-[100%]">
        <h3 className="text-[35px] font-medium">
          php.ini <span>file me change karna padga</span>
        </h3>
        {/* max_execution_time */}
        <div className="bg-white p-4 rounded-md border border-gray-200 w-[100%]">
          <h3 className="font-semibold text-lg text-blue-600">
            max_execution_time
          </h3>
          <p>
            max_execution_time = 600 ; pehal 120 tha 600 mene kiya hai matlab ab
            PHP script 10 minutes (600 seconds) tak run kar sakti hai bina
            timeout ke.
          </p>
          <p className="text-gray-700">
            <span className="font-medium">पहले:</span> 120 (2 मिनट) <br />
            <span className="font-medium">अब:</span> 600 (10 मिनट) <br />
            <span className="text-green-600">मतलब:</span> PHP स्क्रिप्ट अब 10
            मिनट तक चल सकती है।
          </p>
        </div>

        {/* max_input_time */}
        <div className="bg-white p-4 rounded-md border border-gray-200 w-[100%]">
          <h3 className="font-semibold text-lg text-blue-600">
            max_input_time
          </h3>
          <p>
            max_input_time = 300 ; pehal 60 tha 300 mene kiya hai matlab ab PHP
            script 5 minutes (600 seconds) tak run kar sakti hai bina timeout
            ke.
          </p>
          <p className="text-gray-700">
            <span className="font-medium">पहले:</span> 60 (1 मिनट) <br />
            <span className="font-medium">अब:</span> 300 (5 मिनट) <br />
            <span className="text-green-600">मतलब:</span> PHP को इनपुट प्रोसेस
            करने के लिए 5 मिनट मिलेंगे।
          </p>
        </div>

        {/* upload_max_filesize */}
        <div className="bg-white p-4 rounded-md border border-gray-200 w-[100%]">
          <h3 className="font-semibold text-lg text-blue-600">
            upload_max_filesize
          </h3>
          <p>
            upload_max_filesize = 300M ; pehle 2M tha, maine ise 300M kiya hai —
            iska matlab ab ek single file ka maximum upload size 300MB ho gaya
            hai.
          </p>

          <p className="text-gray-700">
            <span className="font-medium">पहले:</span> 2M (2MB) <br />
            <span className="font-medium">अब:</span> 300M (300MB) <br />
            <span className="text-green-600">मतलब:</span> अब 300MB तक की फाइल्स
            अपलोड कर सकते हैं।
          </p>
        </div>

        {/* max_file_uploads */}
        <div className="bg-white p-4 rounded-md border border-gray-200 w-[100%]">
          <h3 className="font-semibold text-lg text-blue-600">
            max_file_uploads
          </h3>
          <p>
            max_file_uploads = 200 ; pehle 20 tha, maine ise 200 kiya hai — iska
            matlab hai ab ek single request me maximum 200 files upload ki ja
            sakti hain.
          </p>

          <p className="text-gray-700">
            <span className="font-medium">पहले:</span> 20 <br />
            <span className="font-medium">अब:</span> 200 <br />
            <span className="text-green-600">मतलब:</span> एक बार में 200 फाइल्स
            अपलोड कर सकते हैं।
          </p>
        </div>

        {/* post_max_size */}
        <div className="bg-white p-4 rounded-md border border-gray-200 w-[100%]">
          <h3 className="font-semibold text-lg text-blue-600">post_max_size</h3>
          <p>
            post_max_size = 200M ; pehle 8M tha, maine ise 200M kiya hai — iska
            matlab hai ab ek POST request me maximum 200MB tak ka data (jaise
            form data ya file uploads) bheja ja sakta hai.
          </p>

          <p className="text-gray-700">
            <span className="font-medium">पहले:</span> 8M (8MB) <br />
            <span className="font-medium">अब:</span> 200M (200MB) <br />
            <span className="text-green-600">मतलब:</span> POST रिक्वेस्ट में अब
            200MB डेटा भेज सकते हैं।
          </p>
        </div>
      </div>
    </div>
  );
}

function Username_databasename() {
  return (
    <div
      className="w-[100%] border-[2px] border-[black] my-[10px]"
      id="Username_databasename"
    >
      <h1 className="py-[10px] text-[30px] text-blue-600">
        wp-config.php me change karna padga
      </h1>
      <h3>define( 'DB_NAME', 'ws_blog' ); // DATA BASE KA NAME HAI</h3>

      <h3>
        define( 'DB_USER', 'root' ); //USERNAME HAI // Ye database ka username
        hai. Normally localhost pe 'root' hota hai.
      </h3>

      <h3>
        define( 'DB_PASSWORD', '' ); //PASSWORD HAI // Ye password hai jo upar
        wale username ke sath use hota hai. Yahan blank hai, yani koi password
        nahi diya gaya.
      </h3>

      <h3>
        define( 'DB_HOST', 'localhost' ); //SERVERNAME HAI // Ye server ka naam
        hai jahan database host kiya gaya hai. 'localhost' ka matlab hai ki
        database usi system pe hai jahan WordPress install hai.
      </h3>
    </div>
  );
}

function Contact7form() {
  return (
    <div
      className="w-[100%] border-[2px] border-[black] my-[10px]"
      id="Contact7form"
    >
      <h1 className="text-[red] font-medium text-[30px] text-center">
        Contact Form 7 //By Takayuki Miyoshi
      </h1>
      <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
        <p className="font-semibold">
          Note: Local pe Contact Form 7 work nahi karta hai
        </p>
      </div>
      <p>conact Form 7 me add karne ke liye</p>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 text-blue-800">Step 1</h2>
        <p className="mb-3">
          <label>Address</label> (label tag open/close karein)
        </p>
        <img
          src={note5}
          alt="Step 1 illustration"
          className="border rounded-lg w-full h-[50px]"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 text-blue-800">Step 2</h2>
        <p className="mb-3">
          (text, email, URL, tel, date, textarea, dropdown, checkbox, radio,
          file, submit) - Address field ke liye textarea select karein
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 text-blue-800">Step 3</h2>
        <p>Form ko save karein aur generated shortcode ka use karein</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-2">Banaye Gaye Fields:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Address</li>
          <li>Mobile Number</li>
          <li>Date of Birth</li>
          <li>File Upload</li>
        </ul>
        <img
          src={note6}
          alt="Form fields example"
          className="mt-3 border rounded-lg w-[100%]"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 text-blue-800">
          Email Configuration
        </h2>
        <div className="space-y-2 pl-2">
          <p>
            <span className="font-semibold">To:</span> Kahan mail jayega
          </p>
          <p>
            <span className="font-semibold">From:</span> Kisse mail aa raha hai
          </p>
          <p>
            <span className="font-semibold">Subject:</span> Enquiry Mail
          </p>
          <p>
            <span className="font-semibold">Additional Headers:</span> Blank
            chhod dein
          </p>
        </div>
        <img
          src={note7}
          alt="Email configuration"
          className="mt-3 border rounded-lg w-full max-w-md"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-bold mb-2">Important Note:</h3>

        <p>
          Left side ke fields kude se lekh he custom , right side ke fields
          upper se add kiya hai:
          <code className="block bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
            [your-name][your-email][your-subject][your-message][Address][mobilenumber][calender][file-566]
          </code>
        </p>
      </div>
    </div>
  );
}

function AdvancedContactform7DB() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="AdvancedContactform7DB"
    >
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Advanced Contact Form 7 DB
      </h1>

      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-semibold text-blue-800">
          Advanced Contact form 7 DB
        </p>

        <div className="space-y-3 pl-4 border-l-4 border-blue-500">
          <p className="flex items-start">
            <span className=" bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
              1
            </span>
            Contact Form 7 se related hai
          </p>

          <p className="flex items-start">
            <span className=" bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
              2
            </span>
            "Advanced CF7 DB" ke option par click karo
          </p>

          <p className="flex items-start">
            <span className=" bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
              3
            </span>
            <span>Select Form name → (Contact Form 1) select kiya hai</span>
          </p>
        </div>

        <div className="mt-4 p-4 bg-white rounded border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-2">
            All Data Fields Show Hoga:
          </h3>
          <div className="bg-gray-100 p-3 rounded overflow-x-auto">
            <code className="text-sm text-gray-800">
              your-name, your-email, your-subject, your-message, Address,
              mobilenumber, calender, file-566, submit_time, submit_ip
            </code>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-medium">
            Note: Data Excel (.xlsx) aur CSV format me export kar sakte hain
          </p>
        </div>
      </div>
    </div>
  );
}

function WPForms_Contact_Form() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="WPForms_Contact_Form"
    >
      <h1 className="text-2xl font-bold mb-4 text-blue-600 text-center">
        WPForms Setup Guide
      </h1>

      {/* <!-- Step 1 --> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Step 1: Add New Form
          </h2>
          <p>
            Dashboard →{" "}
            <span className="font-medium text-blue-500">WPForms Add New</span>{" "}
            par click karein.
          </p>
        </div>

        {/* <!-- Step 2 --> */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Step 2: Name Your Form
          </h2>
          <p>
            Form ka naam de:{" "}
            <span className="bg-gray-100 px-2 py-1 rounded text-green-700 font-medium">
              Contact Form New
            </span>
          </p>
        </div>

        {/* <!-- Step 3 --> */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Step 3: Choose Template
          </h2>
          <p>
            <span className="font-medium text-blue-500">
              Simple Contact Form
            </span>{" "}
            template choose karo.
          </p>
        </div>

        {/* <!-- Step 4 --> */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Step 4: Name Field Format
          </h2>
          <p>
            Name field par click karo, fir dropdown se yeh format choose karo:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Simple</li>
            <li>First Last</li>
            <li>First Middle Last</li>
          </ul>
        </div>

        {/* <!-- Step 5 --> */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Step 5: Notification Settings
          </h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>
              <strong>Send To Email Address:</strong>
              <span className="text-green-700">naveensainijpr@gmail.com</span>
            </li>
            <li>
              <strong>Email Subject Line:</strong> New Entry: Contact Form New
            </li>
            <li>
              <strong>From Name:</strong> trave (ya jo bhi aap chahein)
            </li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">
            Ye settings aapko milengi: <strong>Settings Notifications</strong>
            ke andar.
          </p>
        </div>

        {/* <!-- Step 6 --> */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800">
            Step 6: Save Form
          </h2>
          <p>
            Top right corner me{" "}
            <span className="font-medium text-blue-500">Save</span> button par
            click karein.
          </p>
        </div>

        {/* <!-- Step 7 --> */}
        <div>
          <h2 className="font-semibold text-lg text-gray-800">
            Step 7: Embed the Form
          </h2>
          <p>Shortcode ko page/post me paste karein:</p>
          <code className="block bg-gray-100 text-gray-800 px-3 py-2 rounded mt-2">
            [wpforms id="142"]
          </code>
        </div>
      </div>
    </div>
  );
}

function SMTP_configure() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="SMTP_configure"
    >
      <h1 className="text-2xl font-bold mb-4 text-purple-700">
        SMTP Configuration Guide (Gmail)
      </h1>

      {/* <!-- Step 1 --> */}
      <div className="mb-4">
        <h2 className="font-semibold text-lg text-gray-800">
          Step 1 of 6: Choose Your SMTP Mailer
        </h2>
        <p>
          Select:{" "}
          <span className="bg-gray-100 px-2 py-1 rounded text-green-700 font-medium">
            Other SMTP
          </span>
        </p>
      </div>

      {/* <!-- Step 2 --> */}
      <div className="mb-4">
        <h2 className="font-semibold text-lg text-gray-800">
          Step 2: SMTP Settings
        </h2>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>
            <strong>SMTP Host:</strong> smtp.gmail.com
          </li>
          <li>
            <strong>Encryption:</strong> SSL
          </li>
          <li>
            <strong>SMTP Port:</strong> 465
          </li>
          <li>
            <strong>SMTP Username:</strong> naveensainijpr@gmail.com
          </li>
          <li>
            <strong>SMTP Password:</strong>{" "}
            <span className="italic text-red-600">[App Password required]</span>
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          ⚠️ Gmail me agar 2-step verification enabled hai, to aapko{" "}
          <a
            href="https://myaccount.google.com/apppasswords"
            target="_blank"
            className="text-blue-600 underline"
          >
            App Password
          </a>{" "}
          generate karna padega. Regular Gmail password yaha kaam nahi karega.
        </p>
      </div>

      {/* <!-- Step 3 --> */}
      <div>
        <h2 className="font-semibold text-lg text-gray-800">
          Step 3: Save & Test
        </h2>
        <p>
          Sab settings fill karne ke baad{" "}
          <span className="text-green-700 font-medium">Save Settings</span>{" "}
          button par click karein.
        </p>
        <p className="mt-1">
          Phir ek test email bhejne ke liye{" "}
          <strong>WP Mail SMTP Email Test</strong> option use karein.
        </p>
      </div>
    </div>
  );
}

function Elementor_details() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="Elementor_details"
    >
      <h1 className="text-2xl text-center font-bold text-indigo-600 mb-4">
        Elementor Important Details
      </h1>

      {/* <!-- Point 1 --> */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          1) Elementor Canvas Setting
        </h2>
        <p className="text-gray-700 mt-1">
          Agar aap{" "}
          <span className="font-medium text-blue-600">
            Elementor Page Settings
          </span>{" "}
          me
          <span className="bg-gray-100 px-2 py-1 rounded text-green-700 font-semibold">
            Elementor Canvas
          </span>{" "}
          choose karte hain to:
        </p>
        <ul className="list-disc list-inside ml-5 mt-2 text-gray-700">
          <li>Header aur Footer dono remove ho jate hain.</li>
          <li>Pura blank page milta hai for custom layout/design.</li>
          <li>
            Multiple page website me ise normally use nahi karte kyunki
            consistent header/footer chahiye hota hai.
          </li>
        </ul>
      </div>

      {/* <!-- Point 2 --> */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          2) Smart Slider 3 Integration
        </h2>
        <p className="text-gray-700 mt-1">
          Jab aap{" "}
          <span className="font-medium text-blue-600">Smart Slider 3</span>{" "}
          plugin install kar lete hain:
        </p>
        <ul className="list-disc list-inside ml-5 mt-2 text-gray-700">
          <li>
            Smart Slider Elementor ke andar widget ke roop me available ho jata
            hai.
          </li>
          <li>
            Elementor me search bar me{" "}
            <span className="font-medium">Smart Slider</span> likhne par widget
            show ho jata hai.
          </li>
          <li>Drag and drop karke directly page par use kar sakte hain.</li>
        </ul>
      </div>

      {/* <!-- Point 3 --> */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          3) Motion Effects Kab Lagayein?
        </h2>
        <p className="text-gray-700 mt-1">
          <span className="font-medium text-red-600">Motion Effects</span>{" "}
          (jaise: fade-in, slide-up, zoom, etc.) ko
          <strong>website complete hone ke baad</strong> apply karna chahiye.
        </p>
        <ul className="list-disc list-inside ml-5 mt-2 text-gray-700">
          <li>
            Isse aapko poori layout aur animation timing ka clear idea milta
            hai.
          </li>
          <li>Performance aur user experience pe control rehta hai.</li>
          <li>
            Har section par zarurat ke mutabiq effect lagaya ja sakta hai, bina
            overuse ke.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Preloader_use() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="Preloader_use"
    >
      <h1 className="text-2xl font-bold text-red-600 mb-6 text-center">
        Preloader Setup Guide (WordPress)
      </h1>

      {/* Method 1 */}
      <div className="mb-8 ">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🔹 Method 1: Using Plugin (Preloader by Alobaidi)
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Go to <strong>Plugins &gt; Add New</strong>, search for{" "}
            <span className="text-blue-600 font-medium">
              Preloader // By Alobaidi
            </span>{" "}
            and install it.
          </li>
          <li>
            Plugin activate hone ke baad settings ya left menu me option nahi
            dikhega.
            <br />
            Plugin dekhne ke liye{" "}
            <strong>Plugins &gt; Installed Plugins</strong> me scroll karke
            dekhein.
          </li>
          <li>
            Code ko manually add karna padega:
            <div className="bg-gray-100 p-3 rounded mt-2 text-sm font-mono">
              &lt;div id="wptime-plugin-preloader"&gt;&lt;/div&gt;
            </div>
          </li>
          <li>
            <strong>header.php</strong> me ye code paste karna hoga{" "}
            <strong>&lt;body&gt;</strong> ke just niche.
          </li>
          <li>
            header.php edit karne ke liye:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                Go to <strong>Appearance &gt; Theme File Editor</strong>
              </li>
              <li>
                Agar file nahi dikhti to child theme select hai. Change it to{" "}
                <strong>parent theme</strong>
              </li>
              <li>
                Wahan <code>header.php</code> file mil jayegi
              </li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Method 2 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🔹 Method 2: Manual File Access (WampServer)
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Go to this path in your system:
            <code className="bg-gray-100 p-1 rounded block mt-1">
              wamserver &gt; www &gt; travel &gt; wp-content &gt; themes &gt;
              traveltour (parent theme) &gt; header.php
            </code>
          </li>
          <li>
            <code>&lt;body&gt;</code> ke just niche ye code paste karo:
            <div className="bg-gray-100 p-3 rounded mt-2 text-sm font-mono">
              &lt;div id="wptime-plugin-preloader"&gt;&lt;/div&gt;
            </div>
          </li>
        </ol>
      </div>

      {/* Notes */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Notes:</h2>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>
            <strong>Note 1:</strong> Preloader background color pehle{" "}
            <span className="font-medium text-blue-700">white</span> tha, ab{" "}
            <span className="font-medium text-red-600">red</span> kar diya gaya
            hai (settings me change kiya).
          </li>
          <li>
            <strong>Note 2:</strong> Preloader image change karni hai:
            <ul className="list-disc list-inside ml-6">
              <li>
                Go to:{" "}
                <span className="inline">
                  wampserver &gt; travel &gt; wp-content &gt; plugins &gt;
                  the-preloader &gt; images
                </span>
              </li>
              <li>
                Yahan <code>preloader.GIF</code> ko apni image se replace karo
              </li>
              <li>
                Image ka naam same hi rakho: <strong>preloader.GIF</strong>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Recapha() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="Recapha"
    >
      <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        reCAPTCHA v3 Setup Guide (WordPress)
      </h1>

      {/* Why Use */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🔒 क्यों ज़रूरी है?
        </h2>
        <p className="text-gray-700">
          WordPress में स्पैम रोकने के लिए Google reCAPTCHA का उपयोग होता है। यह
          बॉट्स को फॉर्म भरने से रोकता है।
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* Step 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ✅ Step 1: Integration Setup
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              WordPress Dashboard ➝ <strong>Contact ➝ Integration</strong>
            </li>
            <li>
              reCAPTCHA option दिखेगा ➝ नीचे दिए गए लिंक पर क्लिक करें:
              <div className="mt-2">
                <a
                  href="https://www.google.com/recaptcha/admin/create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://www.google.com/recaptcha/admin/create
                </a>
              </div>
            </li>
          </ol>
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ✅ Step 2: Google reCAPTCHA Settings
          </h2>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
            <li>
              <strong>Label:</strong> My Website reCAPTCHA
            </li>
            <li>
              <strong>reCAPTCHA Type:</strong> v3
            </li>
            <li>
              <strong>Domains:</strong> naveen.lovestoblog.com
            </li>
            <li>Terms checkbox पर tick करें और Submit करें</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ✅ Step 3: Keys Copy करें
          </h2>
          <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 space-y-2">
            <div>
              <strong>Site Key:</strong>{" "}
              6LeIuC8rAAAAABhBXD4ADz4Nuex00-tvdFVqeTgD
            </div>
            <div>
              <strong>Secret Key:</strong>{" "}
              6LeIuC8rAAAAAP19JKHAfW3CcckkNXwiujbE4NQf
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ✅ Step 4: WordPress में Key Paste करें
          </h2>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
            <li>
              Dashboard ➝ <strong>Contact &gt;Integration</strong>
            </li>
            <li>Setup Integration पर क्लिक करें</li>
            <li>Site Key और Secret Key को वहाँ paste करें</li>
          </ul>
        </div>

        {/* Step 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ✅ Step 5: Form में reCAPTCHA जोड़ें
          </h2>
          <p className="text-gray-700 mb-2">
            अपने फॉर्म में नीचे वाला shortcode जोड़ें:
          </p>
          <div className="bg-gray-100 p-3 rounded font-mono text-sm">
            &nbsp;[recaptcha]
          </div>
        </div>

        {/* Step 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ✅ Step 6: Check करें
          </h2>
          <p className="text-gray-700">
            Form में Google reCAPTCHA badge दिखेगा (usually bottom-right
            corner)। यह v3 होने के कारण invisible रहता है।
          </p>
        </div>
      </div>

      {/* Notes */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          📝 Extra Tips
        </h2>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>Badge को CSS से hide करना Google की policy के खिलाफ है।</li>
          <li>
            अगर आप WPForms इस्तेमाल कर रहे हैं, तो WPForms ➝ Settings ➝ CAPTCHA
            से same key सेट करें।
          </li>
        </ul>
      </div>
    </div>
  );
}
function Seo() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="Seo"
    >
      <h1 className="text-2xl font-bold text-green-600 mb-6 text-center">
        Yoast SEO Sitemap Setup Guide
      </h1>

      {/* Plugin Installation */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🔧 Step 1: Yoast SEO Plugin Install
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            WordPress Dashboard ➝ <strong>Plugins ➝ Add New</strong>
          </li>
          <li>
            Search for <strong>Yoast SEO</strong> and click{" "}
            <strong>Install ➝ Activate</strong>
          </li>
        </ol>
      </div>

      {/* Enable Sitemap */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🌐 Step 2: Enable Sitemap
        </h2>
        <p className="text-gray-700">
          Yoast SEO sitemap by default enabled होता है। आप settings में जाकर
          verify कर सकते हैं:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 mt-2">
          <li>SEO ➝ General ➝ Features Tab</li>
          <li>
            XML sitemaps ➝{" "}
            <span className="text-green-600 font-medium">On</span> होना चाहिए
          </li>
        </ul>
      </div>

      {/* View Sitemap */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          📄 Step 3: View Sitemap
        </h2>
        <p className="text-gray-700">
          अपने sitemap को ब्राउज़र में देखने के लिए नीचे दिए गए URL पर जाएं:
        </p>
        <div className="bg-gray-100 p-3 mt-2 rounded text-[8px] font-mono text-gray-800">
          http://localhost/blog_website/sitemap_index.xml
        </div>
        <p className="text-gray-700 mt-2">
          यह sitemap आपके सभी पोस्ट, पेज, categories आदि की indexing Google को
          आसानी से करवाता है।
        </p>
      </div>

      {/* Troubleshooting */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🛠️ Extra Tip (अगर Sitemap 404 दे):
        </h2>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>
            Permalinks को refresh करें:{" "}
            <strong>Settings ➝ Permalinks ➝ Save Changes</strong>
          </li>
          <li>
            Ensure `.htaccess` file Apache में rewrite rules allow कर रहा है
            (WAMPの場合)
          </li>
        </ul>
      </div>
    </div>
  );
}

function Website_role() {
  return (
    <div
      className="w-full   p-6 border-2 border-solid border-[black] rounded-lg bg-white shadow-md my-[10px]"
      id="Website_role"
    >
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        WordPress User Creation & Roles Guide
      </h1>

      {/* User Creation Form Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          User Creation Steps (Add New User)
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Left side Dashboard में <strong>User</strong> menu आएगा। वहाँ जाएँ
            और <strong>Add New</strong> पर क्लिक करें।
          </li>
          <li>
            फॉर्म भरें:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
              <li>
                <strong>Username (required):</strong> जैसे demo
              </li>
              <li>
                <strong>Email (required):</strong> जैसे menkasaini1990@gmail.com
              </li>
              <li>
                <strong>First Name:</strong> menka
              </li>
              <li>
                <strong>Last Name:</strong> saini
              </li>
              <li>
                <strong>Website:</strong> (optional)
              </li>
              <li>
                <strong>Password:</strong> Generate password या खुद लिखें
              </li>
              <li>
                <strong>Confirm Password:</strong> Confirm use of weak password
                (अगर कमजोर पासवर्ड इस्तेमाल करना हो)
              </li>
              <li>
                <strong>Send User Notification:</strong> नई यूजर को ईमेल भेजने
                के लिए चेक करें
              </li>
              <li>
                <strong>Role:</strong> यहाँ यूजर का रोल चुनें - उदाहरण के लिए
                Administrator, Contributor आदि
              </li>
            </ul>
          </li>
          <li>फॉर्म सबमिट करें और नया यूजर बन जाएगा।</li>
        </ul>
      </section>

      {/* User Roles Explanation */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          WordPress के मुख्य User Roles:
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              Administrator
            </h3>
            <p>
              Full control होता है site पर।
              <br />
              Themes, plugins install/update/delete कर सकता है।
              <br />
              Users को manage कर सकता है।
              <br />
              Content लिख, edit, publish और delete कर सकता है (दूसरों का भी)।
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Editor</h3>
            <p>
              खुद और दूसरे authors के posts को publish, edit, delete कर सकता है।
              <br />
              Pages और comments को manage कर सकता है।
              <br />
              Users या site settings access नहीं कर सकता।
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Author</h3>
            <p>
              केवल अपने posts लिख, edit, publish और delete कर सकता है।
              <br />
              Media files upload कर सकता है।
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              Contributor
            </h3>
            <p>
              Posts लिख सकता है लेकिन publish नहीं कर सकता।
              <br />
              Media upload नहीं कर सकता।
              <br />
              Editor या Administrator के approval के बाद post publish होता है।
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              Subscriber
            </h3>
            <p>
              केवल login कर सकता है और अपनी profile manage कर सकता है।
              <br />
              आमतौर पर membership या commenting purposes के लिए उपयोग होता है।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
