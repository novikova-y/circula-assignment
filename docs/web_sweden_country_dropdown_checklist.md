# Title: New Sweden Option in Country Dropdown (Step 3 of Sign-up)
**Purpose**: Ensure the ‘Sweden’ option was added to the “Where’s your company registered?” dropdown  
**Scope**: Covers UI behavior, default selection, value persistence, validation errors, and correct data storage and retrieval (e.g., value saved to DB and shown in user profile).
Not covered: Backend validation, API calls (done on the client), localization, validation of the 'Company name' and 'How did you hear about us?' fields, responsive design and functionality as it was stated 'Web' on the ticket, analytics.
**Preconditions**: User has completed Step 1 (Email, Password) and Step 2 (Name, Last Name, Phone)  

---

### **Checklist Body:**

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
- **Expected Result**: The dropdown should have *Germany* selected by default, and the user should be able to change it.

#### 5. Dropdown opening
- **Expected Result**: Clicking on the dropdown should open the full list of countries.

#### 6. Country list contains the 'Sweden' option
- **Expected Result**: The list should contain the *Sweden* option.

#### 7. Scrolling to find the 'Sweden' option
- **Expected Result**: User should be able to scroll to find the *Sweden* option.

#### 8. Search for the 'Sweden' option
- **Expected Result**: User should be able clear the field and enter *Swe* to find *Sweden*.

#### 9. Selecting the 'Sweden' option
- **Expected Result**: Clicking on *Sweden* should select it and display it in the field.

#### 10. Option persistence
- **Expected Result**: The selected option *Sweden* should not disappear after selection.

#### 11. Form submission with empty country field
- **Expected Result**: Form should not be submitted if the field is empty (the error message *"Company registration country is required"* is shown).

#### 12. Form submission (the 'Sweden' option is selected)
- **Expected Result**: After selecting *Sweden*, the form can be submitted successfully (if other mandatory fields are not empty and valid).

#### 13. The 'Back' button behavior
- **Expected Result**: After selecting *Sweden*, the user should be able to click the *Back* button, then return to Step 3 again, and *Sweden* should remain selected.

#### 14. Form submission (other country selected)
- **Expected Result**: After selecting an option other than *Sweden*, the form can be submitted successfully (if other mandatory fields are not empty and valid).

#### 15. Saving the 'Sweden' option in the database  
- **Expected Result**: After selecting *Sweden* and successfully submitting the form, the value stored in the database for the "Company registration country" field should be *Sweden*.

#### 16. Display of the 'Sweden' option in user profile after sign-in  
- **Expected Result**: After completing sign-up with *Sweden* selected, the user should see *Sweden* displayed in the "Company registration country" field of their profile.

---