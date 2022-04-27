import React from 'react';
import Button from './components/button';
import {ButtonSize, ButtonType} from './components/button/button';
import Menu from './components/menu';
import MenuItem from './components/menu/menuItem';

function App() {
  return (
    <div className="App">
      {/*<Button className={'custom'}>Hello</Button>*/}
      {/*<Button disabled>Disabled Button</Button>*/}
      {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary</Button>*/}
      {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>*/}
      <Menu defaultIndex={0} >
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem disabled index={1}>
          cool link1
        </MenuItem>
        <MenuItem index={2}>
          cool link2
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
