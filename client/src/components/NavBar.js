import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/logo.png'
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE,SHOES} from "../utils/consts";
import {Button, Col} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
 
    return ( 
        <Navbar className="shadow-sm" bg="white" variant="white">
            <Container>
                <NavLink to={SHOP_ROUTE}>
                <Image className='w-15' src={logo}/>
                </NavLink>
                <Container class="w-100 m-6">
                <Container class="d-flex">
                    <Container class="d-flex justify-content-center w-100">
                        <div class="d-flex justify-content-center flex-row w-100">
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
                    <Nav className="ml-auto" style={{color: 'black'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'black'}}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
