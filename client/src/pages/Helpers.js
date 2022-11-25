import React from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Help = observer(() => {
    return (
        <Container className='mt-5'>
            <div class="card mt-5">
                <div class="card-header">
                    Авторизация
                </div>
                <div class="card-body">
                    <h4 class="card-title">Не правильный логин или пароль</h4>
                    <p class="card-text">-Проверьте правильность ввода логина и пароля</p>
                    <p class="card-text">-Если вы впервые на сайте, зарегистрируйтесь</p>
                </div>
            </div>
            <div class="card mt-5">
            <div class="card-header">
                    Прочие ошибки
                </div>
                <div class="card-body">
                    <h4 class="card-title">Проблемы с отображением товаров</h4>
                    <p class="card-text">-Почистите кеш браузера</p>
                </div>

                <div class="card-body">
                    <h4 class="card-title">Наша служба поддержки</h4>
                    <p class="card-text">-Лучшие сотрудники поддержки решат вашу проблему helpers@mail.ru</p>
                </div>
            </div>
        </Container>
    );
});

export default Help;
