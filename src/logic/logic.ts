export function isValidPhoneNumber(phoneNumber: string) {
    // Remove any non-digit characters from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned phone number is exactly 10 digits long
    // and if all characters are numeric
    if (/^\d{10}$/.test(cleanedPhoneNumber)) {
        return true;
    } else {
        return false;
    }
}

export function isValidEmail(email: string) {
    // Regular expression for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    }
}