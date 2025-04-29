import React from "react";
import Header from "../../Common page/Header";
import { FaArrowCircleRight } from "react-icons/fa";
import Appearcance from "../../assets/Screenshot 2025-04-29 223126.png";

export default function Wordpress() {
  return (
    <>
      <Header />
      <div class="w-[100%] ">
        <h1 class="text-3xl text-center py-[10px] font-bold mb-8 text-blue-700">
          WordPress notes
        </h1>
        {/* Appearance Menu Options start */}
        <div class="w-[95%] grid grid-cols-1 mx-auto">
          <Appearance />
          <CustomizesidebarchangeWidgets />
          <Customize />
          <Sidebar />
        </div>
        {/* customize, sidebar change,Widgets start */}
      </div>
    </>
  );
}

function Appearance() {
  return (
    <>
      <div class="mb-12 border-[2px]">
        <h2 class="text-2xl font-semibold text-center text-[red] mb-4 ">
          Appearance Menu Options
          <img src={Appearcance} className="" />
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">1) Themes</h3>
            <p class="text-gray-700">
              Manage and change your WordPress themes.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">2) Customize</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>Site Identity (Logo, Site Title, Tagline, Favicon)</li>
              <li>Colors</li>
              <li>Menus</li>
              <li>Widgets</li>
              <li>Homepage Settings</li>
              <li>Additional CSS</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">3) Widgets</h3>
            <p class="text-gray-700 mb-2">
              Sidebar, footer, or any widget area to add content (text, images,
              menus, etc.).
            </p>
            <p class="text-gray-700">Drag and drop interface.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">4) Menus</h3>
            <p class="text-gray-700 mb-2">
              Create and manage navigation menus.
            </p>
            <p class="text-gray-700">
              Add custom links, pages, posts to menus.
            </p>
            <p class="text-gray-700">
              Assign menu locations (e.g., header, footer).
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              5) Theme File Editor
            </h3>
            <p class="text-gray-700 mb-2">
              Edit theme files directly (PHP, CSS files like style.css,
              functions.php).
            </p>
            <p class="text-red-600 font-medium">
              Note: Risky - mistakes can take down your site.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              6) Background/Header Image
            </h3>
            <p class="text-gray-700">
              Theme-specific options to customize background/header images.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              7) Templates/Patterns
            </h3>
            <p class="text-gray-700">
              In Gutenberg themes, customize or create templates and patterns.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-blue-600">
          Settings Options
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              1. General Settings
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span class="font-medium">Site Title</span> - Your website name
              </li>
              <li>
                <span class="font-medium">Tagline</span> - Short description
              </li>
              <li>
                <span class="font-medium">WordPress Address (URL)</span> - Site
                root URL
              </li>
              <li>
                <span class="font-medium">Site Address (URL)</span> - Access URL
              </li>
              <li>
                <span class="font-medium">Admin Email Address</span> - For
                notifications
              </li>
              <li>
                <span class="font-medium">Membership</span> - User registration
              </li>
              <li>
                <span class="font-medium">New User Default Role</span> -
                Subscriber, Editor etc.
              </li>
              <li>Timezone, Date Format, Time Format settings</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              2. Writing Settings
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span class="font-medium">Default Post Category</span>
              </li>
              <li>
                <span class="font-medium">Default Post Format</span> - Standard,
                Video etc.
              </li>
              <li>
                <span class="font-medium">Post via Email</span> (rarely used)
              </li>
              <li>
                <span class="font-medium">Update Services</span> - Ping services
                on new posts
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              3. Reading Settings
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span class="font-medium">Your homepage displays</span> - Latest
                posts or static page
              </li>
              <li>
                <span class="font-medium">Blog pages show at most</span> - Posts
                per page
              </li>
              <li>
                <span class="font-medium">Syndication feeds</span> - Items in
                RSS feed
              </li>
              <li>
                <span class="font-medium">For each article in a feed</span> -
                Full text or summary
              </li>
              <li>
                <span class="font-medium">Search engine visibility</span> -
                Block search engines
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              4. Discussion Settings
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span class="font-medium">Default post settings</span> - Allow
                comments
              </li>
              <li>
                <span class="font-medium">Other comment settings</span> -
                Required fields
              </li>
              <li>
                <span class="font-medium">Email notifications</span> for
                comments
              </li>
              <li>
                <span class="font-medium">Comment moderation</span> rules
              </li>
              <li>
                <span class="font-medium">Blacklist</span> - Block words/IPs
              </li>
              <li>
                <span class="font-medium">Avatars</span> display settings
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              5. Media Settings
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <span class="font-medium">Image sizes</span> - Thumbnail,
                Medium, Large
              </li>
              <li>
                <span class="font-medium">Uploading files</span> - Save location
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              6. Permalinks Settings
            </h3>
            <p class="text-gray-700 mb-2">
              Define URL structure (SEO-friendly options):
            </p>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>Plain</li>
              <li>Day and name</li>
              <li>Month and name</li>
              <li>Numeric</li>
              <li>Post name (most used)</li>
              <li>Custom structure</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-3 text-blue-500">
              7. Privacy Settings
            </h3>
            <p class="text-gray-700">
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
      <div class="bg-gray-50 text-gray-800 font-sans p-4 md:p-6">
        <div class="max-w-6xl mx-auto">
          <header class="mb-8 text-center">
            <h1 class="text-3xl md:text-4xl font-bold  mb-2 text-[red]">
              WordPress Widgets{" "}
            </h1>
          </header>

          {/* <!-- Core Widgets Section --> */}
          <section class="mb-12">
            <div class="flex items-center mb-4">
              <div class="bg-blue-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-blue-600"
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
              <h2 class="text-2xl font-bold text-gray-800">
                Core WordPress Widgets
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* <!-- Widget Cards --> */}
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Text/HTML</h3>
                <p class="text-gray-600 text-sm">
                  Add custom text, HTML or shortcodes
                </p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Search</h3>
                <p class="text-gray-600 text-sm">Adds a search box</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Recent Posts</h3>
                <p class="text-gray-600 text-sm">Shows most recent articles</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Recent Comments</h3>
                <p class="text-gray-600 text-sm">Displays latest comments</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Archives</h3>
                <p class="text-gray-600 text-sm">Monthly post archives</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Categories</h3>
                <p class="text-gray-600 text-sm">List of all categories</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Tag Cloud</h3>
                <p class="text-gray-600 text-sm">Visual display of tags</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Calendar</h3>
                <p class="text-gray-600 text-sm">Post calendar</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Image</h3>
                <p class="text-gray-600 text-sm">Insert an image</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Gallery</h3>
                <p class="text-gray-600 text-sm">Display image gallery</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Audio/Video</h3>
                <p class="text-gray-600 text-sm">Media players</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Custom Menu</h3>
                <p class="text-gray-600 text-sm">Display navigation menus</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Meta</h3>
                <p class="text-gray-600 text-sm">
                  Login, RSS, WordPress.org links
                </p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">Pages</h3>
                <p class="text-gray-600 text-sm">List of all pages</p>
              </div>

              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-blue-600 mb-1">RSS</h3>
                <p class="text-gray-600 text-sm">Display RSS feeds</p>
              </div>
            </div>
          </section>

          {/* <!-- eCommerce Widgets --> */}
          <section class="mb-12">
            <div class="flex items-center mb-4">
              <div class="bg-green-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-600"
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
              <h2 class="text-2xl font-bold text-gray-800">
                🛒 eCommerce Widgets (WooCommerce)
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">Product Search</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">
                  Product Categories
                </h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">Cart</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">Product Tags</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">
                  Top Rated Products
                </h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">Recently Viewed</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">Price Filter</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-green-600 mb-1">Layered Nav</h3>
                <p class="text-gray-600 text-sm">(filtering)</p>
              </div>
            </div>
          </section>

          {/* <!-- Social Media Widgets --> */}
          <section class="mb-12">
            <div class="flex items-center mb-4">
              <div class="bg-purple-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-purple-600"
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
              <h2 class="text-2xl font-bold text-gray-800">
                📱 Social Media Widgets
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-purple-600 mb-1">Social Icons</h3>
                <p class="text-gray-600 text-sm">(by many plugins)</p>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-purple-600 mb-1">
                  Facebook Like Box
                </h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-purple-600 mb-1">Instagram Feed</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-purple-600 mb-1">Twitter Timeline</h3>
              </div>
            </div>
          </section>

          {/* <!-- Advanced Plugin Widgets --> */}
          <section class="mb-12">
            <div class="flex items-center mb-4">
              <div class="bg-orange-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-orange-600"
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
              <h2 class="text-2xl font-bold text-gray-800">
                📊 Advanced Plugin Widgets
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Contact Forms</h3>
                <p class="text-gray-600 text-sm">(Contact Form 7)</p>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Testimonials</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Google Maps</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">
                  Newsletter Signup
                </h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">
                  Table of Contents
                </h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Weather</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Polls/Surveys</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Events Calendar</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Team Members</h3>
              </div>
              <div class="widget-card bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 class="font-bold text-orange-600 mb-1">Countdown Timer</h3>
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
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <div className="max-w-[90%] mx-auto bg-white rounded-lg shadow-md p-6">
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
      <div className="bg-gray-50 p-4 md:p-6 font-sans">
        <div className="max-w-[90%] mx-auto bg-white rounded-lg shadow-md p-6">
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
