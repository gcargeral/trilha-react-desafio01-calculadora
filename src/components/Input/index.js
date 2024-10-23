
import { InputContainer } from './styles';

const Input = ({value, className}) => {
    return (
      <InputContainer>
       <input disabled value={value} className={className}/>
      </InputContainer>
    );
  }
  
  export default Input;