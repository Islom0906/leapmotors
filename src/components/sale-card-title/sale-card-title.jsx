import {FiRefreshCw} from 'react-icons/fi'

const SaleCardTitle = ({ title ,  btnText}) => {
  return (
    <div className={`flex items-center ${ btnText ? ' justify-between' : 'justify-center'}  `}>
                      <h5 className="text-xl font-bold text-center">{title}</h5>
      {
        btnText ? 
        <button className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500">
          <FiRefreshCw />
        </button>
        : 
        ""
      }
      
    </div>
  )
}

export default SaleCardTitle
