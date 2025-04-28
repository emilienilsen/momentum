import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {Profile} from './Pages/Profile.tsx'
import {Progress} from './Pages/Progress.tsx'
import {Home} from './Pages/Home.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AccountSettings} from "./Pages/AccountSettings.tsx";
import {MainLayout} from "./Layout/MainLayout.tsx";
import {FullScreenLayout} from "./Layout/FullScreenLayout.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>

                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/progress" element={<Progress/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>

                    <Route element={<FullScreenLayout/>}>
                        <Route path="/accountSettings" element={<AccountSettings/>}/>
                    </Route>
                </Routes>

            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
)
