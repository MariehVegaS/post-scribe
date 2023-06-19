import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const useConfirmation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [confirmCallback, setConfirmCallback] = useState(() => { });

    const openConfirmation = (title, confirmationMessage, onConfirm) => {
        setTitle(title)
        setMessage(confirmationMessage);
        setConfirmCallback(() => onConfirm);
        setIsOpen(true);
    };

    const handleConfirm = () => {
        confirmCallback();
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const ConfirmationAlert = () => {
        return (
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return {
        openConfirmation,
        ConfirmationAlert,
    };
};

export default useConfirmation;
