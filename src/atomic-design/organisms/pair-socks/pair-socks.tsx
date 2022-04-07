import { useState } from 'react';
import styles from './pair-socks.module.scss';
import { BsFillBasketFill } from 'react-icons/bs';
import { Button } from '../../atoms/button/button';

export function PairSocks() {
  const [redSocks, setRedSocks] = useState<Array<number>>([]);
  const [blueSocks, setBlueSocks] = useState<Array<number>>([]);
  const [yellowSocks, setYellowSocks] = useState<Array<number>>([]);
  const [greenSocks, setGreenSocks] = useState<Array<number>>([]);
  const [purpleSocks, setPurpleSocks] = useState<Array<number>>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  return !showResult ? (
    <div className='flex flex-col items-center'>
      <h2 className='text-center w-[80%] font-medium mb-2'>
        Preciona un calcetin para agregar en la canasta:
      </h2>
      <div className='w-[80%] flex justify-evenly text-md pb-4'>
        <Button
          label={<img src='/socks/sock-red-single.svg' alt='sock-red-single' className='h-14' />}
          customClass='text-red-500'
          onClick={() => setRedSocks([...redSocks, 1])}
        />
        <Button
          label={<img src='/socks/sock-blue-single.svg' alt='sock-blue-single' className='h-14' />}
          customClass='text-blue-500'
          onClick={() => setBlueSocks([...blueSocks, 1])}
        />
        <Button
          label={
            <img src='/socks/sock-yellow-single.svg' alt='sock-yellow-single' className='h-14' />
          }
          customClass='text-yellow-500'
          onClick={() => setYellowSocks([...yellowSocks, 1])}
        />
        <Button
          label={
            <img src='/socks/sock-green-single.svg' alt='sock-green-single' className='h-14' />
          }
          customClass='text-green-500'
          onClick={() => setGreenSocks([...greenSocks, 1])}
        />
        <Button
          label={
            <img src='/socks/sock-purple-single.svg' alt='sock-purple-single' className='h-14' />
          }
          customClass='text-purple-500'
          onClick={() => setPurpleSocks([...purpleSocks, 1])}
        />
      </div>
      <div className='relative w-[170px] h-[200px] flex justify-evenly items-center'>
        <BsFillBasketFill className='absolute text-[200px] text-gray-400 ' />
        {redSocks.length > 0 && (
          <div className='relative  mt-16'>
            <img src='/socks/sock-red-single.svg' alt='sock-red-single' className='h-12' />
            <p className='absolute h-6 w-6 flex justify-center items-center top-4 bg-black text-white leading-none rounded-full'>
              {redSocks.length}
            </p>
          </div>
        )}
        {blueSocks.length > 0 && (
          <div className='relative  mt-16'>
            <img src='/socks/sock-blue-single.svg' alt='sock-blue-single' className='h-12' />
            <p className='absolute h-6 w-6 flex justify-center items-center top-4 bg-black text-white leading-none rounded-full'>
              {blueSocks.length}
            </p>
          </div>
        )}
        {yellowSocks.length > 0 && (
          <div className='relative  mt-16'>
            <img src='/socks/sock-yellow-single.svg' alt='sock-yellow-single' className='h-12' />
            <p className='absolute h-6 w-6 flex justify-center items-center top-4 bg-black text-white leading-none rounded-full'>
              {yellowSocks.length}
            </p>
          </div>
        )}
        {greenSocks.length > 0 && (
          <div className='relative  mt-16'>
            <img src='/socks/sock-green-single.svg' alt='sock-green-single' className='h-12' />
            <p className='absolute h-6 w-6 flex justify-center items-center top-4 bg-black text-white leading-none rounded-full'>
              {greenSocks.length}
            </p>
          </div>
        )}
        {purpleSocks.length > 0 && (
          <div className='relative  mt-16'>
            <img src='/socks/sock-purple-single.svg' alt='sock-purple-single' className='h-12' />
            <p className='absolute h-6 w-6 flex justify-center items-center top-4 bg-black text-white leading-none rounded-full'>
              {purpleSocks.length}
            </p>
          </div>
        )}
      </div>
      <Button
        label='Calcular pares de calcetines'
        customClass='bg-black text-white p-4 rounded-md mt-4'
        onClick={() => setShowResult(true)}
      />
    </div>
  ) : (
    <div>
      {redSocks.length > 0 && (
        <div className='flex flex-col justify-center items-center font-medium text-lg'>
          <img src='/socks/sock-red-pair.svg' alt='sock-red-pair' className='h-16 mb-2' />
          <p>{redSocks.length % 2 === 0 ? redSocks.length / 2 : (redSocks.length - 1) / 2} PARES</p>
        </div>
      )}
      {blueSocks.length > 0 && (
        <div className='flex flex-col justify-center items-center font-medium text-lg'>
          <img src='/socks/sock-blue-pair.svg' alt='sock-blue-pair' className='h-16 mb-2' />
          <p>
            {blueSocks.length % 2 === 0 ? blueSocks.length / 2 : (blueSocks.length - 1) / 2} PARES
          </p>
        </div>
      )}
      {yellowSocks.length > 0 && (
        <div className='flex flex-col justify-center items-center font-medium text-lg'>
          <img src='/socks/sock-yellow-pair.svg' alt='sock-yellow-pair' className='h-16 mb-2' />
          <p>
            {yellowSocks.length % 2 === 0 ? yellowSocks.length / 2 : (yellowSocks.length - 1) / 2}{' '}
            PARES
          </p>
        </div>
      )}
      {greenSocks.length > 0 && (
        <div className='flex flex-col justify-center items-center font-medium text-lg'>
          <img src='/socks/sock-green-pair.svg' alt='sock-green-pair' className='h-16 mb-2' />
          <p>
            {greenSocks.length % 2 === 0 ? greenSocks.length / 2 : (greenSocks.length - 1) / 2}{' '}
            PARES
          </p>
        </div>
      )}
      {purpleSocks.length > 0 && (
        <div className='flex flex-col justify-center items-center font-medium text-lg'>
          <img src='/socks/sock-purple-pair.svg' alt='sock-purple-pair' className='h-16 mb-2' />
          <p>
            {purpleSocks.length % 2 === 0 ? purpleSocks.length / 2 : (purpleSocks.length - 1) / 2}{' '}
            PARES
          </p>
        </div>
      )}
    </div>
  );
}
