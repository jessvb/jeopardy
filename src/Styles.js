function styles(theme) {
    return ({
        root: {
            flexGrow: 1,
            backgroundColor: 'white',
        },
        card: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(2),
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