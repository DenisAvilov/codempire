import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography } from '@material-ui/core'
import { Chucknorris } from '../toolkit'

type Props = {
  queryString: Chucknorris
}
export const TextChuck = (props: Props): JSX.Element => {
  const { queryString } = props
  return (

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: '100%',
          minHeight: 162,
          padding: '20px',
          backgroundColor: 'rgba(66, 46, 212, 1)',
          borderRadius: '20px',
          color: '#ffffff',
          position: 'relative',
        },
        '& .man': {
          position: 'absolute',
          right: '20px',
          bottom: '91px',
          zIndex: -1,
        },
        '& .man img': {
          width: '122px',
          height: '258px',
        },
      }}
    >
      <Paper elevation={3}>
        <div className="man">
          <img src="https://s3-alpha-sig.figma.com/img/3026/4564/4f10ac4b1398deb2ece123c9d8157c02?Expires=1638144000&Signature=hKmdPWaWbGmrD~Qot-jX5PrdH8F-E8BYGf6PGfK3PxMloBleXmiiFXFIsihknNoVp~ZljvbXS87amz3iDqxzjXIaRU3Tuq177jvp-dINNzoBVI68stDhYzv-X7nzMrSlcM1~cfz2D5MtPfxbdrS4Xh-AniVE32BrC9R~uwpHDFTIeIqppg9UHrQPWoICCVyzbluZtV96JcxlbFz96-e5ooc1aNGZepBW09rXz24yf0tFO3y7HJ6oFCIbxyJt8x8B~j65D3K7WPoiaDpdE-LVQCC9DHkFrv4HE6kSrnDR4AiFbIbCj-lAJaWs8KxNWNRVojj1SLlRo2DeE4O8mGk8Xw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
        </div>
        <Typography>
          { queryString.value }
        </Typography>
      </Paper>
    </Box>

  )
}
