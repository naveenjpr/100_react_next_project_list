import React, { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Header from "../../Common page/Header"
import { PDFDocument } from "pdf-lib"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function All_pdf_convert_one_pdf() {
  const location = useLocation()

  const [mergedPDF, setMergedPDF] = useState(null) // मर्ज की गई PDF फाइल का URL
  const [fileCount, setFileCount] = useState(0) // चुनी गई फाइलों की संख्या

  const fileInputRef = useRef(null) // फाइल इनपुट के लिए रेफ

  const handleMergePDFs = async (event) => {
    const files = event.target.files // यूजर द्वारा चुनी गई फाइलें
    setFileCount(files.length) // फाइलों की संख्या अपडेट करें

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

    const mergedPdfDoc = await PDFDocument.create() // नया PDF डॉक्यूमेंट बनाएं

    for (const file of files) {
      const fileData = await file.arrayBuffer() // फाइल को बाइनरी डेटा में बदलें
      const pdfDoc = await PDFDocument.load(fileData) // PDF डॉक्यूमेंट लोड करें
      const copiedPages = await mergedPdfDoc.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices()
      ) // पेज कॉपी करें
      copiedPages.forEach((page) => mergedPdfDoc.addPage(page)) // पेज को मर्ज किए गए PDF में जोड़ें
    }

    const mergedPdfBytes = await mergedPdfDoc.save() // मर्ज की गई PDF को बाइट्स में सेव करें
    const blob = new Blob([mergedPdfBytes], { type: "application/pdf" }) // बाइट्स को ब्लॉब में बदलें
    setMergedPDF(URL.createObjectURL(blob)) // ब्लॉब का URL बनाएं और स्टेट में सेट करें
  }

  const datareset = () => {
    setMergedPDF(null) // मर्ज की गई PDF को रीसेट करें
    setFileCount(0) // फाइलों की संख्या रीसेट करें

    if (fileInputRef.current) {
      fileInputRef.current.value = "" // फाइल इनपुट को रीसेट करें
    }
  }

  return (
    <>
      <div>
        {location.pathname === "/All_pdf_convert_one_pdf" ? <Header /> : null}
      </div>

      <div className=" bg-gray-100 min-h-screen">
        <ToastContainer />

        <h3 className="text-center py-[10px] font-medium text-[35px]">
          Merge PDF
        </h3>
        <div className=" relative  flex flex-col items-center p-6 justify-center bg-[#87cefa] w-[90%] h-[300px] border-[4px] border-dotted border-black mx-auto">
          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept="application/pdf"
            onChange={handleMergePDFs}
            className="block w-full text-lg text-gray-900 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50 p-3 transition duration-300 hover:border-blue-500 focus:outline-none"
          />

          {fileCount > 0 && fileCount < 2 && (
            <span className="text-red-500 text-lg font-medium mt-2">
              Please select at least two PDF files
            </span>
          )}

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
    </>
  )
}
