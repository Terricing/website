import { ReactNode } from 'react'
import { Typography, Paper, Grid, Box, Link, Button, IconButton, } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'mui-image';

const intro = () => (
    <Box>
        <Typography component='span' variant='h3'>hi, i'm </Typography>
        <Typography color='primary' component='span' variant='h1'>eilay</Typography>
        <Box>
            <Typography component='span'>a first year computer science student at the </Typography>
            <Typography component='span' color='secondary'>university of ottawa</Typography>
        </Box>
    </Box>
)

const status = () => (
    <Paper sx={{ marginTop: '20px', padding: '20px' }}>
        <Typography>looking for summer 2024 internships</Typography>
    </Paper>
)

const socials = () => {
    const IconLink = ({ children, link }: { children: ReactNode, link: string }) => <IconButton component={Link} href={link} rel="noopner noreferrer" target='_blank'>{children}</IconButton>

    return (
        <Grid columnGap={3} sx={{ marginTop: '20px' }} container>
            <Grid item><Box display='flex' height='100%' alignItems='center'><Typography>check me out at:</Typography></Box></Grid>
            <Grid item><IconLink link='https://www.linkedin.com/in/eilay-katsnelson-955404225/'><LinkedInIcon /></IconLink></Grid>
            <Grid item><IconLink link='https://github.com/Terricing'><GitHubIcon /></IconLink></Grid>
        </Grid>
    )
}

const resumeDownload = () => {
    const resumeLink = '../public/img/eilay_katsnelson_resume.pdf'
    return (
        <Box sx={{ marginTop: '20px', display: 'flex' }} width='100%' justifyContent='center'><Link download href={resumeLink} color='inherit' underline='none' component={Button}>download resume</Link></Box>
    )
}

const Header = () => (
    <>
        <Box display='flex' width='100%' justifyContent='center'><Image width={200} showLoading src='../public/img/avatar.png' style={{borderRadius: '50%'}}/></Box>
        {intro()}
        {status()}
        {socials()}
        {resumeDownload()}
    </>
)

export default Header;