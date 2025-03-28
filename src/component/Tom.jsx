import {useRive, useStateMachineInput} from "rive-react";

const Tom=()=>{
     const SMname = "State Machine 1"
    const INname = "Send Heart"
    const {rive , RiveComponent} = useRive({
        src:'/assets/toe1.riv',
        stateMachines: SMname,
        autoplay:true
    })
    const onclickInput = useStateMachineInput(rive ,  SMname , INname)
 
    return(
        <RiveComponent 
        className='contact-tom'
        onClick={()=>onclickInput.fire()}
        />

    )
}

export default Tom