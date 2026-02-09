// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sample blog data
const blogPosts = [
    {
        category: 'Community',
        title: 'SARC Goes Digital',
        excerpt: 'The official SARC website goes live, marking a new chapter in student–alumni engagement and institutional outreach…',
        author: 'Pratyush Kumar',
        date: 'Jan 8, 2026',
        image: '..//sarclaunch.jpeg',
        type: 'blogs'
    },
    {
        category: 'Student Life',
        title: 'Glimpses of Moksha IX',
        excerpt: 'Moksha unfolds in vibrant moments as rapper Yashraj rocks the stage with an electrifying performance on Day 2…',
        author: 'Pratyush Kumar',
        date: 'Nov 6, 2025',
        image: '../moksha.jpeg',
        type: 'blogs'
    },
    {
        category: 'Alumni Story',
        title: 'From Campus to Corporate: A Journey of Growth',
        excerpt: 'How a passionate student transformed challenges into opportunities and built a successful career in tech industry...',
        author: 'Mayank Choubey',
        date: 'Nov 10, 2025',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        type: 'blogs'
    },
    {
        category: 'Student Life',
        title: 'Tech Conclave 2025: Innovating the Future',
        excerpt: 'Tech Conclave 2025 featured an inspiring speaker session by IAS Dr. Tanu Jain, sharing insights on leadership and public…',
        author: 'BTC Content Team',
        date: 'Mar 24, 2025',
        image: '../techconclave.jpeg',
        type: 'blogs'
    },
    {
        category: 'Community',
        title: 'Building Bonds: Alumni Mentorship Program',
        excerpt: 'Connecting current students with successful alumni for guidance, career advice, and professional networking...',
        author: 'SARC Team',
        date: 'Feb 20, 2025',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
        type: 'blogs'
    },
    {
        category: 'Gallery',
        title: 'Global Almuni Meet 2025 Highlights',
        excerpt: 'Global Alumni 2025 dazzled with elegance and creativity as a vibrant fashion show lit up the celebrations…',
        author: 'Pixels Team',
        date: 'Jan 18, 2025',
        image: '../alummeet2025.jpeg',
        type: 'gallery'
    }
];

// Function to create blog cards
function createBlogCard(post) {
    return `
        <article class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-card-image">
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-card-category">${post.category}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-footer">
                    <span class="blog-card-author">${post.author}</span>
                    <span class="blog-card-date">${post.date}</span>
                </div>
                <a href="#" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

// Function to render blog posts
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = posts.map(createBlogCard).join('');
}

// Initial render
renderBlogPosts(blogPosts);