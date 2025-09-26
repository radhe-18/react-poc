# TODO: Implement Product-Specific Redirects from ProductCard to ProductDetail

## Tasks
- [x] Update src/components/ProductCard.tsx: Change Link to use encodeURIComponent(title), remove id from props, add onClick to card div for whole card navigation
- [ ] Update src/pages/Home.tsx: Remove id={idx} prop from ProductCard usage
- [ ] Test: Run dev server and verify navigation works correctly

## Completed
- [x] Plan approved and broken down into steps

# TODO: Apply Theme-Based Changes to BuyForm Page

## Tasks
- [x] Update src/pages/BuyForm.tsx: Replace hardcoded Tailwind color classes with theme-based inline styles for backgrounds, text, borders, focus rings, and button styling
- [x] Test: Run dev server and verify theme switching applies correctly to BuyForm

## Completed
- [x] Plan approved and broken down into steps

# TODO: Update Banner Buttons to Use Theme-Based Styling Like ProductCard

## Tasks
- [x] Update src/pages/Home.tsx: Change the "Get Started" button in the banner section to use inline styles matching ProductCard's "Learn More" button (solid accent background, white text)
- [ ] Test: Run dev server and verify the button changes with theme switching

## Completed
- [x] Plan approved and broken down into steps
