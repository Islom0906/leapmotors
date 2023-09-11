import {createSlice} from "@reduxjs/toolkit";

const initialState={
  stepCar : 'Версия',
  versionModel:"",
  priceModel:"",
  colorExterior: {
    colorImg : '',
    colorName : ''
  },
  colorInterior: {
    colorImg : '',
    colorName : ''
  },
  
}

export const CarSale=createSlice({
    name:'language',
    initialState,
    reducers:{

        setVersionModel:(state,{payload})=>{
            state.versionModel=payload
        },
        setPriceModel: (state , {payload}) => {
            state.priceModel = payload
        },
        setStepCar: (state , {payload}) => {
            state.stepCar = payload
        },
        setColorExterior: (state , {payload}) => {
            state.colorExterior.colorImg = payload.colorImg
            state.colorExterior.colorName = payload.colorName
        },
        setColorInterior: (state , {payload}) => {
            state.colorExterior.colorImg = payload.colorImg
            state.colorExterior.colorName = payload.colorName

        }
    }
})

export const {setVersionModel , setStepCar,  setPriceModel ,setColorExterior ,setColorInterior}=CarSale.actions
export default CarSale.reducer