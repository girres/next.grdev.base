/* eslint-disable import/no-anonymous-default-export */
// TOASTIFY
import { toast } from 'react-toastify'

function AlertSuccess(msg = null) {
    toast.success(msg || `Success alert`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

function AlertWarning(msg = null) {
    toast.warn(msg || `Success alert`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

function AlertError(msg = null) {
    toast.error(msg || `Success alert`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

function AlertInfo(msg = null) {
    toast.info(msg || `Success alert`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export default  {
    AlertSuccess,
    AlertWarning,
    AlertError,
    AlertInfo
}