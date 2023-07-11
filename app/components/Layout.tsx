import React, { ReactNode, FC } from 'react'
import Headers from './Headers'
import SubHeader, { ISubHeader } from './SubHeader'

interface ILayout extends ISubHeader {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children, getData }) => {
  return (
    <div className='max-w-7xl m-auto'>
      <Headers />
      <div className='px-4 pt-4 pb-10'>
        <SubHeader getData={getData} />
        {children}
      </div>
    </div>
  )
}

export default Layout