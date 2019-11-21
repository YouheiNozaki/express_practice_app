<div class='data-form'>
  <form acton='/users/create' method='POST'>
    <h2>Create a new user:</h2>
    <label for='inputFirstName'>First Name</label>
    <input
      type='text'
      name='first'
      id='inputFirstName'
      placeholder='First'
      autofocus
    />
    <label for='inputLastName'>Last Name</label>
    <input type='text' name='last' id='inputLastName' placeholder='Last' />
    <label for='inputPassword'>Password</label>
    <input
      type='password'
      name='password'
      id='inputPassword'
      placeholder='Password'
      required
    />
    <label for='inputEmail'>Email</label>
    <input
      type='email'
      name='email'
      id='inputEmail'
      placeholder='Email address'
      required
    />
    <label for='inputZipCode'>Zip Code</label>
    <input
      type='text'
      name='zipCode'
      id='inputZipCode'
      pattern='\d*'
      placeholder='Zip Code'
      required
    />
    <button type='submmit'>Sign in</button>
  </form>
</div>;
