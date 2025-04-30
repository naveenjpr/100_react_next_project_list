import React from "react";
import Header from "../../Common page/Header";
import { FaArrowCircleRight } from "react-icons/fa";
import Appearcance from "../../assets/Screenshot 2025-04-29 223126.png";
import { HiH3 } from "react-icons/hi2";

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
          <Insidethemeinstall />
          <Logochange />
          <Logositeiconsiteidentiny />
          <OnePageWebsiteRules />
          <Paidtheme />
          <Passwordlostpasswordchnage />
          <Plugin_name />
          <Post_add />
          <Slider_apply_pc_full_width/>
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
    <div className="bg-gray-50 min-h-screen p-1 font-sans">
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
      <div className="bg-gray-50 p-4 md:p-6 font-sans">
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
    <div className="p-4">
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
    <div className="p-4 bg-white rounded-lg shadow-sm">
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
              <span className="bg-gray-100 px-2 py-1 rounded">Appearance</span>{" "}
              >{" "}
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
    <div className=" w-[100%] p-4 bg-white rounded-lg shadow-sm  mx-auto">
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
    <div className="p-4 bg-white rounded-lg shadow-sm w-[98%] mx-auto">
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
    <div className="w-[95%] mx-auto p-4 text-[16px] text-gray-800 leading-relaxed">
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
    <div className="w-full p-4 md:p-10 bg-gray-50 text-gray-800">
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
      purpose: "Create modern, responsive sliders with animations.",
    },
    {
      name: "Smush",
      author: "WPMU DEV",
      purpose: "Automatically compress and optimize images.",
    },
    {
      name: "Recent Posts Widget With Thumbnails",
      author: "Unknown",
      purpose: "Display recent posts with thumbnails in the sidebar.",
    },
    {
      name: "WP News and Scrolling Widgets",
      author: "WP OnlineSupport",
      purpose: "Show scrolling news tickers or post lists.",
    },
    {
      name: "Elementor Pro",
      author: "Elementor",
      purpose: "Advanced drag-and-drop page builder.",
    },
    {
      name: "Under Construction",
      author: "WebFactory",
      purpose: "Display 'Under Construction' notice during development.",
    },
    {
      name: "Smart Slider 3",
      author: "Nextendweb",
      purpose: "Create modern, responsive sliders with animations.",
    },
    {
      name: "Smart Slider 3",
      author: "Nextendweb",
      purpose: "Create modern, responsive sliders with animations.",
    },
    {
      name: "Smart Slider 3",
      author: "Nextendweb",
      purpose: "Create modern, responsive sliders with animations.",
    },
    {
      name: "Smart Slider 3",
      author: "Nextendweb",
      purpose: "Create modern, responsive sliders with animations.",
    },
    {
      name: "Smart Slider 3",
      author: "Nextendweb",
      purpose: "Create modern, responsive sliders with animations.",
    },
  ];
  return (
    <div>
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
    <div className="w-[100%]  mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        {" "}
        post add or blog create
      </h2>
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
  )
}

function Slider_apply_pc_full_width(){
return(
  <>
  </>
)
}

