import React from "react"
import {Link} from "react-router-dom"
import {changeSenarioNo} from "../services/logic"
import NextIcon from '@material-ui/icons/NavigateNext'
import Button from '@material-ui/core/Button'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange,green} from '@material-ui/core/colors'
import Typography from "@material-ui/core/Typography"
import 'fontsource-roboto'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from'@material-ui/core/AppBar'
import '../styling/style.css'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import {updateSageScore , decideContent} from '../services/logic'
import Paper from '@material-ui/core/Paper'
import Image from '../images/horsey.PNG';
export const useStyles = makeStyles((theme) => ({
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
        //backgroundImage: `url(${Image})`,
        backgroundRepeat: 'repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
    var nextSenarioNo = option.location.state.senarioNo + 1
    var scores = localStorage.getItem("sageScore")
    var senariosTracker = localStorage.getItem("senarios")
    var currSenarioNo = parseInt(JSON.parse(senariosTracker).currSenarioNo)
    var totalSenarios = parseInt(JSON.parse(senariosTracker).totalSenarios)
    
    const classes = useStyles();
    
    
    if (false){
        return(
            <div id = "container">

                <div id = "header">
                <h1>Senario {currSenarioNo}</h1>

                </div>
            
            <div id="content">
                <div id = "quote">
                <h2>{option.location.state.optionSage} Says</h2>
                <p>"{option.location.state.optionQuote}"</p>
                </div>


                <div id="explanation">
                    <h2>Explanation</h2>
                    <p>{option.location.state.optionExplanation}</p>
                </div>
            </div>
            <Link to={{pathname:"/end"}}>
            <div className="card" onClick={()=> changeSenarioNo(nextSenarioNo)}>
                Next
            </div>
            </Link>
            
           
            </div>
        )
    }else{
        return(
            <React.Fragment>
            <ThemeProvider theme={theme}>
                
                    <AppBar position="relative">
                        <Typography variant="h6" color="inherit" noWrap>
                        Scenario {currSenarioNo}
                        </Typography>
                    </AppBar>
                    <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                        {(option.location.state.optionSage==='non_sage')?'Not Sagely': 'The Sage Embodied: '+option.location.state.optionSage} 
                        </Typography>
                        <Typography variant="h5" align="Left" color="textSecondary" paragraph>
                        {/*(option.location.state.optionSage==='non_sage')?'': option.location.state.optionQuote*/}

                        { option.location.state.optionQuote.split("##").map((item, key) => {return(
                            <>
                            {item}
                            <br>
                            {}
                            </br>
                            </>
                            )})}



                        
                        </Typography>
                    </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                            
                    <Grid container spacing={2}>
                   
                        <Grid item xs={12} sm={12} md={12}>

                        <Link to={{pathname: (currSenarioNo>=totalSenarios) ? '/end':("/senario/"+nextSenarioNo)}} onClick={()=> changeSenarioNo(nextSenarioNo)} style={{ textDecoration: 'none' }}>
                            
                            <Card className={classes.card}>
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="h2">
                                {(option.location.state.optionSage==='non_sage')?'The option chosen was not sagely.': option.location.state.optionExplanation} 
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
}