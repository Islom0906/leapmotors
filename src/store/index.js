import {configureStore} from "@reduxjs/toolkit";
import SidebarReduce from '@/slice/sidebar'
import LanguageReduce from '@/slice/language'
import CarModelReduce from '@/slice/testDrive'
import CarSale from '@/slice/sale'

export const store=configureStore({
    reducer:{
        sidebar:SidebarReduce,
        lang:LanguageReduce,
        drive:CarModelReduce,
        sale: CarSale, 
    },
     devTools: process.env.NODE_ENV !== 'production',
})