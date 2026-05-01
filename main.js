/* =====================
   LOGIN FUNCTIONS
===================== */
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", email);

  window.location.href = "index.html";
}

function guestLogin() {
  localStorage.setItem("isLoggedIn", "guest");
  window.location.href = "index.html";
}

/* =====================
   BUSINESS DATA
===================== */
const businessData = {
  spicyhub: {
    name: "SpicyHub",
    image: "spicyhub.webp",
    phone: "+91 98765 43210",
    email: "contact@spicyhub.com",
    location: "MG Road, Guntur",
    hours: "Open 11:00 AM – Close 11:00 PM",
    rating: "4.4",
    description: "SpicyHub offers a wide variety of Indian and Chinese dishes with authentic flavors.",
    category: "Food",
    menu: [
      { name: "🍜 Noodles", cost: "120", rating: "4.2", image: "noodles.webp" },
      { name: "🍛 Biryani", cost: "180", rating: "4.5", image: "biryani.webp" },
      { name: "🥘 Paneer Curry", cost: "150", rating: "4.3", image: "panner.webp" },
      { name: "🥤 Soft Drink", cost: "40", rating: "4.0", image: "softdrink.webp" },
      { name: "🍨 Ice Cream", cost: "90", rating: "4.6", image: "icecream.webp" }
    ]
  },
  tastybites: {
    name: "TastyBites",
    image: "tastybites.webp",
    phone: "+91 91234 56789",
    email: "hello@tastybites.com",
    location: "Brodipet, Vijayawada",
    hours: "Open 10:00 AM – Close 10:00 PM",
    rating: "4.1",
    description: "TastyBites is known for its delicious snacks, quick bites, and cozy ambience.",
    category: "Food",
    menu: [
      { name: "🍔 Burger", cost: "150", rating: "4.2", image: "burger.webp" },
      { name: "🍟 Fries", cost: "80", rating: "4.1", image: "fries.webp" },
      { name: "🥪 Sandwich", cost: "120", rating: "4.0", image: "sandwich.webp" },
      { name: "🥤 Milkshake", cost: "100", rating: "4.3", image: "milkshake.webp" },
      { name: "🍰 Cake Slice", cost: "90", rating: "4.5", image: "cake.webp" }
    ]
  },
  foodplaza: {
    name: "FoodPlaza",
    image: "foodplaza.webp",
    phone: "+91 99887 77665",
    email: "info@foodplaza.com",
    location: "Lakshmipuram, Tenali",
    hours: "Open 12:00 PM – Close 12:00 AM",
    rating: "4.6",
    description: "FoodPlaza serves multi-cuisine meals with a focus on hygiene and quality.",
    category: "Food",
    menu: [
      { name: "🍕 Pizza", cost: "250", rating: "4.6", image: "pizza.webp" },
      { name: "🍝 Pasta", cost: "200", rating: "4.4", image: "pasta.webp" },
      { name: "🥗 Salad", cost: "150", rating: "4.2", image: "salad.webp" },
      { name: "🍹 Mocktail", cost: "120", rating: "4.3", image: "mocktail.webp" },
      { name: "🍩 Donut", cost: "70", rating: "4.5", image: "donut.webp" }
    ]
  },
  cityhospital: {
    name: "City Hospital",
    image: "cityhospital.webp",
    phone: "+91 98765 11111",
    email: "info@cityhospital.com",
    location: "Ring Road, Guntur",
    hours: "Open 24 Hours",
    rating: "4.3",
    description: "City Hospital provides multi-specialty healthcare with modern facilities and experienced doctors.",
    category: "Health Care",
    menu: [
      { name: "👩‍⚕️ General Consultation", specialization: "General Physician", cost: "₹300", rating: "4.2", image: "generalconsultation.jpg" },
      { name: "🩺 Health Checkup", specialization: "Diagnostics", cost: "₹1500", rating: "4.5", image: "checkup.jpg" },
      { name: "💉 Blood Test", specialization: "Pathology", cost: "₹500", rating: "4.4", image: "bloodtest.webp" },
      { name: "🧪 X-Ray", specialization: "Radiology", cost: "₹800", rating: "4.3", image: "xray.webp" }
    ]
  },
  apolloclinic: {
    name: "Apollo Clinic",
    image: "apolloclinic.webp",
    phone: "+91 91234 22222",
    email: "contact@apolloclinic.com",
    location: "Brodipet, Vijayawada",
    hours: "Open 9:00 AM – Close 9:00 PM",
    rating: "4.4",
    description: "Apollo Clinic offers specialist consultations, diagnostics, and preventive care.",
    category: "Health Care",
    menu: [
      { name: "Dr. Samarth Acharya", specialization: "Cardiologist", cost: "₹800", rating: "4.7", image: "a.webp" },
      { name: "Dr. Pallem Peddeswara Rao", specialization: "Neurologist", cost: "₹1000", rating: "4.9", image: "c.webp" },
      { name: "Dr. Ramesh Babu", specialization: "ENT", cost: "₹700", rating: "4.5", image: "e.webp" },
      { name: "Dr. Srinivas Rao", specialization: "Dermatology", cost: "₹600", rating: "4.3", image: "d.webp" }
    ]
  },
  /* ---------- GROCERIES ---------- */
reliancefresh: {
  name: "Reliance Fresh",
  image: "reliancefresh.webp",
  phone: "+91 98765 55555",
  email: "contact@reliancefresh.com",
  location: "Brodipet, Guntur",
  hours: "Open 9:00 AM – Close 9:00 PM",
  rating: "4.3",
  description: "Reliance Fresh offers fresh fruits, vegetables, and daily essentials at affordable prices.",
  category: "Groceries",
  menu: [
    { name: "🍎 Apples (1kg)", cost: "120", rating: "4.5", image: "apples.webp" },
    { name: "🥔 Potatoes (1kg)", cost: "40", rating: "4.4", image: "potatoes.webp" },
    { name: "🥛 Milk (1L)", cost: "55", rating: "4.6", image: "milk.webp" },
    { name: "🍚 Rice (5kg)", cost: "350", rating: "4.7", image: "rice.webp" }
  ]
},

moresupermarket: {
  name: "More Supermarket",
  image: "moresupermarket.webp",
  phone: "+91 98765 66666",
  email: "info@moresupermarket.com",
  location: "MG Road, Vijayawada",
  hours: "Open 8:00 AM – Close 10:00 PM",
  rating: "4.4",
  description: "More Supermarket stocks groceries, packaged foods, and household essentials with great offers.",
  category: "Groceries",
  menu: [
    { name: "🍌 Bananas (1 dozen)", cost: "60", rating: "4.5", image: "bananas.webp" },
    { name: "🥬 Spinach (1 bunch)", cost: "25", rating: "4.3", image: "spinach.webp" },
    { name: "🥤 Soft Drink (2L)", cost: "90", rating: "4.2", image: "softdrink.webp" },
    { name: "🧴 Cooking Oil (1L)", cost: "160", rating: "4.6", image: "oil.webp" }
  ]
},
/* ---------- MOVIES ---------- */
inoxguntur: {
    name: "INOX Guntur",
    image: "inox.webp",
    phone: "+91 98765 55555",
    email: "contact@inoxguntur.com",
    location: "Naaz Center Road, Guntur",
    hours: "10:00 AM – 11:00 PM",
    rating: "4.5",
    description: "INOX Guntur screens the latest Telugu, Hindi, and English movies.",
    category: "Movies", // ✅ Must be "Movies"
    menu: [
      { name: "🎬 Mana Shankara Varaprasad Garu", language: "Telugu", cost: "₹200", rating: "4.6", showtime: "11:00 AM", bmsLink: "https://in.bookmyshow.com/movies/mana-shankara-varaprasad" },
      { name: "🎬 Anaganaga Oka Raju", language: "Telugu", cost: "₹220", rating: "4.4", showtime: "2:00 PM", bmsLink: "https://in.bookmyshow.com/movies/anaganaga-oka-raju" },
      { name: "🎬 The Raja Saab", language: "Telugu", cost: "₹250", rating: "4.7", showtime: "6:00 PM", bmsLink: "https://in.bookmyshow.com/movies/the-raja-saab" },
      { name: "🎬 28 Years Later: The Bone Temple", language: "English", cost: "₹300", rating: "4.2", showtime: "9:30 PM", bmsLink: "https://in.bookmyshow.com/movies/28-years-later" }
    ]
  },
  pvrripples: {
    name: "PVR Ripples Vijayawada",
    image: "pvr.webp",
    phone: "+91 91234 66666",
    email: "contact@pvrvijayawada.com",
    location: "Ripples Mall, MG Road, Vijayawada",
    hours: "10:00 AM – 11:30 PM",
    rating: "4.6",
    description: "PVR Ripples offers recliner seats and a wide mix of Telugu, Hindi, and English films.",
    category: "Movies", // ✅ Must be "Movies"
    menu: [
      { name: "🎬 Nari Nari Naduma Murari", language: "Telugu", cost: "₹220", rating: "4.5", showtime: "12:00 PM", bmsLink: "https://in.bookmyshow.com/movies/nari-nari-naduma-murari" },
      { name: "🎬 Border 2", language: "Hindi", cost: "₹250", rating: "4.3", showtime: "3:00 PM", bmsLink: "https://in.bookmyshow.com/movies/border-2" },
      { name: "🎬 Mercy", language: "English", cost: "₹280", rating: "4.4", showtime: "6:30 PM", bmsLink: "https://in.bookmyshow.com/movies/mercy" },
      { name: "🎬 Primate", language: "English", cost: "₹300", rating: "4.1", showtime: "9:00 PM", bmsLink: "https://in.bookmyshow.com/movies/primate" }
    ]
  },




  /* ---------- EDUCATION ---------- */
abccoaching: {
  name: "ABC Coaching Centre",
  image: "abccoaching.webp",
  phone: "+91 98765 77777",
  email: "info@abccoaching.com",
  location: "Lakshmipuram, Guntur",
  hours: "Open 8:00 AM – Close 8:00 PM",
  rating: "4.6",
  description: "ABC Coaching Centre offers expert training for competitive exams like NEET, IIT-JEE, and SSC.",
  category: "Education",
  menu: [
    { name: "📘 NEET Crash Course", cost: "₹12,000", rating: "4.7", image: "neet.webp" },
    { name: "📗 IIT-JEE Foundation", cost: "₹15,000", rating: "4.6", image: "iitjee.webp" },
    { name: "📙 SSC Preparation", cost: "₹8,000", rating: "4.5", image: "ssc.webp" },
    { name: "📕 Spoken English", cost: "₹5,000", rating: "4.4", image: "english.webp" }
  ]
},

sreedharscce: {
  name: "Sreedhar's CCE",
  image: "sreedharscce.webp",
  phone: "+91 91234 88888",
  email: "contact@sreedharscce.com",
  location: "Vaninikethan Building, Kaleswararao Road, Suryaraopet, Vijayawada",
  hours: "Open 9:00 AM – Close 9:00 PM",
  rating: "4.6",
  description: "Sreedhar's CCE provides coaching for Bank Clerks, POs, RRB, SSC, and LIC exams with experienced faculty and comprehensive study materials.",
  category: "Education",
  menu: [
    { name: "🏦 Bank PO/Clerk Coaching", cost: "₹10,000", rating: "4.8", image: "bank.webp" },
    { name: "🚆 RRB Exam Coaching", cost: "₹9,000", rating: "4.7", image: "rrb.webp" },
    { name: "📊 SSC CGL/CHSL Coaching", cost: "₹11,000", rating: "4.6", image: "ssc_cgl.webp" },
    { name: "📑 LIC Exam Coaching", cost: "₹8,500", rating: "4.5", image: "lic.webp" }
  ]
}
  

};

/* =====================
   CATEGORY PAGE
===================== */
function loadCategory(cat) {
  const list = document.getElementById("businessList");
  if (!list) return;

  list.innerHTML = "";

  const all = Object.entries(businessData).filter(([id, b]) => b.category === cat);
  all.forEach(([id, b]) => {
    const card = document.createElement("div");
    card.className = "business-card";
    card.innerHTML = `
      <h3>${b.name}</h3>
      <img src="${b.image}" alt="${b.name}" style="width:100%; border-radius:10px; margin:10px 0;">
      <p>⭐ ${b.rating}</p>
      <p>📍 ${b.location}</p>
      <a href="business.html?id=${id}" class="details-btn">View Details</a>
    `;
    list.appendChild(card);
  });
}

/* =====================
   BUSINESS DETAILS
===================== */
function loadBusinessDetails(id) {
  const data = businessData[id];
  if (!data) return;

  document.getElementById("businessName").textContent = data.name;
  document.getElementById("businessImage").src = data.image;
  document.getElementById("businessLocation").textContent = data.location;
  document.getElementById("businessEmail").textContent = data.email;
  document.getElementById("businessPhone").textContent = data.phone;
  document.getElementById("businessHours").textContent = data.hours;
  document.getElementById("businessRating").textContent = data.rating;
  document.getElementById("businessDesc").textContent = data.description;
}


/* =====================
   MENU PAGE
===================== */
let cart = [];

function loadMenuPage(id) {
  const data = businessData[id];
  if (!data) return;

  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  data.menu.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "menu-card-vertical";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>💰 ₹${item.cost}</p>
        <p>⭐ ${item.rating}</p>
        <button class="cart-btn" onclick="addToCart(${index}, '${id}')">Add to Cart</button>
      </div>
    `;
    menuList.appendChild(card);
  });
}

function addToCart(index, businessId) {
  const item = businessData[businessId].menu[index];
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.cost}`;
    cartList.appendChild(li);
    total += parseInt(item.cost);
  });

  cartTotal.textContent = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully! 🎉");
  cart = [];
  updateCart();
}
/* =====================
   LOAD ENTERTAINMENT / MOVIES
===================== */
function loadCategory(cat) {
  const list = document.getElementById("businessList");
  if (!list) return;

  list.innerHTML = "";

  // Fix for Entertainment category
  let categoryName = cat;
  if (cat.toLowerCase() === "entertainment") {
    categoryName = "Movies"; // match the category in businessData
  }

  const all = Object.entries(businessData).filter(
    ([id, b]) => b.category === categoryName
  );

  if (all.length === 0) {
    list.innerHTML = `<p style="padding:10px;">No businesses found in this category.</p>`;
    return;
  }

  all.forEach(([id, b]) => {
    const card = document.createElement("div");
    card.className = "business-card";
    card.innerHTML = `
      <h3>${b.name}</h3>
      <img src="${b.image}" alt="${b.name}" style="width:100%; border-radius:10px; margin:10px 0;">
      <p>⭐ ${b.rating}</p>
      <p>📍 ${b.location}</p>
      <a href="business.html?id=${id}" class="details-btn">View Details</a>
    `;
    list.appendChild(card);
  });
}
/* =====================
   LOAD CATEGORY PAGE
===================== */
function loadMenuPage(id) {
  const data = businessData[id];
  if (!data) return;

  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  data.menu.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "menu-card-vertical";

    if (data.category === "Food" || data.category === "Groceries") {
      // Food & Groceries → Cart flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>💰 ₹${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="addToCart(${index}, '${id}')">Add to Cart</button>
        </div>
      `;
    } else if (data.category === "Health Care") {
      // Health Care → Appointment flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>🩺 ${item.specialization || "Service"}</p>
          <p>💰 ${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="bookAppointment(${index}, '${id}')">Book Appointment</button>
        </div>
      `;
    } else if (data.category === "Movies") {
      // Movies → Ticket booking flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>🕒 ${item.showtime}</p>
          <p>💰 ${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="window.open('${item.bmsLink}', '_blank')">Book Ticket</button>
        </div>
      `;
    } else if (data.category === "Education") {
      // Education → Enrollment flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>💰 ₹${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="enrollCourse(${index}, '${id}')">Enroll</button>
        </div>
      `;
    }

    menuList.appendChild(card);
  });

  // Cart section only for Food/Groceries
  const cartSection = document.getElementById("cartSection");
  if (cartSection) {
    if (data.category === "Food" || data.category === "Groceries") {
      cartSection.style.display = "block";
    } else {
      cartSection.style.display = "none";
    }
  }
}
let appointments = [];

function bookAppointment(index, businessId) {
  const doctor = businessData[businessId].menu[index];
  const patientName = prompt("Enter your name:");
  const appointmentDate = prompt("Enter preferred date (DD/MM/YYYY):");
  const appointmentTime = prompt("Enter preferred time (e.g., 10:30 AM):");

  if (!patientName || !appointmentDate || !appointmentTime) {
    alert("Please provide all details to book an appointment.");
    return;
  }

  const booking = {
    doctor: doctor.name,
    specialization: doctor.specialization,
    hospital: businessData[businessId].name,
    patient: patientName,
    date: appointmentDate,
    time: appointmentTime,
    cost: doctor.cost
  };

  appointments.push(booking);
  updateAppointments();
}

function updateAppointments() {
  const list = document.getElementById("appointmentList");
  if (!list) return;

  list.innerHTML = "";
  appointments.forEach(app => {
    const li = document.createElement("li");
    li.textContent = `${app.doctor} (${app.specialization}) at ${app.hospital} for ${app.patient} on ${app.date} at ${app.time} — Fee: ${app.cost}`;
    list.appendChild(li);
  });
}

function confirmAppointments() {
  if (appointments.length === 0) {
    alert("No appointments booked yet!");
    return;
  }
  alert("Appointments confirmed successfully! ✅");
  appointments = [];
  updateAppointments();
}
function loadMenuPage(id) {
  const data = businessData[id];
  if (!data) return;

  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  data.menu.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "menu-card-vertical";

    if (data.category === "Food" || data.category === "Groceries") {
      // Food & Groceries → Cart flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>💰 ₹${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="addToCart(${index}, '${id}')">Add to Cart</button>
        </div>
      `;
    } else if (data.category === "Health Care") {
      // Health Care → Appointment flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>🩺 ${item.specialization || "Service"}</p>
          <p>💰 ${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="bookAppointment(${index}, '${id}')">Book Appointment</button>
        </div>
      `;
    } else if (data.category === "Movies") {
      // Movies → Ticket booking flow
      card.innerHTML = `
        <div>
          <h4>${item.name}</h4>
          <p>🎬 Language: ${item.language}</p>
          <p>🕒 Showtime: ${item.showtime}</p>
          <p>💰 Ticket Price: ${item.cost}</p>
          <p>⭐ Rating: ${item.rating}</p>
          <button class="cart-btn" onclick="window.open('${item.bmsLink}', '_blank')">Book Ticket</button>
        </div>
      `;
    } else if (data.category === "Education") {
      // Education → Enrollment flow
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>💰 ₹${item.cost}</p>
          <p>⭐ ${item.rating}</p>
          <button class="cart-btn" onclick="enrollCourse(${index}, '${id}')">Enroll</button>
        </div>
      `;
    }

    menuList.appendChild(card);
  });

  // Cart section only for Food/Groceries
  const cartSection = document.getElementById("cartSection");
  if (cartSection) {
    if (data.category === "Food" || data.category === "Groceries") {
      cartSection.style.display = "block";
    } else {
      cartSection.style.display = "none";
    }
    
  }
}
function loadCategory(cat) {
  const list = document.getElementById("businessList");
  if (!list) return;

  list.innerHTML = "";

  // Normalize category name
  let categoryName = cat;
  if (cat.toLowerCase() === "grocery") categoryName = "Groceries";
  if (cat.toLowerCase() === "coaching") categoryName = "Education";
  if (cat.toLowerCase() === "entertainment") categoryName = "Movies";

  const all = Object.entries(businessData).filter(([id, b]) => b.category === categoryName);

  if (all.length === 0) {
    list.innerHTML = `<p style="padding:10px;">No businesses found in this category.</p>`;
    return;
  }

  all.forEach(([id, b]) => {
    const card = document.createElement("div");
    card.className = "business-card";
    card.innerHTML = `
      <h3>${b.name}</h3>
      <img src="${b.image}" alt="${b.name}" style="width:100%; border-radius:10px; margin:10px 0;">
      <p>⭐ ${b.rating}</p>
      <p>📍 ${b.location}</p>
      <a href="business.html?id=${id}" class="details-btn">View Details</a>
    `;
    list.appendChild(card);
  });
}

function homeSearchDropdown() {
  const input = document.getElementById("homeSearch");
  const dropdown = document.getElementById("searchDropdown");

  if (!input || !dropdown) {
    console.log("Search elements not found");
    return;
  }

  const value = input.value.toLowerCase().trim();
  dropdown.innerHTML = "";

  if (value === "") {
    dropdown.style.display = "none";
    return;
  }

  const options = ["Food", "Health Care", "Entertainment", "Grocery", "Education"];

  const matched = options.filter(opt =>
    opt.toLowerCase().startsWith(value)
  );

  if (matched.length === 0) {
    dropdown.innerHTML = `<div style="padding:12px;color:#888;">❌ Not present here</div>`;
    dropdown.style.display = "block";
    return;
  }

  matched.forEach(text => {
    const div = document.createElement("div");
    div.textContent = text;
    div.style.padding = "12px";
    div.style.cursor = "pointer";

    div.onclick = () => {
      window.location.href = `category.html?cat=${encodeURIComponent(text)}`;
    };

    div.onmouseenter = () => div.style.background = "#f5f5f5";
    div.onmouseleave = () => div.style.background = "#fff";

    dropdown.appendChild(div);
  });

  dropdown.style.display = "block";
}


