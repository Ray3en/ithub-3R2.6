

function Description(){

  let string = 'Hello world!'
  let number = 5
  let isVisible = true

  if (number > 10){
    isVisible = false 
  }


  return(
      <div>
        <p>{string}</p>
        {/* Условное ветвление внутри тега */}
        <h1 id={'elem' + 2}>{(number > 10) ? 'Число больше 10' : 'Число меньше или равен 10'}</h1>

        {/* Условное ветлвение с выбором тега */}
        {(number % 2 == 0) ? <h3>{string}</h3> : <h1>Число на 2 не делится</h1>}

        {/* Наличие тега в разметке по условию */}
        {(isVisible) ? <input/> : ''}

        {/* Аналог используя логические операторы */} 
        {isVisible && <input/>}
      

      </div>
    )
  }

export default Description


