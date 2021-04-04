import React from 'react';

import { Button } from '../../components/button/Button';


export class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Name" />
                <Button type='button' color="danger">Danger</Button>
            </form>
        );
    }
}
