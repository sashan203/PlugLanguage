import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/logo.png';
import basket from '../assets/basket.png'
import user1 from '../assets/user.png'
import out from '../assets/out.png'
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE,SHOES,BASKET_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
 

    return ( 
        <Navbar className="shadow-sm" bg="white" variant="white">
            <Container className="d-flex">
                <NavLink className="w-25" to={SHOP_ROUTE}>
                    <Image src={logo}/>
                </NavLink>
                <Container class="w-75 m-6">
                    <Container class="d-flex">
                        <Container class="d-flex justify-content-center w-100">
                            <div class="d-flex justify-content-center flex-row w-100 flex-wrap">
                                <div>
                                    <NavLink className='m-3' style={{color:'black','text-decoration':'none','text-transform': 'uppercase'}} to={SHOES}>shoes</NavLink>
                                </div>
                                <div>
                                    <NavLink className='m-3' style={{color:'black','text-decoration':'none','text-transform': 'uppercase'}} to={SHOES}>clothes</NavLink> 
                                </div>
                                <div>
                                    <NavLink className='m-3' style={{color:'black','text-decoration':'none','text-transform': 'uppercase'}} to={SHOES}>Accessories</NavLink>
                                </div>
                            </div>
                        </Container>
                    </Container>
                </Container>
                {user.isAuth ?
                    <Nav className="ml-auto d-flex align-items-center flex-wrap w-25 justify-content-end" style={{color: 'black'}}>
                        <Image className="ml-auto d-flex mx-2" style={{height: '30px',cursor: 'pointer'}} src={basket} onClick={() => history(BASKET_ROUTE)}/>
                        <Image className="ml-auto d-flex mx-2" style={{height: '30px',cursor: 'pointer'}} src={user1} onClick={() => history(ADMIN_ROUTE)}/>
                        <Image className="ml-auto d-flex mx-2" style={{height: '30px',cursor: 'pointer'}} src={out}  onClick={() => logOut()}/>
                    </Nav>
                    :
                    <Image className="ml-auto d-flex" style={{height: '30px',cursor: 'pointer'}} src={user1} onClick={() => history(LOGIN_ROUTE)}/>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
