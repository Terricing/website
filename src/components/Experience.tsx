import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

interface experienceCardProps {
    title: string,
    company: string,
    dates: string,
    // description?: string[];
}

const ExperienceCard = (props: experienceCardProps) => {
    const {title, company, dates} = props;

    return (
        <Box marginTop={1.5}>
            <Grid container gap={2}>
                <Grid item>
                    <Box height='100%' display='flex' alignItems='center'>
                        <Typography>{dates}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h6'>{title}</Typography>
                            <Typography>{company}</Typography>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

const Experience = () => (
    <Box width='100%' height='100vh'>
        <Typography fontSize='3rem' variant='h5'>experience</Typography>
        <ExperienceCard title='QTS Software Development Intern' company='RBC Capital Markets' dates='May 2023 - Aug 2023' />
        <ExperienceCard title='Game Developer (Riipen Internship)' company='EduTutor' dates='Sept 2022 - Dec 2022' />
    </Box>
);

export default Experience;