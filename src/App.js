
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    if (num === '.'){
      if (currentNumber.indexOf('.') !== -1) {
        return
      }
    }
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const calcOperation = () => {
    if (operation === '') {      
    } else if (operation === '+') {
      return  Number(firstNumber) + Number(currentNumber)
    } else if (operation === '-') {
      return  Number(firstNumber) - Number(currentNumber)
    } else if (operation === 'x') {
      return  Number(firstNumber) * Number(currentNumber)
    } else if (operation === '/') {
      if (currentNumber === 0) { return 0 }
      return  Number(firstNumber) / Number(currentNumber)
    } 
    return 0;    
  }

  const mountOperation = (oper) => {
    if (operation === ''){
      if (currentNumber !== '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
      }       
    } else {
      if(currentNumber !== '0'){ 
        const result = calcOperation();
        setFirstNumber(String(result));
        setCurrentNumber('0')
      }
      //else {} //add oper
    }
    setOperation(oper);
  }

  const handleSumNumbers = () => {
    mountOperation('+')
  }

  const handleMinusNumbers = () => {
    mountOperation('-')
  }

  const handleTimesNumbers = () => {
    mountOperation('x')
  }

  const handleDividNumbers = () => {
    mountOperation('/')
  }

  const handleEquals = () => {
    mountOperation('')    
  }

  return (
    <Container>
      <Content>
        <Input value={firstNumber + ' ' + operation} />
        <Input value={currentNumber} className="small"/>
        <Row>
          <Button label="x" onClick={handleTimesNumbers}/>
          <Button label="/" onClick={handleDividNumbers}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
