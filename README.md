<code>
  const [feedback, setFeedback] = React.useState([])
  const [result, setResult] = React.useState('')
  const [name, setName] = React.useState('')
  const [names, setNames] = React.useState([])
  const [grade, setGrade] = React.useState([]);
  
  function handleAddResult() {
    setGrade([...grade, Number(result)])
    setNames([...names, name])
    setResult('')
    setName('')
  }

  function handleSistem() {
    grade.forEach(function(element){
      let arrFeedback = []
      if (element < 5 ) {
       arrFeedback.push('Você foi reprovado!')
      }
      else if (element === 5) {
        arrFeedback.push('Você passou. Estude mais no proximo ano!')
      }
      else if (element > 5 && element < 10){
        arrFeedback.push('Você foi aprovado!')
      }
      else if (element === 10) {
        arrFeedback.push('Parabéns, você foi aprovado com nota maxíma!')
      }
      setFeedback(arrFeedback)
    })
  }
</code>