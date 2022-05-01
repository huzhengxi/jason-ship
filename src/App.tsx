import React from 'react';
import Button from './components/button';
import {ButtonSize, ButtonType} from './components/button/button';
import Menu from './components/menu';
import MenuItem from './components/menu/menuItem';
import SubMenu from "./components/menu/subMenu";

function App() {
  return (
    <div className="App">
      {/*<Button className={'custom'}>Hello</Button>*/}
      {/*<Button disabled>Disabled Button</Button>*/}
      {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary</Button>*/}
      {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>*/}
      <Menu
        defaultIndex={'0'}
        mode={'vertical'}
        onSelect={(selectedIndex)=> alert(`${selectedIndex}`) }
        defaultOpenSubmenus={['2 ']}
      >
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem >
          cool link1
        </MenuItem>
        <SubMenu title={'dropdown'}>
          <MenuItem>
            dropdown1
          </MenuItem>
          <MenuItem>
            dropdown2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool link2
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
