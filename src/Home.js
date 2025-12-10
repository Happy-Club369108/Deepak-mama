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
    SupervisorAccount, Engineering, Person, Close, Send, Check
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
        title: 'Warehouse Workers',
        desc: 'Handle receiving, storing, and dispatching goods in logistics & distribution centers.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Factory />,
        title: 'Packaging & Sorting Staff',
        desc: 'Assist in packaging products, sorting items, and maintaining production line efficiency.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Factory />,
        title: 'Production Assistants',
        desc: 'Support manufacturing processes, assembly tasks, and quality checks.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Agriculture />,
        title: 'Agriculture & Farm Workers',
        desc: 'Perform seasonal farm work including planting, harvesting, and general farm maintenance.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <CleaningServices />,
        title: 'Cleaners & Helpers',
        desc: 'Responsible for commercial and residential cleaning, maintaining hygiene standards.',
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Work />,
        title: 'General Labor',
        desc: 'Engage in construction, manual labor, and other physically demanding tasks.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80'
    },
];

const skilledJobs = [
    {
        icon: <Restaurant />,
        title: 'Hospitality Staff',
        desc: 'Work in hotels and restaurants as waiters, chefs, baristas, or support staff.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Engineering />,
        title: 'Production Operators',
        desc: 'Operate machinery, monitor production lines, and ensure quality standards.',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <LocalShipping />,
        title: 'Forklift Operators',
        desc: 'Handle warehouse equipment, transport goods safely, and maintain inventory flow.',
        image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <Build />,
        title: 'Technicians',
        desc: 'Perform maintenance, repair, and troubleshooting of equipment or systems.',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <SupervisorAccount />,
        title: 'Logistic Supervisors',
        desc: 'Manage warehouse teams, coordinate logistics, and ensure timely deliveries.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80'
    },
    {
        icon: <DirectionsCar />,
        title: 'Drivers (Light & Heavy)',
        desc: 'Responsible for transporting goods safely, handling deliveries, and route management.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80'
    },
];

    const benefits = [
        { icon: <Security />, title: 'Germany-based Company', desc: 'EU-standard processes' },
        { icon: <CheckCircle />, title: 'Legal & Ethical', desc: 'Compliant recruitment' },
        { icon: <Schedule />, title: 'Fast Placement', desc: 'Quick onboarding' },
        { icon: <Assignment />, title: 'Visa Support', desc: 'Documentation assistance' },
        { icon: <SupportAgent />, title: '24/7 Support', desc: 'Dedicated team' },
        { icon: <Translate />, title: 'Multilingual', desc: 'English, German, Polish support' },
    ];

    const stats = [
        { number: '500+', label: 'Companies Served', color: '#3b82f6' },
        { number: '10,000+', label: 'Workers Placed', color: '#10b981' },
        { number: '25+', label: 'Schengen Countries', color: '#f59e0b' },
        { number: '98%', label: 'Satisfaction Rate', color: '#ef4444' }
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
                    Apply Now
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
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>JWF Fulfilments</Typography>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>Your Trusted Workforce Partner in Europe</Typography>
                            </Box>
                        </Box>
                        <Button variant="contained" onClick={() => setOpenForm(true)} startIcon={<Person />} sx={{ bgcolor: '#10b981', fontWeight: 600 }}>
                            Apply Now
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero */}
            <Box sx={{
                position: 'relative',
                backgroundImage: 'url(https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&auto=format&fit=crop&q=80)',
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
                        JWF Fulfilments – Ihr verlässlicher Personaldienstleister in Europa
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        Connecting Skilled & Unskilled Workers Across the Schengen Region
                    </Typography>
                    <Button variant="contained" size="large" onClick={() => setOpenForm(true)} sx={{ bgcolor: '#f59e0b', color: '#1e293b', fontWeight: 700, px: 4 }}>
                        Apply for Jobs in Europe
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
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>Ready for Your European Career?</Typography>
                    <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>Apply now for exciting job opportunities across Europe!</Typography>
                    <Button variant="contained" size="large" onClick={() => setOpenForm(true)} sx={{ mt: 2, bgcolor: '#f59e0b', color: '#1e293b', fontWeight: 700 }}>
                        Apply Now - Free Registration
                    </Button>
                </Paper>

                {/* Jobs Section */}
                <Typography variant="h4" gutterBottom sx={{ color: '#1e293b', fontWeight: 900, mb: 4, textAlign: 'center' }}>Available Positions</Typography>

                <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700 }}>Unskilled & Semi-Skilled Jobs</Typography>
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {unskilledJobs.map((job, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700 }}>Skilled & Professional Jobs</Typography>
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
                        Why Choose JWF Fulfilments?
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
                                image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&auto=format&fit=crop&q=80"
                                alt="Germany Office"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, display: 'flex', alignItems: 'center' }}>
                                    <LocationOn sx={{ mr: 1, color: '#3b82f6' }} />
                                    Head Office - Germany
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2, color: '#64748b' }}>JWF Fulfilments GmbH</Typography>
                                <Typography sx={{ mb: 3 }}>
                                    Europaallee 8, 22850 Norderstedt<br />
                                    Schleswig-Holstein, Germany
                                </Typography>
                                <Stack spacing={2}>
                                    <Link href="mailto:info@jwffulfilments.com" sx={{ display: 'flex', alignItems: 'center', color: '#3b82f6', textDecoration: 'none' }}>
                                        <Email sx={{ mr: 1 }} /> info@jwffulfilments.com
                                    </Link>
                                    <Link href="tel:+4917615757253" sx={{ display: 'flex', alignItems: 'center', color: '#3b82f6', textDecoration: 'none' }}>
                                        <Phone sx={{ mr: 1 }} /> +49 176 15757253
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
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>Quick Apply Now</Typography>
                                <Typography sx={{ mb: 3 }}>Submit your details and our recruitment team will contact you within 24 hours.</Typography>
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
                                    Start Your Application
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
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>JWF Fulfilments</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>Workforce Solutions Europe</Typography>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                Connecting talent with opportunity across the Schengen region since 2015.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Contact</Typography>
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <WhatsApp sx={{ mr: 2, color: '#25d366' }} />
                                    <Typography>+49 176 15757253</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Email sx={{ mr: 2, color: '#3b82f6' }} />
                                    <Typography>info@jwffulfilments.com</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LocationOn sx={{ mr: 2, color: '#ef4444' }} />
                                    <Typography>Norderstedt, Germany</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Quick Links</Typography>
                            <Stack spacing={1}>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>For Employers</Link>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>For Job Seekers</Link>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Available Jobs</Link>
                                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }} onClick={() => setOpenForm(true)}>Apply Now</Link>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
                        © {new Date().getFullYear()} JWF Fulfilments GmbH. All rights reserved. | Germany-based Recruitment Agency
                    </Typography>
                </Paper>
            </Container>

            {/* Form Dialog */}
            <Dialog open={openForm} onClose={() => !loading && setOpenForm(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ bgcolor: '#1e40af', color: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Job Application Form</Typography>
                        <IconButton onClick={() => !loading && setOpenForm(false)} sx={{ color: 'white' }} disabled={loading}>
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ p: 3 }}>
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px', marginBottom: '20px' }}>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Full Name" name="fullName" value={formData.fullName} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Email Address" name="email" type="email" value={formData.email} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Phone Number" name="phone" value={formData.phone} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Desired Position</InputLabel>
                                    <Select name="position" value={formData.position} onChange={handleFormChange} label="Desired Position" disabled={loading}>
                                        <MenuItem value="warehouse">Warehouse Worker</MenuItem>
                                        <MenuItem value="production">Production Assistant</MenuItem>
                                        <MenuItem value="agriculture">Agriculture Worker</MenuItem>
                                        <MenuItem value="hospitality">Hospitality Staff</MenuItem>
                                        <MenuItem value="driver">Driver</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Experience Level</InputLabel>
                                    <Select name="experience" value={formData.experience} onChange={handleFormChange} label="Experience Level" disabled={loading}>
                                        <MenuItem value="none">No Experience</MenuItem>
                                        <MenuItem value="less1">Less than 1 year</MenuItem>
                                        <MenuItem value="1-3">1-3 years</MenuItem>
                                        <MenuItem value="3-5">3-5 years</MenuItem>
                                        <MenuItem value="5+">5+ years</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth required label="Nationality" name="nationality" value={formData.nationality} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows={3} label="Additional Information / Message" name="message" value={formData.message} onChange={handleFormChange} disabled={loading} />
                            </Grid>
                        </Grid>
                        <DialogActions sx={{ mt: 3, px: 0 }}>
                            <Button onClick={() => setOpenForm(false)} disabled={loading}>Cancel</Button>
                            <Button type="submit" variant="contained" disabled={loading} sx={{ bgcolor: '#10b981' }}>
                                {loading ? 'Submitting...' : 'Submit Application'}
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Success Alert */}
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={() => setOpenSuccess(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setOpenSuccess(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Application Submitted Successfully!</Typography>
                    <Typography>Our recruitment team will contact you within 24 hours.</Typography>
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Home;