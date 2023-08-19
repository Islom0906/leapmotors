import {configureStore} from "@reduxjs/toolkit";
import SidebarReduce from '@/slice/sidebar'

export const store=configureStore({
    reducer:{
        sidebar:SidebarReduce
    },
     devTools: process.env.NODE_ENV !== 'production',
})