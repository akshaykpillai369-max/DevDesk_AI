
import api from "../services/api"

async function sendMessage(message){

    try{
        
        const response = await api.post('/ai/chat/', { message })
        return response.data.response

        }

        catch(err){

            return {'error' : 'Error sending the mesaage'}
        }

        
}

async function explainCode(code) {

    try{
        
        const response = await api.post('/ai/explain/', { code })
        return response.data.response

        }

        catch(err){

            return { error: 'Error explaining the code' }
        }

        
}

export default {sendMessage, explainCode}
