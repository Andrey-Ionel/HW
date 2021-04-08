import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../components/button/Button';
import { Form } from '../components/Form'
import { Button as ButtonAntd } from 'antd';
import { MenuApp } from '../components/Menu';
import './style.scss'


interface IAppProps {

}

export const App: React.FunctionComponent<IAppProps> = () => {

  const [isReactButtonVisible, setIsReactButtonVisible] = useState(false);

  const onToggleReactButton = useCallback(() => (setIsReactButtonVisible(!isReactButtonVisible)), [isReactButtonVisible])

  useEffect(() => {
    console.log('MOUNT');
  }, []);

  useEffect(() => {
    console.log('UPDATED', isReactButtonVisible);
  }, [isReactButtonVisible]);

  useEffect(() => () => {
    console.log('UNMOUNT');
  }, []);

  return (
    <>
      <div className='wrapper'>
        <Button color='danger' onClick={onToggleReactButton}>Send</Button>
        {
          isReactButtonVisible && (<Button>React Button</Button>)
        }
        <Form />
        <ButtonAntd>Default Button</ButtonAntd>
        <MenuApp />
      </div>
    </>
  )
}