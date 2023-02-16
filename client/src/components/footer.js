import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ABOUT,HELPS} from "../utils/consts";
import {observer} from "mobx-react-lite";
const Footer = observer(() => {
    return ( 
        <div className='w-100'>
            <footer class="basement">
                <div class="bassment container">
                    <div className='d-flex justify-content-around mt-5 mb-5'>
                        <div>
                            <h4>Customer care</h4>
                            <div>
                                <NavLink className='m-0' style={{color:'black','text-decoration':'none','text-transform': 'uppercase'}} to={HELPS}>Support</NavLink>
                            </div>
                        </div>
                        <div>
                            <h4>Plug language</h4>
                            <div>
                                <NavLink className='m-0' style={{color:'black','text-decoration':'none','text-transform': 'uppercase'}} to={ABOUT}>About us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
});

export default Footer;
