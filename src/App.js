import React from 'react';
import * as s from './App.styles';

//Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/Services/MainView'


const App = ()=> {
  const backgroundImage = 'images/tool.jpg'
  const sidebarHeader = {
    fullName: 'Job Request',
    shortName: 'JSR'
  };
  const menuItems = [
    {name: 'Home', to: '/', icon: 'icons/home.svg', subMenuItems: [] },
    {name: 'แจ้งงาน IT', to: '/about', icon: 'icons/about.svg', subMenuItems: [] },
    {name: 'แจ้งงาน Marketing', to: '/destinations', icon: 'icons/destinations.svg', 
      subMenuItems: [
        { name: 'Canada', to: './canada'},
        { name: 'Brazil', to: './brazil'},
        { name: 'India', to: './india'},
        { name: 'Australia', to: './australia'},
        { name: 'Kenya', to: './kenya'},
        { name: 'Moldova', to: './moldova'},
      ] },
    {name: 'จัดการคลัง', to: '/blog', icon: 'icons/blog.svg', subMenuItems: [] },
    {name: 'จัดการงานส่วน IT', to: '/services', icon: 'icons/services.svg', subMenuItems: [] },
    {name: 'TAR', to: '/contacts', icon: 'icons/contacts.svg', subMenuItems: [] }
];

  const fonts = {
    header: 'Staatliches',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar 
      backgroundImage={backgroundImage}
      sidebarHeader={sidebarHeader}
      menuItems={menuItems}
      fonts={fonts}
      />
      <MainView/>
    </s.App>
  );
}

export default App;
