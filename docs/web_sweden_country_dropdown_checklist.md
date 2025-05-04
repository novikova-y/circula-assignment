# New Sweden Option in Country Dropdown (Step 3 of Sign-up)
**Purpose**: Ensure the ‘Sweden’ option was added to the “Where’s your company registered?” dropdown  
**Scope**: Covers UI behavior, default selection, value persistence, validation errors, and correct data storage and retrieval (e.g., saving to the database and displaying in the user profile), cross-browser compatibility, mobile responsiveness, and functionality across major devices.
**Not covered**: Backend validation, API calls (done on the client), localization, validation of the 'Company name' and 'How did you hear about us?' fields, analytics.

**Preconditions**: User has completed Step 1 (Email, Password) and Step 2 (Name, Last Name, Phone)  

---

### **Checklist**

#### 1. Section title
- **Expected Result**: The section title on Step 3 should be: *Company information*.

#### 2. Fields on Step 3
- **Expected Result**: The fields on Step 3 should be:
  - *Company name*
  - *Where’s your company registered?*
  - *How did you hear about us?*
  - *Back* and *Create an Account* buttons

#### 3. Visibility of dropdown
- **Expected Result**: The "Where’s your company registered?" dropdown should be visible, clickable and expandable.

#### 4. Default country
- **Expected Result**: Germany is selected by default in the dropdown when Step 3 is opened, and the user should be able to change it.

#### 5. Dropdown opening
- **Expected Result**: Clicking on the dropdown should open the full list of countries.

#### 6. Country list contains the 'Sweden' option
- **Expected Result**: The list should contain the 'Sweden' option.

#### 7. Scrolling to find the 'Sweden' option
- **Expected Result**: User should be able to scroll to find the 'Sweden' option.

#### 8. Search for the 'Sweden' option
- **Expected Result**: User should be able to clear the field and enter 'Swe' to find 'Sweden'.

#### 9. Selecting the 'Sweden' option
- **Expected Result**: Clicking on 'Sweden' should select it and display it in the field.

#### 10. Selecting the 'Sweden' option does not cause layout or logic issues
- **Expected Result**: Choosing Sweden should not lead to UI layout breaks, errors, or logic issues.

#### 11. Option persistence
- **Expected Result**: The selected option 'Sweden' should not disappear after selection.

#### 12. Form submission with empty country field
- **Expected Result**: Form should not be submitted if the field is empty (the error message *"Company registration country is required"* is shown).

#### 13. Form submission (the 'Sweden' option is selected)
- **Expected Result**: After selecting 'Sweden', the form can be submitted successfully (if other mandatory fields are not empty and valid).

#### 14. The 'Back' button behavior
- **Expected Result**: After selecting 'Sweden', the user should be able to click the *Back* button, then return to Step 3 again, and 'Sweden' should remain selected.

#### 15. Form submission (other country selected)
- **Expected Result**: After selecting an option other than 'Sweden', the form can be submitted successfully (if other mandatory fields are not empty and valid).

#### 16. Saving the 'Sweden' option in the database  
- **Expected Result**: After selecting 'Sweden' and successfully submitting the form, the value stored in the database for the "Company registration country" field should be 'Sweden'.

#### 17. Saving the option other than 'Sweden' in the database  
- **Expected Result**: After selecting the option other than 'Sweden' and successfully submitting the form, the value stored in the database for the "Company registration country" field should be the one selected.

#### 18. Display of the 'Sweden' option in user profile after sign-in  
- **Expected Result**: After completing sign-up with 'Sweden' selected, the user should see 'Sweden' displayed in the "Company registration country" field of their profile.

#### 19. Display of the option other than 'Sweden' in user profile after sign-in  
- **Expected Result**: After completing sign-up with the option other than 'Sweden' selected, the user should see selected option displayed in the "Company registration country" field of their profile.

#### 20. Dropdown behavior on major browsers (Chrome, Safari, Firefox – desktop; other browsers can be considered if used by users)
- **Expected Result**: The dropdown should be displayed correctly, expand on click, allow selection, and display the selected option in all tested browsers after the *Sweden* was added.

#### 21. Dropdown visibility and selection on mobile devices (iOS Safari/Chrome, Android Chrome)
- **Expected Result**: The dropdown should be accessible, scrollable, and allow selection of *Sweden* on major mobile browsers and devices.

#### 22. Tablet layout behavior (optional)
- **Expected Result**: If tablets are part of the supported platforms, we should verify that the dropdown is visible, usable, and the layout is not broken on common tablet screen sizes (e.g., iPad, Android tablets).

---