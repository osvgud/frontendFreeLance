import axios from 'axios';
import {setGenres, setMovies, setLike, setLogs, setServices, setEmployerServices} from './actions';
import {endpoints} from '../config';
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

export const getServices = () => (dispatch) => {
    const cookies = new Cookies();
    const AuthStr = 'Bearer '+cookies.get('jwt');
    axios
        .get('http://freelancework.lt/Services', { headers: { Authorization: AuthStr } })
        .then((res) => {
            dispatch(setServices(res.data))
        })
        .catch((error) => console.log(error));
};

export const getEmployerServices = () => (dispatch) => {
    const cookies = new Cookies();
    let token = cookies.get('jwt');
    let decoded = jwt(token);
    const AuthStr = 'Bearer '+token;
    axios
        .get('http://freelancework.lt/Services/employer/'+decoded['UserId'], { headers: { Authorization: AuthStr } })
        .then((res) => {
            dispatch(setEmployerServices(res.data))
        })
        .catch((error) => console.log(error));
};

export const getMovies = () => (dispatch) => {
    // thunk - dispatch actions when needed
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => {
            dispatch(setMovies(res.data.results))
        })
        .catch((error) => console.log(error));
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => {
            dispatch(setGenres(res.data.genres))
        })
        .catch((error) => console.log(error));
};

export const getActiveGenre = (genre, logsList) => (dispatch) => {
    dispatch(addLog(`Pakeistas zanras i ${genre.name}`,logsList));
    axios
        .get(endpoints.genreMovies(genre.id))
        .then((res) => {
            dispatch(setMovies(res.data.results));
        })
        .catch((error) => console.log(error));
};

export const addLike = (movie, likedList, logsList) => (dispatch) => {
    dispatch(addLog(`Uzdeta sirdele filmui ${movie.original_title}`, logsList));
    dispatch(setLike([...likedList, movie.id]));
};

export const unLike = (movie, likedList, logsList) => (dispatch) => {
    dispatch(addLog(`Nuimta sirdele filmui ${movie.original_title}`, logsList));
    dispatch(setLike(
        likedList.filter((currentId => currentId !== movie.id))
    ));
};

export const addLog = (logText, logsList) => (dispatch) => {
    const now = new Date();
    const eventTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const eventDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const fullEventDate = `${eventDate} ${eventTime}`;
    dispatch(setLogs([ ...logsList, `${fullEventDate}: ${logText}`]));
};
