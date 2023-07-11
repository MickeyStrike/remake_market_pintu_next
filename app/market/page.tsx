"use client"
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { PayloadPriceChange, PayloadSupportedCurrencies, ResponseTags, TypeSort } from '@/interface'
import { getListTags, getPriceChange, getSupportedCurrencies } from '@/services/frontend-services'
import Layout from '../components/Layout'
import TagSection from '../components/TagSection'
import Reload from '../assets/svg/Reload'
import { useStoreContext } from '@/store'
import Table from '../components/Table'

export interface IDataSource extends PayloadPriceChange {
  title: string,
  logo: string,
  currencySymbol: string,
  color: string,
  [key: string]: string
}

export type Time = 'day' | 'week' | 'month' | 'year'

const Market:NextPage = () => {
  const storeContext = useStoreContext()

  const [dataSource, setDataSource] = useState<IDataSource[]>([])
  const [selectedTime, setSelectedTime] = useState<Time>('day')

  const firstSetData = (dataPriceChange:PayloadPriceChange[], dataSupportedCurrencies: PayloadSupportedCurrencies[]):IDataSource[] => {
    const tempData:IDataSource[] = dataSupportedCurrencies
    .filter(x => x.name !== 'Rupiah Token')
    .map((dataMap) => {

      const dataPrice = dataPriceChange.find((x) => {
      const currency = x.pair.replace(/\/idr$/, '')
        return currency === dataMap.currencySymbol.toLocaleLowerCase()
      })

      return {
        title: dataMap.name,
        logo: dataMap.logo,
        currencySymbol: dataMap.currencySymbol,
        color: dataMap.color,
        day: dataPrice?.day || '',
        latestPrice: dataPrice?.latestPrice || '',
        month: dataPrice?.month || '',
        pair: dataPrice?.pair || '',
        week: dataPrice?.week || '',
        year: dataPrice?.year || ''
      }
    })
    return tempData
  }

  const getData = async (isFirstLoad: boolean) => {
    try {
      const { data } = await getPriceChange()
      const { data: dataSupp } = await getSupportedCurrencies()
      const { data: dataTags } = await getListTags()

      if(isFirstLoad) {
        setDataSource(
          firstSetData(
            data.payload,
            dataSupp.payload
          )
        )
      } else {
        handleFilerSortData()
      }

      storeContext.dispatch({
        dataPriceChange: data.payload,
        dataSupportedCurrencies: dataSupp.payload,
        dataTags
      })
    } catch (err) {
      console.log(err, 'ini error')
    }
  }

  useEffect(() => {
    getData(true)
  }, [])

  const filterByTag = (tag:string): IDataSource[] => {
    const findTag = storeContext.state.dataTags.find(x => x.title === tag)
    if(findTag) {
      return firstSetData(storeContext.state.dataPriceChange, storeContext.state.dataSupportedCurrencies)
      .filter(x => findTag.currencies.some(y => y.name.toLocaleLowerCase() === x.currencySymbol.toLocaleLowerCase()))
    } else {
      return firstSetData(storeContext.state.dataPriceChange, storeContext.state.dataSupportedCurrencies)
    }
  }

  const filterBySearch = (search: string, source: IDataSource[]): IDataSource[] => {
    if(search) return source.filter((x) => x.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || x.currencySymbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())) // can search title and by symbol
    else return source
  }

  const sortData = (sort: string[], source: IDataSource[]): IDataSource[] => {
    // sort index 0 = latestcurrency | week | month | year
    // sort index 1 = asc | desc
    if(sort.length > 0) {
      const key: string = sort[0]
      const sortType = sort[1] as TypeSort
      return sortType === 'asc' ? source.sort((a, b) => Number(a[key]) > Number(b[key]) ? 1 : -1) : source.sort((a, b) => Number(a[key]) < Number(b[key]) ? 1 : -1)
    } else return source
  }

  const handleFilerSortData = () => {
    const { search, sort, tag } = storeContext.state.filter
    setDataSource(() => sortData(sort, filterBySearch(search, filterByTag(tag))))
  }

  useEffect(() => {
    handleFilerSortData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeContext.state.filter])

  return (
    <Layout getData={getData}>
      <div className='mt-4'>
        <TagSection />
        <div className='md:hidden flex justify-between mt-2'>
          <div>
            <button className='font-semibold rounded-md text p-1 px-3 border flex flex-row items-center justify-center gap-2' onClick={() => getData(false)}>
              <Reload /> Refresh
            </button>
          </div>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setSelectedTime(event.target.value as Time) }}
            value={selectedTime}
            className='md:hidden w-[77px] focus:outline-none rounded-md border p-1 text-xs font-bold'
          >
            <option value="day">24 JAM</option>
            <option value="week">1 MGG</option>
            <option value="month">1 BLN</option>
            <option value="year">1 THN</option>
          </select>
        </div>
        <div className='mt-2'>
          <Table
            dataSource={dataSource}
            selectedTime={selectedTime}
          />
        </div>
        
      </div>
    </Layout>
  )
}

export default Market;
