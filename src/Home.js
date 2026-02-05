import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper,
  Divider,
  Stack,
  Link,
  IconButton,
  CardActions,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  CardMedia
} from '@mui/material';

import {
  Phone,
  Email,
  LocationOn,
  Work,
  CheckCircle,
  Business,
  WhatsApp,
  Security,
  Assignment,
  SupportAgent,
  Translate,
  Schedule,
  Factory,
  Warehouse,
  Agriculture,
  CleaningServices,
  Restaurant,
  LocalShipping,
  Build,
  DirectionsCar,
  SupervisorAccount,
  Engineering,
  Person,
  Close
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
      desc: 'Tavaran vastaanotto, varastointi ja lähetysten käsittely logistiikka- ja jakelukeskuksissa.',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <Factory />,
      title: 'Pakkaaja / lajittelija',
      desc: 'Tuotteiden pakkaus, artikkeleiden lajittelu ja tuotantolinjojen tehokkuuden ylläpitäminen.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <Factory />,
      title: 'Tuotantoapulainen',
      desc: 'Tuotantoprosessien avustaminen, kokoonpanotyöt ja laadunvalvonta.',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <Agriculture />,
      title: 'Maatalous- ja maatilatyöntekijä',
      desc: 'Kausityöt maatiloilla: istutus, sadonkorjuu ja yleinen maatilan ylläpito.',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <CleaningServices />,
      title: 'Siivooja / siivousapulainen',
      desc: 'Yritysten ja kotien siivous, hygienianormien noudattaminen.',
      image:
        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <Work />,
      title: 'Yleistyöntekijä / rakennustyöntekijä',
      desc: 'Rakennustyömaat, fyysinen työ ja erilaiset avustavat tehtävät.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <SupportAgent />,
      title: 'Hoitaja / lähihoitaja / caretaker',
      desc: 'Asiakkaiden avustaminen, perushoito ja tuki asumispalveluissa tai kotihoidossa.',
      image:
        'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const skilledJobs = [
    {
      icon: <Restaurant />,
      title: 'Ravintola- ja hotelli-alan työntekijä',
      desc: 'Tarjoilija, kokki, barista, siivooja tai muu ravintola/hotelli-työ.',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <Engineering />,
      title: 'Tuotantokoneen käyttäjä',
      desc: 'Koneiden käyttö, tuotantolinjojen valvonta ja laadunvarmistus.',
      image:
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <LocalShipping />,
      title: 'Trukkikuski / varastotrukkikuski',
      desc: 'Trukkien käyttö, turvallinen tavaransiirto ja varastoinnin sujuvuus.',
      image:
        'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <Build />,
      title: 'Kone- tai laitehuoltaja / teknikko',
      desc: 'Laitteiden huolto, korjaus ja vianetsintä.',
      image:
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <SupervisorAccount />,
      title: 'Logistiikkavastaava / vuoropäällikkö',
      desc: 'Varastotiimien johtaminen, logistiikan koordinointi ja toimitusten aikataulutus.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: <DirectionsCar />,
      title: 'Kuljettaja (kevyt / raskas)',
      desc: 'Tavarakuljetukset, jakelu ja reittien hallinta.',
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const benefits = [
    { icon: <Security />, title: 'Suomalainen yritys', desc: 'EU-tason prosessit' },
    { icon: <CheckCircle />, title: 'Laillinen & eettinen', desc: 'Säännösten mukainen rekrytointi' },
    { icon: <Schedule />, title: 'Nopea välitys', desc: 'Nopea aloitus töissä' },
    { icon: <Assignment />, title: 'Viisumituki', desc: 'Asiakirja-avustus' },
    { icon: <SupportAgent />, title: '24/7 tuki', desc: 'Sitoutunut tiimi' },
    { icon: <Translate />, title: 'Monikielinen', desc: 'Suomi, Englanti, Venäjä' }
  ];

  const stats = [
    { number: '500+', label: 'Asiakasyritystä', color: '#3b82f6' },
    { number: '10.000+', label: 'Välitettyä työntekijää', color: '#10b981' },
    { number: '25+', label: 'Schengen-maata', color: '#f59e0b' },
    { number: '98%', label: 'Tyytyväisyysaste', color: '#ef4444' }
  ];

  const JobCard = ({ job }) => (
    <Card
      sx={{
        width: 320,
        height: 430,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: '0.3s',
        '&:hover': { transform: 'translateY(-8px)' }
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
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {job.title}
          </Typography>
        </Box>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {job.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 3 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOpenForm(true)}
          sx={{ backgroundColor: '#3b82f6' }}
        >
          Hae nyt
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
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  JW Fulfilments OY
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  Luotettava henkilöstöpalveluyritys Suomessa ja Euroopassa
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={() => setOpenForm(true)}
              startIcon={<Person />}
              sx={{ bgcolor: '#10b981', fontWeight: 600 }}
            >
              Hae töitä
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage:
            'ur[](https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
            JW Fulfilments OY – Luotettava henkilöstöpalveluyritys
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Ammattitaitoisten ja aloittelijoiden työvoiman välitys Suomeen ja koko Schengen-alueelle
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setOpenForm(true)}
            sx={{ bgcolor: '#f59e0b', color: '#1e293b', fontWeight: 700, px: 4 }}
          >
            Hae töitä Suomesta ja Euroopasta
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {stats.map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2, height: '100%' }}>
                <Typography variant="h3" sx={{ color: stat.color, fontWeight: 800, mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Apply Banner */}
        <Paper
          sx={{
            p: 4,
            mb: 8,
            textAlign: 'center',
            bgcolor: '#1e40af',
            color: 'white',
            borderRadius: 2,
            backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Valmis uuteen työuraan Suomessa?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Hae nyt mielenkiintoisia työpaikkoja Suomesta ja Euroopasta!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setOpenForm(true)}
            sx={{ mt: 2, bgcolor: '#f59e0b', color: '#1e293b', fontWeight: 700 }}
          >
            Hae nyt – Ilmainen rekisteröinti
          </Button>
        </Paper>

        {/* Jobs Section */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: '#1e293b', fontWeight: 900, mb: 4, textAlign: 'center' }}
        >
          Avointa työpaikat juuri nyt
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700 }}>
          Työt ilman koulutusta / aloittelijoille
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {unskilledJobs.map((job, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700 }}>
          Ammattitaitoiset ja erikoistuneet tehtävät
        </Typography>
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
            boxShadow: 3
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 900,
              mb: 6,
              color: '#1e293b'
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
                      '& .MuiSvgIcon-root': { fontSize: 32, color: '#3b82f6' }
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

        {/* Contact Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&auto=format&fit=crop&q=80"
                alt="Toimisto"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 800, display: 'flex', alignItems: 'center' }}
                >
                  <LocationOn sx={{ mr: 1, color: '#3b82f6' }} />
                  Toimisto – Suomi
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, color: '#64748b' }}>
                  JW Fulfilments OY
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Kelhontie 254
                  <br />
                  37500 Lempäälä
                  <br />
                  Suomi
                </Typography>
                <Stack spacing={2}>
                  <Link
                    href="mailto:info@jwfulfilments.com"
                    sx={{ display: 'flex', alignItems: 'center', color: '#3b82f6', textDecoration: 'none' }}
                  >
                    <Email sx={{ mr: 1 }} /> info@jwfulfilments.com
                  </Link>
          
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                bgcolor: '#f0f9ff',
                backgroundImage:
                  'ur[](https://images.unsplash.com/photo-1551836026-d5c2c0b4d8e9?w=600&auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(240, 249, 255, 0.9)'
                }}
              />
              <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
                  Nopea hakemus
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Lähetä tietosi – rekrytointitiimimme ottaa sinuun yhteyttä 24 tunnin sisällä.
                </Typography>
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
                  Aloita hakemus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Paper sx={{ p: 4, bgcolor: '#1e293b', color: 'white', borderRadius: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Business sx={{ mr: 2, fontSize: 40, color: '#3b82f6' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    JW Fulfilments OY
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Henkilöstöratkaisut Suomessa ja Euroopassa
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Yhdistämme osaajat ja työpaikat vuodesta 2015 alkaen.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Yhteystiedot
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <WhatsApp sx={{ mr: 2, color: '#25d366' }} />
                  <Typography>+358 40 123 4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ mr: 2, color: '#3b82f6' }} />
                  <Typography>info@jwfulfilments.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ mr: 2, color: '#ef4444' }} />
                  <Typography>Lempäälä, Suomi</Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Pikalinkit
              </Typography>
              <Stack spacing={1}>
                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Yrityksille
                </Link>
                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Työnhakijoille
                </Link>
                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Avoimet työpaikat
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                  onClick={() => setOpenForm(true)}
                >
                  Hae nyt
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />

          <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} JW Fulfilments OY. Kaikki oikeudet pidätetään.
          </Typography>
        </Paper>
      </Container>

      {/* Application Form Dialog */}
      <Dialog open={openForm} onClose={() => !loading && setOpenForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1e40af', color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Työhakemus
            </Typography>
            <IconButton
              onClick={() => !loading && setOpenForm(false)}
              sx={{ color: 'white' }}
              disabled={loading}
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Koko nimi"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Sähköposti"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Puhelinnumero"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>Haettava tehtävä</InputLabel>
                  <Select
                    name="position"
                    value={formData.position}
                    onChange={handleFormChange}
                    label="Haettava tehtävä"
                    disabled={loading}
                  >
                    <MenuItem value="warehouse">Varastotyöntekijä</MenuItem>
                    <MenuItem value="production">Tuotantoapulainen</MenuItem>
                    <MenuItem value="agriculture">Maataloustyöntekijä</MenuItem>
                    <MenuItem value="cleaning">Siivooja</MenuItem>
                    <MenuItem value="caretaker">Hoitaja / lähihoitaja</MenuItem>
                    <MenuItem value="hospitality">Ravintola/hotelli</MenuItem>
                    <MenuItem value="driver">Kuljettaja</MenuItem>
                    <MenuItem value="other">Muu</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>Kokemus</InputLabel>
                  <Select
                    name="experience"
                    value={formData.experience}
                    onChange={handleFormChange}
                    label="Kokemus"
                    disabled={loading}
                  >
                    <MenuItem value="none">Ei kokemusta</MenuItem>
                    <MenuItem value="less1">Alle 1 vuosi</MenuItem>
                    <MenuItem value="1-3">1–3 vuotta</MenuItem>
                    <MenuItem value="3-5">3–5 vuotta</MenuItem>
                    <MenuItem value="5+">Yli 5 vuotta</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Kansalaisuus"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Lisätiedot / viesti"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </Grid>
            </Grid>

            <DialogActions sx={{ mt: 3, px: 0 }}>
              <Button onClick={() => setOpenForm(false)} disabled={loading}>
                Peruuta
              </Button>
              <Button type="submit" variant="contained" disabled={loading} sx={{ bgcolor: '#10b981' }}>
                {loading ? 'Lähetetään...' : 'Lähetä hakemus'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Message */}
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
          sx={{ width: '100%' }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Hakemus lähetetty onnistuneesti!
          </Typography>
          <Typography>Rekrytointitiimimme ottaa sinuun yhteyttä 24 tunnin sisällä.</Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
