
let url = process.env.axiosUrl === true ? url = "http://localhost:8000/api/v1" : url = "http://blog.mn/api/v1"

const axiosUrl = () => {
    return url
}

export default axiosUrl; 