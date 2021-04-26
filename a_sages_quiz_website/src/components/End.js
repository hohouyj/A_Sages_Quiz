import React from "react"
import {Link} from "react-router-dom"
import '../styling/style.css'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import NextIcon from '@material-ui/icons/NavigateNext'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange,green} from '@material-ui/core/colors'
import Typography from "@material-ui/core/Typography"
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from'@material-ui/core/AppBar'
import Toolbar from'@material-ui/core/Toolbar'
import IconButton from'@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'
import Startimage from '../images/vinegar_taste.jpg'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'



const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${Startimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fe6b8b',
      justifyContent:"center"
    },
    marginAutoContainer: {
        width: 500,
        height: 80,
        display: 'flex',
        backgroundColor: 'gold',
    },
    marginAutoItem: {
    margin: 'auto'
    },
    alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    },    
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        flexDirection: 'row',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent'
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },

    appbar: theme.mixins.toolbar,
    Laozi:{

    }
}));

const theme = createMuiTheme({
    typography:{
        h2:{
            fontSize: 18,
        }
    },
    palette:{
        primary:{
            main: orange[500],
        },
        secondary:{
            main: green[500],
        }
    }
})
/**
 * ToDo add a way to show the scores from the non_sage:[] to a number/number
 * retrive all senarios and options for each sage in a summary
 */





export default function End(){
    var scores = localStorage.getItem("sageScore")
    const classes = useStyles();
    var scoreMencius = JSON.parse(scores)['Mencius'].length;
    var scoreLaozi = JSON.parse(scores)['Laozi'].length;
    var non_sage = JSON.parse(scores)['non_sage'].length;
    return(

        <Grid container component="main" className={classes.root}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid xs={false} sm={4} md={7} xl={8} item className={classes.image}/>
            <Grid xs={12} sm={8} md={5} xl={4} item component={Paper} elevation={6} square >
                <div className={classes.Paper} alignItems='center' >
                    <Grid container justify = "center" direction='column' style={{minHeight:"80vh"}}>

                        <Typography component="h1" variant="h3" align='center' fullWidth >
                        Total Score: {scoreLaozi+scoreMencius}/{scoreLaozi+scoreMencius+non_sage}
                        </Typography>

                        <Grid item className={classes.Laozi} direction='column' style={{minHeight:"3vh"}}>
                            <Card className={classes.Card}>
                            poggers {scoreLaozi} {scoreMencius}
                            </Card>
                        </Grid>
                        <Container className={classes.cardGrid} maxWidth="md">
                        
                                
                        <Grid container spacing={2}>
                        
                            <Grid item xs={12} sm={12} md={12}>
                                
                                <Card >
                                <CardContent >
                                    <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                                        Laozi Score: {scoreLaozi}/{scoreLaozi+scoreMencius+non_sage}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Options Choosen:
                                        {}
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            
                        </Grid>
                        </Container>
                        <Button href="/" variant="contained" color="primary" size="large" fullWidth > 
                        Try Again
                        </Button>
                    </Grid>
                </div>
            </Grid>
            
            </ThemeProvider>
        </Grid>
    

    )
}