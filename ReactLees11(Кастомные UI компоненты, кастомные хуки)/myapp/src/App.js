import Content from "./components/Content/Content";
import Button from "./components/UI/Button/Buton";
import Input from "./components/UI/Input/Input";

function App() {
  return (
    <div>
       <Button 
        title='Serach now'
        theme='light'
      />
       <Button 
        onClick={() => console.log('click')}  
        title='Get'
        theme='dark'
      />
      <div>
        <Input size={'xl'} name={'input_xl'}/>
        <Input size={'l'} id={'elem_id'}/>
        <Input size={'s'}/>
      </div>
      <div>
        <Content/>
      </div>
    </div>
  );
}

export default App;
