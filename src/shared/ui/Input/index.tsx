import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import ErrorText from '../ErrorText';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

interface InputProps {
  placeholder: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
  register?: UseFormRegisterReturn;
  defaultValue?: string;
}

const Input: FC<InputProps> = ({ placeholder, onChange, errorMessage, register, defaultValue }) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : '');

  const changeHandler = (text: string) => {
    setValue(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <div className={styles.root}>
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
      {!onChange ? (
        <input className={styles.input} type="text" placeholder={placeholder} {...register} />
      ) : (
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
