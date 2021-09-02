import React from 'react'

import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import styles from '../ComingSoon/Coming.module.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: '#fff0',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

export default function ContactForm(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()

        const res = await fetch('/api/submit-form', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
        })
        // Success if status code is 201
        if (res.status === 201) {
            toast('Thank you for contacting us!', { type: 'success' })
        } else {
            toast('Please re-check your inputs.', { type: 'error' })
        }

        setEmail('')
        setMessage('')
        setName('')
        handleClose()
    }

    return (
        <div className={styles.btnFdiv}>
            <ToastContainer />
            <button type="button" onClick={handleOpen} className={styles.btnh}>
                {props.name}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form className={styles.Fform} onSubmit={submitForm}>
                            <h1 className={styles.Ftitle}>React Out To Us</h1>
                            <div>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.Finputs}>
                                <div>
                                    <label htmlFor="email">
                                        E-Mail Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="johndoe@example.io"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    placeholder="Hi there!"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button className={styles.Fbtn} type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
