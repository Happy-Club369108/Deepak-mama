import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent,
    Button, Box, Paper, Divider, Stack, Link, IconButton,
    CardActions, Avatar, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField, MenuItem, Select, FormControl,
    InputLabel, Snackbar, Alert, CardMedia
} from '@mui/material';

import {
    Phone, Email, LocationOn, Work, CheckCircle,
    Business, WhatsApp, Security,
    Assignment, SupportAgent, Schedule,
    Factory, Warehouse, Agriculture, CleaningServices,
    Restaurant, LocalShipping, Build, DirectionsCar,
    SupervisorAccount, Engineering, Person, Close
} from '@mui/icons-material';

const Home = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        nationality: '',
        message: ''
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenForm(false);
            setOpenSuccess(true);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                position: '',
                experience: '',
                nationality: '',
                message: ''
            });
        }, 1500);
    };

    const unskilledJobs = [
        {
            icon: <Warehouse />,
            title: 'Varastotyöntekijä',
            desc: 'Tavaroiden käsittely, pakkaus, lajittelu ja lähetys logistiikkakeskuksissa.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600'
        },
        {
            icon: <Factory />,
            title: 'Tuotantoavustaja',
            desc: 'Tuotantolinjojen avustaminen, kokoonpano ja laadunvalvonta.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600'
        },
        {
            icon: <Agriculture />,
            title: 'Maatilatyöntekijä',
            desc: 'Kausityöt maataloudessa, istutus, sadonkorjuu ja ylläpito.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600'
        },
        {
            icon: <CleaningServices />,
            title: 'Siivoustyöntekijä',
            desc: 'Liike- ja asuinkiinteistöjen siivoustyöt.',
            image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600'
        },
        {
            icon: <Work />,
            title: 'Yleinen apulainen',
            desc: 'Avustavat tehtävät rakennus- ja teollisuustyömailla.',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600'
        }
    ];

    const skilledJobs = [
        {
            icon: <Restaurant />,
            title: 'Ravintola- ja hotellityöntekijä',
            desc: 'Työskentely hotelleissa ja ravintoloissa tarjoilijana, kokkina tai asiakaspalvelussa.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600'
        },
        {
            icon: <Engineering />,
            title: 'Koneenkäyttäjä',
            desc: 'Tuotantokoneiden käyttö ja tuotantoprosessien valvonta.',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600'
        },
        {
            icon: <LocalShipping />,
            title: 'Trukkikuski',
            desc: 'Varastologistiikka ja tavaroiden turvallinen siirto.',
            image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600'
        },
        {
            icon: <Build />,
            title: 'Teknikko',
            desc: 'Laitteiden huolto, korjaus ja tekninen tuki.',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600'
        },
        {
            icon: <DirectionsCar />,
            title: 'Kuljettaja (kevyt & raskas)',
            desc: 'Tavaroiden kuljetus Suomessa ja EU-alueella.',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600'
        }
    ];

    const benefits = [
        { icon: <Security />, title: 'Suomalainen yritys', desc: 'EU-työlainsäädännön mukainen' },
        { icon: <CheckCircle />, title: 'Laillinen rekrytointi', desc: 'Avoin ja eettinen prosessi' },
        { icon: <Schedule />, title: 'Nopea työllistyminen', desc: 'Tehokas perehdytys' },
        { icon: <Assignment />, title: 'Viisumi- ja lupaohjaus', desc: 'Asiakirjatuki' },
        { icon: <SupportAgent />, title: '24/7 Tuki', desc: 'Omistautunut tiimi' }
    ];

    const JobCard = ({ job }) => (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="140" image={job.image} alt={job.title} />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#e0f2fe', mr: 2 }}>{job.icon}</Avatar>
                    <Typography variant="h6" fontWeight={700}>{job.title}</Typography>
                </Box>
                <Typography color="text.secondary">{job.desc}</Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto', p: 2 }}>
                <Button fullWidth variant="contained" onClick={() => setOpenForm(true)}>
                    Hae nyt
                </Button>
            </CardActions>
        </Card>
    );

    return (
        <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
            {/* Header */}
            <AppBar position="sticky" sx={{ bgcolor: 'white', color: '#0f172a' }}>
                <Container>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Business sx={{ mr: 2, color: '#2563eb', fontSize: 32 }} />
                            <Box>
                                <Typography variant="h6" fontWeight={800}>
                                    JW Fulfilments OY
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Työvoimaratkaisut Suomessa ja EU:ssa
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            startIcon={<Person />}
                            onClick={() => setOpenForm(true)}
                        >
                            Hae työtä
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero */}
            <Box
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    py: 10,
                    textAlign: 'center'
                }}
            >
                <Container>
                    <Typography variant="h3" fontWeight={900} gutterBottom>
                        Työmahdollisuuksia Suomessa ja Euroopassa
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Yhdistämme osaavat ja motivoituneet työntekijät luotettaviin työnantajiin
                    </Typography>
                    <Button size="large" variant="contained" onClick={() => setOpenForm(true)}>
                        Katso avoimet työpaikat
                    </Button>
                </Container>
            </Box>

            <Container sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight={900} align="center" gutterBottom>
                    Avoimet työpaikat
                </Typography>

                <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
                    Ei-vaativat ja aloitustason tehtävät
                </Typography>
                <Grid container spacing={3}>
                    {unskilledJobs.map((job, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
                    Ammattitason ja osaamista vaativat tehtävät
                </Typography>
                <Grid container spacing={3}>
                    {skilledJobs.map((job, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>

                {/* Benefits */}
                <Paper sx={{ p: 5, mt: 8 }}>
                    <Typography variant="h4" align="center" fontWeight={900} gutterBottom>
                        Miksi valita JW Fulfilments OY?
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {benefits.map((b, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i} textAlign="center">
                                <Avatar sx={{ bgcolor: '#e0f2fe', mx: 'auto', mb: 2 }}>
                                    {b.icon}
                                </Avatar>
                                <Typography variant="h6" fontWeight={700}>{b.title}</Typography>
                                <Typography color="text.secondary">{b.desc}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>

                {/* Contact */}
                <Paper sx={{ p: 5, mt: 8 }}>
                    <Typography variant="h4" fontWeight={900} gutterBottom>
                        Yhteystiedot – Suomi
                    </Typography>
                    <Typography>
                        JW Fulfilments OY<br />
                        Kelhontie 254<br />
                        37500 Lempäälä<br />
                        Suomi
                    </Typography>

                    <Stack spacing={2} sx={{ mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Email sx={{ mr: 1 }} />
                            <Typography>info@jwffulfilments.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography>+358 (Finland)</Typography>
                        </Box>
                    </Stack>
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Typography align="center" color="text.secondary">
                    © {new Date().getFullYear()} JW Fulfilments OY – Suomi. Kaikki oikeudet pidätetään.
                </Typography>
            </Container>

            {/* Success */}
            <Snackbar open={openSuccess} autoHideDuration={5000} onClose={() => setOpenSuccess(false)}>
                <Alert severity="success" variant="filled">
                    Hakemus lähetetty onnistuneesti!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Home;
