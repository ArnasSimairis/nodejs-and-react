import axios from 'axios';

const API_GET = '/api/all/events'
const API_SEND = '/api/create/event'

const getEvents = async()=>{
    try{
        const response = await axios.get(API_GET)
        return response
    }
    catch(error){
        console.error(error);
    }
}

const postEvent = async(newEvent) =>{
    try{
        const response = await axios.post(API_SEND, newEvent)
        return response
    }
    catch(error){
        console.error(error);
    }
}
const eventService = {
    getEvents,
    postEvent
}
export default eventService