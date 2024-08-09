import React from 'react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className='h-auto'>
        {children}
      </div>
    </>
  )
}

export default layout