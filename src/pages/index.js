import React, { useState } from "react"
// components
import ModalAddInfos from '../components/ModalAddInfos'

const IndexPage = () => {
  
  const [openModal, setOpenModal] = useState(false)
  const [grade, setGrade] = useState([])
  
  function updateNotes(studentGrade) {
    setGrade([...grade, studentGrade])
  }

  return (
    <>
      {
        openModal && 
          <ModalAddInfos
            close={setOpenModal}
            updateNotes={updateNotes}
          />
      }
      <div className='flex flex-col items-center justify-between bg-gray-800 w-full h-screen sm:px-12 sm:mx-auto'>
        <div className="w-full">
          <div className="flex flex-col w-full justify-between bg-violet-300 p-5">
            <p className="text-2xl text-gray-800">📝 Média da classe</p>
            <div className="flex flex-row w-full mt-5">
              <span className="text-sm text-gray-500 mr-12">Aluno</span>
              <span className="text-sm text-gray-500 ml-auto">NP1</span>
              <span className="text-sm text-gray-500 ml-auto">NP2</span>
              <span className="text-sm text-gray-500 ml-auto">NP3</span>
              <span className="text-sm text-gray-500 ml-auto">NP4</span>
              <span className="text-sm text-gray-500 ml-auto">Média</span>
            </div>
          </div>
          <div className="flex flex-col w-full overflow-y-scroll h-full sm:h-[300px] px-5">
            {
              grade.map((item, index) =>
                <div key={index} className="border-b-2 py-7 last:border-0">
                  <div className="flex flex-row">
                    <p className="text-xl w-[80px] text-white">{item.name}</p>
                    <p className="text-gray-200 text-xl ml-auto ">{item.np1}</p>
                    <p className="text-gray-200 text-xl ml-auto ">{item.np2}</p>
                    <p className="text-gray-200 text-xl ml-auto ">{item.np3}</p>
                    <p className="text-gray-200 text-xl ml-auto ">{item.np4}</p>
                    <p className="text-white text-xl ml-auto font-bold ">{item.md}</p>
                  </div>
                  <p className="text-xl text-gray-300 py-2 px-2 mt-3">{item.feedback}</p>
                </div>
              )
            }
          </div>
        </div>
        <div className="w-full flex flex-col px-5 py-6">
          <button 
            onClick={() => setOpenModal(true)} 
            className="bg-green-600 text-white text-sm py-4"
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  )
}
export default IndexPage
