/**
 * Created by Abdallah on 7/3/2017.
 */

const Config = (process.env.NODE_ENV === 'production') ? {//production
        SERVER_HOST_URL: "http://foodyexpress.net:9000",//add production server url here
        SERVER_PATH_URL: "/api/",//add production server path url here

    } : {//development
        SERVER_HOST_URL: "http://192.168.10.10",// add development server url here
        SERVER_PATH_URL: "/api/",// add development path url here
    };
export {Config};
