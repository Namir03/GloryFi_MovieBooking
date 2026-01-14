import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
]

const pulpFictionCast = [
    { "name": "John Travolta", "profile_path": "/default_avatar.png" },
    { "name": "Samuel L. Jackson", "profile_path": "/default_avatar.png" },
    { "name": "Uma Thurman", "profile_path": "/default_avatar.png" },
    { "name": "Bruce Willis", "profile_path": "/default_avatar.png" },
    { "name": "Ving Rhames", "profile_path": "/default_avatar.png" },
    { "name": "Harvey Keitel", "profile_path": "/default_avatar.png" }
]

const whiplashCast = [
    { "name": "Miles Teller", "profile_path": "/default_avatar.png" },
    { "name": "J.K. Simmons", "profile_path": "/default_avatar.png" },
    { "name": "Paul Reiser", "profile_path": "/default_avatar.png" },
    { "name": "Melissa Benoist", "profile_path": "/default_avatar.png" },
    { "name": "Austin Stowell", "profile_path": "/default_avatar.png" }
]

const scarfaceCast = [
    { "name": "Al Pacino", "profile_path": "/default_avatar.png" },
    { "name": "Michelle Pfeiffer", "profile_path": "/default_avatar.png" },
    { "name": "Steven Bauer", "profile_path": "/default_avatar.png" },
    { "name": "Robert Loggia", "profile_path": "/default_avatar.png" },
    { "name": "Mary Elizabeth Mastrantonio", "profile_path": "/default_avatar.png" }
]

const inglouriousCast = [
    { "name": "Brad Pitt", "profile_path": "/default_avatar.png" },
    { "name": "Christoph Waltz", "profile_path": "/default_avatar.png" },
    { "name": "Mélanie Laurent", "profile_path": "/default_avatar.png" },
    { "name": "Eli Roth", "profile_path": "/default_avatar.png" },
    { "name": "Michael Fassbender", "profile_path": "/default_avatar.png" },
    { "name": "Diane Kruger", "profile_path": "/default_avatar.png" }
]

const dunkirkCast = [
    { "name": "Fionn Whitehead", "profile_path": "/default_avatar.png" },
    { "name": "Tom Hardy", "profile_path": "/default_avatar.png" },
    { "name": "Mark Rylance", "profile_path": "/default_avatar.png" },
    { "name": "Cillian Murphy", "profile_path": "/default_avatar.png" },
    { "name": "Harry Styles", "profile_path": "/default_avatar.png" }
]

const hatefulEightCast = [
    { "name": "Samuel L. Jackson", "profile_path": "/default_avatar.png" },
    { "name": "Kurt Russell", "profile_path": "/default_avatar.png" },
    { "name": "Jennifer Jason Leigh", "profile_path": "/default_avatar.png" },
    { "name": "Walton Goggins", "profile_path": "/default_avatar.png" },
    { "name": "Tim Roth", "profile_path": "/default_avatar.png" }
]

const tronLegacyCast = [
    { "name": "Jeff Bridges", "profile_path": "/default_avatar.png" },
    { "name": "Garrett Hedlund", "profile_path": "/default_avatar.png" },
    { "name": "Olivia Wilde", "profile_path": "/default_avatar.png" },
    { "name": "Bruce Boxleitner", "profile_path": "/default_avatar.png" },
    { "name": "Michael Sheen", "profile_path": "/default_avatar.png" }
]

export const dummyShowsData = [
    {
        "_id": "1",
        "id": 1,
        "title": "Pulp Fiction",
        "overview": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster_path": "/pulp_fiction.jpg",
        "backdrop_path": "/pulp_fiction.jpg",
        "genres": [
            { "id": 53, "name": "Thriller" },
            { "id": 80, "name": "Crime" }
        ],
        "casts": pulpFictionCast,
        "release_date": "1994-10-14",
        "original_language": "en",
        "tagline": "Just because you are a character doesn't mean you have character.",
        "vote_average": 8.5,
        "vote_count": 27000,
        "runtime": 154,
    },
    {
        "_id": "2",
        "id": 2,
        "title": "Whiplash",
        "overview": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        "poster_path": "/whiplash.jpg",
        "backdrop_path": "/whiplash.jpg",
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 10402, "name": "Music" }
        ],
        "casts": whiplashCast,
        "release_date": "2014-10-10",
        "original_language": "en",
        "tagline": "The road to greatness can take you to the edge.",
        "vote_average": 8.5,
        "vote_count": 14000,
        "runtime": 107,
    },
    {
        "_id": "3",
        "id": 3,
        "title": "Scarface",
        "overview": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        "poster_path": "/scarface.jpg",
        "backdrop_path": "/scarface.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Crime" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": scarfaceCast,
        "release_date": "1983-12-09",
        "original_language": "en",
        "tagline": "The World Is Yours.",
        "vote_average": 8.2,
        "vote_count": 11000,
        "runtime": 170,
    },
    {
        "_id": "4",
        "id": 4,
        "title": "Inglourious Basterds",
        "overview": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "poster_path": "/inglourious_basterds.jpg",
        "backdrop_path": "/inglourious_basterds.jpg",
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 28, "name": "Action" },
            { "id": 53, "name": "Thriller" },
            { "id": 10752, "name": "War" }
        ],
        "casts": inglouriousCast,
        "release_date": "2009-08-21",
        "original_language": "en",
        "tagline": "Once upon a time in Nazi occupied France...",
        "vote_average": 8.2,
        "vote_count": 21000,
        "runtime": 153,
    },
    {
        "_id": "107",
        "id": 107,
        "title": "Dunkirk",
        "overview": "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
        "poster_path": "/dunkirk_official.jpg",
        "backdrop_path": "/dunkirk_official.jpg",
        "genres": [
            { "id": 10752, "name": "War" },
            { "id": 28, "name": "Action" },
            { "id": 53, "name": "Thriller" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dunkirkCast,
        "release_date": "2017-07-19",
        "original_language": "en",
        "tagline": "When 400,000 men couldn't get home, home came for them.",
        "vote_average": 7.8,
        "vote_count": 17856,
        "runtime": 106,
    },
    {
        "_id": "273248",
        "id": 273248,
        "title": "The Hateful Eight",
        "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
        "poster_path": "/hateful_eight_official.jpg",
        "backdrop_path": "/hateful_eight_official.jpg",
        "genres": [
            { "id": 80, "name": "Crime" },
            { "id": 18, "name": "Drama" },
            { "id": 9648, "name": "Mystery" },
            { "id": 37, "name": "Western" }
        ],
        "casts": hatefulEightCast,
        "release_date": "2015-12-25",
        "original_language": "en",
        "tagline": "No one comes up here without a damn good reason.",
        "vote_average": 7.8,
        "vote_count": 12789,
        "runtime": 168,
    },
    {
        "_id": "20526",
        "id": 20526,
        "title": "Tron: Legacy",
        "overview": "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam embarks on a deadly journey to save his father and the digital world.",
        "poster_path": "/tron_legacy_official.jpg",
        "backdrop_path": "/tron_legacy_official.jpg",
        "genres": [
            { "id": 12, "name": "Adventure" },
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": tronLegacyCast,
        "release_date": "2010-12-10",
        "original_language": "en",
        "tagline": "The Game Has Changed.",
        "vote_average": 6.5,
        "vote_count": 8956,
        "runtime": 125,
    }
]

// Function to generate dynamic showtimes for the next 7 days
const generateShowtimes = () => {
    const showtimes = {};
    const now = new Date();

    for (let i = 0; i < 7; i++) {
        const date = new Date(now);
        date.setDate(now.getDate() + i);
        const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD

        // Create 4 standard time slots per day: 10AM, 1PM, 4PM, 7PM (UTC approx or just generic ISO)
        // Using mock ISO times
        showtimes[dateString] = [
            { "time": `${dateString}T10:00:00.000Z`, "showId": `show-${dateString}-1` },
            { "time": `${dateString}T13:00:00.000Z`, "showId": `show-${dateString}-2` },
            { "time": `${dateString}T16:00:00.000Z`, "showId": `show-${dateString}-3` },
            { "time": `${dateString}T19:00:00.000Z`, "showId": `show-${dateString}-4` }
        ];
    }
    return showtimes;
};

export const dummyDateTimeData = generateShowtimes();

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 0.5,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 0.5,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 0.5,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 0.5,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 0.5,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 0.5,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 0.5,
        },
        "amount": 1,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 0.5,
        },
        "amount": 0.5,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 0.5,
        },
        "amount": 1.5,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true,
    },
]

export const dummyTheatresData = [
    {
        "_id": "t1",
        "name": "TCL Chinese Theatre",
        "location": "Los Angeles, USA",
        "image": "/theatres/tcl.png",
        "description": "The world's most famous movie theatre, known for its Chinese architecture and the footprints of stars in its forecourt.",
        "capacity": 932,
        "features": ["IMAX", "Dolby Atmos", "Historic Landmark"]
    },
    {
        "_id": "t2",
        "name": "El Capitan Theatre",
        "location": "Los Angeles, USA",
        "image": "https://img.freepik.com/free-photo/hollywood-boulevard-la-usa_1409-5431.jpg",
        "description": "Disney's premier movie palace, beautifully restored and featuring live stage shows and world premieres.",
        "capacity": 1100,
        "features": ["Stage Shows", "Digital 3D", "Disney Premieres"]
    },
    {
        "_id": "t3",
        "name": "Radio City Music Hall",
        "location": "New York, USA",
        "image": "/theatres/radiocity.png",
        "description": "An iconic Art Deco theatre in Rockefeller Center, known as the 'Showplace of the Nation'.",
        "capacity": 5960,
        "features": ["Art Deco", "World Class Acoustics", "Landmark"]
    },
    {
        "_id": "t5",
        "name": "Le Grand Rex",
        "location": "Paris, France",
        "image": "https://img.freepik.com/free-photo/beautiful-view-eiffel-tower-sunset_268835-985.jpg",
        "description": "The largest cinema in Europe, famous for its magnificent atmospheric decor and grand premieres.",
        "capacity": 2800,
        "features": ["Art Deco", "Atmospheric Theatre", "Water Screen"]
    }
]