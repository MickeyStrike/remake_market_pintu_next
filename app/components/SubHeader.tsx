import React, { FC } from 'react'
import Search from '../assets/svg/Search'
import Reload from '../assets/svg/Reload'
import { useStoreContext } from '@/store'

export interface ISubHeader {
  getData: (x: boolean) => void
}

const SubHeader:FC<ISubHeader> = ({ getData }) => {
  const { state, dispatch } = useStoreContext()

  return (
    <div className='flex flex-row justify-between max-md:flex-col max-md:gap-4'>
      <h1 className='font-bold text-3xl max-md:text-xl max-lg:text-lg max-xl:text-2xl'>Harga Crypto dalam Rupiah Hari ini</h1>
      <div>
        <div className='md:flex md:flex-row md:gap-2'>
          <div className='flex flex-row bg-gray-100 py-3 px-4 rounded-lg max-md:gap-2'>
            <div>
              <Search />
            </div>
            <input
              className='md:ml-4 bg-transparent focus:outline-none w-96 max-md:w-full'
              type='text'
              placeholder='Cari aset di Pintu...'
              onChange={(e) => {
                dispatch({
                  filter: {
                    ...state.filter,
                    search: e.target.value
                  }
                })
              }}
            />
          </div>
          <button
            className='max-md:hidden font-semibold rounded-md max-xl:text-sm text-md p-1 px-3 border flex flex-row items-center justify-center gap-2 hover:bg-slate-100 active:bg-slate-300'
            onClick={() => getData(false)}>
            <Reload /> Refresh Data
          </button>

        </div>
      </div>
    </div>
  )
}

export default SubHeader
