<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
    //base.scss
    body {
		margin:0;
        font-family: Arial, Verdana, 'Times New Roman', Tahoma, sans-serif;
        main {
            background-image: url(assets/building_1.jpg);
            background-size: cover;
            flex-grow:1;
        }
        p, a {
            color: rgba(255, 255, 255, 1);
        }
        a {
            text-decoration: none;
        }
        a:hover {
            color: rgba(39, 72, 128, 1);
        }
        p {
            margin: 0;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        @media (min-width: 1440px) {
            .container {
                width: 1440px;
            }
        }
    }
</style>
