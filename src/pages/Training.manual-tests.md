# Training Filter — Manual Tests

Navigate to `/training` in the running app before starting.

---

## 1. Default state

**Steps:** Load the page without interacting with any filter button.

**Expected:**
- The **All** button has a dark (slate-800) background with white text
- All 3 program cards are visible: Foundation Program, Core Program, Comprehensive Program
- The empty-state message ("No programs found…") is **not** shown

---

## 2. Puppy filter

**Steps:** Click the **Puppy** button.

**Expected:**
- The **Puppy** button becomes active (dark background, white text)
- The **All** button returns to the outlined/inactive style
- Only **Foundation Program** (1 Week) is shown
- Core Program and Comprehensive Program are **not** shown
- The empty-state message is **not** shown

---

## 3. Basic filter

**Steps:** Click the **Basic** button.

**Expected:**
- The **Basic** button becomes active
- Only **Core Program** (2 Weeks) is shown
- Foundation Program and Comprehensive Program are **not** shown

---

## 4. Advanced filter

**Steps:** Click the **Advanced** button.

**Expected:**
- The **Advanced** button becomes active
- Only **Comprehensive Program** (3 Weeks) is shown
- Foundation Program and Core Program are **not** shown

---

## 5. Return to All

**Steps:** With any specific filter active, click **All**.

**Expected:**
- The **All** button becomes active again
- All 3 program cards are visible

---

## 6. Active button styling

**Steps:** Click each filter button one at a time and inspect its appearance.

**Expected for the active button:** dark slate background, white text, no visible border
**Expected for inactive buttons:** white background, slate text, visible border, hover darkens border and text

---

## 7. Filter count matches program data

**Steps:** Count the filter buttons rendered on the page.

**Expected:** Exactly **4 buttons** — All, Puppy, Basic, Advanced — one for "All" plus one per program level (buttons are derived from program data, not hardcoded)
