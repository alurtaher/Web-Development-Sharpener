// Define your list of items (name and description)
const items = [
  { name: "Item 1", description: "This is item 1 description." },
  { name: "Item 2", description: "Description for item 2." },
  // Add more items here
];

// Get references to the input box and item list
const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");

// Add event listener for input changes
searchInput.addEventListener("input", updateItemList);

// Function to update the displayed item list based on the search query
function updateItemList() {
  const query = searchInput.value.toLowerCase();

  // Clear the current list
  itemList.innerHTML = "";

  // Filter and display matching items
  items.forEach(item => {
      const itemName = item.name.toLowerCase();
      const itemDescription = item.description.toLowerCase();

      if (itemName.includes(query) || itemDescription.includes(query)) {
          // Create list item and description element
          const listItem = document.createElement("li");
          const description = document.createElement("p");
          
          listItem.textContent = item.name;
          description.textContent = item.description;

          // Append the description below the item name
          listItem.appendChild(description);

          // Append the list item to the list
          itemList.appendChild(listItem);
      }
  });
}

// Initial update of the item list
updateItemList();
