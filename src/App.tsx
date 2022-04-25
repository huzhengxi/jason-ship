import React from 'react';
import Button from './components/button';
import {ButtonSize, ButtonType} from './components/button/button';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      {/*<Button className={'custom'}>Hello</Button>*/}
      {/*<Button disabled>Disabled Button</Button>*/}
      {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary</Button>*/}
      {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>*/}
      <Menu>
        <p>1</p>
        <h2>h2</h2>
      </Menu>
    </div>
  );
}

export default App;
