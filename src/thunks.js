import axios from 'axios';
import {setFreeLancersBusyTimes, setFreeLancerJobs, setLogs, setServices, setEmployerServices} from './actions';
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

export const getFreeLancerBusyTimes = () => (dispatch) => {
    const cookies = new Cookies();
    const AuthStr = 'Bearer '+cookies.get('jwt');
    let token = cookies.get('jwt');
    let decoded = jwt(token);
    axios
        .get('http://freelancework.lt/BusyTimes/userid/'+decoded['UserId'], { headers: { Authorization: AuthStr } })
        .then((res) => {
            dispatch(setFreeLancersBusyTimes(res.data))
        })
        .catch((error) => console.log(error));
};

export const getEmployerServices = () => (dispatch) => {
    const cookies = new Cookies();
    let token = cookies.get('jwt');
    let decoded = jwt(token);
    const AuthStr = 'Bearer '+token;;
    axios
        .get('http://freelancework.lt/Services/employer/'+decoded['UserId'], { headers: { Authorization: AuthStr } })
        .then((res) => {
            dispatch(setEmployerServices(res.data))
        })
        .catch((error) => console.log(error));
};

export const getFreeLancerJobs = () => (dispatch) => {
    const cookies = new Cookies();
    let token = cookies.get('jwt');
    let decoded = jwt(token);
    const AuthStr = 'Bearer '+token;;
    axios
        .get('http://freelancework.lt/Jobs/freelancer/'+decoded['UserId'], { headers: { Authorization: AuthStr } })
        .then((res) => {
            dispatch(setFreeLancerJobs(res.data))
        })
        .catch((error) => console.log(error));
}

export const addLog = (logText, logsList) => (dispatch) => {
    const now = new Date();
    const eventTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const eventDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const fullEventDate = `${eventDate} ${eventTime}`;
    dispatch(setLogs([ ...logsList, `${fullEventDate}: ${logText}`]));
};
