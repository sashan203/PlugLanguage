import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import fon from '../assets/aboutImage.jpg'
import fon1 from '../assets/About2.png'
import {observer} from "mobx-react-lite";

const About = observer(() => {
    return (
        <Container >
            <div className="d-flex justify-content-center mt-2 mb-2">
                <h1 className="align-items-center">About Plug language</h1>
            </div>
            <Row className="mt-2 d-flex">
                <Col md={6}>
                    <Image className='w-100' src={fon}/>
                </Col>
                <Col className="d-flex align-content-center">
                    <div className="d-flex align-items-center">
                        <div className="align-items-center">
                            Мы занимаемся модой не так, как кто-либо другой. Наш магазин Plug language сотрудничает с оригинальными поставщиками, чтобы предложить вам самую свежую одежду, обувь, аксессуары и подарки. Когда дело доходит до нашего кураторства брендов в Plug language, мы выбираем лучшие из них, чтобы предоставить вам самое большое разнообразие, потрясающие эксклюзивы и крутые коллаборации. А на случай, если этого было недостаточно, у нас также есть ассортимент первоклассных средств для лица и тела, с помощью которых вы тоже можете выразить себя. Нет никаких правил – просто бесконечные способы быть собой.
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-2 d-flex">
                <Col className="d-flex align-content-center">
                    <div className="d-flex align-items-center">
                        <div className="align-items-center">
                            Plug language создан для самых запоминающихся моментов вашей жизни, чтобы вы могли появиться и выделиться в одежде для особых случаев, такой же уникальной, как и вы сами. В нашем ассортименте размеров, включая нашу прекрасную свадебную коллекцию Plug language, мы заставим вас танцевать еще до начала вечеринки.
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <Image className='w-100' src={fon1}/>
                </Col>
            </Row>
        </Container>
    );
});

export default About;
