import React from 'react'
import styled from 'styled-components'

import {useToasts} from '../../store'

const Toasts = () => {

    const {toasts,removeToast} = useToasts()
    
    const deleteToast = (id) => {
        removeToast(id)
    }


    const Toast = ({title, index, id}) => (<StyledToast index={index}>
                        <span style={{marginRight:'20px'}}>{title}</span> <i onClick={() => deleteToast(id)} className="fas fa-times"></i>
                    </StyledToast>)


    return (
        toasts.length > 0 && toasts.map((toast, i) => <Toast title={toast.msg} id={toast.id} index={i} key={toast.id}/>)
    )
}

export default Toasts


const StyledToast = styled.div`

    position: absolute;
    bottom: ${({index}) => index + 1 + (40 * index + 10) + (5 * index) + 'px'};
    left:10px;
    min-width: 200px;
    padding: 0px 10px;
    height: 40px;
    border-radius: 5px;
    background-color: var(--main);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
        cursor: pointer;
    }
`