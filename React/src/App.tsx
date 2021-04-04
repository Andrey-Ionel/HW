import React from 'react';
import { Button } from '../components/button/Button';
import { Form } from './form/Form'
import { Button as ButtonAntd } from 'antd';
import { MenuApp } from './menu/menuApp';

interface IAppProps {

}

interface IAppState {
  isReactButtonVisible: boolean;
}
export class App extends React.PureComponent<IAppProps, IAppState> {

  constructor(props: IAppProps | Readonly<IAppProps>) {
    super(props);
    this.state = {
      isReactButtonVisible: false,
    }
  }

  getHeader() {
    return 'React'
  }

  onToggleReactButton = () => { //стрелками решили проблему потери this
    const { isReactButtonVisible } = this.state
    this.setState({
      isReactButtonVisible: !isReactButtonVisible
    })
  }

  render() {
    const header = this.getHeader()
    const { isReactButtonVisible } = this.state
    return (
      <>
        <div>Hello!</div>
        <h1>{header}</h1>
        <Button>Cleck Me</Button>
        <Button color='danger' onClick={this.onToggleReactButton}>Send</Button>
        {
          isReactButtonVisible && (<Button>React Button</Button>)
        }
        <Form />
        <ButtonAntd>Default Button</ButtonAntd>
        <MenuApp />
      </>

    );
  }
}