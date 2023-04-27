import React, { ForwardRefExoticComponent, RefAttributes } from "react"

type InputProps = {
    id:string,
    label:string,
    type:string,
    value:number,
    isValid:boolean,
    className:string,
    onChange:React.FormEventHandler<HTMLInputElement>
}

const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>= React.forwardRef((props,ref) => {
    return (
        <div className={`${props.className} ${!props.isValid?"border-red bg-[#fbdada]":""}`}>
            <label className="mr-4 font-bold" htmlFor={props.id}>{props.label}</label>
            <input className={`${!props.isValid?"border-red bg-[#fbdada]":""} ${"w-12 rounded-[5px] border border-solid border-[#ccc] pl-2"}`}
                ref={ref}
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                >
            </input>
        </div>
    )
})
export default Input