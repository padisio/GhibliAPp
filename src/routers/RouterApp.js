import { Route, BrowserRouter, Routes } from "react-router-dom"
import { FilmList } from "../components/FilmList";
import { FilmCard } from "../components/FilmCard";
import { EspeciesCont } from "../components/EspeciesCont"
import {NavBar} from '../components/ui/NavBar'


export const RouterApp = () => {
    return (
        <>
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path="/especies" element={<EspeciesCont />}/>
                <Route path="/film/:movieId" element={<FilmCard/>}/>
                <Route path="/" element={<FilmList />}/>
            </Routes>

        
        </BrowserRouter> 
        </>
    )
}
