import React, { useState } from 'react'

const Index = ({close, updateNotes}) => {


  const INITIAL_VALUE = [
    {title: 'Nota 1', input: 'N1', value: ''},
    {title: 'Nota 2', input: 'N2', value: ''},
    {title: 'Nota 3', input: 'N3', value: ''},
    {title: 'Nota 4', input: 'N4', value: ''},
  ]
  const [notes, setNotes] = useState(INITIAL_VALUE)
  const [name, setName] = useState('')
  

  function setValue(e, index) {
    const newNotes = [...notes];
    newNotes[index] = { ...newNotes[index], value: parseFloat(e.target.value) };
    setNotes(newNotes);
  }

  function feedbackSistem() {
    const md = parseInt((notes[0].value +  notes[1].value + notes[2].value + notes[3].value) / 4)
    let feedbackMessage = ''
    if (md < 5 ) {
      feedbackMessage = '❌ Você foi reprovado!'
    }
    else if (md === 5) {
      feedbackMessage = '⚠️ Você passou na média. Estude mais no proximo semestre!'
    }
    else if (md > 5 && md < 10){
      feedbackMessage = '✅ Você foi aprovado!'
    }
    else if (md === 10) {
      feedbackMessage = '🥳 Parabéns, você foi aprovado com nota maxíma!'
    }
    return feedbackMessage
  }

  
  const npsValue = {
    name: name,
    np1: notes[0].value,
    np2: notes[1].value,
    np3: notes[2].value,
    np4: notes[3].value,
    md:  parseInt((notes[0].value +  notes[1].value + notes[2].value + notes[3].value) / 4),
    feedback: feedbackSistem(),
  }
  
  
  return (
    <>
      <div className="w-full h-screen p-8 fixed left-0 top-0 bg-gray-600/75 backdrop-blur-sm">
        <div className="w-full h-full pt-12 bg-blue-400 relative">
          <button
            className="w-[30px] h-[30px] text-sm bg-white text-blue-400 font-bold absolute top-3 right-3"
            onClick={() => close(false)}
          >
            ✕
          </button>

          <div className='flex flex-col w-full h-full px-5 py-7'>
            <h1 className="text-white text-4xl">Adicione as notas do aluno.</h1>
            <div className="flex flex-col mt-2 h-full">
              <div className="flex flex-col">
                <input 
                  className='py-3 outline-0 border-b-2 bg-transparent text-white w-full mt-2 placeholder:text-white'
                  placeholder='Nome do aluno'
                  type='text'
                  value={name}
                  onChange={(e) =>  setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col h-full">
                <div className="flex flex-row flex-wrap mt-4 gap-1">
                  {
                    notes.map((item, index) => 
                      <div key={index} className="flex flex-col py-3 w-[49%]">
                        <span className="mb-2 text-white">{item.title}</span>
                        <input 
                          className='px-2 py-3 outline-0 text-sm'
                          placeholder={item.input}
                          type='number'
                          value={item.value}
                          onChange={(e) => setValue(e, index)}
                        />
                      </div>
                    )
                  }
                </div>

                <button 
                  onClick={() => {
                    updateNotes(npsValue);
                    close(false)}
                  } 
                  className="bg-green-600 text-white text-sm py-4 mt-auto"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index