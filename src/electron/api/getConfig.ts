import { readFileSync, writeFileSync } from "fs"


export function getConfig() {
    return new Promise((resolve, reject) => {
        try {
            const tmp = readFileSync(process.cwd() + '/config/config.json').toString()
            const config = JSON.parse(tmp)
            if (!config) {
                writeFileSync(process.cwd() + '/config/config.json', '{"API_URL":""}')
                reject('Archivo de configuración vacío')
            }
            if (!config.API_URL) {
                //writeFileSync(process.cwd() + '/config/config.json', '{}')
                reject('dentro de config debe configurar el parametro "API_URL"')
            }
            resolve(config)
        } catch (error) {
            //writeFileSync(process.cwd() + '/config/config.json', '{"API_URL":""}')
            reject(error)
        }
    })

}