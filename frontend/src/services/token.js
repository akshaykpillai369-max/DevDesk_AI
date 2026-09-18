let access_token = ''

function setToken(token) {
    access_token = token
}

const getToken = () => {
    return access_token
}

export default {setToken, getToken}