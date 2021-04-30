const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        display: 'flex',
        minHeight: '100%'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
    })},
    menuButton: {
        color: 'white',
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        width: drawerWidth,
    },
    drawerHeader: {
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    heading: {
        width: '100%',
        marginLeft: 'auto',
        textAlign: 'center',
        fontFamily: 'Lobster, cursive'
    },
    tabs: {
        marginLeft: '0'
    },
    list: {
        marginTop: '40%',
    },
    listItem: {
        color: 'black',
        fontWeight: 'bold'
    },
    icon: {
        color: 'black',
        fontSize: '30px'
    },
    content: {
        minHeight: '100vh',
        overflow: 'auto',
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    mainBoxDropDown: {
        marginTop: '100px',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
})

export default styles