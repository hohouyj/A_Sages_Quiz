import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {updateSageScore , decideContent} from '../services/logic'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import green from '@material-ui/core/colors/green'
import {Link} from "react-router-dom"

const theme = createMuiTheme({
    palette:{
        primary:{
            main: orange[500],
        },
        secondary:{
            main: green[500],
        }
    }
})


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 3),
    flexGrow: 1,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    flexDirection: 'row'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: orange[500],
    color: 'white'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },    
  image: {
    backgroundImage: '../public/images/horsey.png',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function Question({match}) {
   
    let [ senario, senarioNo, optionsArray ] = [...decideContent()];
    var senariosTracker = localStorage.getItem("senarios")
    console.log(optionsArray);
    const classes = useStyles();
    var displaySenarioNo = new Set(JSON.parse(senariosTracker).completedSenarios).size
    return(

        <React.Fragment>
            <ThemeProvider theme={theme}>
            
                    <AppBar position="relative">
                        <Typography variant="h6" color="inherit" noWrap>
                        Scenario {displaySenarioNo}
                        </Typography>
                    </AppBar>
                    <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Scenario {displaySenarioNo}
                        </Typography>
                        <Typography variant="h5" align="Left" color="textSecondary" paragraph>
                        {senario.split("##").map((item, key) => {return(
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
                    { optionsArray.map((item, key) => {return(
                                <Grid item key={key} xs={12} sm={6} md={6}>

                                <Link to={{ pathname: '/explanation',
                                state: {
                                    "optionExplanation": item.optionExplanation,
                                    "senarioNo":displaySenarioNo,
                                    "optionSage":item.optionSage,
                                    "optionQuote": item.optionQuote,
                                    "optionText": item.optionText}}} onClick={()=> updateSageScore(item.optionSage,senarioNo)}
                                    style={{ textDecoration: 'none' }}>
                                    
                                    <Card className={classes.card} >
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Option {key+1}
                                        </Typography>
                                        <Typography>
                                        {item.optionText}
                                        </Typography>
                                    </CardContent>
                                    </Card>
                                </Link>
                                </Grid>
                     
                            )})}
                        
                    </Grid>
                    </Container>
                    
                    </main>
            </ThemeProvider>
        
        </React.Fragment>
    )

}