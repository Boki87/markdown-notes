import React from 'react'
import Modal from './Modal'


const ConfirmModal = ({msg}) => {
    return (
        <Modal>
            <p>{msg}</p>
            <div>
                <div>Yes</div>
                <div>No</div>
            </div>
        </Modal>
    )
}

export default ConfirmModal
