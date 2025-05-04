# Title: Android – Error Message for Purpose Field Character Limit  
**Purpose**: Ensure proper validation and UI feedback when the 'Purpose' field exceeds the allowed character limit.  
**Scope**: Covers real-time validation, UI state changes, error messages, character counter behavior, CTA button states, and interaction with the 'Recently Used' (suggestions) feature, localization, android device versions, UX, network error handling.
**Not covered**: Backend validation, iOS implementation, form submission for valid/invalid data unrelated to the "Purpose" field, analytics, accessibility.

**Preconditions**:  
- User is logged into the Android app.  
- User has access to a screen where they can add or edit the 'Purpose'.  
- The 'Purpose' field is visible and editable.  

---

### **Checklist Body**

#### 1. Initial state of the 'Purpose' field  
- **Expected Result**: The field should be empty, editable, and not show any character counter or error state by default.

#### 2. The CTA button if the 'Purpose' field is empty
- **Expected Result**: If the 'Purpose' field is empty, the CTA button should be disabled.

#### 3. Suggestions visibility is 99 characters  
- **Expected Result**: The 'Recently used' suggestions should be visible and selectable if the 'Purpose' text length is 99 characters.

#### 4. The CTA button if the 'Purpose' field is 99 characters 
- **Expected Result**: If the 'Purpose' field is 99 characters, the CTA button should be enabled.

#### 5. Suggestions visibility at 100 characters  
- **Expected Result**: “Recently used” suggestions should still be visible and selectable.

#### 6. The CTA button if the 'Purpose' field is 100 characters 
- **Expected Result**: If the 'Purpose' field is 100 characters, the CTA button should be enabled.

#### 7. Selecting suggestions 
- **Expected Result**: One of the 'Recently used' suggestions should fill the 'Purpose' field if selected. No error should be present. If the suggestion is more than 500 characters, the character counter should be shown. The CTA button should be enabled.

#### 8. Suggestions after 100 characters  
- **Expected Result**: The “Recently used” section should not be visible and selectable; no interaction should be possible.

#### 9. The 'Submit' button if the 'Purpose' field is after 100 characters 
- **Expected Result**: If the 'Purpose' field is after 100 characters, the CTA button should be enabled.

#### 10. Typing exactly 500 characters  
- **Expected Result**: A character counter should appear, displaying "500 / 1000".

#### 11. Reducing characters from 500 to 499  
- **Expected Result**: A character counter should disappear.

#### 12. Typing between 500 and 1000 characters  
- **Expected Result**: The character counter should increment accordingly, and the field should remain in a normal state (not red, editable). CTA remains enabled.

#### 13. Deleting characters between 1000 and 500 characters  
- **Expected Result**: The character counter should decrement accordingly, and the field should remain in a normal state (not red, editable). CTA remains enabled.

#### 14. Typing 999 characters  
- **Expected Result**: The character counter should display "999 / 1000", with no error state. Field remains editable, and CTA remains active.

#### 15. Typing 1000 characters  
- **Expected Result**: The character counter should display "1000 / 1000", with no error state. Field remains editable, and CTA remains active.

#### 16. Typing 1001 characters  
- **Expected Result**:  
  - The text should switch to a red error state.  
  - The character counter should display "1001 / 1000" and turn red.  
  - The CTA button should be disabled.

#### 17. Reducing characters from 1001 to 1000 
- **Expected Result**:   
  - The text should return to normal style.
  - The character counter should display "1000 / 1000" and return to normal style.  
  - CTA should be re-enabled.

#### 18. Reducing characters from 1001 to 500 
- **Expected Result**:
  - The text should return to normal style.
  - The character counter should display "500 / 1000" and return to normal style.  
  - CTA should be re-enabled.

#### 19. Reducing characters from 1001 to 499 
- **Expected Result**:
  - The text should return to normal style.
  - The character counter should not be displayed.  
  - CTA should be re-enabled.

#### 20. Clearing the field
- **Expected Result**: The field should be empty, editable, and not show any character counter or error state.

#### 21. Proceeding with the flow after entering 99 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 22. Proceeding with the flow after entering 100 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 23. Proceeding with the flow after entering 499 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 24. Proceeding with the flow after entering 500 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 25. Proceeding with the flow after entering more than 500 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 26. Proceeding with the flow after entering 999 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 27. Proceeding with the flow after entering 1000 characters
- **Expected Result**: The CTA button should be clickable. The user should proceed to the next screen.

#### 28. Entering the purpose, going back in the flow and going back to the 'Purpose' field
- **Expected Result**: The entered text should be saved and editable.

#### 29. Entering the purpose, going forward in the flow and going back to the 'Purpose' field
- **Expected Result**: The entered text should be saved and editable.

#### 30. Interaction after exceeding the character limit  
- **Expected Result**: If user deletes text, he should be able to proceed without need to refresh the screen.

#### 31. Field remains editable at all times  
- **Expected Result**: The user should be able to continue editing even when the character count is over 1000.

#### 32. The app should not crash if the 'Purpose' input is more than 1000 characters  
- **Expected Result**: No UI layout breaks should be present.

#### 33. Pasting a large block of text (>1000 characters)  
- **Expected Result**: Error state should be triggered upon paste, the CTA button should be disabled.

#### 34. Pasting a block of text and typing some characters with the keyboard (499 characters)  
- **Expected Result**: Character counter should be triggered only upon typing, the CTA button should be enabled.

#### 35. Pasting a block of text and typing some characters with the keyboard (999 characters)  
- **Expected Result**: Error state should be triggered only upon typing, the CTA button should become disabled.

#### 36. Scrollability if the text is longer than 1 screen  
- **Expected Result**: The text can be scrolled to the top and to the end to be edited.

#### 37. Keyboard interaction 
- **Expected Result**: The keyboard should be triggerable and toggable while focusing on the input field.

#### 38. Cross-device consistency (Android versions, different screen sizes)  
- **Expected Result**: The field behavior, validation, error state, and suggestions visibility should behave consistently across various Android screen sizes and android versions.

#### 39. App and validation localization 
- **Expected Result**: The field behavior, validation, error state, and suggestions visibility should behave consistently acrosss different language localizations.
