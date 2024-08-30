import { Box } from 'lucide-react'
import React from 'react'
import cr from '../images/carousel.jpg'
const MainPage = () => {
  return (
    <div>
        <Box>
            <img src={cr} alt="" style={{height:"100%", width:"100%" ,overflow:"hidden"}}/>

        </Box>
    </div>
  )
}

export default MainPage