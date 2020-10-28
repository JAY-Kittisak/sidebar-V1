import React, {useState, useEffect} from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
  const {
    backgroundImage = '',
    sidebarHeader = {
      fullName: '',
      shortName: ''
    }, 
    menuItems = [],
    fonts = {
      header: '',
      menu: ''
    }
  } = props;


  
  // State
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubMenus] = useState({})
  
  //Effect


  //Update of header state
  useEffect(() => {
    isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader])

  //Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
      else setSidebarState(true)
      //console.log(`window Width: ${window.innerWidth}`); //เช็คขนาดหน้าจอ
    }
    
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [isSidebarOpen]);


  //Add index of menu items with submenus to state
  useEffect(() => {
    const newSubMenus = {};
    
    menuItems.forEach((item, index) => {
      const hasSubMenus = !!item.subMenuItems.length;

      if (hasSubMenus) {
        newSubMenus[index] = {};
        newSubMenus[index]['isOpen'] = false;
        newSubMenus[index]['selected'] = null;
      } 
    })

    setSubMenus(newSubMenus)
  }, [menuItems]);

  const states = {
  2: {
    isOpen: false,
    selected: null
  },
 }

  const handleMenuItemClick = (name, index) => {
    //console.log('index:', index) // เช็ค กดเลือกเมนู
    setSelectedMenuItem(name);

    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
      setSubMenus(subMenusCopy)
    }
  }
  
 

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    const hasSubMenus = !!item.subMenuItems.length;
    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = item.subMenuItems.map((SubMenuItem, SubMenuItemIndex) => {
      return (
      <s.SubMenuItem key={SubMenuItemIndex}>{SubMenuItem.name}</s.SubMenuItem>
      )
    })

    return (
      <s.ItemContainer key = {index}>
        <s.MenuItem
          font={fonts.menu}
          selected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name, index)}
          isSidebarOpen={isSidebarOpen}
        >
            <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
            <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            {hasSubMenus && isSidebarOpen && (
              <s.DropdownIcon selected={isItemSelected} isOpen={isOpen}/>
            )}
        </s.MenuItem>

      {/* Display submenus if they exist */}
      {hasSubMenus && isOpen && (
            <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>{subMenusJSX}</s.SubMenuItemContainer>
      )}
      </s.ItemContainer>
    )
  });
//ทดสอบ ปุ่ม ปิดเปิด Sidebar
  //console.log(`Is sidebar open ${isSidebarOpen}`)

  console.log(subMenusStates)
  return (
    <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
      <s.stySidebarHeader font={fonts.header}>{header}</s.stySidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar
