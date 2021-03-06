import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    width: ${p => p.isSidebarOpen ? '20%' : '5%'};
    max-width: 280px;
    min-width: 80px;
    background-image: linear-gradient(
        315deg,
        rgba(0, 208, 255, 1) 0%,
        rgba(3, 36, 251, 0.9) 74%),
    url(${p => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    position: relative; // Toggler
    transition: .2s ease-in all
`

export const stySidebarHeader = styled.h2`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
    font-family: ${p => p.font}
`

export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``; 

//Menu items**************************************************
export const MenuItem = styled.div`
    ${p => !p.isSidebarOpen && `
        text-align: center;
        ${p.selected && 'background-color: rgba(0, 0, 0, 0.3)'};
    `}
    padding: 6px 20px;
    font-weight: 600;
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(1, 11, 120)'};
    font-family: ${p => p.font};
    white-space: nowrap;
    position: relative; //Dropdown Icon
    transition: .2s ease-in all;

    &:hover {
        color: rgba(255, 255, 255);
        transition: .1s ease-in all;
    }

    &:after {
        content: '';
        border: 1px solid ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(2, 0, 128, 1)'};
        display: block;
        margin: 8px 0 4px
    }

    ${p => !p.selected && `
        &:hover {
            &:after {
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: .1s ease-in all;
            };
        };
    `}
`;

export const Text = styled.p`
    display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
`

export const Icon = styled.img`
    ${p => p.isSidebarOpen && `padding-right: 20px; transition: .2s ease-in padding-right`};
    height: 16px;
    width: 16px;
`


//Sub menu items**************************************************
export const SubMenuItemContainer = styled.div`
    font-size: 14px;
    ${p => p.isSidebarOpen && 'padding-left: 15%'};
    ${p => !p.isSidebarOpen && 'text-align: center'};
`;
export const SubMenuItem = styled.p`
    color: rgba(19, 15, 64);

    &:hover {
        color: rgba(255, 255, 255)
    }
`;


//Dropdown icon **************************************************
export const DropdownIcon = styled.span`
    position: absolute;
    top: ${p => p.isOpen ? '16px' : '12px'};
    right: 24px;
    border: solid blue;
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${p => p.isOpen ? 'rotate(-135deg)':'rotate(45deg)'};
    transition: .4s;
`;

//Toggler **************************************************
export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative; //horizontal lines

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        height: .1em;
        width: 100%;
        background: #fff;
        box-shadow:
            0 .75em 0 0 #fff,
            0 1.5em 0 0 #fff;
    }
`