
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

async function debugCode(code) {

    try{
        
        const response = await api.post('/ai/debugger/', { code })
        return response.data.response

        }

        catch(err){

            return { error: 'Error debugging the code' }
        }

        
}

async function improveCode(code) {

    try{
        
        const response = await api.post('/ai/improver/', { code })
        return response.data.response

        }

        catch(err){

            return { error: 'Error enhancing the code' }
        }

        
}


export default {sendMessage, explainCode, debugCode, improveCode}
