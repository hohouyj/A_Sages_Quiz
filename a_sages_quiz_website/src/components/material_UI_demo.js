import Button from '@material-ui/core/Button'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange,green} from '@material-ui/core/colors'
import Typography from "@material-ui/core/Typography"
import 'fontsource-roboto'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from'@material-ui/core/AppBar'
import '../styling/style.css'
import Card from '@material-ui/core/Card'


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
        flexDirection: 'row'
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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

function ButtonStyled(){
    const classes = useStyles();
    return <Button className={classes.mybutton}>Test Styled Button</Button>
}

export default function Material_UI_start(){
    const classes = useStyles();
    return(

        <Grid container direction='column'>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <AppBar position="relative">
                        <Typography variant="h3" color="inherit" noWrap>
                            Senario 1
                        </Typography>
                    </AppBar>
                    <Grid item>
                        <Card>
                            Senario Text
                        </Card>
                    </Grid>
                    <Grid cotainer>


                    </Grid>
            </ThemeProvider>
        </Grid>
    )

}


