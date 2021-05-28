import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

import files from '../../assets/svg/files.svg'

import './Snippets.css'
import SnippetCard from './SnippetCard/SnippetCard';


// const snippets = [
//   {
//       id: 1,
//       text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
//   },
//     {
//       id: 1,
//       text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
//   }
// ]


const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
}))(MuiDialogContent);


function Snippets({ mobile }) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };



    return (
        <div className={!mobile ? 'snippetContainer' : ''}>
            <span onClick={handleClickOpen}>
                <img src={files} alt="Anjali Rajendran" className={mobile ? 'mob-snippet-img' : ''} />
            </span>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} disableScrollLock={true}>
              <DialogContent>
                  <SnippetCard />
              </DialogContent>
            </Dialog>
        </div>
    )
}

export default Snippets
