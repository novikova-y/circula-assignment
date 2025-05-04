# Android – Error Message for Purpose Field Character Limit  
**Purpose**: Ensure proper validation and UI feedback when the 'Purpose' field exceeds the allowed character limit.  
**Scope**: Covers real-time validation, UI state changes, error messages, character counter behavior, CTA button states, interaction with the 'Recently Used' (suggestions) feature, localization, Android device versions, UX, and network error handling.
**Not covered**: Backend validation, iOS implementation, form submission for valid/invalid data unrelated to the "Purpose" field, analytics, accessibility.

**Preconditions**:  
- User is logged into the Android app.  
- User has access to a screen where they can add or edit the 'Purpose'.  
- The 'Purpose' field is visible and editable.  

---

### **Checklist**

#### 1. Initial state of the 'Purpose' field  
- **Expected Result**: The field should be empty, editable, and not show any character counter or error state by default.

#### 2. CTA button when the 'Purpose' field is empty
- **Expected Result**: If the 'Purpose' field is empty, the CTA button should be disabled.

#### 3. Suggestions visibility at 99 characters 
- **Expected Result**: The 'Recently used' suggestions should be visible and selectable if the 'Purpose' text length is 99 characters.

#### 4. CTA button when the 'Purpose' field has 99 characters
- **Expected Result**: The CTA button should be enabled.

#### 5. Suggestions visibility at 100 characters
- **Expected Result**: “Recently used” suggestions should still be visible and selectable.

#### 6. CTA button when the 'Purpose' field has 100 characters
- **Expected Result**: The CTA button should be enabled.

#### 7. Selecting suggestions 
- **Expected Result**: When a 'Recently used' suggestion is selected, it should fill the 'Purpose' field. No error should be shown. If the suggestion contains more than 500 characters, the character counter should appear. The CTA button should remain enabled.

#### 8. Suggestions after 100 characters  
- **Expected Result**: The “Recently used” section should not be visible or interactive.

#### 9. CTA button when the 'Purpose' field has more than 100 characters
- **Expected Result**: The CTA button should be enabled.

#### 10. Typing exactly 500 characters  
- **Expected Result**: A character counter should appear, displaying "500 / 1000".

#### 11. Reducing characters from 500 to 499  
- **Expected Result**: The character counter should disappear.

#### 12. Typing between 500 and 1000 characters  
- **Expected Result**: The character counter should increment accordingly. The field should remain in a normal state (not red, editable), and the CTA should remain enabled.

#### 13. Deleting characters between 1000 and 500 characters  
- **Expected Result**: The character counter should decrement accordingly. The field should remain in a normal state (not red, editable), and the CTA should remain enabled.

#### 14. Typing 999 characters  
- **Expected Result**: The character counter should display "999 / 1000", with no error state. The field remains editable and the CTA remains active.

#### 15. Typing 1000 characters  
- **Expected Result**: The character counter should display "1000 / 1000", with no error state. The field remains editable and the CTA remains active.

#### 16. Typing 1001 characters  
- **Expected Result**:  
  - The text should switch to an error (red) state.
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
- **Expected Result**: The field should be empty, editable, and should not display any character counter or error state.

#### 21. Proceeding with the flow after entering 99 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 22. Proceeding with the flow after entering 100 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 23. Proceeding with the flow after entering 499 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 24. Proceeding with the flow after entering 500 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 25. Proceeding with the flow after entering more than 500 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 26. Proceeding with the flow after entering 999 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 27. Proceeding with the flow after entering 1000 characters
- **Expected Result**: The CTA button should be clickable, and the user should proceed to the next screen.

#### 28. Entering the purpose, going back in the flow, and returning to the 'Purpose' field
- **Expected Result**: The entered text should remain saved and editable.

#### 29. Entering the purpose, proceeding in the flow, and returning to the 'Purpose' field
- **Expected Result**: The entered text should remain saved and editable.

#### 30. Interaction after exceeding the character limit
- **Expected Result**: After deleting characters to return below the limit, the user should be able to proceed without refreshing the screen.

#### 31. Field remains editable at all times
- **Expected Result**: The user should be able to continue editing even when the character count exceeds 1000.

#### 32. App stability with input over 1000 characters
- **Expected Result**: The app should not crash and there should be no layout issues.

#### 33. Pasting a large block of text (>1000 characters)  
- **Expected Result**: The error state should be triggered upon paste, and the CTA button should be disabled.

#### 34. Pasting a block of text and typing additional characters (499 characters pasted)  
- **Expected Result**: The character counter should only appear upon typing, and the CTA button should be enabled.

#### 35. Pasting a block of text and typing additional characters (999 characters pasted)  
- **Expected Result**: The error state should only be triggered upon typing, and the CTA button should become disabled.

#### 36. Scrollability for long text
- **Expected Result**: The field should support scrolling, allowing the user to view and edit the entire text.

#### 37. Keyboard interaction 
- **Expected Result**: The keyboard should appear and dismiss correctly when interacting with the input field.

#### 38. Cross-device consistency (Android versions, screen sizes)
- **Expected Result**: Field behavior, validation, error states, and suggestions should be consistent across devices and Android versions.

#### 39. Localization
- **Expected Result**: Field behavior, validation, error states, and suggestions should behave consistently across different language localizations.

#### 40. Behavior during network errors
- **Expected Result**: Validation, field behavior, and error messages should work as expected even during network issues.
