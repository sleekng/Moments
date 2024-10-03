<template>
    <div class="link-list">
      <h2>Navigation Links</h2>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/wishlist">Wishlist</router-link></li>
        <li><router-link to="/friends">Friends</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/create-option">Create Option</router-link></li>
        <li><router-link to="/forgot-password">Forgot Password</router-link></li>
        <li><router-link to="/reset-password">Reset Password</router-link></li>
        <li><router-link to="/verification-sent">Verification Sent</router-link></li>
        <li><router-link to="/sign-up">Sign Up</router-link></li>
        <li><router-link to="/sign-up-2">Sign Up 2</router-link></li>
        <!-- Optional: Not Found Link -->
        <li><router-link to="/not-found">Not Found</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavigationLinks',
  };
  </script>
  
  <style scoped>
  .link-list {
    font-family: 'Mukta', sans-serif;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  router-link {
    text-decoration: none;
    color: #3b82f6; /* Link color */
    font-weight: bold;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  