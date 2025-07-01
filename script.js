// ================ MOBILE NAVIGATION TOGGLE ================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// ================ ANIMATED NUMBER COUNTERS ================
const counters = document.querySelectorAll('.counter');
const speed = 200; // Animation speed (lower = faster)

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/[^0-9.]/g, '');
        const increment = target / speed;

        if (count < target) {
            counter.innerText =
                counter.innerText.includes('₹')
                    ? '₹' + Math.ceil(count + increment).toLocaleString('en-IN') +
                      (counter.innerText.includes('Cr') ? ' Cr' : '')
                    : counter.innerText.includes('$')
                    ? '$' + Math.ceil(count + increment).toLocaleString('en-US') +
                      (counter.innerText.includes('M') ? ' M' : '')
                    : Math.ceil(count + increment).toLocaleString();

            setTimeout(animateCounters, 1);
        } else {
            counter.innerText =
                counter.innerText.includes('₹')
                    ? '₹' + target.toLocaleString('en-IN') +
                      (counter.innerText.includes('Cr') ? ' Cr' : '')
                    : counter.innerText.includes('$')
                    ? '$' + target.toLocaleString('en-US') +
                      (counter.innerText.includes('M') ? ' M' : '')
                    : target.toLocaleString();
        }
    });
}

// ================ TRIGGER COUNTERS ON SCROLL ================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    observer.observe(counter);
});

// ================ SMOOTH SCROLLING FOR LINKS ================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================ FUTURE API INTEGRATION (EXAMPLE) ================
// This is a placeholder for real data fetching

const TMDB_API_KEY = '4e44d9029b1270a757cddc766a1bcb63';
const OMDB_API_KEY = '6c3a2d45';

/*
async function fetchMovieData() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        console.log(data); // Process your data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchMovieData();
*/
