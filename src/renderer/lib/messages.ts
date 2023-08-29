import { toast, ToastOptions } from 'react-toastify'


export const systemMessage = (msg: string, options?: ToastOptions) => {
    return toast(msg, { hideProgressBar: true, position: 'bottom-center', ...options })
}