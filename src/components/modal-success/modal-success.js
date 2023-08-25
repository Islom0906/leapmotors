import React from 'react';
import {IoCheckmarkDone} from "react-icons/io5";

const ModalSuccess = ({text}) => {
    return (
        <div className={'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-lg px-8 py-3 sm:px-16 sm:py-5 bg-white flex items-start  gap-3'}>
         <IoCheckmarkDone className={'text-3xl text-green-600'}/>
         <p className={'text-3xl font-regular text-center'}>
             {text}
         </p>
        </div>
    );
};

export default ModalSuccess;