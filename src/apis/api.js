import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

api.interceptors.request.use(
    (config) => {
        // request configuration
        console.log("request success", config)
        config.metadata = {
            startTime: Date.now()
        }
        return config;
    },
    (error) => {
        // handle request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // handle response
        console.log("response success", response)
        console.log('Api duration is' + (Date.now() - response.config.metadata.startTime) +'ms')
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;
        if (status === 401) {
            alert(`response Error ${status} ${data}`)
            console.log(error.response)
            // do something
        }
        return Promise.reject(error);
    }
);