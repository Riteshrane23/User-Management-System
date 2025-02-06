import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

interface Props {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationDialog = ({ open, onClose, onConfirm }:Props) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button color="error" onClick={onConfirm}>Delete</Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmationDialog;
