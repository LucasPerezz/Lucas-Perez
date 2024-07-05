import React from 'react'
import { IEducation } from './Education'
import Image from 'next/image'

interface EducationProps {
    data: IEducation
}

export default function Educations(data: EducationProps) {
  return (
    <li className="mb-10 ms-4 flex items-center gap-8">
        <div>
            <Image className='w-12' src={data.data.thumbnail} alt={data.data.degree} width={500} height={500} />
        </div>
        <div>
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-600">
            {data.data.from_date} - {data.data.to_date}
        </time>
        <h3 className="text-lg font-semibold text-white">
          {data.data.degree}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-300">
          {data.data.institution}
        </p>
        </div>
      </li>
  )
}
