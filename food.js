<script>
  function showDetails(place) {
    const details = {
      spicyhub: {
        name: "SpicyHub",
        location: "📍 MG Road, Guntur",
        rating: "⭐ 4.4",
        open: "⏰ 11:00 AM",
        close: "⏰ 11:00 PM",
        email: "📧 contact@spicyhub.com",
        contact: "📞 +91 98765 43210",
        image: "spicyhub.jpg"
      }
    }

    const data = details[place];
    const box = document.getElementById("details-box");
    box.innerHTML = `
      <img src="${data.image}" alt="${data.nameconst searchOptions = [
  { name: "Food", category: "Food", link: "category.html?cat=Food" },
  { name: "Health Care", category: "Health Care", link: "category.html?cat=Health Care" },
  { name: "Entertainment", category: "Movies", link: "category.html?cat=Entertainment" },
  { name: "Grocery", category: "Groceries", link: "category.html?cat=Grocery" },
  { name: "Education", category: "Education", link: "category.html?cat=Education" }
];

function homeSearchDropdown() {
  const input = document.getElementById("homeSearch").value.toLowerCase();
  const dropdown = document.getElementById("searchDropdown");

  dropdown.innerHTML = "";

  if (input === "") {
    dropdown.style.display = "none";
    return;
  }

  const matches = searchOptions.filter(opt =>
    opt.name.toLowerCase().startsWith(input)
  );

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div style="padding:12px; color:#999;">
        ❌ Not present here
      </div>`;
    dropdown.style.display = "block";
    return;
  }

  matches.forEach(opt => {
    const item = document.createElement("div");
    item.style.padding = "12px";
    item.style.cursor = "pointer";
    item.innerHTML = opt.name;

    item.onclick = () => {
      window.location.href = opt.link;
    };

    item.onmouseover = () => item.style.background = "#f2f2f2";
    item.onmouseout = () => item.style.background = "#fff";

    dropdown.appendChild(item);
  });

  dropdown.style.display = "block";
}
}" />
      <div class="food-info">
        <h3>${data.name}</h3>
        <p>${data.location}</p>
        <p>${data.rating}</p>
        <p>${data.open} – ${data.close}</p>
        <p>${data.email}</p>
        <p>${data.contact}</p>
        <button onclick="alert('Menu coming soon')">View Menu</button>
      </div>
    `;
    box.style.display = "flex";
  }
</script>