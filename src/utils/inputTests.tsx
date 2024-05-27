export const passwordCheck = (password: string): boolean => {
  const minLength = 8;
  const maxLength = 16;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength && password.length <= maxLength
    && hasLetter
    && hasNumber
    && hasSpecialChar
  );
};
