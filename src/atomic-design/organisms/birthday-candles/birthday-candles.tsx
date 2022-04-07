import { useEffect, useState } from 'react';
import styles from './birthday-candles.module.scss';
import { Button } from '../../atoms/button/button';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiCandleLight } from 'react-icons/gi';

export function BirthdayCandles() {
  const [age, setAge] = useState<number>(0);
  const [sizesCandles, setSizesCandles] = useState<Array<number>>([]);
  const [maximumSizes, setMaximumSizes] = useState<Array<number>>([]);
  const ageInput = () => Number(prompt('Ingresa la edad:'));
  useEffect(() => {
    if (age > 0) {
      // range javascript
      const num = [...Array(Number(age)).keys()];
      setSizesCandles(num.map((candle, index) => Number(prompt(`Tamaño de vela ${index + 1}:`))));
    }
  }, [age]);
  useEffect(() => {
    const maxSizeCandle = Math.max(...sizesCandles);
    const sizeMaxArray = sizesCandles.filter((e) => e === maxSizeCandle);
    setMaximumSizes(sizeMaxArray);
  }, [sizesCandles]);
  return (
    <div className='flex flex-col items-center'>
      <FaBirthdayCake className='text-7xl text-pink-600 mb-4' />
      <p className='text-center mb-8 w-[80%]'>
        Ingresa la edad del cumpleañero para calcular cuantas velas podra apagar:
      </p>
      <div className='flex flex-col w-[80%] items-center'>
        <Button
          label='Iniciar Calculo'
          onClick={() => setAge(ageInput())}
          customClass='bg-black text-white p-2 px-4 rounded-md w-[200px] mb-10 font-medium'
        />
        {age > 0 && (
          <div className='text-center bg-gray-300 p-4 px-10 rounded-md'>
            <p>La edad de la persona es: {age}</p>
            <div className='flex items-center mt-2'>
              <p>Solo podra apagar: {maximumSizes.length}</p>
              <GiCandleLight className='text-2xl' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
