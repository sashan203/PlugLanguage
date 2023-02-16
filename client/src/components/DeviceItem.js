import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={4} className={"d-flex mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card className='w-100' style={{cursor: 'pointer'}} border={"light"}>
                <Image className='w-100 h-100' src={process.env.REACT_APP_API_URL + device.img}/>
                <div>{device.name}</div>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{device.price}</div>
                        <div>₽</div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
