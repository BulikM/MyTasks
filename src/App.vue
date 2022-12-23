<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/board">Board</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(217, 67, 152);
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  overflow: hidden;
}

input {
  border: none;
  font-size: 15px;
  outline: none;
}
::placeholder {
  color: rgb(217, 67, 152);
}
.bg-pink {
  background-color: rgba(247, 211, 235, 1);
}
</style>
