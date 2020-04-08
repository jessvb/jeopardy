function styles(theme) {
    return ({
        root: {
            flexGrow: 1,
            backgroundColor: 'white',
        },
        boardZone: {
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontSize: '4vh',
            // grid layout:
            display: 'grid',
            gridGap: '2vh',
            gridTemplateRows: '10fr 1fr',
            justifyItems: 'center',
        },
        teamBoardZone: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontSize: '3vh',
            // grid layout:
            display: 'grid',
            gridGap: '20vw',
            gridTemplateColumns: '1fr 1fr',
            justifyItems: 'center',
        },
        titleCardZone: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontSize: '6vh',
            // grid layout:
            display: 'grid',
            gridGap: '2vh',
            gridTemplateRows: '1fr 10fr',
            justifyItems: 'center',
            paddingTop: '0vh',
            paddingBottom: '3vh',
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
            paddingTop: '4vh',
            paddingBottom: '4vh',
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: '1.5vh',
            marginRight: '1.5vh',
            marginLeft: '1.5vh',
            fontSize: '3vh',
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