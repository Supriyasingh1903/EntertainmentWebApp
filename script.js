document.addEventListener('DOMContentLoaded', function() {
    // Enhanced data with original movie images and more details
    const mediaData = [
        // Trending Movies
        {
            id: 1,
            title: "Dune: Part Two",
            year: "2024",
            category: "Movie",
            rating: "PG-13",
            isTrending: true,
            isPopular: true,
            isNewRelease: true,
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZTMxY2EwNTktZGE1YS00YjRmLWE5NDAtODhiZTM4YzFiMTFkXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
            overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
            duration: "2h 46m",
            cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
            genre: ["Sci-Fi", "Adventure"]
        },
        {
            id: 2,
            title: "The Batman",
            year: "2022",
            category: "Movie",
            rating: "PG-13",
            isTrending: true,
            isPopular: true,
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZmY2MzZmYtNTE0ZC00YzU3LWI0YzMtOGY0YThlY2U5YzFkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            overview: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.",
            duration: "2h 56m",
            cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
            genre: ["Action", "Crime", "Drama"]
        },
        
        // Popular Movies
        {
            id: 3,
            title: "Oppenheimer",
            year: "2023",
            category: "Movie",
            rating: "R",
            isPopular: true,
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BOGNmZjg1NWItZTQzOS00MDQ0LTk4ZDYtYzllYjU1ZmU5YzI3XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
            overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            duration: "3h",
            cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
            genre: ["Biography", "Drama", "History"]
        },
        {
            id: 4,
            title: "Avatar: The Way of Water",
            year: "2022",
            category: "Movie",
            rating: "PG-13",
            isPopular: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
            overview: "Jake Sully lives with his newfound family formed on the planet of Pandora.",
            duration: "3h 12m",
            cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
            genre: ["Sci-Fi", "Adventure", "Action"]
        },
        
        // New Releases
        {
            id: 5,
            title: "Killers of the Flower Moon",
            year: "2023",
            category: "Movie",
            rating: "R",
            isNewRelease: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BOTBjMjhkZGMtYzVkYi00N2Y5LWE5MjktODJhN2I0YjU5YTZkXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
            overview: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one.",
            duration: "3h 26m",
            cast: ["Leonardo DiCaprio", "Robert De Niro", "Lily Gladstone"],
            genre: ["Crime", "Drama", "History"]
        },
        {
            id: 6,
            title: "Poor Things",
            year: "2023",
            category: "Movie",
            rating: "R",
            isNewRelease: true,
            isTopRated: true,
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRR9VTL2TbIYnKIDmiO8dG4k-oGejOS8_XM7wiLxz4wxkZC1HmD&psig=AOvVaw1sh4DqThzX-7PP7F7OV7Oq&ust=1752729970342000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJj1kIrSwI4DFQAAAAAdAAAAABAE",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZDhkN2U0Y2MtZDI0Ny00ZDA1LTgxMDAtMjFiY2JkYzNlMGVkXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
            overview: "The incredible tale of the fantastical evolution of Bella Baxter, a young woman brought back to life.",
            duration: "2h 21m",
            cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
            genre: ["Comedy", "Drama", "Romance"]
        },
        
        // Top Rated
        {
            id: 7,
            title: "The Shawshank Redemption",
            year: "1994",
            category: "Movie",
            rating: "R",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
            overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            duration: "2h 22m",
            cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            genre: ["Drama"]
        },
        {
            id: 8,
            title: "The Godfather",
            year: "1972",
            category: "Movie",
            rating: "R",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMTUwNjIyNjE3N15BMl5BanBnXkFtZTcwODc1MDY2NQ@@._V1_.jpg",
            overview: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
            duration: "2h 55m",
            cast: ["Marlon Brando", "Al Pacino", "James Caan"],
            genre: ["Crime", "Drama"]
        },
        
        // More Movies
        {
            id: 9,
            title: "Interstellar",
            year: "2014",
            category: "Movie",
            rating: "PG-13",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            duration: "2h 49m",
            cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
            genre: ["Sci-Fi", "Drama", "Adventure"]
        },
        {
            id: 10,
            title: "Pulp Fiction",
            year: "1994",
            category: "Movie",
            rating: "R",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_.jpg",
            overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            duration: "2h 34m",
            cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
            genre: ["Crime", "Drama"]
        },
        
        // TV Series
        {
            id: 11,
            title: "Breaking Bad",
            year: "2008-2013",
            category: "TV Series",
            rating: "TV-MA",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
            overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
            seasons: 5,
            cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            id: 12,
            title: "Game of Thrones",
            year: "2011-2019",
            category: "TV Series",
            rating: "TV-MA",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
            overview: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
            seasons: 8,
            cast: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
            genre: ["Action", "Adventure", "Drama"]
        },

        // Additional Movies (5 more)
        {
            id: 13,
            title: "Inception",
            year: "2010",
            category: "Movie",
            rating: "PG-13",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            duration: "2h 28m",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
            genre: ["Action", "Adventure", "Sci-Fi"]
        },
        {
            id: 14,
            title: "The Dark Knight",
            year: "2008",
            category: "Movie",
            rating: "PG-13",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            duration: "2h 32m",
            cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            genre: ["Action", "Crime", "Drama"]
        },
        {
            id: 15,
            title: "Parasite",
            year: "2019",
            category: "Movie",
            rating: "R",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
            overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            duration: "2h 12m",
            cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
            genre: ["Comedy", "Drama", "Thriller"]
        },
        {
            id: 16,
            title: "The Matrix",
            year: "1999",
            category: "Movie",
            rating: "R",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            duration: "2h 16m",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            genre: ["Action", "Sci-Fi"]
        },
        {
            id: 17,
            title: "Forrest Gump",
            year: "1994",
            category: "Movie",
            rating: "PG-13",
            isTopRated: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            duration: "2h 22m",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
            genre: ["Drama", "Romance"]
        },

        // Additional TV Series (5 more)
        {
            id: 18,
            title: "Stranger Things",
            year: "2016-Present",
            category: "TV Series",
            rating: "TV-14",
            isPopular: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
            seasons: 4,
            cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
            genre: ["Drama", "Fantasy", "Horror"]
        },
        {
            id: 19,
            title: "The Mandalorian",
            year: "2019-Present",
            category: "TV Series",
            rating: "TV-14",
            isPopular: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
            overview: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
            seasons: 3,
            cast: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
            genre: ["Action", "Adventure", "Sci-Fi"]
        },
        {
            id: 20,
            title: "The Last of Us",
            year: "2023-Present",
            category: "TV Series",
            rating: "TV-MA",
            isPopular: true,
            isNewRelease: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BZGM1M2NmNDUtZGU2Yi00NjYyLWE0OTQtZGVkNDhhYzYwZjYxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZGM1M2NmNDUtZGU2Yi00NjYyLWE0OTQtZGVkNDhhYzYwZjYxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            overview: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
            seasons: 1,
            cast: ["Pedro Pascal", "Bella Ramsey", "Anna Torv"],
            genre: ["Action", "Adventure", "Drama"]
        },
        {
            id: 21,
            title: "The Witcher",
            year: "2019-Present",
            category: "TV Series",
            rating: "TV-MA",
            isPopular: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
            seasons: 3,
            cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
            genre: ["Action", "Adventure", "Fantasy"]
        },
        {
            id: 22,
            title: "House of the Dragon",
            year: "2022-Present",
            category: "TV Series",
            rating: "TV-MA",
            isPopular: true,
            thumbnail: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            overview: "The reign of House Targaryen begins with this prequel to the popular HBO series Game of Thrones.",
            seasons: 1,
            cast: ["Paddy Considine", "Matt Smith", "Emma D'Arcy"],
            genre: ["Action", "Adventure", "Drama"]
        }
    ];

    // State management
    let state = {
        currentPage: 'home',
        bookmarkedItems: JSON.parse(localStorage.getItem('bookmarkedItems')) || [],
        searchQuery: '',
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || {
            name: "Supriya Singh",
            email: "supriyasinghpvt@gmail.com",
            avatar: "https://cdn.vectorstock.com/i/2000v/54/67/elegant-initial-s-logo-modern-letter-s-design-vector-35165467.avif"
        }
    };

    // DOM elements
    const notification = document.getElementById('notification');
    const avatarModal = document.getElementById('avatar-modal');
    const profileModal = document.getElementById('profile-modal');

    // Initialize the app
    function init() {
        updateProfileDisplay();
        renderNavigation();
        renderPage();
        setupEventListeners();
    }

    // Update profile display
    function updateProfileDisplay() {
        document.getElementById('user-avatar').src = state.currentUser.avatar;
        document.getElementById('profile-avatar').src = state.currentUser.avatar;
        document.getElementById('profile-name').textContent = state.currentUser.name;
        document.getElementById('profile-email').textContent = state.currentUser.email;
        
        // Update form fields if modal is open
        if (profileModal.classList.contains('active')) {
            document.getElementById('name').value = state.currentUser.name;
            document.getElementById('email').value = state.currentUser.email;
        }
    }

    // Show notification
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Show modal
    function showModal(modal) {
        modal.classList.add('active');
    }

    // Hide modal
    function hideModal(modal) {
        modal.classList.remove('active');
    }

    // Render navigation
    function renderNavigation() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === state.currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Render the current page
    function renderPage() {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show current page
        document.getElementById(`${state.currentPage}-page`).classList.add('active');

        // Render content based on current page
        switch (state.currentPage) {
            case 'home':
                renderTrending();
                renderPopularMovies();
                renderNewReleases();
                renderTopRated();
                break;
            case 'movies':
                renderMovies();
                break;
            case 'tv':
                renderTVSeries();
                break;
            case 'bookmarks':
                renderBookmarks();
                break;
            case 'details':
                // Details page is rendered separately when an item is clicked
                break;
        }
    }

function renderTrending() {
    const trendingContainer = document.getElementById('trending-container');
    trendingContainer.innerHTML = '';

    const trendingItems = mediaData.filter(item => item.isTrending);
    
    trendingItems.forEach(item => {
        const isBookmarked = state.bookmarkedItems.includes(item.id);
        
        const trendingItem = document.createElement('div');
        trendingItem.className = 'trending-item';
        trendingItem.dataset.id = item.id;
        
        trendingItem.innerHTML = `
            <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
                <i class="fas fa-bookmark"></i>
            </div>
            <img src="${item.backdrop || item.thumbnail}" alt="${item.title}" class="trending-poster">
            <div class="trending-info">
                <div class="media-info">
                    <div class="details">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span>${item.category === 'Movie' ? '<i class="fas fa-film"></i> Movie' : '<i class="fas fa-tv"></i> TV Series'}</span>
                        <span class="dot"></span>
                        <span>${item.rating}</span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                </div>
            </div>
        `;
        
        trendingContainer.appendChild(trendingItem);
    });
}

    // Render popular movies
    function renderPopularMovies() {
        const container = document.getElementById('popular-movies-container');
        container.innerHTML = '';

        const popularMovies = mediaData.filter(item => item.isPopular && item.category === 'Movie');
        
        popularMovies.forEach(item => {
            const isBookmarked = state.bookmarkedItems.includes(item.id);
            
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';
            mediaItem.dataset.id = item.id;
            
            mediaItem.innerHTML = `
                <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
                    <i class="fas fa-bookmark"></i>
                </div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="media-info">
                    <div class="details">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span><i class="fas fa-film"></i></span>
                        <span class="dot"></span>
                        <span>${item.rating}</span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                </div>
            `;
            
            container.appendChild(mediaItem);
        });
    }

    // Render new releases
    function renderNewReleases() {
        const container = document.getElementById('new-releases-container');
        container.innerHTML = '';

        const newReleases = mediaData.filter(item => item.isNewRelease);
        
        newReleases.forEach(item => {
            const isBookmarked = state.bookmarkedItems.includes(item.id);
            
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';
            mediaItem.dataset.id = item.id;
            
            mediaItem.innerHTML = `
                <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
                    <i class="fas fa-bookmark"></i>
                </div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="media-info">
                    <div class="details">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span>${item.category === 'Movie' ? '<i class="fas fa-film"></i>' : '<i class="fas fa-tv"></i>'}</span>
                        <span class="dot"></span>
                        <span>${item.rating}</span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                </div>
            `;
            
            container.appendChild(mediaItem);
        });
    }

    // Render top rated
    function renderTopRated() {
        const container = document.getElementById('top-rated-container');
        container.innerHTML = '';

        const topRated = mediaData.filter(item => item.isTopRated);
        
        topRated.forEach(item => {
            const isBookmarked = state.bookmarkedItems.includes(item.id);
            
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';
            mediaItem.dataset.id = item.id;
            
            mediaItem.innerHTML = `
                <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
                    <i class="fas fa-bookmark"></i>
                </div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="media-info">
                    <div class="details">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span>${item.category === 'Movie' ? '<i class="fas fa-film"></i>' : '<i class="fas fa-tv"></i>'}</span>
                        <span class="dot"></span>
                        <span>${item.rating}</span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                </div>
            `;
            
            container.appendChild(mediaItem);
        });
    }

    // Render movies
    function renderMovies() {
        const moviesContainer = document.getElementById('movies-container');
        moviesContainer.innerHTML = '';

        const movies = mediaData.filter(item => item.category === 'Movie');
        
        if (movies.length === 0) {
            moviesContainer.innerHTML = '<p class="no-results">No movies found matching your search.</p>';
            return;
        }
        
        movies.forEach(item => {
            const isBookmarked = state.bookmarkedItems.includes(item.id);
            
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';
            mediaItem.dataset.id = item.id;
            
            mediaItem.innerHTML = `
                <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
                    <i class="fas fa-bookmark"></i>
                </div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="media-info">
                    <div class="details">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span><i class="fas fa-film"></i></span>
                        <span class="dot"></span>
                        <span>${item.rating}</span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                </div>
            `;
            
            moviesContainer.appendChild(mediaItem);
        });
    }

    // Render TV series
    function renderTVSeries() {
        const tvContainer = document.getElementById('tv-container');
        tvContainer.innerHTML = '';

        const tvShows = mediaData.filter(item => item.category === 'TV Series');
        
        if (tvShows.length === 0) {
            tvContainer.innerHTML = '<p class="no-results">No TV series found matching your search.</p>';
            return;
        }
        
        tvShows.forEach(item => {
            const isBookmarked = state.bookmarkedItems.includes(item.id);
            
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';
            mediaItem.dataset.id = item.id;
            
            mediaItem.innerHTML = `
                <div class="bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
                    <i class="fas fa-bookmark"></i>
                </div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="media-info">
                    <div class="details">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span><i class="fas fa-tv"></i></span>
                        <span class="dot"></span>
                        <span>${item.rating}</span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                </div>
            `;
            
            tvContainer.appendChild(mediaItem);
        });
    }

    // Render bookmarks
    function renderBookmarks() {
        const bookmarkedMoviesContainer = document.getElementById('bookmarked-movies-container');
        const bookmarkedTVContainer = document.getElementById('bookmarked-tv-container');
        
        bookmarkedMoviesContainer.innerHTML = '';
        bookmarkedTVContainer.innerHTML = '';

        const bookmarkedMovies = mediaData.filter(item => 
            state.bookmarkedItems.includes(item.id) && item.category === 'Movie');
        
        const bookmarkedTV = mediaData.filter(item => 
            state.bookmarkedItems.includes(item.id) && item.category === 'TV Series');

        // Render bookmarked movies
        if (bookmarkedMovies.length === 0) {
            bookmarkedMoviesContainer.innerHTML = '<p class="no-results">No bookmarked movies found.</p>';
        } else {
            bookmarkedMovies.forEach(item => {
                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.dataset.id = item.id;
                
                mediaItem.innerHTML = `
                    <div class="bookmark bookmarked" data-id="${item.id}">
                        <i class="fas fa-bookmark"></i>
                    </div>
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="media-info">
                        <div class="details">
                            <span>${item.year}</span>
                            <span class="dot"></span>
                            <span><i class="fas fa-film"></i></span>
                            <span class="dot"></span>
                            <span>${item.rating}</span>
                        </div>
                        <h3 class="title">${item.title}</h3>
                    </div>
                `;
                
                bookmarkedMoviesContainer.appendChild(mediaItem);
            });
        }

        // Render bookmarked TV shows
        if (bookmarkedTV.length === 0) {
            bookmarkedTVContainer.innerHTML = '<p class="no-results">No bookmarked TV series found.</p>';
        } else {
            bookmarkedTV.forEach(item => {
                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.dataset.id = item.id;
                
                mediaItem.innerHTML = `
                    <div class="bookmark bookmarked" data-id="${item.id}">
                        <i class="fas fa-bookmark"></i>
                    </div>
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="media-info">
                        <div class="details">
                            <span>${item.year}</span>
                            <span class="dot"></span>
                            <span><i class="fas fa-tv"></i></span>
                            <span class="dot"></span>
                            <span>${item.rating}</span>
                        </div>
                        <h3 class="title">${item.title}</h3>
                    </div>
                `;
                
                bookmarkedTVContainer.appendChild(mediaItem);
            });
        }
    }

    // Render media details
    function renderMediaDetails(itemId) {
        const item = mediaData.find(item => item.id === itemId);
        if (!item) return;

        const detailsContainer = document.getElementById('media-details');
        const isBookmarked = state.bookmarkedItems.includes(item.id);

        detailsContainer.innerHTML = `
            <div class="details-header">
                <div class="details-poster">
                    <img src="${item.thumbnail}" alt="${item.title}">
                </div>
                <div class="details-content">
                    <h1 class="details-title">${item.title}</h1>
                    <div class="details-meta">
                        <span>${item.year}</span>
                        <span class="dot"></span>
                        <span>${item.category === 'Movie' ? '<i class="fas fa-film"></i> Movie' : '<i class="fas fa-tv"></i> TV Series'}</span>
                        <span class="dot"></span>
                        <span class="details-rating">${item.rating}</span>
                        ${item.category === 'Movie' ? `<span class="dot"></span><span>${item.duration}</span>` : ''}
                        ${item.category === 'TV Series' ? `<span class="dot"></span><span>${item.seasons} Seasons</span>` : ''}
                    </div>
                    <div class="details-genre">
                        ${item.genre.map(genre => `<span>${genre}</span>`).join(' ')}
                    </div>
                    <p class="details-overview">${item.overview}</p>
                    <div class="details-cast">
                        <h4>Cast:</h4>
                        <p>${item.cast.join(', ')}</p>
                    </div>
                    <button class="details-bookmark" data-id="${item.id}">
                        <i class="fas fa-bookmark"></i>
                        ${isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
                    </button>
                </div>
            </div>
        `;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                state.currentPage = link.dataset.page;
                state.searchQuery = '';
                document.getElementById('search-input').value = '';
                renderNavigation();
                renderPage();
            });
        });

        // Search
        document.getElementById('search-input').addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderPage();
        });

        // Profile dropdown
        document.getElementById('user-profile').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.querySelector('.profile-dropdown');
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.profile-dropdown') && !e.target.closest('#user-profile')) {
                document.querySelector('.profile-dropdown').classList.remove('active');
            }
        });

        // Edit profile button
        document.getElementById('edit-profile').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('name').value = state.currentUser.name;
            document.getElementById('email').value = state.currentUser.email;
            showModal(profileModal);
            document.querySelector('.profile-dropdown').classList.remove('active');
        });

        // Change avatar button
        document.getElementById('change-avatar').addEventListener('click', (e) => {
            e.preventDefault();
            showModal(avatarModal);
            document.querySelector('.profile-dropdown').classList.remove('active');
        });

        // Avatar selection
        document.querySelectorAll('.avatar-option').forEach(option => {
            option.addEventListener('click', () => {
                state.currentUser.avatar = option.dataset.avatar;
                localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
                updateProfileDisplay();
                hideModal(avatarModal);
                showNotification('Avatar updated successfully');
            });
        });

        // Profile form submission
        document.getElementById('profile-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!name || !email) {
                showNotification('Please fill in all fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showNotification('Please enter a valid email address');
                return;
            }
            
            state.currentUser.name = name;
            state.currentUser.email = email;
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
            updateProfileDisplay();
            hideModal(profileModal);
            showNotification('Profile updated successfully');
        });

        // Logout button
        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Logged out successfully');
            // In a real app, you would redirect to login page
            document.querySelector('.profile-dropdown').classList.remove('active');
        });

        // Close modals
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                hideModal(avatarModal);
                hideModal(profileModal);
            });
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === avatarModal) {
                hideModal(avatarModal);
            }
            if (e.target === profileModal) {
                hideModal(profileModal);
            }
        });

        // Bookmark toggle (delegated event)
        document.addEventListener('click', (e) => {
            // Bookmark buttons
            if (e.target.closest('.bookmark') || e.target.closest('.details-bookmark')) {
                const bookmark = e.target.closest('.bookmark') || e.target.closest('.details-bookmark');
                const itemId = parseInt(bookmark.dataset.id);
                
                if (state.bookmarkedItems.includes(itemId)) {
                    // Remove bookmark
                    state.bookmarkedItems = state.bookmarkedItems.filter(id => id !== itemId);
                    if (bookmark.classList) bookmark.classList.remove('bookmarked');
                    showNotification('Removed from bookmarks');
                    
                    // Update button text in details page
                    if (e.target.closest('.details-bookmark')) {
                        bookmark.innerHTML = `<i class="fas fa-bookmark"></i> Add Bookmark`;
                    }
                } else {
                    // Add bookmark
                    state.bookmarkedItems.push(itemId);
                    if (bookmark.classList) bookmark.classList.add('bookmarked');
                    showNotification('Added to bookmarks');
                    
                    // Update button text in details page
                    if (e.target.closest('.details-bookmark')) {
                        bookmark.innerHTML = `<i class="fas fa-bookmark"></i> Remove Bookmark`;
                    }
                }
                
                // Save to localStorage
                localStorage.setItem('bookmarkedItems', JSON.stringify(state.bookmarkedItems));
                
                // Re-render if on bookmarks page
                if (state.currentPage === 'bookmarks') {
                    renderBookmarks();
                }
            }
            
            // Media item click (to show details)
            if (e.target.closest('.media-item') || e.target.closest('.trending-item')) {
                const mediaItem = e.target.closest('.media-item') || e.target.closest('.trending-item');
                const itemId = parseInt(mediaItem.dataset.id);
                
                // Hide current page and show details page
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById('details-page').classList.add('active');
                
                // Render media details
                renderMediaDetails(itemId);
            }
        });

        // Back button
        document.getElementById('back-button').addEventListener('click', () => {
            // Show previous page
            document.getElementById('details-page').classList.remove('active');
            document.getElementById(`${state.currentPage}-page`).classList.add('active');
        });
    }

    // Initialize the app
    init();
});