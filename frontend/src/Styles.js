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
            gridGap: '15vw',
            gridTemplateColumns: '1fr 1fr',
        },
        hintZone: {
            minHeight: '10vh',
            color: theme.palette.text.secondary,
            fontSize: '3vh',
            paddingTop: '1vh',
            paddingBottom: '2vh',
            // grid layout:
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gridGap: '1vh',
        },
        hintBtnZone: {
            fontSize: '2vh',
            marginLeft: '2vw',
            marginRight: '2vw',
            // grid layout:
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '2vw',
        },
        hintBtn: {
            backgroundColor: '#f5f5f5'
        },
        answerBtnZone: {
            fontSize: '4vh',
            color: theme.palette.text.primary,
        },
        goBackBtn: {
            width: '20vw',
            paddingTop: '1vh',
            paddingBottom: '1vh',
            paddingLeft: '2vw',
            paddingRight: '2vw',
        },
        goBackBtnZone: {
            fontSize: '4vh',
            color: theme.palette.text.primary,
            textAlign: 'center',
            // grid layout:
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        teamPtsBtnZone: {
            fontSize: '4vh',
            color: theme.palette.text.primary,
            // grid layout:
            display: 'grid',
            gridGap: '5vw',
            gridTemplateColumns: '1fr 1fr',
        },
        teamPtsBtn: {
            paddingTop: '2vh',
            paddingBottom: '2vh',
            paddingLeft: '2vw',
            paddingRight: '2vw',
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
        greyedOut: {
            backgroundColor: 'darkgrey',
        },
    });
}

export default styles;