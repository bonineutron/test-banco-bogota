import { useState } from 'react';
import styles from './max-min-value.module.scss';
import { Button } from '../../atoms/button/button';
import { IDataNumbers } from '../../../shared/interfaces/max-min-value.interface';

export function MaxMinValue() {
  const [data, setData] = useState<IDataNumbers>({ one: 0, two: 0, three: 0, four: 0, five: 0 });
  const [minValues, setMinValues] = useState<Array<number>>([]);
  const [maxValues, setMaxValues] = useState<Array<number>>([]);
  const operations = (e: any) => {
    e.preventDefault();
    const dataArray: Array<number> = Object.values(data).sort();
    setMinValues(dataArray.slice(0, 4));
    setMaxValues(dataArray.slice(1, 5));
  };
  const renderResults = (validation: boolean): number => {
    let sum: number = 0;
    if (validation) {
      for (let i = 0; i < minValues.length; i++) {
        sum += minValues[i];
      }
    }
    if (!validation) {
      for (let i = 0; i < maxValues.length; i++) {
        sum += maxValues[i];
      }
    }
    return sum;
  };
  return (
    <div className='flex flex-col items-center'>
      <p className='text-center mb-4 w-[80%]'>
        Ingrese cinco numeros para calcular el resulado maximo con los numeros mayores y el
        resultado minimo con los numeros menores:
      </p>
      <form onSubmit={operations} className='flex flex-col justify-center'>
        <div className='flex flex-col items-center'>
          <label className='mb-2'>
            Numero 1:
            <input
              type='number'
              className='ml-4 w-14 border-2'
              value={data.one}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, one: parseInt(e.target.value) })
              }
            />
          </label>
          <label className='mb-2'>
            Numero 2:
            <input
              type='number'
              className='ml-4 w-14 border-2'
              value={data.two}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, two: parseInt(e.target.value) })
              }
            />
          </label>
          <label className='mb-2'>
            Numero 3:
            <input
              type='number'
              className='ml-4 w-14 border-2'
              value={data.three}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, three: parseInt(e.target.value) })
              }
            />
          </label>
          <label className='mb-2'>
            Numero 4:
            <input
              type='number'
              className='ml-4 w-14 border-2'
              value={data.four}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, four: parseInt(e.target.value) })
              }
            />
          </label>
          <label className='mb-4'>
            Numero 5:
            <input
              type='number'
              className='ml-4 w-14 border-2'
              value={data.five}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, five: parseInt(e.target.value) })
              }
            />
          </label>
        </div>
        <Button
          type='submit'
          label='Calcular'
          customClass='bg-black text-white p-2 px-6 rounded-md font-medium text-lg'
        />
      </form>
      <div className='mt-4 bg-gray-300 p-3 rounded-md'>
        <div>
          <p>Resultado Minimo: {renderResults(true)}</p>
        </div>
        <div>
          <p>Resultado Maximo: {renderResults(false)}</p>
        </div>
      </div>
    </div>
  );
}
