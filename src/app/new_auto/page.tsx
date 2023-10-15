'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import { autoItem } from '../automobiles/page';
import axios from 'axios';

export const categories = ['supercar', 'lux', 'business', 'convertible', 'crossover'];
const categoriesFOrNewRecipe = [...categories];
categoriesFOrNewRecipe.unshift('Choose one');

const newAuto = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const modelRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const require = 'This field must be filled';

  const [categoryActive, setCategoryActive] = useState(categoriesFOrNewRecipe[0]);
  const [open, setOpen] = useState(false);

  const [nameValue, setNameValue] = useState('');
  const [modelValue, setModelValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [descValue, setDescValue] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [modelDirty, setModelDirty] = useState(false);
  const [priceDirty, setPriceDirty] = useState(false);
  const [descDirty, setDescDirty] = useState(false);
  const [categoryDirty, setCategoryDirty] = useState(false);

  const [nameError, setNameError] = useState(require);
  const [modelError, setModelError] = useState(require);
  const [priceError, setPriceError] = useState(require);
  const [descError, setDescError] = useState(require);

  const [categoryError, setCategoryError] = useState(true);

  const [formValid, setFormValid] = useState(false);
  const [submitState, setSubmitState] = useState(true);

  useEffect(() => {
    if (nameError || modelError || priceError || categoryError || descError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, modelError, priceError, categoryError, descError]);

  const blurHandler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'model':
        setModelDirty(true);
        break;
      case 'price':
        setPriceDirty(true);
        break;
      case 'description':
        setDescDirty(true);
        break;
    }
  };

  const onClickListCategory = (i: number) => {
    setOpen(false);
    setCategoryActive(categoriesFOrNewRecipe[i]);

    if (categoriesFOrNewRecipe[i] == 'Choose one') {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  };

  const onChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
    if (e.target.value && e.target.value.trim() != '') {
      setNameError('');
    } else {
      setNameError(require);
    }
  };

  const onChangeInputModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelValue(e.target.value);
    if (e.target.value && e.target.value.trim() != '') {
      setModelError('');
    } else {
      setModelError(require);
    }
  };

  const onChangeInputPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.value);
    if (e.target.value && e.target.value.trim() != '') {
      setPriceError('');
    } else {
      setPriceError(require);
    }
  };

  const onChangeInputDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescValue(e.target.value);
    if (e.target.value && e.target.value.trim() != '') {
      setDescError('');
    } else {
      setDescError(require);
    }
  };

  const onClickAdd = () => {
    if (submitState) {
      const item: autoItem = {
        id: String((Math.random() * 100000).toFixed(0)),
        name: String(nameRef.current?.value),
        category: categoryActive,
        price: Number(priceRef.current?.value),
        desc: String(descRef.current?.value),
        img: 'https://www.supercars.net/blog/wp-content/uploads/2019/11/best-supercar-by-year.png',
      };
      setSubmitState(false);
      axios
        .post('https://64fc8074605a026163ae8fe7.mockapi.io/automobiles', item)
        .then((res) => {
          console.log(res);
          window.location.reload();
          window.location.pathname = '/';
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.inputName}>
            <div className={styles.name}>Name</div>
            {nameDirty && nameError && <div className={styles.error}>{nameError}</div>}
            <input
              ref={nameRef}
              type="text"
              name="name"
              value={nameValue}
              onChange={(e) => onChangeInputName(e)}
              onBlur={(e) => blurHandler(e)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputName}>
            <div className={styles.name}>Model</div>
            {modelDirty && modelError && <div className={styles.error}>{modelError}</div>}
            <input
              ref={modelRef}
              type="text"
              name="model"
              value={modelValue}
              onChange={(e) => onChangeInputModel(e)}
              onBlur={(e) => blurHandler(e)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputName}>
            <div className={styles.name}>Price ($)</div>
            {priceDirty && priceError && <div className={styles.error}>{priceError}</div>}
            <input
              ref={priceRef}
              type="number"
              name="price"
              value={priceValue}
              onChange={(e) => onChangeInputPrice(e)}
              onBlur={(e) => blurHandler(e)}
              className={`${styles.input} ${styles.number}`}
            />
          </div>
          <div className={styles.descpiption__title}>Category</div>
          <div className={styles.select}>
            <div className={styles.select__header} onClick={() => setOpen(!open)}>
              <div
                className={
                  categoryActive == 'Choose one'
                    ? `${styles.select__current} ${styles.select__current__disabled}`
                    : styles.select__current
                }>
                {categoryActive}
              </div>
              <div className={styles.triangle}>&#9662;</div>
            </div>

            {open && (
              <div className={styles.select__body}>
                {categoriesFOrNewRecipe.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        i == 0
                          ? `${styles.select__item__disabled} ${styles.select__item}`
                          : styles.select__item
                      }
                      onClick={() => onClickListCategory(i)}>
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className={styles.descpiption}>
            <div className={styles.descpiption__title}>Description</div>
            {descDirty && descError && <div className={styles.error}>{descError}</div>}
            <textarea
              ref={descRef}
              onChange={(e) => onChangeInputDescription(e)}
              name="description"
              value={descValue}
              onBlur={(e) => blurHandler(e)}
              className={styles.textarea}></textarea>
          </div>
        </form>
        <button disabled={!formValid} className={styles.button} onClick={onClickAdd}>
          Submit
        </button>
      </div>
    </main>
  );
};

export default newAuto;
