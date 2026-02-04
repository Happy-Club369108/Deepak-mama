import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Grid, Card, CardContent,
  Button, Box, Paper, IconButton,
  CardActions, Avatar, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, MenuItem, Select, FormControl,
  InputLabel, Snackbar, Alert, CardMedia
} from '@mui/material';


import {
  Work, CheckCircle,
  Business, Security,
  Assignment, SupportAgent, Translate, Schedule,
  Factory, Warehouse, Agriculture, CleaningServices,
  Restaurant, LocalShipping, DirectionsCar,
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

    /* ================= JOB LIST ================= */

    const unskilledJobs = [
        {
            icon: <Warehouse />,
            title: 'Varastotyöntekijä',
            desc: 'Tavaroiden vastaanotto, varastointi ja lähetys logistiikka- ja varastokeskuksissa.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600'
        },
        {
            icon: <Factory />,
            title: 'Pakkaus- ja lajittelutyöntekijä',
            desc: 'Tuotteiden pakkaus, lajittelu ja tuotantolinjan tukitehtävät.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600'
        },
        {
            icon: <Agriculture />,
            title: 'Maatilatyöntekijä',
            desc: 'Kausityöt maatiloilla, istutus, sadonkorjuu ja kunnossapito.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600'
        },
        {
            icon: <CleaningServices />,
            title: 'Siivoustyöntekijä',
            desc: 'Yritys- ja kotisiivous, hygienia- ja turvallisuusstandardit.',
            image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600'
        },
        {
            icon: <Work />,
            title: 'Rakennusapulainen',
            desc: 'Avustavat työt rakennus- ja teollisuuskohteissa.',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600'
        }
    ];

    const skilledJobs = [
        {
            icon: <Restaurant />,
            title: 'Ravintola- ja hotellihenkilökunta',
            desc: 'Tarjoilijat, keittiötyöntekijät, kokit ja baristat.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600'
        },
        {
            icon: <Engineering />,
            title: 'Tuotantokoneen käyttäjä',
            desc: 'Koneiden käyttö, laadunvalvonta ja tuotannon seuranta.',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600'
        },
        {
            icon: <LocalShipping />,
            title: 'Trukkikuski',
            desc: 'Varastojen tavaransiirto ja turvallinen käsittely.',
            image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600'
        },
        {
            icon: <DirectionsCar />,
            title: 'Kuljettaja (kevyt & raskas)',
            desc: 'Tavarakuljetukset ja reittien hallinta.',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600'
        },
        {
            icon: <SupervisorAccount />,
            title: 'Logistiikkapäällikkö',
            desc: 'Tiimien johtaminen ja toimitusketjun koordinointi.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600'
        },
        {
            icon: <Person />,
            title: 'Hoitaja / Caretaker',
            desc: 'Avustaminen vanhusten ja hoitoa tarvitsevien henkilöiden arjessa. Care work positions available.',
            image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600'
        }
    ];

    const benefits = [
        { icon: <Security />, title: 'Suomalainen yritys', desc: 'EU-standardien mukainen toiminta' },
        { icon: <CheckCircle />, title: 'Laillinen rekrytointi', desc: 'Eettinen ja läpinäkyvä prosessi' },
        { icon: <Schedule />, title: 'Nopea työllistyminen', desc: 'Fast placement process' },
        { icon: <Assignment />, title: 'Dokumenttituki', desc: 'Työlupa ja sopimusapu' },
        { icon: <SupportAgent />, title: '24/7 tuki', desc: 'Dedicated support team' },
        { icon: <Translate />, title: 'Monikielinen palvelu', desc: 'Finnish & English support' }
    ];

    const JobCard = ({ job }) => (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="140" image={job.image} />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ mr: 2 }}>{job.icon}</Avatar>
                    <Typography fontWeight={700}>{job.title}</Typography>
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
        <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

            {/* HEADER */}
            <AppBar position="sticky" sx={{ bgcolor: 'white', color: '#1e293b' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Business sx={{ mr: 2 }} />
                        <Typography fontWeight={800}>JW Fulfilments OY</Typography>
                    </Box>
                    <Button variant="contained" onClick={() => setOpenForm(true)}>
                        Apply / Hae
                    </Button>
                </Toolbar>
            </AppBar>

            {/* HERO */}
            <Box sx={{ py: 10, textAlign: 'center', bgcolor: '#1e40af', color: 'white' }}>
                <Typography variant="h3" fontWeight={900}>
                    Luotettavat työvoimaratkaisut Suomessa
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Workforce solutions for logistics, care & industry
                </Typography>
            </Box>

            <Container sx={{ py: 8 }}>

                {/* JOBS */}
                <Typography variant="h4" align="center" fontWeight={900} mb={4}>
                    Avoimet työpaikat
                </Typography>

                <Grid container spacing={3} mb={6}>
                    {[...unskilledJobs, ...skilledJobs].map((job, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>

                {/* BENEFITS */}
                <Grid container spacing={3} mb={8}>
                    {benefits.map((b, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Paper sx={{ p: 3, textAlign: 'center' }}>
                                <Avatar sx={{ mx: 'auto', mb: 2 }}>{b.icon}</Avatar>
                                <Typography fontWeight={700}>{b.title}</Typography>
                                <Typography color="text.secondary">{b.desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* FOOTER */}
                <Paper sx={{ p: 4, bgcolor: '#1e293b', color: 'white' }}>
                    <Typography fontWeight={700}>JW Fulfilments OY</Typography>
                    <Typography sx={{ mt: 1 }}>
                        Kelhontie 254<br />
                        PL 37500<br />
                        Lempäälä, Suomi
                    </Typography>
                    <Typography sx={{ mt: 2, opacity: 0.7 }}>
                        © {new Date().getFullYear()} JW Fulfilments OY. All rights reserved.
                    </Typography>
                </Paper>
            </Container>

            {/* APPLICATION FORM */}
            <Dialog open={openForm} onClose={() => !loading && setOpenForm(false)} fullWidth maxWidth="sm">
                <DialogTitle>
                    Työhakemus
                    <IconButton onClick={() => setOpenForm(false)} sx={{ float: 'right' }}>
                        <Close />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Koko nimi" name="fullName" required sx={{ mb: 2 }} onChange={handleFormChange} />
                        <TextField fullWidth label="Sähköposti" name="email" required sx={{ mb: 2 }} onChange={handleFormChange} />
                        <TextField fullWidth label="Puhelinnumero" name="phone" required sx={{ mb: 2 }} onChange={handleFormChange} />

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel>Haettava tehtävä</InputLabel>
                            <Select name="position" onChange={handleFormChange}>
                                <MenuItem value="warehouse">Varastotyöntekijä</MenuItem>
                                <MenuItem value="cleaning">Siivoustyöntekijä</MenuItem>
                                <MenuItem value="restaurant">Ravintola-ala</MenuItem>
                                <MenuItem value="driver">Kuljettaja</MenuItem>
                                <MenuItem value="caretaker">Hoitaja / Caretaker</MenuItem>
                                <MenuItem value="other">Muu</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField fullWidth label="Kansallisuus" name="nationality" sx={{ mb: 2 }} onChange={handleFormChange} />
                        <TextField fullWidth multiline rows={3} label="Lisätiedot" name="message" onChange={handleFormChange} />

                        <DialogActions>
                            <Button onClick={() => setOpenForm(false)}>Peruuta</Button>
                            <Button type="submit" variant="contained">Lähetä</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* SUCCESS */}
            <Snackbar open={openSuccess} autoHideDuration={5000}>
                <Alert severity="success" variant="filled">
                    Hakemus lähetetty onnistuneesti!
                </Alert>
            </Snackbar>

        </Box>
    );
};

export default Home;
