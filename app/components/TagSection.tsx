import React from 'react'
import Tag from './Tag';
import { useStoreContext } from '@/store';

const TagSection = () => {
  const { state } = useStoreContext()

  return (
    <div className='flex flex-row flex-nowrap overflow-x-auto pb-4 pt-1 gap-2'>
      {
        state?.dataTags?.map((dataTag) => (
          <React.Fragment key={dataTag.title}>
            <Tag
              data={dataTag}
            />
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default TagSection;
