import React from "react"
import '../styling/style.css'
import Button from '@material-ui/core/Button'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange,green} from '@material-ui/core/colors'
import Typography from "@material-ui/core/Typography"
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Startimage from '../images/vinegar_taste.jpg'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Menke from '../images/menke.jpg';
import LaoziImage from '../images/laozi.png';
import Kongzi from '../images/kongzi.jpg'
import Chad from '../images/chad1.jpg'


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
 function countUnique(iterable) {
    return new Set(iterable).size;
  }
  




export default function End(){
    var scores = localStorage.getItem("sageScore")
    const classes = useStyles();
    var scoreMencius = countUnique(JSON.parse(scores)['Mencius']);
    var scoreLaozi = countUnique(JSON.parse(scores)['Laozi']);
    var scoreMandL = countUnique(JSON.parse(scores)['MenciusAndLaozi']);
    var scoreKongzi = countUnique(JSON.parse(scores)['Confucius']);
    var non_sage = countUnique(JSON.parse(scores)['non_sage']);
    var maxScore = scoreLaozi+scoreMencius+non_sage+scoreKongzi+scoreMandL
    var totalScore = (maxScore-non_sage)/(maxScore)
    var laoziQuestions = 12
    var menkeQuestions = 13
    return(

        <Grid container component="main" className={classes.root}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid xs={false} sm={4} md={7} xl={8} item className={classes.image}/>
            <Grid xs={12} sm={8} md={5} xl={4} item component={Paper} elevation={6} square >
                <div className={classes.Paper} alignItems='center' >
                    <Grid container justify = "center" direction='column' style={{minHeight:"80vh"}}>

                        <Typography component="h1" variant="h3" align='center' fullWidth >
                        Total Score: {maxScore-non_sage}/{maxScore}
                        </Typography>
                        <Typography component="h2" variant="h4" align='center' fullWidth >
                        {(totalScore>=1)?'You are a true sage.':''}
                        {(totalScore>=0.8 && totalScore<1) ?'You are sage.':''}
                        {(totalScore>=0.7 && totalScore<0.8) ? 'You are almost a sage.':''}
                        {(totalScore>=0.5 && totalScore<0.7) ? 'You are sage-like.':''}
                        {(totalScore<0.5) ? 'You are not a sage, Try Again?':''}
                        </Typography>
                        <Grid item className={classes.Laozi} direction='column' style={{minHeight:"3vh"}}>

                        </Grid>
                        <Container className={classes.cardGrid} maxWidth="md">
                        
                                
                        <Grid container spacing={2}>
                        
                            <Grid item xs={12} sm={12} md={12}>
                                
                                <Card >
                                <CardContent >
                                <img src={LaoziImage} alt="" class='media'/>
                                    <Typography component="h2" variant="h4" align="center" color="textPrimary" >
                                        Laozi Score: {scoreLaozi+scoreMandL}/{laoziQuestions}
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={12}>
                                
                                <Card >
                                <CardContent >
                                <img src={Menke} alt="" class='media'/>
                                    <Typography component="h2" variant="h4" align="center" color="textPrimary" >
                                        Mencius Score: {scoreMencius+scoreMandL}/{menkeQuestions}
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>

                            {(scoreKongzi>=2)?
                              <Grid item xs={12} sm={12} md={12}>  
                                <Card >
                                <CardContent >
                                  <img src={Kongzi} alt="" class='media'/>
                                    <Typography component="h2" variant="h4" align="center" color="textPrimary" >
                                        You found the both Confucian Answers!!
                                    </Typography>
                                    
                                </CardContent>
                                </Card>
                                 
                            </Grid>:''}

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