export const checkValidData = (email, password) => {
   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   // Minimum eight characters, at least one letter and one number:
   const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
   console.log(email);

   if (!isEmailValid) {
      return "Enter a valid email";
   }
   if (!isPasswordValid) {
      return "Enter a valid password";
   }
   return null;
};
