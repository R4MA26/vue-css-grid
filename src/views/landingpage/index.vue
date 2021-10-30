<template>
  <!-- <h1>Rama Ismaya S</h1> -->
  <div class="container">
    <nav>
      <img src="../img/logo R-01.png" alt="gambar" width="80" />
      <ul>
        <li><a href="">MENU 1</a></li>
        <li><a href="">MENU 2</a></li>
        <li><a href="">MENU 3</a></li>
        <li><a href="">MENU 4</a></li>
      </ul>
      <div>
        <a href="">LOGIN</a>
        <button><a href="">SIGINUP</a></button>
      </div>
    </nav>
    <div class="content1">
      <img src="../img/ilustrasi.png" alt="ilustrasi" width="550" />
    </div>
    <div class="content2">
      <p>WALCOME TO MY WEBSITE</p>
      <p>INTODUCING MY NAME</p>
      <p>RAMA ISMAYA SOFYAN!</p>
      <div>
        <button>GET STARTED</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 1fr;
  grid-template-areas:
    "nav nav"
    "content1 content2";
  gap: 5px;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: nav;
  /* background-color: aqua; */
  margin: 0 10px;
}

nav ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li {
  margin: 0 20px;
}

nav div a {
  text-decoration: none;
  color: white;
  margin: 0 10px;
}

nav div button {
  background-color: aqua;
  padding: 8px;
  cursor: pointer;
}

nav div button a {
  color: black;
}

div.content2 button {
  background-color: aqua;
  border-radius: 20px;
  padding: 10px 30px;
  cursor: pointer;
}

div.content2 p {
  margin: 20px 0;

  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}

.content1 {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: content1;
  /* background-color: blue; */
}

.content2 {
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap; */
  justify-content: center;
  align-items: center;
  grid-area: content2;
  /* background-color: brown; */
}

/* responsive breakpoint */
@media only screen and (max-width: 550px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 1fr;
    grid-template-areas:
      "nav"
      "content1"
      "content2";
  }
}
</style>
