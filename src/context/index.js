import React, { createContext } from 'react'
import PropTypes from "prop-types"

// TOASTIFY
import { ToastContainer } from 'react-toastify'

// Alerts
import Alerts from "@/context/alerts"

export const Context = createContext({})

export const Provider = ({ children }) => {
    return (
        <Context.Provider value={Object.assign({}, Alerts)}>
            {children}
            <ToastContainer />
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.object
};