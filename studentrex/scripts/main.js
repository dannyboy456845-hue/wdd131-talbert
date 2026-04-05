/* ========================================
   StudentRex - Main JavaScript
   Handles: hamburger nav, activity filtering,
   dynamic card rendering, localStorage
   ======================================== */

/* --- Activity Data (Array of Objects) --- */
const activities = [
    {
        name: "Cress Creek Nature Trail",
        category: "hiking",
        description: "A peaceful 1.5-mile trail just 25 minutes from campus. Follows a winding creek through lush greenery with benches and picnic tables along the way. Great for a chill roommate outing or FHE activity.",
        difficulty: "Easy",
        cost: "Free",
        experience: "new",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop",
        alt: "A shaded forest trail along a creek"
    },
    {
        name: "Grand Teton National Park",
        category: "adventure",
        description: "About a 2-hour drive from Rexburg but absolutely worth it. Scenic drives, hiking, kayaking, horseback riding, and wildlife everywhere. Stop through Jackson Hole on the way for food.",
        difficulty: "Moderate",
        cost: "~$35/vehicle",
        experience: "any",
        image: "https://images.unsplash.com/photo-1594751543129-6701ad444259?w=600&h=400&fit=crop",
        alt: "Grand Teton mountain range reflected in a lake"
    },
    {
        name: "Fizz Rizz",
        category: "nightlife",
        description: "Rexburg's only mocktail bar and arcade at 32 College Ave. Retro arcade games, billiards, karaoke, and craft mocktails all under $6. Open Mon–Sat, 5 PM to 1 AM.",
        difficulty: "Easy",
        cost: "$–$$",
        experience: "new",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=600&h=400&fit=crop",
        alt: "Retro arcade machines with colorful lights"
    },
    {
        name: "Fire and Fizz",
        category: "chill",
        description: "A pottery painting studio and custom soda shop at 14 W 1st South. Pick from 200+ pottery pieces and 70+ glazes to create something unique. Great date spot or group hangout. Open Mon–Sat, 11 AM to 10 PM.",
        difficulty: "Easy",
        cost: "$–$$",
        experience: "hidden",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
        alt: "Colorful pottery pieces on a table"
    },
    {
        name: "Porter Park",
        category: "chill",
        description: "Rexburg's oldest and biggest park right downtown. Home to the Idaho Centennial Carousel — one of only 170 antique wooden carousels in the U.S. — a free splash pad in summer, playground, tennis and basketball courts, and open fields.",
        difficulty: "Easy",
        cost: "Free",
        experience: "new",
        image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=600&h=400&fit=crop",
        alt: "A sunny park with green grass and trees"
    },
    {
        name: "Mesa Falls",
        category: "hiking",
        description: "Upper and Lower Mesa Falls are two stunning waterfalls about 45 minutes north of Rexburg. The upper falls have a paved viewpoint trail, and the lower falls offer a more rugged hike. A must-see in the warmer months.",
        difficulty: "Easy–Moderate",
        cost: "$5 parking",
        experience: "hidden",
        image: "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?w=600&h=400&fit=crop",
        alt: "Waterfall crashing into a rocky river below"
    },
    {
        name: "Yellowstone National Park",
        category: "adventure",
        description: "Just about 2.5 hours from Rexburg. Geysers, hot springs, canyons, and bison herds. The west entrance is the closest — plan a full day or camp overnight to make the most of it.",
        difficulty: "Moderate",
        cost: "~$35/vehicle",
        experience: "any",
        image: "https://images.unsplash.com/photo-1529439322271-42931c09bce1?w=600&h=400&fit=crop",
        alt: "Yellowstone geyser erupting with steam"
    },
    {
        name: "Rexburg Rapids",
        category: "chill",
        description: "The city's outdoor water park with slides, a lazy river, and lap lanes. Open during the summer months — perfect for beating the heat between semesters. Student discounts available.",
        difficulty: "Easy",
        cost: "$5–$8",
        experience: "new",
        image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop",
        alt: "Water slides at an outdoor water park"
    }
];

/* --- DOM Elements --- */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const activitiesGrid = document.getElementById("activities-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultsCount = document.querySelector(".results-count");

/* ========================================
   Hamburger Menu Toggle
   ======================================== */
function toggleMenu() {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("show");

    // Update aria-expanded for accessibility
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
}

// Only add listener if hamburger exists on the page
if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
}

/* ========================================
   Activity Card Rendering
   Uses: forEach, template literals, DOM manipulation
   ======================================== */
function createCardHTML(activity) {
    return `
        <article class="activity-card">
            <img
                class="card-img"
                src="${activity.image}"
                alt="${activity.alt}"
                loading="lazy"
                width="600"
                height="400"
            />
            <div class="card-body">
                <h3>${activity.name}</h3>
                <span class="card-category">${activity.category}</span>
                <p>${activity.description}</p>
                <div class="card-details">
                    <span>Difficulty: ${activity.difficulty}</span>
                    <span>Cost: ${activity.cost}</span>
                </div>
            </div>
        </article>
    `;
}

function renderActivities(activityList) {
    if (!activitiesGrid) return;

    // Use map to transform each activity object into HTML, then join
    const cardsHTML = activityList.map(createCardHTML).join("");
    activitiesGrid.innerHTML = cardsHTML;

    // Update results count using conditional branching
    if (resultsCount) {
        if (activityList.length === 0) {
            resultsCount.textContent = "No activities found for this category.";
        } else if (activityList.length === 1) {
            resultsCount.textContent = "Showing 1 activity";
        } else {
            resultsCount.textContent = `Showing ${activityList.length} activities`;
        }
    }
}

/* ========================================
   Filtering Logic
   Uses: filter, conditional branching, localStorage
   ======================================== */
function filterActivities(category) {
    // Use filter array method with conditional check
    if (category === "all") {
        return activities;
    }
    return activities.filter(activity => activity.category === category);
}

function handleFilterClick(event) {
    const selectedFilter = event.target.dataset.filter;

    // Update active button styling using forEach
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === selectedFilter) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Filter and render
    const filtered = filterActivities(selectedFilter);
    renderActivities(filtered);

    // Save the user's filter choice to localStorage
    localStorage.setItem("studentrex-filter", selectedFilter);
}

/* ========================================
   Stats Summary
   Uses: reduce to compute aggregate data
   ======================================== */
function getActivityStats() {
    // Use reduce to count activities per category
    const categoryCount = activities.reduce((counts, activity) => {
        counts[activity.category] = (counts[activity.category] || 0) + 1;
        return counts;
    }, {});

    return categoryCount;
}

/* ========================================
   Initialize on Page Load
   ======================================== */
function init() {
    // Add click listeners to filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener("click", handleFilterClick);
    });

    // Check localStorage for a saved filter preference
    const savedFilter = localStorage.getItem("studentrex-filter");

    if (savedFilter && activitiesGrid) {
        // Restore the saved filter
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === savedFilter) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        const filtered = filterActivities(savedFilter);
        renderActivities(filtered);
    } else if (activitiesGrid) {
        // Default: show all activities
        renderActivities(activities);
    }

    // Log stats to console (demonstrates reduce)
    const stats = getActivityStats();
    console.log("Activity stats:", stats);
}

// Run when DOM is ready
init();
