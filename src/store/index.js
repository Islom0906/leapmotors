import {configureStore} from "@reduxjs/toolkit";
import SidebarReduce from '@/slice/sidebar'
import LanguageReduce from '@/slice/language'
import CarModelReduce from '@/slice/testDrive'

export const store=configureStore({
    reducer:{
        sidebar:SidebarReduce,
        lang:LanguageReduce,
        drive:CarModelReduce
    },
     devTools: process.env.NODE_ENV !== 'production',
})