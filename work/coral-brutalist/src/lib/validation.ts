/**
 * Email validation regex pattern
 * Matches standard email format: user@domain.tld
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Validates an email address
 * @param email - The email string to validate
 * @returns true if email is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}

/**
 * Validates a phone number (basic format)
 * Accepts: +1-555-123-4567, (555) 123-4567, 5551234567, etc.
 */
export const PHONE_REGEX =
  /^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/

/**
 * Validates a phone number
 * @param phone - The phone string to validate
 * @returns true if phone is valid, false otherwise
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || phone.trim() === "") return true // Optional field
  return PHONE_REGEX.test(phone.replace(/\s/g, ""))
}

/**
 * Sanitizes a string for display (trims whitespace)
 * @param str - The string to sanitize
 * @returns Trimmed string
 */
export function sanitizeInput(str: string): string {
  return str.trim()
}

/**
 * Validates required field is not empty
 * @param value - The value to check
 * @returns true if not empty, false otherwise
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}
