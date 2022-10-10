import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const {store} = useContext(Context);

    return (
        <div>
            <input
                onChange={event => setName(event.target.value)}
                value={name}
                type="text"
                placeholder="Firm name"
            />
            <input
                onChange={event => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Password"
            />
            <button onClick={() => store.login(name, password)}>Логин</button>
            <button>Регистрация</button>
        </div>
    );
};

export default observer(LoginForm);