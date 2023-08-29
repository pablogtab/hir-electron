// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from 'electron';

import { getConfig } from './electron/api/getConfig';
import { AppConfig } from './shared/configuration';


contextBridge.exposeInMainWorld('hirApi', {
    getConfig
})


declare global {
    interface Window {
        hirApi: {
            getConfig: () => Promise<AppConfig>;
        }
    }
}