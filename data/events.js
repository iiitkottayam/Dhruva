const events = [
    {
        id: 1,
        link: 'commit-the-flag',
        name: 'Commit The Flag',
        tag: 'Capture The Flag',
        description: `To create the best lock, know what breaks the good ones around.\n \nCompete for the final flag in a labyrinth of information with 6 rounds, ranging from simple ciphers to intricate reverse engineering puzzles.\nCan you or your team Capture the Flag?`,
        date: '30th October',
        time: '4:30pm - 8:30pm',
        organisers: [
            {
                key: '1',
                name: 'Gouri Nair',
                email: 'gourinair20bec7@iiitkottayam.ac.in',
                phoneNumber: '08606922585',
            },
            {
                key: '2',
                name: 'Seshathri S',
                email: 'seshathri2019@iiitkottayam.ac.in',
                phoneNumber: '9087609727',
            },
        ],
        poster: '/../public/Posters/CTF .png',
        registration: 'https://dare2compete.com',
    },
    {
        id: 2,
        link: 'breaking-bad',
        name: 'Breaking Bad',
        tag: 'A Deep Learning Approach',
        description:
            '“Shut the f— up and let me die in peace.”-Gus, Now that’s deep or is it umm....dark?\n \nShow off your Deep Learning skills by creating the most efficient model from the provided data set and problem statement while experiencing the dramatic, dark and action-packed storyline of breaking bad.',
        date: '30th October',
        time: '8:00 am',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/BB.jpg',
        registration: 'https://dare2compete.com',
    },
    {
        id: 1,
        link: 'codesprint',
        name: 'CodeSprint',
        tag: 'TLE Averted!',
        description:
            'If TLE is something that you don’t wish even for your worst enemies, this event is for you.\n Compete with the best programmers, solve problems and top the leaderboard! The huge prize pool and the dope goodies are just the cherries on top. \n May the best algorithm win!',
        date: '29th October',
        time: '6:00pm - 8:00pm',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/CP_Insta.jpg',
        registration: '',
    },
    {
        id: 1,
        link: 'console-log-replicate',
        name: 'console.log(“replicate”)',
        tag: 'Can you handle the SaSS?',
        description:
            'Are you even an engineer if you haven’t done some web dev?\nHere is a chance to implement all the Frontend facts you’ve learned so far.\nAll you’ve to do is replicate the given website. Let’s see how original your copy is!\nGet Set Develop',
        date: '29th October',
        time: '3:30pm - 5:00pm',
        organisers: [
            {
                key: '1',
                name: 'Shashank Srivastava',
                email: 'shashank.srivastava25sks@gmail.com',
                phoneNumber: '9793422020',
            },
            {
                key: '1',
                name: 'Sarthak Bindal',
                email: 'bindalsarthak03@gmail.com',
                phoneNumber: '7987957308',
            },
        ],
        poster: '/../public/Posters/WebDev.png',
        registration: '',
    },
    {
        id: 1,
        link: 'take-de-bait',
        name: 'Take De Bait!',
        tag: 'Convince! Rebut! Win!',
        description:
            'Do you have a knack in coming up with dope counter arguments? Are you a tech enthusiast looking for a place to talk about your standpoint? Can you convince your opponent that the best ideas lie with you?  Well, TAKE DE BAIT already!',
        date: '31st October',
        time: '9:00am - 11:00am',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/D1.jpg',
        registration: '',
    },
    {
        id: 1,
        link: 'brandaid',
        name: 'BrandAID',
        tag: 'Analyse, Ideate, Design!',
        description:
            'Ever seen a huge logo on a billboard and thought you could’ve done so much better?\nThis is your chance to redesign some of the infamous brand logos and their identity.\nAnalyse, Ideate, Design!',
        date: '30th October',
        time: '10:00am - 12:00am',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/Graphic Design.png',
        registration: '',
    },
    {
        id: 1,
        link: 'fantasy-crypto-league',
        name: 'Fantasy Crypto League',
        tag: 'Elon can do it, you musk too.',
        description:
            ' How accurately can you predict the troughs and crests of crypto stocks? \n\nTest your knowledge in this 3-day long mock investment contest. The rules are simple, the one with the most profit wins.',
        date: '28th October',
        time: '7:30pm ',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/crypto.png',
        registration: '',
    },
    {
        id: 1,
        link: 'retroopolis',
        name: 'Retroopolis',
        tag: 'From Retro to Life',
        description:
            "Consider yourself a pro gamer that likes to dabble in its making as well? Got some mad game development skills that you can't wait to exhibit? \n Well, Retroopolis is just the event for you! Build your own virtual world; \n Your World, Your Rules!",
        date: '29th October',
        time: '9:00am',
        organisers: [
            {
                key: '1',
                name: 'Sai Tejashwin',
                email: 'tejashwin2019@iiitkottayam.ac.in',
                phoneNumber: '8688179209',
            },
        ],
        poster: '/../public/Posters/GameDev.png',
        registration: '',
    },
    {
        id: 1,
        link: 'artemis',
        name: 'Project: Aятємis',
        tag: 'Be the next Hardy Boys!',
        description:
            "Do you have what it takes to be the next Hardy Boys?\n \nAn expedition that would give you an adrenaline rush like never before! Be the first team to solve mind-bending puzzles that's certain to exercise your grey matter and keep you on your toes.",
        date: '31st October',
        time: '7:00pm - 9:00pm',
        organisers: [
            {
                key: '1',
                name: 'Gouri Nair',
                email: 'gourinair20bec7@iiitkottayam.ac.in',
                phoneNumber: '08606922585',
            },
            {
                key: '2',
                name: 'Seshathri S',
                email: 'seshathri2019@iiitkottayam.ac.in',
                phoneNumber: '9087609727',
            },
        ],
        poster: '/../public/Posters/projectA.png',
        registration: '',
    },
    {
        id: 1,
        link: 'reverse-coding',
        name: 'Reverse Coding',
        tag: 'Who wants to code straight?',
        description:
            'To find order in chaos, is what life is all about. \n \nGiven a black box with certain inputs and their respective outputs, your task is to find how the black box works, and code.',
        date: '31st October',
        time: '2:30pm - 4:30pm',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/reverse.png',
        registration: '',
    },
    {
        id: 1,
        link: 'sold-it',
        name: 'Sold It!',
        tag: 'Clear the Pitch',
        description:
            'A wacky pitching competition that you would never see happening in a boardroom!\n \nUse the best of your wits to smooth-talk, persuade and entice us into buying bizarre and ridiculous ideas that would defy any rationale.',
        date: '29th October',
        time: '1:00pm - 3:00pm',
        organisers: [
            {
                key: '1',
                name: 'Beta Labs',
                email: 'techclub@iiitkottayam.ac.in',
                
            },
        ],
        poster: '/../public/Posters/SoldIT.png',
        registration: '',
    },
    {
        id: 1,
        link: 'rebibe-me-jett',
        name: 'Inter IIIT Valorant Tournament',
        tag: 'Rebibe Me Jett',
        description:
            'An exhilarating Valorant Tournament, with live commentary, a Huge Prize Pool, cool T-Shirts (real skins are important too), and an Adrenaline rush that you cannot afford to miss',
        date: 'Everyday',
        time: '9:30pm',
        organisers: [
            {
                key: '1',
                name: 'Lakshin Kumar R',
                email: 'lakshin2019@iiitkottayam.ac.in',
                phoneNumber: '9080385059',
            },
        ],
        poster: '/../public/Posters/Valorant.png',
        registration: '',
    },
]

export { events }
