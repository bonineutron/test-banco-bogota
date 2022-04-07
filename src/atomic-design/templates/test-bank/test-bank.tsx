import { useState } from 'react';
import styles from './test-bank.module.scss';
import { PairSocks } from '../../organisms/pair-socks/pair-socks';
import { MaxMinValue } from '../../organisms/max-min-value/max-min-value';
import { BirthdayCandles } from '../../organisms/birthday-candles/birthday-candles';
import { Button } from '../../atoms/button/button';
import { Modal } from '../../molecules/modal/modal';
import { TypeMethod } from '../../../shared/enums/test-bank.enum';

export function TestBank() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [typeMethod, setTypeMethod] = useState<TypeMethod>();
  const clickAction = (type: TypeMethod) => {
    setShowModal(true);
    if (type === TypeMethod.socks) {
      setTypeMethod(TypeMethod.socks);
    }
    if (type === TypeMethod.values) {
      setTypeMethod(TypeMethod.values);
    }
    if (type === TypeMethod.candles) {
      setTypeMethod(TypeMethod.candles);
    }
  };
  const contentModal = (type: TypeMethod): JSX.Element => {
    if (type === TypeMethod.socks) {
      return <PairSocks />;
    }
    if (type === TypeMethod.values) {
      return <MaxMinValue />;
    }
    if (type === TypeMethod.candles) {
      return <BirthdayCandles />;
    }
  };
  return (
    <div className='testBank h-screen w-screen flex flex-col justify-center items-center bg-gray-300'>
      <Button
        onClick={() => clickAction(TypeMethod.socks)}
        label='Pares de Calcetines'
        customClass={`${styles.testBank__button} h-16 w-64 mb-6 bg-white text-black rounded-md text-lg`}
      />
      <Button
        onClick={() => clickAction(TypeMethod.values)}
        label='Maximo y Minimo Valor'
        customClass={`${styles.testBank__button} h-16 w-64 mb-6 bg-white text-black rounded-md text-lg`}
      />
      <Button
        onClick={() => clickAction(TypeMethod.candles)}
        label='Velas de Cumpleaños'
        customClass={`${styles.testBank__button} h-16 w-64 mb-20 bg-white text-black rounded-md text-lg`}
      />
      <img src='/bank-bogota.png' alt='logo' className='h-16 mb-3' />
      <div className='flex'>
        <h3 className='font-light italic'>Hecho por:</h3>
        <h2 className='ml-2 font-medium'>Andres Bonilla</h2>
      </div>
      {showModal && (
        <Modal
          component={contentModal(typeMethod)}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}
