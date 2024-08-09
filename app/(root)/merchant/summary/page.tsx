"use client";

import React from 'react'
import MerchantInfoSummary from '@/components/merchants/MerchantInfoSummary'
import MerchantShortcuts from '@/components/merchants/MerchantShortcuts'
import AccountStatusPreview from '@/components/merchants/AccountStatusPreview';
import LastCallLogsPreview from '@/components/merchants/LastCallLogsPreview';


const page = () => {
  return (
    <>

        <div className="w-auto">
          <MerchantInfoSummary/>

          <div className='flex max-lg:flex-wrap gap-5'>
            <AccountStatusPreview/>
            <LastCallLogsPreview/>
          </div>

          <MerchantShortcuts/>
        </div>
    </>

  )
}



export default page