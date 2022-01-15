import React, { ReactElement } from 'react'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { App } from '../App';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import RecoverCodeScreen from '../pages/RecoverCodeScreen';
import RecoverEmailScreen from '../pages/RecoverEmailScreen';
import SignupScreen from '../pages/SignupScreen';

interface Props { }

export default function Index({ }: Props): ReactElement {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<LoginScreen />} />
                        <Route path="home" element={<HomeScreen />} />
                        <Route path="signup" element={<SignupScreen />} />
                        <Route path='recover' element={<RecoverEmailScreen />} />
                        <Route path='recover-password' element={<RecoverCodeScreen />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
