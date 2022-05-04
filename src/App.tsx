import React from 'react';
import Menu from './components/menu';
import MenuItem from './components/menu/menuItem';
import SubMenu from "./components/menu/subMenu";

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex={'0'}
        mode={'horizontal'}
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
