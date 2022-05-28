import React from 'react'
import Analytics from './Analytics'
import NotificationCard from './notificationCard'
import Reports from './Reports'
import Seo from './seo'
import Table from './Table'

function MainContent() {
  return (
<div class="row">
   <Reports />
   <Analytics />
   <Seo />
    {/** tables start*/}
<div class="col-xl-6 col-md-12">
     <Table 
        cardHeader={'Projects'}
        header1={'Assigned'}
        header2={'Name'}
        header3={'Due Date'}
        header4={'priority'} />
    </div>
<div class="col-xl-6 col-md-12">
    <NotificationCard />
</div>
   
</div>
  )
}

export default MainContent