import { readFileSync, writeFileSync } from "fs"


export function getConfig() {
    return new Promise((resolve, reject) => {
        try {
            const tmp = readFileSync(process.cwd() + '/config/config.json').toString()
            const config = JSON.parse(tmp)
            if (!config) {
                writeFileSync(process.cwd() + '/config/config.json', '')
                reject('Archivo de configuración vacío')
            }
            if (!config.apiUrl) {
                writeFileSync(process.cwd() + '/config/config.json', '')
                reject('Api Url vacío: ')
            }
            resolve(config)
        } catch (error) {
            writeFileSync(process.cwd() + '/config/config.json', '')
            reject(error)
        }
    })

}