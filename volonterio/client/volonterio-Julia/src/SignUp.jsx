import React from 'react';

function SignUpForm() {
  return (
    <div>
      <h1>Sign up</h1>
      <form action="/submit" method="post">
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <label htmlFor="confirm_password">Confirm Password:</label><br />
        <input type="password" id="confirm_password" name="confirm_password" required /><br /><br />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default SignUpForm;
