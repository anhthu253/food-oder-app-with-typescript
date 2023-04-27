import ReactDOM  from "react-dom"
import React from "react"

type ModalProps = React.MouseEventHandler<HTMLDivElement>

const Backdrop:React.FC<{onClose:ModalProps}> = ({onClose}) => {
    return <div className="fixed top-0 left-0 w-full h-screen z-20 bg-[#000] opacity-70" onClick={onClose}></div>
};
const ModalOverlay :React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className="fixed top-[20vh] left-[5%] w-[90%] md:mediaMedium bg-white p-4 rounded-[14px]
        shadow-[0_2px_8px_rgba(0, 0, 0, 0.25)] z-30 animate-[slideDown_300ms_ease-out_forwards]">
            <div>{children}</div>
        </div>
        )
};

const portalElement= document.querySelector("#overlays") as Element | DocumentFragment

const Modal:React.FC<React.PropsWithChildren<{closeModal:ModalProps}>> = ({closeModal,children}) =>{
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={closeModal}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>,portalElement)}
        </>
    )
}

export default Modal