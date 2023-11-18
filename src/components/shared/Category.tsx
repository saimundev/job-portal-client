import { category } from '@/data/data'
import React from 'react'

const Category = () => {
    return (
        <div className=" mt-32">
            <h2 className="sub-title">Job Category</h2>
            <div className="grid grid-cols-5 gap-4">
                {category?.map((item) => (
                    <div key={item.id} className="hover:bg-green-400 group flex items-center gap-4 p-4 transition-all duration-300 bg-white border border-gray-300 rounded-lg" >
                        <div className="group-hover:text-white">{item.icon}</div>
                        <h4 className="group-hover:text-white text-sm font-semibold text-gray-600">{item.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category