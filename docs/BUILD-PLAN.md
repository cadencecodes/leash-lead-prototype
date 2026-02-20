# Build Plan

## Training Program Difficulty Filter

### Step 1 — Add filter button UI (HTML only)
Add three clickable buttons (Puppy, Basic, Advanced) plus an "All" option to the training page. No functionality yet — just make sure they look right and are placed where you want them.

### Step 2 — Style the filter buttons
Apply CSS so the buttons match your site's existing style. Include an "active" state so the selected filter looks visually distinct. Test by manually adding/removing the active class in dev tools.

### Step 3 — Tag your training program cards with a difficulty attribute
Add a `data-difficulty="puppy"` (or basic/advanced) attribute to each program card in your HTML. No JS yet — just verify the attributes are there by inspecting elements in the browser.

### Step 4 — Write the filter logic in JavaScript
Add a JS function that reads the clicked button's value, then shows/hides cards by comparing that value to each card's `data-difficulty`. Test each filter button and confirm the right cards appear and disappear.

### Step 5 — Handle the "All" button
Make sure clicking "All" removes any filtering and shows every card. Also set "All" as the default active state on page load.

### Step 6 — Add the active class toggle to buttons
Wire up the JS so clicking a filter button removes the active class from all buttons and adds it to the clicked one. This gives users clear visual feedback about which filter is selected.

### Step 7 — Test edge cases
Check what happens if a difficulty has only one card, or zero cards (e.g., no "Advanced" programs yet). Add a simple "No results" message that appears when a filter returns nothing.

### Step 8 — Cross-check on mobile
Resize the browser (or use dev tools device mode) to confirm the filter buttons don't overflow or stack awkwardly on small screens. Adjust CSS as needed.
