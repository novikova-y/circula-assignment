# iOS – Password Change: Strong Password Policy  
**Purpose**: Ensure validation, UI feedback, and navigation when a user changes their password using the new strong password policy on iOS. 
**Scope**: Covers input validation (old and new password), UI states, CTA button behavior, error/success messages, localization, and network error handling.
**Not covered**: Backend password rules, Android and web implementation, password reset flow (forgot password), accessibility, and analytics.

**Preconditions**:  
- User is logged into the iOS app.  
- User has access to the screen for changing their password.  
- Current (old) password input field, new password input field, and CTA button are visible.  

---

### **Checklist**

#### 1. Initial state of the password change screen  
- **Expected Result**:  
  - Both fields should be empty, editable, and have "Show/hide password" functionality (hidden by default).
  – New password rules should be written below the field ("Min. 8 characters", "At least 1 letter", "At least 1 number") and be grey.
  - The CTA button should be disabled.  
  - No validation/error messages should be displayed.

#### 2. Entering only the old password
- **Expected Result**:  
  - The new password field should remain empty.  
  - The CTA should remain disabled.

#### 3. Entering only the new password  
- **Expected Result**:  
  - If the old password is not entered, the CTA should remain disabled regardless of new password validity.
  – The fulfillment of the new password criteria should be reflected in the new password rules (green/grey color) upon typing.

#### 4. Pasting the new password  
- **Expected Result**:  The fulfillment of the new password criteria should be reflected in the new password rules (green/grey color) upon pasting.

#### 5. New password < 8 characters  
- **Expected Result**:  The password rule "Min. 8 characters" should remain grey, the CTA should remain disabled.

#### 6. New password ≥ 8 characters but contains only letters  
- **Expected Result**:  
  - "Min. 8 characters" rule should be green.
  - "At least 1 letter" rule should be green.
  - "At least 1 number" rule should remain grey.
  - The CTA should remain disabled.

#### 7. New password ≥ 8 characters but contains only numbers
- **Expected Result**:  
  - The password rule with 'min. 8 characters' should be green
  - The password rule with 'at least 1 letter' should remain grey
  - The password rule with 'at least 1 number' should be green
  - The CTA should remain disabled.

#### 8. New password with both letters and numbers (valid)  
- **Expected Result**:  
  - All password rules should be green.
  - If the old password is also filled in, the CTA should become enabled.

#### 9. Show/hide current (old) password icon  
- **Expected Result**: The typed password should be shown/hidden.

#### 10. Show/hide new password icon  
- **Expected Result**: The typed password should be shown/hidden.

#### 11. Entering correct old password + invalid new password  
- **Expected Result**:  
  - The fulfillment of the new password criteria should be reflected in the new password rules.
  - CTA should remain disabled.

#### 12. Entering correct old password + valid new password
- **Expected Result**:  
  - The fulfillment of the new password criteria should be reflected in the new password rules. 
  - CTA should become active.

#### 13. Proceeding with correct old password + valid new password 
- **Expected Result**: User should be shown a success "Your password was updated" message, and be navigated to the settings page.

#### 14. Signing in with the new password after the password change  
- **Expected Result**: The user should be able to log in with the new password.

#### 15. Changing the password after the password change
- **Expected Result**: The user should enter the last set password as the current (old) one.

#### 16. Old users and new password rules
- **Expected Result**: Users with old passwords not fulfilling the new rules criteria should be able to sign in to the app without issues.

#### 17. Very long old and new passwords
- **Expected Result**:  
  - The app should not crash or freeze.
  - Password rules should be evaluated correctly for the new password.
  - Server should validate the old password.
  - If valid, the CTA should become active.

#### 18. Boundary password lengths
- **Expected Result**:  
  - The app should not crash or freeze.
  - User should be able to enter a very long password (e.g., up to 256 characters) — it should be accepted if it meets all validation rules.
  - Password rules should be evaluated correctly for the new password.  
  - Server should validate the old password.
  - If valid, the CTA should become active.

#### 19. New password same as old password
- **Expected Result**:  
  - If the new password matches the current password and it meets all the new password criteria, an error message "New password must be different from the current one." should be shown.
  - The CTA should remain disabled.

#### 20. Tapping CTA with valid new password and incorrect old password
- **Expected Result**:  
  - Server should validate the old password.  
  - Error message "Your password is incorrect, please check it" should be displayed.
  - The user should remain on the same screen.

#### 21. App stability after tapping CTA with valid new password and incorrect old password
- **Expected Result**: The app should not crash.

#### 22. Network error when tapping CTA
- **Expected Result**:  An appropriate network error message should be shown, the screen should remain on the password change page.

#### 23. Editing the new password after triggering an error  
- **Expected Result**:  
  - The password rules validation should change upon typing, CTA should update accordingly.

#### 24. Editing the old password after an incorrect submission
- **Expected Result**:  
  - The error should be cleared.  
  - The CTA should be disabled until valid input is filled into both fields.

#### 25. Field should remain editable all the time  
- **Expected Result**:  The user should always be able to type into or edit both fields regardless of validation states.

#### 26. Navigating back from the 'Change Password' screen
- **Expected Result**:  The user should be able to navigate back to the 'Settings' screen.

#### 27. Keyboard interaction
- **Expected Result**: The keyboard should open automatically when tapping a field and should dismiss after submission or tapping outside the field.

#### 28. Paste interaction in the new password field
- **Expected Result**: Paste should work correctly, and validation should run immediately on pasted values.

#### 29. Autocorrect and auto-capitalization  
- **Expected Result**: Both should be disabled in password fields.

#### 30. Cross-device and iOS version consistency  
- **Expected Result**:  All validations, error/success states, and UI behaviors should work consistently across all supported iOS versions and device sizes.

#### 31. Localization  
- **Expected Result**: UI elements, error messages, and success states must adapt correctly to the selected system language.


