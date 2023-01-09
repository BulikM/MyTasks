<template>
  <nav>
    <router-link to="/">Board</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(217, 67, 152);
}

nav a.router-link-exact-active {
  color: rgb(217, 67, 152);
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
