import React, { FC } from 'react';
import { WorkHistoryType } from './type';

type Props = {
  item: WorkHistoryType;
};

const WorkHistoryItem: FC<Props> = ({ item }) => (
  <div>
    <div>
      <h3 className="font-bold text-xl dark:text-white " > {item.role} </h3>
      <p className='mb-3 mt-3' >
        <a href={item.company?.website} className="text-gray-800 dark:text-gray-200" >{item.company.name}</a>
        <span className='ml-4 text-sm text-gray-600 dark:text-gray-400' >
          {new Date(item.startDate).toISOString()} - { item.currentlyWorkingHere  ? 'Present': new Date(item.endDate || '').toISOString()}
        </span>
      </p>
    </div>

    <div className='mb-4' >
      <ul className='ml-4 list-disc' >
        {item.responsibilities.map(res => (
          <li className='text-gray-900 mb-2 dark:text-gray-200' >{res}</li>
        ))}
      </ul>
    </div>

    <div className='mb-6' >
      <p className='text-sm color-gray-600 dark:text-gray-400 ' >
        {item.address.country} - {item.address.city}{' '}
      </p>
    </div>
  </div>
);

export default WorkHistoryItem;
