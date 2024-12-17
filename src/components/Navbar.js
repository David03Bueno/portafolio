import React, {useState} from "react";
import { Container, Wrapper,LogoContainer,Menu,MenuItem,MenuItemLink, MobileIcon } from "./Navbar.elements.js";
import { TiDeviceDesktop } from "react-icons/ti";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa6";

import {
    FaTimes,
    FaHome,
    FaUserAlt,
    FaBriefcase,
    FaGlasses} from "react-icons/fa";


function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return(
        <Container>
            <Wrapper>
                <IconContext.Provider value={{style: {fontSize: "2em"}}}>

                
                <LogoContainer>
                    <TiDeviceDesktop/>
                        <p>David Bueno</p>
                        
                </LogoContainer>
                
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  { showMobileMenu ? <FaTimes/> :<FaBars/>}

                </MobileIcon>

                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>
                        <div>
                        <FaHome/>
                        INICIO
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        <div>
                        <FaUserAlt/>
                        SOBRE MI
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        <div>
                        <FaBriefcase/>
                        PORTAFOLIO
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        <div>
                        <FaGlasses/>
                        CONTACTO
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
}

export default Navbar;