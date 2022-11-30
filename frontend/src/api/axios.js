import axios from 'axios';

export default axios.create({
    // NOTE: change port to whatever port your backend tomcat server running on
    // most likely will be 8080
    baseURL: "http://localhost:8080"
});