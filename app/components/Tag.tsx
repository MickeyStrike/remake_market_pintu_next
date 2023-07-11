import React, { FC } from 'react'
import InlineSVG from 'react-inlinesvg'
import { ResponseTags } from '@/interface';
import { useStoreContext } from '@/store';

interface ITag {
  data: ResponseTags
}

const Tag:FC<ITag> = ({ data }) => {
  const { state, dispatch } = useStoreContext()

  return (
    <div
      className='p-2 flex flex-row rounded-lg font-semibold cursor-pointer'
      data-src={data.icon.url}
      style={{
        background: state.filter?.tag === data.title ? 'rgba(10,104,244)' : 'rgba(237,244,254)',
        color: state.filter?.tag === data.title ? 'rgba(237,244,254)' : 'rgba(10,104,244)'
      }}
      onClick={() => {
        dispatch({
          filter: {
            ...state.filter,
            tag: state.filter.tag === data.title ? '' : data.title
          }
        })
      }}
    >
      <div className='w-6 h-6 mr-2'>
        <InlineSVG src={data.icon.url} />
      </div>
      <p className='whitespace-nowrap'>{ data.title }</p>
    </div>
  )
}

export default Tag;
