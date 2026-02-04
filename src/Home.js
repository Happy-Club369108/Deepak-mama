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
    Business, WhatsApp, ArrowForward, Security,
    Assignment, SupportAgent, Translate, Schedule,
    Factory, Warehouse, Agriculture, CleaningServices,
    Restaurant, LocalShipping, Build, DirectionsCar,
    SupervisorAccount, Engineering, Person, Close, Send, Check,
    Home, Elderly, Care
} from '@mui/icons-material';

const Home = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', position: '',
        experience: '', nationality: '', message: ''
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
                fullName: '', email: '', phone: '', position: '',
                experience: '', nationality: '', message: ''
            });
        }, 1500);
    };

const unskilledJobs = [
    {
        icon: <Warehouse />,
        title: 'Varastotyöntekijä',
        desc: 'Tavaroiden vastaanotto, varastointi ja lähetys logistiikka- ja jakelukeskuksissa.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Factory />,
        title: 'Pakkaus- & Lajittelutyöntekijä',
        desc: 'Tuotteiden pakkaaminen, tuotteiden lajittelu ja tuotantolinjan tehokkuuden ylläpito.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Factory />,
        title: 'Tuotantoavustaja',
        desc: 'Valmistusprosessien tuki, kokoonpano- ja laadunvalvontatyöt.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Agriculture />,
        title: 'Maatalous- & Farmityöntekijä',
        desc: 'Kausityöt viljelyssä, sadonkorjuussa ja yleisessä maatilan ylläpidossa.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <CleaningServices />,
        title: 'Siivoushenkilökunta & Avustajat',
        desc: 'Vastuussa kaupallisesta ja yksityisestä siivouksesta, hygieniatasojen noudattaminen.',
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Work />,
        title: 'Apu- ja rakennustyöntekijä',
        desc: 'Työskentely rakennusalalla, manuaalisissa töissä ja muussa fyysisesti vaativassa työssä.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Care />,
        title: 'Hoitaja / Kotiapulainen',
        desc: 'Vanhusten ja erityisryhmien hoitotyö, kotiapulaisen tehtävät ja henkilökohtainen avustus.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80'
    },
];

const skilledJobs = [
    {
        icon: <Restaurant />,
        title: 'Palvelualahenkilöstö',
        desc: 'Työskentely hotelleissa ja ravintoloissa tarjoilijana, kokkina, baristana tai palvelutyöntekijänä.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Engineering />,
        title: 'Tuotantokoneenkäyttäjä',
        desc: 'Koneiden käyttö, tuotantolinjojen valvonta ja laatuvaatimusten turvaaminen.',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <LocalShipping />,
        title: 'Trukinkuljettaja',
        desc: 'Varastolaitteiden käsittely, turvallinen tavarankuljetus ja materiaalivirran ylläpito.',
        image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Build />,
        title: 'Teknikko',
        desc: 'Laitteiden ja järjestelmien huolto, korjaus ja vianetsintä.',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <SupervisorAccount />,
        title: 'Logistiikkapäällikkö',
        desc: 'Varastotiimien johtaminen, logistiikan koordinointi ja aikataulussa pysyminen.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <DirectionsCar />,
        title: 'Kuljettaja (Kevyt & Raskas)',
        desc: 'Vastuussa turvallisesta tavarankuljetuksesta, toimituksista ja reittien hallinnasta.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80'
    },
];

    const benefits = [
        { icon: <Security />, title: 'Suomalainen yritys', desc: 'EU-standardiprosessit' },
        { icon: <CheckCircle />, title: 'Laillinen ja eettinen', desc: 'Säädösten mukainen rekrytointi' },
        { icon: <Schedule />, title: 'Nopea työllistäminen', desc: 'Nopea aloitus' },
        { icon: <Assignment />, title: 'Visa-tuki', desc: 'Tuki asiakirjahommista' },
        { icon: <SupportAgent />, title: '24/7 tuki', desc: 'Omistautunut tiimi' },
        { icon: <Translate />, title: 'Monikielinen palvelu', desc: 'Suomi, Englanti, Puola' },
    ];

    const stats = [
        { number: '500+', label: 'Asiakasyritystä', color: '#3b82f6' },
        { number: '10.000+', label: 'Työllistettyä työntekijää', color: '#10b981' },
        { number: '25+', label: 'Schengen-maata', color: '#f59e0b' },
        { number: '98%', label: 'Tyydytyksen taso', color: '#ef4444' }
    ];

    const JobCard = ({ job }) => (
        <Card
            sx={{
                width: 320,
                height: 430,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-8px)" }
            }}
        >
            <CardMedia
                component="img"
                height="140"
                image={job.image}
                alt={job.title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#dbeafe', mr: 2 }}>{job.icon}</Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{job.title}</Typography>
                </Box>
                <Typography color="text.secondary" sx={{ mb: 3 }}>{job.desc}</Typography>
            </CardContent>
            <CardActions sx={{ px: 3, pb: 3 }}>
                <Button variant="contained" fullWidth onClick={() => setOpenForm(true)} sx={{ backgroundColor: '#3b82f6' }}>
                    Apply now
                </Button>
            </CardActions>
        </Card>
    );

    return (
        <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            {/* Header */}
            <AppBar position="sticky" sx={{ bgcolor: 'white', color: '#1e293b', boxShadow: 2 }}>
                <Container>
                    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Business sx={{ mr: 2, color: '#2563eb', fontSize: 32 }} />
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>JW Fulfilments OY</Typography>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>Luotettava henkilöstöpalveluyritys Suomessa</Typography>
                            </Box>
                        </Box>
                        <Button variant="contained" onClick={() => setOpenForm(true)} startIcon={<Person />} sx={{ bgcolor: '#10b981', fontWeight: 600 }}>
                            Apply now
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero */}
            <Box sx={{
                position: 'relative',
                backgroundImage: 'url(https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1920&auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                py: 10,
                textAlign: 'center'
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }} />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
                        JW Fulfilments OY – Luotettava henkilöstöpalveluyritys Suomessa
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        Koulutettujen ja kouluttamattomien työntekijöiden välittäminen koko Schengen-alueella
                    </Typography>
                    <Button variant="contained" size="large" onClick={() => setOpenForm(true)} sx={{ bgcolor: '#f59e0b', color: '#1e293b', fontWeight: 700, px: 4 }}>
                        Apply for jobs in Finland
                    </Button>
                </Container>
            </Box>

            <Container sx={{ py: 8 }}>
                {/* Stats */}
                <Grid container spacing={3} sx={{ mb: 8 }}>
                    {stats.map((stat, i) => (
                        <Grid item xs={6} md={3} key={i}>
                            <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2, height: '100%' }}>
                                <Typography variant="h3" sx={{ color: stat.color, fontWeight: 800, mb: 1 }}>{stat.number}</Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{stat.label}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Apply Banner */}
                <Paper sx={{
                    p: 4,
                    mb: 8,
                    textAlign: 'center',
                    bgcolor: '#1e40af',
                    color: 'white',
                    borderRadius: 2,
                    backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
                }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>Valmis uraan Suomessa?</Typography>
                    <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>Hae nyt jännittäviin työmahdollisuuksiin koko Suomessa!</Typography>
                    <Button variant="contained" size="large" onClick={() => setOpenForm(true)} sx={{ mt: 2, bgcolor: '#f59e0b', color: '#1e293b', fontWeight: 700 }}>
                        Apply now - Free registration
                    </Button>
                </Paper>

                {/* Jobs Section */}
                <Typography variant="h4" gutterBottom sx={{ color: '#1e293b', fontWeight: 900, mb: 4, textAlign: 'center' }}>Avoimet työpaikat</Typography>

                <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700 }}>Kouluttamattomat & Perustyöt</Typography>
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {unskilledJobs.map((job, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700 }}>Koulutetut & Ammattitaitoiset työt</Typography>
                <Grid container spacing={3} sx={{ mb: 8 }}>
                    {skilledJobs.map((job, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>

                {/* Benefits Section */}
                <Paper
                    sx={{
                        p: { xs: 3, md: 5 },
                        mb: 8,
                        borderRadius: 3,
                        bgcolor: 'white',
                        boxShadow: 3,
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 900,
                            mb: 6,
                            color: '#1e293b',
                        }}
                    >
                        Miksi valita JW Fulfilments OY?
                    </Typography>

                    <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
                        {benefits.map((benefit, i) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={i}
                                sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Box sx={{ textAlign: 'center', maxWidth: 300, px: 2 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: '#dbeafe',
                                            width: 70,
                                            height: 70,
                                            margin: '0 auto 20px',
                                            '& .MuiSvgIcon-root': { fontSize: 32, color: '#3b82f6' },
                                        }}
                                    >
                                        {benefit.icon}
                                    </Avatar>

                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        sx={{ fontWeight: 700, color: '#1e293b', mb: 1 }}
                                    >
                                        {benefit.title}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                                        {benefit.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>


                {/* Contact Section with Images */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&auto=format&fit=crop&q=80"
                                alt="Suomi toimisto"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, display: 'flex', alignItems: 'center' }}>
                                    <LocationOn sx={{ mr: 1, color: '#3b82f6' }} />
                                    Pääkonttori - Suomi
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2, color: '#64748b' }}>JW Fulfilments OY</Typography>
                                <Typography sx={{ mb: 3 }}>
                                    Kelhontie 254, Lempäälä<br />
                                    PL: 37500, Suomi
                                </Typography>
                                <Stack spacing={2}>
                                    <Link href="mailto:info@jwfulfilments.fi" sx={{ display: 'flex', alignItems: 'center', color: '#3b82f6', textDecoration: 'none' }}>
                                        <Email sx={{ mr: 1 }} /> info@jwfulfilments.fi
                                    </Link>
                                    <Link href="tel:+358XXXXXXXXX" sx={{ display: 'flex', alignItems: 'center', color: '#3b82f6', textDecoration: 'none' }}>
                                        <Phone sx={{ mr: 1 }} /> +358 XXX XXX XXX
                                    </Link>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{
                            height: '100%',
                            borderRadius: 3,
                            bgcolor: '#f0f9ff',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1551836026-d5c2c0b4d8e9?w=600&auto=format&fit=crop&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                bgcolor: 'rgba(240, 249, 255, 0.9)'
                            }} />
                            <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>Nopea hakemus</Typography>
                                <Typography sx={{ mb: 3 }}>Lähetä tietosi ja rekrytointitiimimme ottaa sinuun yhteyttä 24 tunnin kuluessa.</Typography>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    onClick={() => setOpenForm(true)}
                                    sx={{
                                        bgcolor: '#10b981',
                                        fontWeight: 700,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        '&:hover': { bgcolor: '#059669' }
                                    }}
                                >
                                    Start application
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Footer with Logo */}
                <Paper sx={{ p: 4, bgcolor: '#1e293b', color: 'white', borderRadius: 3 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Business sx={{ mr: 2, fontSize: 40, color: '#3b82f6' }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>JW Fulfilments OY</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Workforce Solutions Finland</Typography>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                Vuodesta 2015 lähtien olemme yhdistäneet lahjakkuuksia mahdollisuuksiin koko Schengen-alueella.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Yhteystiedot</Typography>
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <WhatsApp sx={{ mr: 2, color: '#25d366' }} />
                                    <Typography>+358 XXX XXX XXX</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Email sx={{ mr: 2, color: '#3b82f6' }} />
                                    <Typography>info@jwfulfilments.fi</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LocationOn sx={{ mr: 2, color: '#ef4444' }} />
                                    <Typography>Lempäälä, Suomi</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Pikalinkit</Typography>
                            <Stack spacing={1}>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Työnantajille</Link>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Työnhakijoille</Link>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Avoimet työpaikat</Link>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }} onClick={() => setOpenForm(true)}>Hae nyt</Link>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
                        © {new Date().getFullYear()} JW Fulfilments OY. Kaikki oikeudet pidätetään. | Suomalainen rekrytointiyhtiö
                    </Typography>
                </Paper>
            </Container>

            {/* Form Dialog */}
            <Dialog open={openForm} onClose={() => !loading && setOpenForm(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ bgcolor: '#1e40af', color: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Application form</Typography>
                        <IconButton onClick={() => !loading && setOpenForm(false)} sx={{ color: 'white' }} disabled={loading}>
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ p: 3 }}>
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px', marginBottom: '20px' }}>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Full name" name="fullName" value={formData.fullName} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Email address" name="email" type="email" value={formData.email} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Phone number" name="phone" value={formData.phone} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Desired position</InputLabel>
                                    <Select name="position" value={formData.position} onChange={handleFormChange} label="Desired position" disabled={loading}>
                                        <MenuItem value="warehouse">Varastotyöntekijä</MenuItem>
                                        <MenuItem value="production">Tuotantoavustaja</MenuItem>
                                        <MenuItem value="agriculture">Maataloustyöntekijä</MenuItem>
                                        <MenuItem value="hospitality">Palvelualahenkilöstö</MenuItem>
                                        <MenuItem value="driver">Kuljettaja</MenuItem>
                                        <MenuItem value="caretaker">Hoitaja / Kotiapulainen</MenuItem>
                                        <MenuItem value="other">Muu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Experience level</InputLabel>
                                    <Select name="experience" value={formData.experience} onChange={handleFormChange} label="Experience level" disabled={loading}>
                                        <MenuItem value="none">Ei kokemusta</MenuItem>
                                        <MenuItem value="less1">Alle 1 vuosi</MenuItem>
                                        <MenuItem value="1-3">1-3 vuotta</MenuItem>
                                        <MenuItem value="3-5">3-5 vuotta</MenuItem>
                                        <MenuItem value="5+">5+ vuotta</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Nationality" name="nationality" value={formData.nationality} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows={3} label="Additional information / Message" name="message" value={formData.message} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                        </Grid>
                        <DialogActions sx={{ mt: 3, px: 0 }}>
                            <Button onClick={() => setOpenForm(false)} disabled={loading}>Cancel</Button>
                            <Button type="submit" variant="contained" disabled={loading} sx={{ bgcolor: '#10b981' }}>
                                {loading ? 'Submitting...' : 'Submit application'}
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Success Alert */}
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={() => setOpenSuccess(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setOpenSuccess(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Application submitted successfully!</Typography>
                    <Typography>Our recruitment team will contact you within 24 hours.</Typography>
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Home;
