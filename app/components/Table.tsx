import React, { FC } from 'react'
// import Bitcoin from '../assets/svg/Bitcoin'
import FilterUp from '../assets/svg/FilterUp'
import FilterDown from '../assets/svg/FilterDown'
import { useStoreContext } from '@/store'
import { IDataSource, Time } from '@/app/market/page'
import InlineSVG from 'react-inlinesvg';

interface ITable {
  dataSource: IDataSource[],
  selectedTime: Time
}

const Table:FC<ITable> = ({ dataSource, selectedTime }) => {
  const { state, dispatch } = useStoreContext()

  const handleSort = (source: string) => {
    if(!state.filter?.sort.length || state.filter.sort[0] !== source) {
      dispatch({
        filter: {
          ...state.filter,
          sort: [source, 'asc']
        }
      })
    } else if (state.filter.sort[1] === 'asc') {
      dispatch({
        filter: {
          ...state.filter,
          sort: [source, state.filter.sort[1] === 'asc' ? 'desc' : 'asc']
        }
      })
    } else {
      dispatch({
        filter: {
          ...state.filter,
          sort: []
        }
      })
    }
  }

  const renderSvgUpDown = (percent: string) => {
    if(percent.includes('-')) { // negatif
      return <>
        <div className='border-transparent border-t-red-500 border-solid border-x-[6px] border-t-8 mr-1 self-center w-0 h-0'></div>
        <p className='text-red-500'>{ Math.abs(Number(percent)) }%</p>
      </>
    }
    else if (Number(percent) > 0) { // positif
      return <>
        <div className='border-transparent border-b-green-500 border-solid border-x-[6px] border-b-8 mr-1 self-center w-0 h-0'></div>
        <p className='text-green-500'>{percent}%</p>
      </>
    }
    else return percent // 0.00
  }

  return (
    <table className='overflow-x border-separate w-full' cellSpacing={0} cellPadding={0}>
      <caption className='hidden'>Harga Crypto dalam Rupiah Hari Ini</caption>
      <thead>
        <tr>
          <th scope='col' className='py-5 pr-5 pl-[75px] border-t border-b border-l border-gray-200 rounded-tl-lg text-left max-md:pl-6'>
            <p>CRYPTO</p>
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200 max-md:border-t max-md:border-b max-md:border-r max-md:border-gray-200 max-md:rounded-tr-lg'>
            <div className='flex cursor-pointer items-center max-md:justify-end' onClick={() => handleSort('latestPrice')}>
              <p>HARGA</p>
              <div className='flex flex-col gap-1 mx-4 max-md:ml-2 max-md:mr-0'>
                <FilterUp isActive={state.filter?.sort[0] === "latestPrice" && state.filter?.sort[1] === 'desc'} />
                <FilterDown isActive={state.filter?.sort[0] === "latestPrice" && state.filter?.sort[1] === 'asc'} />
              </div>
            </div>
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200 max-md:hidden'>
            <div className='flex cursor-pointer justify-center' onClick={() => handleSort('day')}>
              <p>24 JAM</p>
              <div className='flex flex-col gap-1 mx-4'>
              <FilterUp isActive={state.filter?.sort[0] === "day" && state.filter?.sort[1] === 'desc'} />
              <FilterDown isActive={state.filter?.sort[0] === "day" && state.filter?.sort[1] === 'asc'} />
              </div>
            </div>
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200 max-md:hidden'>
            <div className='flex cursor-pointer justify-center' onClick={() => handleSort('week')}>
              <p>1 MGG</p>
              <div className='flex flex-col gap-1 mx-4'>
                <FilterUp isActive={state.filter?.sort[0] === "week" && state.filter?.sort[1] === 'desc'} />
                <FilterDown isActive={state.filter?.sort[0] === "week" && state.filter?.sort[1] === 'asc'} />
              </div>
            </div>
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200 max-md:hidden'>
            <div className='flex cursor-pointer justify-center' onClick={() => handleSort('month')}>
              <p>1 BLN</p>
              <div className='flex flex-col gap-1 mx-4'>
                <FilterUp isActive={state.filter?.sort[0] === "month" && state.filter?.sort[1] === 'desc'} />
                <FilterDown isActive={state.filter?.sort[0] === "month" && state.filter?.sort[1] === 'asc'} />
              </div>
            </div>
          </th>
          <th scope='col' className='p-5 border-t border-b border-r border-gray-200 rounded-tr-lg max-md:hidden'>
            <div className='flex cursor-pointer justify-center' onClick={() => handleSort('year')}>
              <p>1 THN</p>
              <div className='flex flex-col gap-1 mx-4'>
                <FilterUp isActive={state.filter?.sort[0] === "year" && state.filter?.sort[1] === 'desc'} />
                <FilterDown isActive={state.filter?.sort[0] === "year" && state.filter?.sort[1] === 'asc'} />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          dataSource.map((source, idx) => (
            <tr key={`${source.title}${idx}`}>
              <td className='border-b border-l'>
                <div className='p-5'>
                  <div className='flex flex-row items-center'>
                    <div className='text-[#f78b1a] w-8 h-8' style={{ width: 36, height: 36, color: source.color }}>
                      <InlineSVG src={source.logo} />
                    </div>
                    <div className='flex flex-row flex-1 flex-wrap items-center max-md:flex-col max-md:items-start'>
                      <p className='md:ml-5 font-bold flex-1'>{source.title}</p>
                      <p className='md:mx-5'>{source.currencySymbol}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className='border-b max-md:border-r'>
                <div className='p-5 font-bold max-md:text-right max-md:flex max-md:flex-col'>
                  { `Rp ${Number(source.latestPrice).toLocaleString('id-ID')}` }
                  <div className='md:hidden flex flex-row justify-end'>
                    { renderSvgUpDown(source[selectedTime]) }
                  </div>
                </div>
              </td>
              <td className='border-b max-md:hidden'>
                <div className='p-5 font-bold flex flex-row align-middle justify-center'>
                  { renderSvgUpDown(source.day) }
                </div>
              </td>
              <td className='border-b max-md:hidden'>
                <div className='p-5 font-bold flex flex-row align-middle justify-center'>
                  { renderSvgUpDown(source.week) }
                </div>
              </td>
              <td className='border-b max-md:hidden'>
                <div className='p-5 font-bold flex flex-row align-middle justify-center'>
                  { renderSvgUpDown(source.month) }
                </div>
              </td>
              <td className='border-b border-r max-md:hidden'>
                <div className='p-5 font-bold flex flex-row align-middle justify-center'>
                  { renderSvgUpDown(source.year) }
                </div>
              </td>
            </tr>
          ))
        }
        
      </tbody>
    </table>
  )
}

export default Table
