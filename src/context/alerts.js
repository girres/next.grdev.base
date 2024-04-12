/* eslint-disable import/no-anonymous-default-export */
// TOASTIFY
import { toast } from 'react-toastify';

function Success(msg = null) {
  toast.success(msg || `Success alert`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function Warning(msg = null) {
  toast.warn(msg || `Success alert`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function Error(msg = null) {
  toast.error(msg || `Success alert`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function Info(msg = null) {
  toast.info(msg || `Success alert`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

export default {
  Success,
  Warning,
  Error,
  Info,
};
