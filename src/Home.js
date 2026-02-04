import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent,
    Button, Box, Paper, Divider, Stack, Link, IconButton,
    CardActions, Avatar, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField, MenuItem, Select, FormControl,
    InputLabel, Snackbar, Alert, CardMedia, Chip, Fade,
    useMediaQuery, useTheme, alpha, Breadcrumbs, Tabs, Tab,
    Accordion, AccordionSummary, AccordionDetails, Badge,
    List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import {
    Phone, Email, LocationOn, Work, CheckCircle,
    Business, WhatsApp, ArrowForward, Security,
    Assignment, SupportAgent, Translate, Schedule,
    Factory, Warehouse, Agriculture, CleaningServices,
    Restaurant, LocalShipping, Build, DirectionsCar,
    SupervisorAccount, Engineering, Person, Close, Send, Check,
    Elderly, HealthAndSafety, Menu as MenuIcon,
    ExpandMore, Facebook, LinkedIn, Twitter, Instagram,
    Flag, Language, Euro, VerifiedUser, Groups,
    AccessTime, TrendingUp, Star, Download,
    Home, BusinessCenter, People, ContactSupport,
    KeyboardArrowRight, ArrowOutward, LocationCity
} from '@mui/icons-material';

const Home = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [expandedAccordion, setExpandedAccordion] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            desc: 'Saapuvan tavaran käsittely, varastointi ja toimitus logistiikka- ja jakelukeskuksissa.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
            location: 'Helsinki, Tampere, Turku',
            urgent: true,
            type: 'Kokoaikainen',
            experience: 'Ei kokemusta vaadita',
            tags: ['Varasto', 'Logistiikka', 'Fyysinen']
        },
        {
            icon: <Factory />,
            title: 'Pakkaus- & Lajittelutyöntekijä',
            desc: 'Tuotteiden pakkaaminen, artikkeleiden lajittelu ja tuotantolinjojen tehokkuuden ylläpito.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80',
            location: 'Espoo, Vantaa',
            urgent: false,
            type: 'Osaaikainen',
            experience: 'Perustaidot',
            tags: ['Pakkaus', 'Tuotanto', 'Tarkkuus']
        },
        {
            icon: <Factory />,
            title: 'Tuotantoavustaja',
            desc: 'Valmistusprosessien tukeminen, kokoonpano- ja laadunvalvontatyöt.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80',
            location: 'Oulu, Jyväskylä',
            urgent: true,
            type: 'Kokoaikainen',
            experience: '6kk+ kokemus',
            tags: ['Tuotanto', 'Kokoonpano', 'Laadunvalvonta']
        },
        {
            icon: <Agriculture />,
            title: 'Maatalous- & Maatilatyöntekijä',
            desc: 'Kausityöt maatiloilla kuten istutus, sadonkorjuu ja yleinen maatilan ylläpito.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80',
            location: 'Koko Suomi',
            urgent: false,
            type: 'Kausityö',
            experience: 'Ei vaadita',
            tags: ['Maatalous', 'Kausityö', 'Ulkotyö']
        },
        {
            icon: <CleaningServices />,
            title: 'Siivoushenkilöstö & Avustajat',
            desc: 'Vastuussa kaupallisesta ja yksityisestä siivouksesta, hygieniastandardien noudattaminen.',
            image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&auto=format&fit=crop&q=80',
            location: 'Pääkaupunkiseutu',
            urgent: true,
            type: 'Vuorotyö',
            experience: 'Ei vaadita',
            tags: ['Siivous', 'Hygienia', 'Palvelu']
        },
        {
            icon: <Work />,
            title: 'Apu- ja Ruumiillinen Työntekijä',
            desc: 'Työskentely rakennusalalla, manuaalisissa töissä ja muussa fyysisesti vaativassa työssä.',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
            location: 'Koko Suomi',
            urgent: true,
            type: 'Kokoaikainen',
            experience: 'Ei vaadita',
            tags: ['Rakennus', 'Fyysinen', 'Monipuolinen']
        },
    ];

    const skilledJobs = [
        {
            icon: <Restaurant />,
            title: 'Hotelli- & Ravintolahenkilöstö',
            desc: 'Työ hotelleissa ja ravintoloissa tarjoilijana, kokkina, baristana tai palvelutyöntekijänä.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80',
            location: 'Helsinki, Turku, Tampere',
            urgent: true,
            type: 'Kokoaikainen',
            experience: '1+ vuosi',
            tags: ['Hotelli', 'Ravintola', 'Palvelu']
        },
        {
            icon: <Engineering />,
            title: 'Tuotantokoneenkäyttäjä',
            desc: 'Koneiden käyttö, tuotantolinjojen valvonta ja laadunvalvonta.',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80',
            location: 'Vaasa, Seinäjoki',
            urgent: false,
            type: 'Kokoaikainen',
            experience: '2+ vuotta',
            tags: ['Kone', 'Tuotanto', 'Tekniikka']
        },
        {
            icon: <LocalShipping />,
            title: 'Trukinkuljettaja',
            desc: 'Varastolaitteiden käsittely, turvallinen tavarankuljetus ja materiaalivirran ylläpito.',
            image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&auto=format&fit=crop&q=80',
            location: 'Helsinki, Vantaa',
            urgent: true,
            type: 'Vuorotyö',
            experience: 'Ajolupa vaaditaan',
            tags: ['Logistiikka', 'Kuljetus', 'Varasto']
        },
        {
            icon: <Build />,
            title: 'Teknikko',
            desc: 'Laitteiden tai järjestelmien huolto, korjaus ja vianetsintä.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80',
            location: 'Tampere, Lahti',
            urgent: false,
            type: 'Kokoaikainen',
            experience: '3+ vuotta',
            tags: ['Huolto', 'Tekniikka', 'Korjaus']
        },
        {
            icon: <SupervisorAccount />,
            title: 'Logistiikkapäällikkö',
            desc: 'Varastotiimien johtaminen, logistiikan koordinointi ja ajallisten toimituksenvarmistaminen.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
            location: 'Helsinki, Espoo',
            urgent: true,
            type: 'Kokoaikainen',
            experience: '5+ vuotta',
            tags: ['Johto', 'Logistiikka', 'Koordinaatio']
        },
        {
            icon: <DirectionsCar />,
            title: 'Kuljettaja (Kevyt & Raskas)',
            desc: 'Turvallinen tavarankuljetus, toimituksien käsittely ja reittien hallinta.',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80',
            location: 'Koko Suomi',
            urgent: true,
            type: 'Kokoaikainen',
            experience: 'Ajolupa vaaditaan',
            tags: ['Kuljetus', 'Logistiikka', 'Ajotaito']
        },
    ];

    const caretakerJobs = [
        {
            icon: <Elderly />,
            title: 'Hoitaja / Caretaker',
            desc: 'Vanhusten- tai erityisryhmien hoitotyö, päivittäisten aktiviteettien avustaminen ja henkilökohtainen hoiva.',
            image: 'https://images.unsplash.com/photo-1581579431539-8a0375d5fe8e?w=600&auto=format&fit=crop&q=80',
            location: 'Helsinki, Espoo, Vantaa',
            urgent: true,
            type: 'Vuorotyö',
            experience: 'Hoitoalan koulutus',
            tags: ['Hoito', 'Vanhustyö', 'Hoiva']
        },
        {
            icon: <HealthAndSafety />,
            title: 'Kotihoitaja',
            desc: 'Asiakkaiden kotona tapahtuvan hoidon tarjoaminen, lääkkeiden annostelu ja perusterveydenhuollon toimenpiteet.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&auto=format&fit=crop&q=80',
            location: 'Pääkaupunkiseutu',
            urgent: true,
            type: 'Kokoaikainen',
            experience: 'Sosiaali- tai terveysala',
            tags: ['Kotihoidon', 'Terveydenhuolto', 'Palvelu']
        }
    ];

    const benefits = [
        { 
            icon: <Security />, 
            title: 'Suomalainen Yritys', 
            desc: 'EU-standardien mukaiset prosessit ja täydellinen lakisääteinen noudattaminen',
            color: '#3b82f6'
        },
        { 
            icon: <CheckCircle />, 
            title: 'Laillinen & Eettinen', 
            desc: 'Säädöstenmukainen rekrytointi ja eettiset käytännöt',
            color: '#10b981'
        },
        { 
            icon: <Schedule />, 
            title: 'Nopea Sijoittaminen', 
            desc: 'Nopea työnteon aloitus ja tehokas prosessi',
            color: '#f59e0b'
        },
        { 
            icon: <Assignment />, 
            title: 'Viisumituki', 
            desc: 'Asiakirja-apu ja kokonaisvaltainen viisumituki',
            color: '#8b5cf6'
        },
        { 
            icon: <SupportAgent />, 
            title: '24/7 Tuki', 
            desc: 'Omistautunut tiimi saatavilla ympäri vuorokauden',
            color: '#ef4444'
        },
        { 
            icon: <Translate />, 
            title: 'Monikielinen', 
            desc: 'Palvelu saatavilla englanniksi, suomeksi ja puolaksi',
            color: '#06b6d4'
        },
    ];

    const stats = [
        { number: '500+', label: 'Palveltua Yritystä', color: '#3b82f6', icon: <Business /> },
        { number: '10.000+', label: 'Sijoitettua Työntekijää', color: '#10b981', icon: <People /> },
        { number: '25+', label: 'Schengen-maata', color: '#f59e0b', icon: <Flag /> },
        { number: '98%', label: 'Tyytyväisyysprosentti', color: '#ef4444', icon: <Star /> }
    ];

    const processSteps = [
        { step: '01', title: 'Rekisteröidy', desc: 'Täytä hakemuslomake tai lataa CV' },
        { step: '02', title: 'Haastattelu', desc: 'Videohaastattelu tai puhelinhaastattelu' },
        { step: '03', title: 'Sopimus', desc: 'Työsopimuksen allekirjoitus' },
        { step: '04', title: 'Sijoitus', desc: 'Työpaikan aloitus ja integraatio' },
    ];

    const JobCard = ({ job }) => (
        <Fade in={true} timeout={1000}>
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    '& .job-image': {
                        transform: 'scale(1.05)'
                    }
                }
            }}>
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={job.image}
                        alt={job.title}
                        className="job-image"
                        sx={{
                            transition: 'transform 0.5s ease',
                            objectFit: 'cover'
                        }}
                    />
                    {job.urgent && (
                        <Chip
                            label="Kiireellinen"
                            color="error"
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                fontWeight: 700,
                                backdropFilter: 'blur(4px)'
                            }}
                        />
                    )}
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        p: 2,
                        color: 'white'
                    }}>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                            <LocationOn sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                            {job.location}
                        </Typography>
                    </Box>
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ 
                            bgcolor: 'primary.light', 
                            color: 'primary.main',
                            mr: 2,
                            width: 48,
                            height: 48
                        }}>
                            {job.icon}
                        </Avatar>
                        <Box>
                            <Typography variant="h6" sx={{ 
                                fontWeight: 700,
                                lineHeight: 1.2,
                                mb: 0.5
                            }}>
                                {job.title}
                            </Typography>
                            <Chip
                                label={job.type}
                                size="small"
                                sx={{ 
                                    bgcolor: 'grey.100',
                                    color: 'grey.700',
                                    fontSize: '0.75rem'
                                }}
                            />
                        </Box>
                    </Box>
                    
                    <Typography color="text.secondary" sx={{ 
                        mb: 3,
                        fontSize: '0.875rem',
                        lineHeight: 1.6
                    }}>
                        {job.desc}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" sx={{ 
                            color: 'text.secondary',
                            display: 'block',
                            mb: 1
                        }}>
                            <Work sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                            {job.experience}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {job.tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    size="small"
                                    variant="outlined"
                                    sx={{ fontSize: '0.7rem' }}
                                />
                            ))}
                        </Box>
                    </Box>
                </CardContent>
                
                <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => setOpenForm(true)}
                        endIcon={<ArrowOutward />}
                        sx={{
                            bgcolor: 'primary.main',
                            '&:hover': {
                                bgcolor: 'primary.dark',
                                transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.2s',
                            py: 1.5
                        }}
                    >
                        Hae tätä työtä
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    );

    return (
        <Box sx={{ 
            backgroundColor: '#f8fafc',
            minHeight: '100vh',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <AppBar position="fixed" sx={{ 
                bgcolor: 'white',
                color: '#1e293b',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.95)'
            }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ 
                        justifyContent: 'space-between',
                        py: 1.5,
                        minHeight: { xs: 64, md: 80 }
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{
                                width: 48,
                                height: 48,
                                bgcolor: 'primary.main',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Business sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ 
                                    fontWeight: 900,
                                    color: '#1e293b',
                                    fontSize: { xs: '1.1rem', md: '1.5rem' }
                                }}>
                                    JW Fulfilments
                                </Typography>
                                <Typography variant="caption" sx={{ 
                                    color: '#64748b',
                                    fontSize: '0.75rem',
                                    fontWeight: 500
                                }}>
                                    Henkilöstöpalvelut | Schengen-alue
                                </Typography>
                            </Box>
                        </Box>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Link href="#jobs" sx={{ 
                                    textDecoration: 'none',
                                    color: '#1e293b',
                                    fontWeight: 600,
                                    '&:hover': { color: 'primary.main' }
                                }}>
                                    Työpaikat
                                </Link>
                                <Link href="#process" sx={{ 
                                    textDecoration: 'none',
                                    color: '#1e293b',
                                    fontWeight: 600,
                                    '&:hover': { color: 'primary.main' }
                                }}>
                                    Prosessi
                                </Link>
                                <Link href="#benefits" sx={{ 
                                    textDecoration: 'none',
                                    color: '#1e293b',
                                    fontWeight: 600,
                                    '&:hover': { color: 'primary.main' }
                                }}>
                                    Edut
                                </Link>
                                <Link href="#contact" sx={{ 
                                    textDecoration: 'none',
                                    color: '#1e293b',
                                    fontWeight: 600,
                                    '&:hover': { color: 'primary.main' }
                                }}>
                                    Yhteystiedot
                                </Link>
                            </Box>
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {isMobile ? (
                                <IconButton>
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            fontWeight: 600
                                        }}
                                    >
                                        <Phone sx={{ mr: 1, fontSize: 20 }} />
                                        Soita
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => setOpenForm(true)}
                                        sx={{
                                            bgcolor: 'primary.main',
                                            fontWeight: 700,
                                            px: 3,
                                            '&:hover': {
                                                bgcolor: 'primary.dark'
                                            }
                                        }}
                                    >
                                        <Person sx={{ mr: 1 }} />
                                        Hae nyt
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero Section */}
            <Box sx={{ 
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                pt: { xs: 8, md: 0 }
            }}>
                {/* Background Image with Overlay */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }} />

                {/* Animated Background Elements */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                    animation: 'pulse 4s ease-in-out infinite'
                }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Fade in={true} timeout={1000}>
                                <Box>
                                    <Chip
                                        label="Schengen-alueen johtava rekrytoija"
                                        sx={{
                                            bgcolor: 'rgba(59, 130, 246, 0.2)',
                                            color: 'white',
                                            mb: 3,
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            py: 1
                                        }}
                                    />
                                    
                                    <Typography variant="h1" sx={{
                                        fontWeight: 900,
                                        color: 'white',
                                        mb: 3,
                                        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                                        lineHeight: 1.1,
                                        textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                                    }}>
                                        Oikea Henkilö
                                        <Box component="span" sx={{ 
                                            color: 'primary.light',
                                            display: 'block'
                                        }}>
                                            Oikeaan Paikkaan
                                        </Box>
                                    </Typography>
                                    
                                    <Typography variant="h5" sx={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        mb: 5,
                                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                                        maxWidth: '90%'
                                    }}>
                                        Yhdistämme lahjakkaat ammattilaiset ja lupaavat uramahdollisuudet 
                                        ympäri Schengen-alueen. Aloita kansainvälinen ura tänään.
                                    </Typography>

                                    <Box sx={{ 
                                        display: 'flex', 
                                        gap: 3,
                                        flexWrap: 'wrap'
                                    }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            onClick={() => setOpenForm(true)}
                                            sx={{
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                fontWeight: 700,
                                                px: 5,
                                                py: 2,
                                                fontSize: '1.1rem',
                                                '&:hover': {
                                                    bgcolor: 'primary.dark',
                                                    transform: 'translateY(-2px)'
                                                },
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            Aloita hakemus
                                            <ArrowForward sx={{ ml: 1 }} />
                                        </Button>
                                        
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            sx={{
                                                borderColor: 'white',
                                                color: 'white',
                                                fontWeight: 600,
                                                px: 5,
                                                py: 2,
                                                fontSize: '1.1rem',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.1)',
                                                    borderColor: 'white'
                                                }
                                            }}
                                        >
                                            <WhatsApp sx={{ mr: 1 }} />
                                            Chat with us
                                        </Button>
                                    </Box>
                                </Box>
                            </Fade>
                        </Grid>
                        
                        <Grid item xs={12} md={5}>
                            <Fade in={true} timeout={1500}>
                                <Paper sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                    transform: 'translateY(20px)',
                                    animation: 'float 6s ease-in-out infinite'
                                }}>
                                    <Typography variant="h5" gutterBottom sx={{ 
                                        fontWeight: 800,
                                        color: '#1e293b',
                                        mb: 3
                                    }}>
                                        Nopea aloitus
                                    </Typography>
                                    
                                    <List>
                                        {processSteps.map((step, index) => (
                                            <ListItem key={index} sx={{ 
                                                px: 0,
                                                py: 2,
                                                borderBottom: index < processSteps.length - 1 ? '1px solid' : 'none',
                                                borderColor: 'divider'
                                            }}>
                                                <ListItemIcon sx={{ minWidth: 60 }}>
                                                    <Box sx={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: '50%',
                                                        bgcolor: 'primary.main',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontWeight: 900,
                                                        fontSize: '1.2rem'
                                                    }}>
                                                        {step.step}
                                                    </Box>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                                            {step.title}
                                                        </Typography>
                                                    }
                                                    secondary={step.desc}
                                                />
                                                {index === 0 && (
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        onClick={() => setOpenForm(true)}
                                                        sx={{
                                                            bgcolor: 'primary.main',
                                                            fontWeight: 600,
                                                            px: 3
                                                        }}
                                                    >
                                                        Aloita
                                                    </Button>
                                                )}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
                
                {/* Scroll Indicator */}
                <Box sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite'
                }}>
                    <KeyboardArrowRight sx={{
                        color: 'white',
                        fontSize: 40,
                        transform: 'rotate(90deg)'
                    }} />
                </Box>
            </Box>

            {/* Stats Section */}
            <Container maxWidth="xl" sx={{ py: 10 }}>
                <Grid container spacing={3}>
                    {stats.map((stat, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Fade in={true} timeout={500 + index * 200}>
                                <Paper sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.1)'
                                    },
                                    transition: 'all 0.3s'
                                }}>
                                    <Box sx={{
                                        position: 'absolute',
                                        top: -20,
                                        right: -20,
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        bgcolor: alpha(stat.color, 0.1),
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {React.cloneElement(stat.icon, { 
                                            sx: { 
                                                fontSize: 32,
                                                color: stat.color
                                            }
                                        })}
                                    </Box>
                                    
                                    <Typography variant="h2" sx={{ 
                                        color: stat.color,
                                        fontWeight: 900,
                                        mb: 1,
                                        fontSize: { xs: '2.5rem', md: '3rem' }
                                    }}>
                                        {stat.number}
                                    </Typography>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 600,
                                        color: '#1e293b'
                                    }}>
                                        {stat.label}
                                    </Typography>
                                </Paper>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Job Categories */}
            <Box id="jobs" sx={{ py: 10, bgcolor: 'white' }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ 
                            fontWeight: 900,
                            color: '#1e293b',
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}>
                            <Box component="span" sx={{ color: 'primary.main' }}>
                                Avointa
                            </Box>
                            {' '}Työtä
                        </Typography>
                        <Typography variant="h6" sx={{ 
                            color: '#64748b',
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 6
                        }}>
                            Tutustu tuoreimpiin työmahdollisuuksiin ympäri Schengen-alueen
                        </Typography>
                        
                        <Tabs
                            value={activeTab}
                            onChange={(e, newValue) => setActiveTab(newValue)}
                            centered
                            sx={{
                                '& .MuiTab-root': {
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    minHeight: 48,
                                    px: 4
                                }
                            }}
                        >
                            <Tab label="Perustyöt" />
                            <Tab label="Ammattityöt" />
                            <Tab label="Hoitoala" />
                        </Tabs>
                    </Box>

                    {/* Unskilled Jobs */}
                    {activeTab === 0 && (
                        <Grid container spacing={4}>
                            {unskilledJobs.map((job, index) => (
                                <Grid item xs={12} sm={6} lg={4} key={index}>
                                    <JobCard job={job} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* Skilled Jobs */}
                    {activeTab === 1 && (
                        <Grid container spacing={4}>
                            {skilledJobs.map((job, index) => (
                                <Grid item xs={12} sm={6} lg={4} key={index}>
                                    <JobCard job={job} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* Caretaker Jobs */}
                    {activeTab === 2 && (
                        <Grid container spacing={4}>
                            {caretakerJobs.map((job, index) => (
                                <Grid item xs={12} sm={6} lg={4} key={index}>
                                    <JobCard job={job} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => setOpenForm(true)}
                            sx={{
                                bgcolor: 'primary.main',
                                px: 6,
                                py: 2,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                    transform: 'scale(1.05)'
                                },
                                transition: 'all 0.2s'
                            }}
                        >
                            Näytä kaikki työpaikat
                            <ArrowForward sx={{ ml: 1 }} />
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Benefits Section */}
            <Box id="benefits" sx={{ py: 10, bgcolor: '#f0f9ff' }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ 
                            fontWeight: 900,
                            color: '#1e293b',
                            mb: 3,
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}>
                            Miksi valita{' '}
                            <Box component="span" sx={{ color: 'primary.main' }}>
                                meidät?
                            </Box>
                        </Typography>
                        <Typography variant="h6" sx={{ 
                            color: '#64748b',
                            maxWidth: 600,
                            mx: 'auto'
                        }}>
                            Tarjoamme kattavat palvelut ja tukemme sinua jokaisessa vaiheessa
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {benefits.map((benefit, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Fade in={true} timeout={500 + index * 100}>
                                    <Paper sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 3,
                                        bgcolor: 'white',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            '& .benefit-icon': {
                                                transform: 'scale(1.1)'
                                            }
                                        }
                                    }}>
                                        <Box className="benefit-icon" sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 3,
                                            bgcolor: alpha(benefit.color, 0.1),
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            transition: 'transform 0.3s'
                                        }}>
                                            {React.cloneElement(benefit.icon, {
                                                sx: {
                                                    fontSize: 40,
                                                    color: benefit.color
                                                }
                                            })}
                                        </Box>
                                        
                                        <Typography variant="h5" gutterBottom sx={{ 
                                            fontWeight: 700,
                                            color: '#1e293b',
                                            mb: 2
                                        }}>
                                            {benefit.title}
                                        </Typography>
                                        
                                        <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                            {benefit.desc}
                                        </Typography>
                                        
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: 4,
                                            bgcolor: benefit.color,
                                            opacity: 0
                                        }} />
                                    </Paper>
                                </Fade>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Process Section */}
            <Box id="process" sx={{ py: 10, bgcolor: 'white' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{
                                    width: '100%',
                                    height: 400,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                                        alt="Recruitment Process"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        bgcolor: 'rgba(59, 130, 246, 0.1)'
                                    }} />
                                </Box>
                                
                                <Paper sx={{
                                    position: 'absolute',
                                    bottom: -40,
                                    right: -40,
                                    p: 3,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    display: { xs: 'none', md: 'block' }
                                }}>
                                    <Typography variant="h3" sx={{ 
                                        fontWeight: 900,
                                        color: 'primary.main',
                                        textAlign: 'center'
                                    }}>
                                        24h
                                    </Typography>
                                    <Typography variant="body2" sx={{ 
                                        fontWeight: 600,
                                        color: '#64748b'
                                    }}>
                                        Ensimmäinen yhteydenotto
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" sx={{ 
                                fontWeight: 900,
                                color: '#1e293b',
                                mb: 3,
                                fontSize: { xs: '2rem', md: '2.5rem' }
                            }}>
                                <Box component="span" sx={{ color: 'primary.main' }}>
                                    Yksinkertainen
                                </Box>
                                {' '}4-vaiheinen prosessi
                            </Typography>
                            
                            <List>
                                {processSteps.map((step, index) => (
                                    <ListItem key={index} sx={{ px: 0, py: 3 }}>
                                        <Box sx={{ 
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            width: '100%'
                                        }}>
                                            <Box sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 2,
                                                bgcolor: 'primary.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 3,
                                                flexShrink: 0
                                            }}>
                                                <Typography sx={{ 
                                                    color: 'white',
                                                    fontWeight: 900,
                                                    fontSize: '1.5rem'
                                                }}>
                                                    {step.step}
                                                </Typography>
                                            </Box>
                                            
                                            <Box>
                                                <Typography variant="h5" sx={{ 
                                                    fontWeight: 700,
                                                    color: '#1e293b',
                                                    mb: 1
                                                }}>
                                                    {step.title}
                                                </Typography>
                                                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                    {step.desc}
                                                </Typography>
                                            </Box>
                                            
                                            {index < processSteps.length - 1 && (
                                                <Box sx={{
                                                    flexGrow: 1,
                                                    display: { xs: 'none', md: 'flex' },
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <ArrowForward sx={{ 
                                                        color: '#cbd5e1',
                                                        fontSize: 24
                                                    }} />
                                                </Box>
                                            )}
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ 
                py: 12,
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Typography variant="h2" sx={{ 
                                fontWeight: 900,
                                color: 'white',
                                mb: 3,
                                fontSize: { xs: '2rem', md: '3rem' }
                            }}>
                                Valmis aloittamaan uuden uran?
                            </Typography>
                            <Typography variant="h5" sx={{ 
                                color: 'rgba(255, 255, 255, 0.9)',
                                mb: 4
                            }}>
                                Liity tuhansiin tyytyväisiin työntekijöihin ympäri Schengen-alueen.
                                Rekrytointitiimimme auttaa sinua joka vaiheessa.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => setOpenForm(true)}
                                    sx={{
                                        bgcolor: 'white',
                                        color: 'primary.main',
                                        fontWeight: 700,
                                        px: 5,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            bgcolor: '#f8fafc',
                                            transform: 'scale(1.05)'
                                        },
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Hae työpaikkaa
                                    <ArrowForward sx={{ ml: 1 }} />
                                </Button>
                                
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        fontWeight: 600,
                                        px: 5,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                >
                                    <Phone sx={{ mr: 1 }} />
                                    Soita meille
                                </Button>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                            <Paper sx={{
                                p: 4,
                                borderRadius: 3,
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                <Typography variant="h5" gutterBottom sx={{ 
                                    fontWeight: 700,
                                    color: 'white',
                                    mb: 3
                                }}>
                                    Asiantuntijamme auttavat sinua
                                </Typography>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <Avatar
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
                                        sx={{ width: 60, height: 60, mr: 2 }}
                                    />
                                    <Box>
                                        <Typography variant="h6" sx={{ 
                                            fontWeight: 700,
                                            color: 'white'
                                        }}>
                                            Anna K.
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                            Senior Rekrytoija
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Typography sx={{ 
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontStyle: 'italic',
                                    mb: 3
                                }}>
                                    "Autamme sinua löytämään juuri sinulle sopivan työpaikan ja tukemme koko prosessin ajan."
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box id="contact" sx={{ py: 10, bgcolor: 'white' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" sx={{ 
                                fontWeight: 900,
                                color: '#1e293b',
                                mb: 3
                            }}>
                                Ota yhteyttä
                            </Typography>
                            
                            <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <LocationCity sx={{ 
                                        fontSize: 40,
                                        color: 'primary.main',
                                        mr: 2
                                    }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                            Pääkonttori - Suomi
                                        </Typography>
                                        <Typography color="text.secondary">
                                            JW Fulfilments OY
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Typography sx={{ mb: 3 }}>
                                    <LocationOn sx={{ 
                                        fontSize: 20,
                                        color: 'primary.main',
                                        verticalAlign: 'middle',
                                        mr: 1
                                    }} />
                                    Kelhontie 254, Lempäälä
                                    <br />
                                    PL: 37500, Suomi
                                </Typography>
                                
                                <Stack spacing={2}>
                                    <Link href="mailto:info@jwfulfilments.fi" sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        fontWeight: 600
                                    }}>
                                        <Email sx={{ mr: 2 }} />
                                        info@jwfulfilments.fi
                                    </Link>
                                    
                                    <Link href="tel:+358XXXXXXXXX" sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        fontWeight: 600
                                    }}>
                                        <Phone sx={{ mr: 2 }} />
                                        +358 XXX XXX XXX
                                    </Link>
                                    
                                    <Link href="https://wa.me/XXXXXXXXXX" sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#25D366',
                                        textDecoration: 'none',
                                        fontWeight: 600
                                    }}>
                                        <WhatsApp sx={{ mr: 2 }} />
                                        WhatsApp Chat
                                    </Link>
                                </Stack>
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ 
                                p: 4, 
                                borderRadius: 3,
                                bgcolor: '#f8fafc',
                                height: '100%'
                            }}>
                                <Typography variant="h5" gutterBottom sx={{ 
                                    fontWeight: 700,
                                    color: '#1e293b',
                                    mb: 3
                                }}>
                                    Kysy lisää
                                </Typography>
                                
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                                    <Chip
                                        icon={<Business />}
                                        label="Työnantajille"
                                        clickable
                                        sx={{ fontWeight: 600 }}
                                    />
                                    <Chip
                                        icon={<Person />}
                                        label="Työnhakijoille"
                                        clickable
                                        sx={{ fontWeight: 600 }}
                                    />
                                    <Chip
                                        icon={<Assignment />}
                                        label="Viisumituki"
                                        clickable
                                        sx={{ fontWeight: 600 }}
                                    />
                                </Box>
                                
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    onClick={() => setOpenForm(true)}
                                    sx={{
                                        bgcolor: 'primary.main',
                                        fontWeight: 700,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            bgcolor: 'primary.dark'
                                        }
                                    }}
                                >
                                    <ContactSupport sx={{ mr: 1 }} />
                                    Kysy lisätietoja
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ 
                bgcolor: '#0f172a',
                color: 'white',
                py: 8
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    width: 48,
                                    height: 48,
                                    bgcolor: 'primary.main',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                }}>
                                    <Business sx={{ color: 'white', fontSize: 28 }} />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                        JW Fulfilments OY
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        Henkilöstöpalvelut Schengen-alueella
                                    </Typography>
                                </Box>
                            </Box>
                            
                            <Typography variant="body2" sx={{ 
                                opacity: 0.7,
                                mb: 3,
                                lineHeight: 1.6
                            }}>
                                Vuodesta 2015 lähtien olemme yhdistäneet lahjakkuuksia ja 
                                mahdollisuuksia koko Schengen-alueella.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton sx={{ 
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    '&:hover': { bgcolor: 'primary.main' }
                                }}>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton sx={{ 
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    '&:hover': { bgcolor: 'primary.main' }
                                }}>
                                    <Facebook />
                                </IconButton>
                                <IconButton sx={{ 
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    '&:hover': { bgcolor: 'primary.main' }
                                }}>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={6} md={2}>
                            <Typography variant="h6" gutterBottom sx={{ 
                                fontWeight: 700,
                                mb: 3
                            }}>
                                Yritys
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Tietoa meistä
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Ura yrityksessä
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Yhteistyökumppanit
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Tietosuoja
                                </Link>
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={6} md={3}>
                            <Typography variant="h6" gutterBottom sx={{ 
                                fontWeight: 700,
                                mb: 3
                            }}>
                                Työnhakijoille
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="#jobs" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Avoimet työpaikat
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Hakemusprosessi
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Viisumituki
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.7,
                                    '&:hover': { 
                                        opacity: 1,
                                        color: 'primary.light'
                                    }
                                }}>
                                    Usein kysytyt kysymykset
                                </Link>
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" gutterBottom sx={{ 
                                fontWeight: 700,
                                mb: 3
                            }}>
                                Uutiskirje
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                                Tilaa uutiskirjeemme saadaksesi uusimmat työpaikat suoraan sähköpostiisi.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <TextField
                                    placeholder="Sähköpostiosoite"
                                    size="small"
                                    sx={{
                                        flexGrow: 1,
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            color: 'white'
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: 'primary.main',
                                        '&:hover': { bgcolor: 'primary.dark' }
                                    }}
                                >
                                    <Send />
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <Divider sx={{ my: 6, bgcolor: 'rgba(255,255,255,0.1)' }} />
                    
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2" sx={{ opacity: 0.6 }}>
                                © {new Date().getFullYear()} JW Fulfilments OY. Kaikki oikeudet pidätetään.
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Box sx={{ 
                                display: 'flex',
                                justifyContent: { md: 'flex-end' },
                                flexWrap: 'wrap',
                                gap: 3
                            }}>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.6,
                                    fontSize: '0.875rem',
                                    '&:hover': { opacity: 1 }
                                }}>
                                    Käyttöehdot
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.6,
                                    fontSize: '0.875rem',
                                    '&:hover': { opacity: 1 }
                                }}>
                                    Tietosuojakäytäntö
                                </Link>
                                <Link href="#" color="inherit" sx={{ 
                                    opacity: 0.6,
                                    fontSize: '0.875rem',
                                    '&:hover': { opacity: 1 }
                                }}>
                                    Evästekäytäntö
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Form Dialog */}
            <Dialog 
                open={openForm} 
                onClose={() => !loading && setOpenForm(false)} 
                maxWidth="md" 
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3
                    }
                }}
            >
                <DialogTitle sx={{ 
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 3
                }}>
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                    }}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 900 }}>
                                Työhakemus
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Täytä hakemuslomake ja aloita uusi ura
                            </Typography>
                        </Box>
                        <IconButton 
                            onClick={() => !loading && setOpenForm(false)} 
                            sx={{ color: 'white' }} 
                            disabled={loading}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                
                <DialogContent sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    required 
                                    label="Koko Nimi" 
                                    name="fullName" 
                                    value={formData.fullName} 
                                    onChange={handleFormChange} 
                                    disabled={loading}
                                    size="medium"
                                />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    required 
                                    label="Sähköpostiosoite" 
                                    name="email" 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={handleFormChange} 
                                    disabled={loading}
                                    size="medium"
                                />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    required 
                                    label="Puhelinnumero" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleFormChange} 
                                    disabled={loading}
                                    size="medium"
                                />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    required 
                                    label="Kansalaisuus" 
                                    name="nationality" 
                                    value={formData.nationality} 
                                    onChange={handleFormChange} 
                                    disabled={loading}
                                    size="medium"
                                />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Haettu Tehtävä</InputLabel>
                                    <Select 
                                        name="position" 
                                        value={formData.position} 
                                        onChange={handleFormChange} 
                                        label="Haettu Tehtävä" 
                                        disabled={loading}
                                    >
                                        <MenuItem value="warehouse">Varastotyöntekijä</MenuItem>
                                        <MenuItem value="production">Tuotantoavustaja</MenuItem>
                                        <MenuItem value="agriculture">Maataloustyöntekijä</MenuItem>
                                        <MenuItem value="hospitality">Hotelli- ja ravintolahenkilöstö</MenuItem>
                                        <MenuItem value="driver">Kuljettaja</MenuItem>
                                        <MenuItem value="caretaker">Hoitaja / Caretaker</MenuItem>
                                        <MenuItem value="other">Muu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Kokemustaso</InputLabel>
                                    <Select 
                                        name="experience" 
                                        value={formData.experience} 
                                        onChange={handleFormChange} 
                                        label="Kokemustaso" 
                                        disabled={loading}
                                    >
                                        <MenuItem value="none">Ei kokemusta</MenuItem>
                                        <MenuItem value="less1">Alle 1 vuosi</MenuItem>
                                        <MenuItem value="1-3">1-3 vuotta</MenuItem>
                                        <MenuItem value="3-5">3-5 vuotta</MenuItem>
                                        <MenuItem value="5+">5+ vuotta</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    multiline 
                                    rows={4} 
                                    label="Lisätietoja / Viesti" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleFormChange} 
                                    disabled={loading}
                                    size="medium"
                                    helperText="Kerro lyhyesti taustastasi ja kiinnostuksistasi"
                                />
                            </Grid>
                        </Grid>
                        
                        <DialogActions sx={{ mt: 4, px: 0 }}>
                            <Button 
                                onClick={() => setOpenForm(false)} 
                                disabled={loading}
                                sx={{ 
                                    fontWeight: 600,
                                    px: 4
                                }}
                            >
                                Peruuta
                            </Button>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                disabled={loading} 
                                sx={{ 
                                    bgcolor: 'primary.main',
                                    fontWeight: 700,
                                    px: 5,
                                    '&:hover': { bgcolor: 'primary.dark' }
                                }}
                            >
                                {loading ? (
                                    <>
                                        <Box sx={{ 
                                            display: 'inline-block',
                                            animation: 'spin 1s linear infinite',
                                            mr: 1
                                        }}>
                                            ⟳
                                        </Box>
                                        Lähetetään...
                                    </>
                                ) : (
                                    <>
                                        <Send sx={{ mr: 1 }} />
                                        Lähetä Hakemus
                                    </>
                                )}
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Success Alert */}
            <Snackbar 
                open={openSuccess} 
                autoHideDuration={6000} 
                onClose={() => setOpenSuccess(false)} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={() => setOpenSuccess(false)} 
                    severity="success" 
                    variant="filled" 
                    sx={{ 
                        width: '100%',
                        borderRadius: 2,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ mr: 2, fontSize: 32 }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                Hakemus lähetetty onnistuneesti!
                            </Typography>
                            <Typography variant="body2">
                                Rekrytointitiimimme ottaa sinuun yhteyttä 24 tunnin sisällä.
                            </Typography>
                        </Box>
                    </Box>
                </Alert>
            </Snackbar>

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(-10px); }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </Box>
    );
};

export default Home;
