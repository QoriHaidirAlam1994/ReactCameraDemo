import axios from 'axios'

// const myTimeline = [
//     {name:'Ujang Khoirudin',status:'statusku1',waktu:'5 Minutes ago'},
//     {name:'Siti Aminah',status:'statusku2',waktu:'5 Minutes ago'},
//     {name:'Kiki Komarudin',status:'statusku3',waktu:'5 Minutes ago'}
// ]

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
        url: "http://127.0.0.1/rest_api/ci-restserver/index.php/galery",
        data: {
          name: "Trian Afiansyah",
          status: values
        }
      }) };
}

// axios.post('http://192.168.43.84 :8000/api/timeline/', values),
//CONTOH POST??
// axios({
//     url: 'http://localhost:5000/api/hello',
//     method: 'POST',
//     data: formData,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data'
//     }
//   })

//payload: axios.get('http://rest.learncode.academy/api/dumbways/products')
//payload https://api.backendless.com/34B1CF67-8590-C04C-FF6D-B2D9688B0400/7555CCD7-9AB5-6EC1-FF64-DB102E2FBE00/data/timeline/(objectidnya)?&loadRelations=name