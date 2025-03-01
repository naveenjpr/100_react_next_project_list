import React, { useRef, useState } from "react"
import { PDFDocument } from "pdf-lib"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function All_pdf_convert_one_pdf() {
  const [mergedPDF, setMergedPDF] = useState(null)
  const fileInputRef = useRef(null) // Ref for file input

  const handleMergePDFs = async (event) => {
    //यह एक एसिंक्रोनस फंक्शन है जो यूजर द्वारा चुनी गई PDF फाइलों को मर्ज करता है।

    const files = event.target.files //event.target.files से यूजर द्वारा चुनी गई फाइलों की सूची प्राप्त की जाती है।

    if (files.length < 2) {
      toast.error("Please select at least two PDFs.", {
        position: "top-right",
        autoClose: 3000, // 3 सेकंड के बाद टोस्ट गायब होगा
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      return
    }

    const mergedPdfDoc = await PDFDocument.create() //उपयोग करके एक नया PDF डॉक्यूमेंट बनाया जाता है, जिसमें सभी PDF फाइलों को मर्ज किया जाएगा।

    for (const file of files) {
      //एक लूप के माध्यम से सभी चुनी गई PDF फाइलों को प्रोसेस किया जाता है।

      const fileData = await file.arrayBuffer() // उपयोग करके फाइल को बाइनरी डेटा में बदला जाता है।

      const pdfDoc = await PDFDocument.load(fileData) // उपयोग करके फाइल को PDF डॉक्यूमेंट में लोड किया जाता है।

      const copiedPages = await mergedPdfDoc.copyPages(
        //copyPages() का उपयोग करके PDF के सभी पेजों को कॉपी किया जाता है और उन्हें मर्ज किए जाने वाले PDF डॉक्यूमेंट में जोड़ा जाता है।

        pdfDoc,
        pdfDoc.getPageIndices()
      )

      copiedPages.forEach((page) => mergedPdfDoc.addPage(page))
    }

    const mergedPdfBytes = await mergedPdfDoc.save() //mergedPdfDoc.save() का उपयोग करके मर्ज किए गए PDF को बाइट्स में सेव

    const blob = new Blob([mergedPdfBytes], { type: "application/pdf" }) //Blob  इन बाइट्स को एक PDF फाइल में बदला जाता है।

    setMergedPDF(URL.createObjectURL(blob)) // इस फाइल का URL जेनरेट किया जाता है और इसे mergedPDF स्टेट में सेट किया जाता है।
  }

  const datareset = () => {
    setMergedPDF(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = "" // Reset file input properly
    }
  }

  return (
    <div className=" bg-gray-100 min-h-screen">
      <ToastContainer />

      <h3 className="text-center py-[10px] font-medium text-[35px]">
        Merge PDF
      </h3>
      <div className=" relative  flex flex-col items-center p-6 justify-center bg-[#705adc] w-[90%] h-[300px] border-[4px] border-dotted border-black mx-auto">
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept="application/pdf"
          onChange={handleMergePDFs}
          className="block w-full text-lg text-gray-900 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50 p-3 transition duration-300 hover:border-blue-500 focus:outline-none"
        />

        {mergedPDF && (
          <div className="flex  items-center gap-5">
            <a
              href={mergedPDF}
              download="merged.pdf"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Download Merged PDF
            </a>

            <button
              className="text-[25px] table  bg-black px-[8px] text-white border-2 border-white rounded-lg hover:bg-red-500 hover:text-black transition-all"
              onClick={datareset}
            >
              Reset
            </button>
          </div>
        )}

        <div className="absolute top-[100%] left-0">
          <ul className="list-disc list-inside space-y-1">
            <li>Please select at least two PDFs</li>
            <li>select only pdf files</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
