# Training Page — Manual Tests

Covers the program filter on `/training` (`src/pages/Training.jsx`).

---

## Test 1 — Default state

**Steps**
1. Navigate to `/training`.

**Expected**
- All 3 program cards are visible: Foundation Program, Core Program, Comprehensive Program.
- The **All** button has the active style (`bg-slate-800 text-white`, pill shape).
- The Puppy, Basic, and Advanced buttons have the inactive style (white background, slate border).

---

## Test 2 — Puppy filter

**Steps**
1. Navigate to `/training`.
2. Click the **Puppy** button.

**Expected**
- Only the **Foundation Program** card (1 Week) is displayed.
- Core Program and Comprehensive Program cards are not rendered.
- The **Puppy** button becomes active; All, Basic, and Advanced become inactive.

---

## Test 3 — Basic filter

**Steps**
1. Navigate to `/training`.
2. Click the **Basic** button.

**Expected**
- Only the **Core Program** card (2 Weeks) is displayed.
- Foundation Program and Comprehensive Program cards are not rendered.
- The **Basic** button becomes active; All, Puppy, and Advanced become inactive.

---

## Test 4 — Advanced filter

**Steps**
1. Navigate to `/training`.
2. Click the **Advanced** button.

**Expected**
- Only the **Comprehensive Program** card (3 Weeks) is displayed.
- Foundation Program and Core Program cards are not rendered.
- The **Advanced** button becomes active; All, Puppy, and Basic become inactive.

---

## Test 5 — Return to All

**Steps**
1. Navigate to `/training`.
2. Click any level filter (e.g., **Basic**).
3. Click **All**.

**Expected**
- All 3 program cards are visible again.
- The **All** button is active; all level buttons are inactive.
- No "No programs found" message is shown.

---

## Test 6 — Active button styling

**Steps**
1. Navigate to `/training` (All is active by default).
2. Inspect the **All** button visually, then click **Puppy**.
3. Inspect both buttons after the click.

**Expected**
- Active button: dark background (`bg-slate-800`), white text, no visible border.
- Inactive buttons: white background, slate-colored text, visible rounded border.
- Exactly one button is active at any time; clicking a new button deactivates the previous one.

---

## Test 7 — Filter count matches program data

**Steps**
1. Navigate to `/training`.
2. Count the filter buttons rendered in the pill row.

**Expected**
- Exactly **4 buttons** are present: All, Puppy, Basic, Advanced.
- The three level buttons (Puppy, Basic, Advanced) correspond 1-to-1 with the `level` field on each entry in the `programs` array in `Training.jsx`.
- Adding or removing a program from that array should be the single source of truth for which level filters appear (validates data-driven button generation rather than a hardcoded list).
