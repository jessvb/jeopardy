function styles(theme) {
    return ({
        root: {
            flexGrow: 1,
            backgroundColor: 'white',
        },
        titleCardZone: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontSize: '7vh',

            // grid layout:
            display: 'grid',
            gridGap: theme.spacing(3),
            gridTemplateRow: '1fr 10fr',
            justifyItems: 'center',
            paddingTop: '1vh',
            paddingBottom: '5vh',
        },
        qaCard: {
            width: '50vw',
            minHeight: '50vh',
            paddingTop: '5vh',
            paddingBottom: '5vh',
            paddingLeft: '10vw',
            paddingRight: '10vw',
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontSize: '7vh',

            // grid layout:
            display: 'grid',
            gridGap: theme.spacing(3),
            gridTemplateRows: '4fr 1fr',
        },
        btnZone: {
            // grid layout:
            display: 'grid',
            gridGap: theme.spacing(3),
            gridTemplateColumns: '1fr 1fr'
        },
        verticalCenter: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        pointsCard: {
            padding: theme.spacing(1),
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(2),
            fontSize: 28,
        },
        card0: {
            backgroundColor: '#ffe3e4',
        },
        card1: {
            backgroundColor: '#fffae3',
        },
        card2: {
            backgroundColor: '#f0ffe3',
        },
        card3: {
            backgroundColor: '#dfffef',
        },
        card4: {
            backgroundColor: '#dffcff',
        },
        cardAns0: {
            backgroundColor: '#fff2f3',
        },
        cardAns1: {
            backgroundColor: '#fffdf2',
        },
        cardAns2: {
            backgroundColor: '#f5fdef',
        },
        cardAns3: {
            backgroundColor: '#edfef5',
        },
        cardAns4: {
            backgroundColor: '#eafafc',
        },
    });
}

export default styles;