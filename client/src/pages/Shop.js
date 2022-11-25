import React, {useContext, useEffect} from 'react';
import Image from "react-bootstrap/Image";
import fon from '../assets/firs_fon.jpg'
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    return (
        <div>
            <Image className='w-100' src={fon}/>
        </div>
    );
});

export default Shop;
