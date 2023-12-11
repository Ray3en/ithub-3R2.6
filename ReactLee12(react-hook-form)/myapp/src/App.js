import './App.css';
import {useForm} from 'react-hook-form'

function App() {

  let {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({mode: 'onSubmit'})

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  // console.log(errors)

  let inputName = register('firstname', {
    required: 'Имя должно быть заполнено',
    minLength: {
      value: 3,
      message: 'Минимальная длина имени - 3 символа'
    },
    maxLength: {
      value: 10,
      message: 'Максимальная длина имена - 10 символов'
    }
  })

  let inputLastName = register('lastname', {
    required: 'Фамилия должна быть заполнена',
    // max: {
    //   value: -1,
    //   message: 'Значнеие должно быть отрицательныс'
    // },
    // min: {
    //   value: -10,
    //   message: 'Значнеие должно не меньше 10'
    // },
    pattern: {
      value: /^[А-Яа-яA-Za-z]+$/,
      message: 'Фамилия не соответсвует маске'
    }
  })

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Имя
            <input className={`${errors.firstname ? 'error' : ''}`} {...inputName}/>
          </label>
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label>
            Фамилия
            <input className={`${errors.lastname ? 'error' : ''}`} {...inputLastName}/>
          </label>
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <div>
          <input type='submit'/>
        </div>
      </form>
    </div>
  );
}

export default App;
