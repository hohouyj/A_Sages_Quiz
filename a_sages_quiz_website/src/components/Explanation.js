import React from "react"
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange,green} from '@material-ui/core/colors'
import Typography from "@material-ui/core/Typography"
import 'fontsource-roboto'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from'@material-ui/core/AppBar'
import '../styling/style.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Image from '../images/horsey.PNG';
import StartImage from '../images/vinegar_taste.jpg';
import Menke from '../images/menke.jpg';
import LaoziImage from '../images/laozi.png';
import Kongzi from '../images/kongzi.jpg'
import Chad from '../images/chad1.jpg'


export const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 3),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        flexDirection: 'row',
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: orange[500],
        color: 'white'
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
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
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
    mybutton:{
        background:'#fff',
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
    appbar: theme.mixins.toolbar,
    menciusImage:{
      backgroundImage: `url(${Menke})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    laoziImage:{
      backgroundImage: `url(${LaoziImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    confuciusImage:{
      backgroundImage: `url(${Kongzi})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

}));

export const theme = createMuiTheme({

    palette:{
        primary:{
            main: orange[500],
        },
        secondary:{
            main: green[500],
        }
    }
})

export default function Explanation(option){
    var scores = localStorage.getItem("sageScore")
    var senariosTracker = localStorage.getItem("senarios")
    var currSenarioNo = parseInt(option.location.state.senarioNo)
    var totalSenarios = parseInt(JSON.parse(senariosTracker).totalSenarios)
    var sageName = option.location.state.optionSage
    var completedSenariosNo = parseInt( new Set(JSON.parse(senariosTracker).completedSenarios).size)

    const classes = useStyles();
      return(
          <React.Fragment >
          <ThemeProvider theme={theme}>
                  <AppBar position="relative">
                      <Typography variant="h6" color="inherit" noWrap>
                      Scenario {currSenarioNo}
                      </Typography>
                  </AppBar>
                  <main>
                  {/* Hero unit */}
                  <div className={classes.heroContent}>
                  <Container maxWidth="md" alignItems="center">
                      <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                      {(sageName==='non_sage')?'Not Sagely':''}
                      {(sageName==='MenciusAndLaozi')?"The Sages Embodied: Mencius and Laozi":''}
                      {(sageName!=='non_sage'&&sageName!=='MenciusAndLaozi')?'The Sage Embodied: '+option.location.state.optionSage:''}
                      </Typography>
                   

                      <Grid container spacing={2} justify='center'>
                      <Grid item sm={false} md={6} xl={4}>
                      {(sageName==='Laozi')?<img src={LaoziImage} alt="noImage" class='media'/>:''}
                      {(sageName==='Mencius')?<img src={Menke} alt="noImage" class='media'/>:''}
                      {(sageName==='Confucius')?<img src={Kongzi} alt="noImage" class='media'/>:''}
                      {(sageName==='MenciusAndLaozi')?<><img src={Menke} alt="noImage" class="media"/><img src={LaoziImage} alt="noImage" class="media"/></>:''}
                      {(sageName==='non_sage')?<img src={Chad} alt="noImage" class='media'/>:''}
                      </Grid>
                      {(option.location.state.optionQuote==='')? '':
                              <Grid item sm={12} md={6} xl={8}>
                              <Typography maxWidth="sm" variant="h5" align="Left" color="textSecondary" paragraph >
                              {/*(option.location.state.optionSage==='non_sage')?'': option.location.state.optionQuote*/}

                              { option.location.state.optionQuote.split("##").map((item, key) => {
                                
                                if (item===''){
                                  return'testtest'
                                }
                                else{
                                return(<>{item}<br></br></>)
                                }
                                
                                })}

                              </Typography>
                              </Grid>}
                              
                      </Grid>
                  </Container>
                  </div>
                  
                  {/* End hero unit */}
                  <Container className={classes.cardGrid} maxWidth="md"> 
                  <Grid container spacing={2} justify='center'>
                  
                      <Grid item xs={9} sm={9} md={9} align='center'>

                      <Link to={{pathname: (completedSenariosNo>=totalSenarios) ? '/end':("/senario/"+currSenarioNo)}} style={{ textDecoration: 'none' }}>
                          
                          <Card className={classes.card}>
                          <CardContent >
                              <Typography variant="h5" component="h2">
                              {option.location.state.optionExplanation} 
                              </Typography>
                          </CardContent>
                          </Card>
                      </Link>
                      </Grid>
                      
                    </Grid>
                    </Container>
                  
                  </main>
          </ThemeProvider>
      
      </React.Fragment>
      )
    }
