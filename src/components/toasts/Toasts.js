import React from 'react'
import styled from 'styled-components'

import {useToasts} from '../../store'

const Toasts = () => {

    const {toasts,removeToast} = useToasts()
    
    const deleteToast = (id) => {
        removeToast(id)
    }


    const typeIcon = (type) => {

        const typesArr = {
            alert: <i style={{color:'#ff694f'}} className="fas fa-exclamation-circle"></i>,
            info: <i style={{color:'#259db0'}} className="fas fa-info"></i>,
            confirm: <i style={{color:'#30c954'}} className="fas fa-check-circle"></i>
        }

        return typesArr[type]
    }



    const Toast = ({title, index, type, id}) => (<StyledToast index={index}>
                        <span style={{marginRight:'20px'}}>{title}</span> {typeIcon(type)}
                    </StyledToast>)


    return (
        toasts.length > 0 && toasts.map((toast, i) => <Toast title={toast.msg} id={toast.id} type={toast.type} index={i} key={toast.id}/>)
    )
}

export default Toasts


const StyledToast = styled.div`
    position: absolute;
    top: ${({index}) => index + 1 + (40 * index + 10) + (5 * index) + 'px'};
    right:10px;
    min-width: 200px;
    padding: 0px 10px;
    height: 40px;
    border-radius: 5px;
    background-color: var(--bg);
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
        cursor: pointer;
    }
`