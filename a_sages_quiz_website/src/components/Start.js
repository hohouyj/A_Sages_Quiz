import React,{useEffect} from "react"
import {Link} from "react-router-dom"
import senarios from "../data/Senarios.json"
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
    introText:{
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2, 2, 2),
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

export default function Start(){
    const classes = useStyles();
    useEffect(()=>{
        localStorage.setItem('sageScore', JSON.stringify({
            "non_sage":[],
            "Mencius":[],
            "Laozi" :[]
        }));
        localStorage.setItem('senarios', JSON.stringify({
            "currSenarioNo":1,
            "totalSenarios":Object.keys(senarios).length-1
        }));
    },[]);/*empty array to call use effect function only once*/
    return(
        <Grid container component="main" className={classes.root}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid xs={false} sm={6} md={9} xl={10} item className={classes.image}/>
            <Grid xs={12} sm={6} md={3} xl={2} item component={Paper} elevation={6} square >
                <div className={classes.Paper} alignItems='center' >
                    <Grid container justify = "center" direction='column' style={{minHeight:"80vh"}}>

                        <Typography component="h1" variant="h3" align='center' fullWidth >
                        How Sagely Are You?
                        </Typography>

                        <Grid item direction='column' style={{minHeight:"3vh"}}>
                        </Grid>
                        <Typography className={classes.introText} component="h2" variant="h6" align='center' >
                        In the annals of time many Sages have walked this world.
                        <br/>
                        <br/>
                        Each civilization has had its fair share of Sages who spread their teachings far and wide, and consequently left their mark on history itself.
                        <br/>
                        <br/>
                        With the dilution of their influence until the modern day, the marks they left behind are nevertheless still present, fragmented though they may be. So how similar to a Sage are you? Come try out this quiz and discover for yourself how sagely you are!
                        </Typography>
                        <Grid item direction='column' style={{minHeight:"3vh"}}>
                        </Grid>
                        <Button href="/senario/1" variant="contained" color="primary" size="large"  > 
                        Start Quiz
                        </Button>
                    </Grid>
                </div>
            </Grid>
            </ThemeProvider>
        </Grid>
    )

}
