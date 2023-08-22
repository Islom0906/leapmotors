import {configureStore} from "@reduxjs/toolkit";
import SidebarReduce from '@/slice/sidebar'
import LanguageReduce from '@/slice/language'

export const store=configureStore({
    reducer:{
        sidebar:SidebarReduce,
        lang:LanguageReduce
    },
     devTools: process.env.NODE_ENV !== 'production',
})