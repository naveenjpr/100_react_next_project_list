import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Common page/Header";

export default function Reserved_Keywords() {
  const location = useLocation();

  // Data for all sections
  const sections = [
    {
      title: "JavaScript Reserved Keywords",
      items: [
        "abstract",
        "arguments",
        "await*",
        "boolean",
        "break",
        "byte",
        "case",
        "catch",
        "char",
        "class*",
        "const*",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "double",
        "else",
        "enum*",
        "eval",
        "export*",
        "extends*",
        "false",
        "final",
        "finally",
        "float",
        "for",
        "function",
        "goto",
        "if",
        "implements",
        "import*",
        "in",
        "instanceof",
        "int",
        "interface",
        "let*",
        "long",
        "native",
        "new",
        "null",
        "package",
        "private",
        "protected",
        "public",
        "return",
        "short",
        "static",
        "super*",
        "switch",
        "synchronized",
        "this",
        "throw",
        "throws",
        "transient",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "volatile",
        "while",
        "with",
        "yield",
      ],
      color: "blue",
      note: "*Words marked with * were new in ECMAScript 5/6",
    },
    {
      title: "Removed Reserved Words (ECMAScript 5/6)",
      items: [
        "abstract",
        "boolean",
        "byte",
        "char",
        "double",
        "final",
        "float",
        "goto",
        "int",
        "long",
        "native",
        "short",
        "synchronized",
        "throws",
        "transient",
        "volatile",
      ],
      color: "red",
    },
    {
      title: "JavaScript ",
      items: [
        "setTimeout(() => {}, 5000)",
        "setInterval(() => {}, 1000)",
        "new Date()",
        "querySelectorAll()",
        "getElementById()",
        "classList.add()",
        "classList.remove()",
        "classList.toggle()",
        "classList.contains()",
        "classList.replace()",
        "split()",
        "document.getElementById()",
        "innerHTML",
        "toFixed()",
        "includes()",
        "concat()",
        "forEach()",
        "map()",
        "filter()",
        "push()",
        "pop()",
        "unshift()",
        "shift()",
        "splice()",
        "slice()",
        "join()",
        "toString()",
        "includes()",
        "isArray()",
        "toString",
        "isNaN",
        "NaN",
        "null",
        "undefined",
        "typeof()",
        "document.write()",
        "Math.random()",
        "Math.floor()",
        "Math.ceil()",
        "localStorage.getItem()",
        "localStorage.setItem()",
        "",
        "",
        "length",
        "Number",
        "Object",
        "String",
      ],
      color: "purple",
    },
    {
      title: "React.js Keywords/Components",
      items: [
        "export const UserContext = createContext()",
        "<UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>",
        " <UserProvider> <App /> </UserProvider>",
        "const formData = new FormData(event.target)",
        "let navigation = useNavigate()",
        "let parmas=useParams()",
        "path:<- addcourse/:id?",
        " const [first, setfirst] = useState()",
        "useEffect(() => {}, [])",
        "event.preventDefault()",
        "<Link to=></Link>",
        "useRef()",
        "Component",
        "PureComponent",
        "Fragment",
        "memo",
        "useContext",
        "useReducer",
        "useCallback",
        "useMemo",
        "useLayoutEffect",
        "Suspense",
        "lazy",
        "forwardRef",
        "createContext",
        "Children",
        "cloneElement",
        "createElement",
        "StrictMode",
        "Profiler",
      ],
      color: "cyan",
    },
    {
      title: "Next.js Keywords/APIs",
      items: [
        "event.preventDefault()",
        "getStaticProps",
        "getStaticPaths",
        "getServerSideProps",
        "next/router",
        "next/head",
        "next/link",
        "next/image",
        "next/script",
        "next/dynamic",
        "API Routes",
        "Middleware",
        "ISR",
        "Preview Mode",
      ],
      color: "indigo",
    },
    {
      title: "node.js packages",
      items: [
        "npm i bcryptjs",
        "npm i cors",
        "npm i express",
        "npm i jsonwebtoken",
        "npm i mongoose",
        "npm i multer",
        "npm i nodemailer",
      ],
      color: "indigo",
    },

    {
      title: " Node.js Reserved Keywords",
      items: [
        "exports.register = async (request, response) => {}",
        "exports.login = async (request, response) => {}",
        "exports.profile = async (request, response) => {}",
        "const bcrypt = require()", 
        "var jwt = require()",
        "var secretKey = Gionee " ,
        "exports.placeOrder = async (request, response) => {}",
        "exports.confirmOrder = async (request, response) => {}",
        "exports.sendMail = async (request, response) => {}",
        "npm install nodemailer",
        "exports.create = async (request, response) => {}",
        "exports.view = async (request, response) => {}",
        "exports.details = async (request, response) => {}",
        "exports.update = async (request, response) => {}",
        "exports.changeStatus = async (request, response) => {}",
        "exports.delete = async (request, response) => {}",
        "exports.multipleDelete = async (request, response) => {}",
        "data = new coursesModel({name: request.body.name, })<- create ",
        "await coursesModel.findById(request.params.id) <-details",
        "await courseModel.updatOne({_id:request.body.id},{$set:data}) <-updateOne",
        "await coursesModel.find() <- view",
        "await coursesModel.find({condition}) <- view",
        "Model.findOne() <-changeStatus",
        "process.env.xyz",
        "populate('author')",
        "Schema({})",
        "module.exports",
        "async",
        "select('')",
        "$gt",
        "$lt",
        "type: mongoose.Types.ObjectId",
        "Model.deleteMany()",
        "Model.deleteOne()",
        "Model.find()",
        "Model.findById()",
        "Model.findByIdAndDelete()",
        "Model.findByIdAndRemove()",
        "Model.findByIdAndUpdate()",
        "Model.findOneAndDelete()",
        "Model.findOneAndReplace()",
        "Model.findOneAndUpdate()",
        "Model.replaceOne()",
        "Model.updateMany()",
        "Model.updateOne()",
        "",
        "",
      ],
      color: "blue",
      note: "Common MongoDB/ORM methods for querying data",
    },

    {
      title: " Node.js Reserved Keywords:    Find/Query Operations",
      items: [
        "find()",
        "find({name:request.body.name})",
        "findOne()",
        "findById()",
        "findAndModify()",
        "query()",
        "search()",
        "filter()",
        "where()",
        "select('name image order')",
        "$lookup",
    
      ],
      color: "blue",
      note: "Common MongoDB/ORM methods for querying data",
    },
    {
      title: "Node.js Reserved Keywords:  Delete/Remove Operations",
      items: [
        "remove()",
        "deleteOne()",
        "deleteMany()",
        "findByIdAndDelete()",
        "findOneAndDelete()",
        "$unset",
        "drop()",
        "dropDatabase()",
        "dropCollection()",
        "fs.unlink()",
        "fs.rmdir()",
      ],
      color: "red",
      note: "Methods for deleting documents, collections, or files",
    },
    {
      title: "Node.js Reserved Keywords:  Update/Modify Operations",
      items: [
        "update()",
        "updateOne()",
        "updateMany()",
        "findByIdAndUpdate()",
        "findOneAndUpdate()",
        "replaceOne()",
        "$set",
        "$inc",
        "$push",
        "$pull",
        "$addToSet",
        "fs.writeFile()",
        "fs.appendFile()",
      ],
      color: "green",
      note: "Methods for modifying documents or files",
    },
    {
      title: "Node.js Reserved Keywords:  Node.js Core Modules",
      items: [
        "fs",
        "path",
        "http",
        "https",
        "url",
        "querystring",
        "stream",
        "buffer",
        "crypto",
        "events",
        "child_process",
        "cluster",
      ],
      color: "purple",
      note: "Essential Node.js modules for file/system operations",
    },
    {
      title: "Other Reserved Words (HTML/Window objects)",
      items: [
        "alert",
        "all",
        "anchor",
        "anchors",
        "area",
        "assign",
        "blur",
        "button",
        "checkbox",
        "clearInterval",
        "clearTimeout",
        "clientInformation",
        "close",
        "closed",
        "confirm",
        "constructor",
        "crypto",
        "decodeURI",
        "decodeURIComponent",
        "defaultStatus",
        "document",
        "element",
        "elements",
        "embed",
        "embeds",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "event",
        "fileUpload",
        "focus",
        "form",
        "forms",
        "frame",
        "innerHeight",
        "innerWidth",
        "layer",
        "layers",
        "link",
        "location",
        "mimeTypes",
        "navigate",
        "navigator",
        "frames",
        "frameRate",
        "hidden",
        "history",
        "image",
        "images",
        "offscreenBuffering",
        "open",
        "opener",
        "option",
        "outerHeight",
        "outerWidth",
        "packages",
        "pageXOffset",
        "pageYOffset",
        "parent",
        "parseFloat",
        "parseInt",
        "password",
        "pkcs11",
        "plugin",
        "prompt",
        "propertyIsEnum",
        "radio",
        "reset",
        "screenX",
        "screenY",
        "scroll",
        "secure",
        "select",
        "self",
        "setInterval",
        "setTimeout",
        "status",
        "submit",
        "taint",
        "text",
        "textarea",
        "top",
        "unescape",
        "untaint",
        "window",
      ],
      color: "yellow",
    },
    {
      title: "HTML Event Handlers (to avoid)",
      items: [
        "onblur",
        "onclick",
        "onerror",
        "onfocus",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onmouseover",
        "onload",
        "onmouseup",
        "onmousedown",
        "onsubmit",
      ],
      color: "pink",
    },
  ];

  const images = [
    { id: 1, src: "/singleimage.png" },
    { id: 2, src: "/multipleimsge.png" },
    { id: 3, src: "/Screenshot 2025-05-12 220014.png" },
    // Add more images as needed
  ];
  return (
    <>
      <div>
        {location.pathname === "/Reserved_Keywords" ? <Header /> : null}
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen py-10 px-4 h-screen overflow-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-12">
            Reserved Words Reference
          </h1>

          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-8 border-l-4"
              style={{ borderColor: `${section.color}` }}
            >
              <h2
                className={`text-2xl font-semibold mb-4 capitalize text-${section.color}-700`}
              >
                {section.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`bg-${section.color}-100 text-${section.color}-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              {section.note && (
                <p className="text-sm text-gray-500 mt-4 italic">
                  {section.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-3">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Screenshot ${image.id}`}
              className="w-full rounded "
            />
          ))}
        </div>
      </div>
    </>
  );
}
