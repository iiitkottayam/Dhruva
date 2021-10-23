import React from 'react'
import styles from '../ComingSoon/Coming.module.css'

import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function HButton(props) {
    function link() {
        if(props.url) {
            window.open(props.url, '_blank')
        }
    }
    return (
        <>
            <button
                className={styles.btnh}
                onClick={(event) =>
                    link()
                }
            >
                {props.name}&emsp;{props.icon}
            </button>
        </>
    )
}
export function HButtonLight(props) {
    return (
        <>
            <button
                className={styles.btnhl}
                onClick={(event) =>
                    window.open('mailto:techclub@iiitkottayam.ac.in')
                }
            >
                {props.name}&emsp;{props.icon}
            </button>
        </>
    )
}
