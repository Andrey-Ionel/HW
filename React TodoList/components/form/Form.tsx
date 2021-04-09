import React, { useState, useEffect, useRef } from 'react';

import { Button } from '../../components/button/Button';


export const Form: React.FC = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    const onChangeInputVal = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form>
            <input
                ref={inputRef}
                value={name}
                type="text"
                placeholder="Todo"
                onChange={onChangeInputVal}
            />
            {name === '' ? '' : name}
            <Button type='button' color="danger">ADD</Button>
        </form>
    );
}
