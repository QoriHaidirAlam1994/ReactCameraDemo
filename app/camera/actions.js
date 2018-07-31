import axios from 'axios'

export function allCamera(){
    return {
        type: 'FETCH_Camera',
        payload: axios.get('http://127.0.0.1/rest_api/ci-restserver/index.php/galery')
    }
}

export function getCamera(id){
    return {
        type: 'GET_Camera',
        payload: axios.get('http://127.0.0.1/rest_api/ci-restserver/index.php/galery')
    }
} 

export function addToCamera(values){
    return { type: "ADD_Camera", payload: axios({
        method: "post",
        url: "http://127.0.0.1/rest_api/ci-restserver/index.php/galery"
      }) };
}
