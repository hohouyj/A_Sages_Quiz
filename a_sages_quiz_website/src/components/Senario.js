import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {updateSageScore , decideContent} from '../services/logic'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
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
    padding: theme.spacing(8, 0, 6),
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

    let [ senario, senarioNo, optionsArray ] = [...decideContent(match.params.id)];
    console.log(optionsArray);

    const classes = useStyles();
    return(

        <React.Fragment>
            <ThemeProvider theme={theme}>
                
                    <AppBar position="relative">
                        <Typography variant="h6" color="inherit" noWrap>
                        Scenario {senarioNo}
                        </Typography>
                    </AppBar>
                    <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Scenario {senarioNo}
                        </Typography>
                        <Typography variant="h5" align="Left" color="textSecondary" paragraph>
                        {senario}
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
                                    "senarioNo":senarioNo,
                                    "optionSage":item.optionSage,
                                    "optionQuote": item.optionQuote,
                                    "optionText": item.optionText}}} onClick={()=> updateSageScore(item.optionSage,senarioNo)}>
                                    
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