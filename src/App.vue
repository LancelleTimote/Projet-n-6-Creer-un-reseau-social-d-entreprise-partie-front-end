<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
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
        button {
            cursor: pointer;
        }
        .container__vue {
            display: flex;
            flex-direction: column;
            min-height:100vh;
        }
        @media (min-width: 1440px) {
            .container {
                width: 1440px;
            }
        }
    }
    .animationZoomButton, .animationZoomInline, .animationZoomSimple {
        transition: transform 450ms;
    }
    .animationZoomInline:hover {
        display:inline-block;
    }
    .animationZoomButton:hover, .animationZoomInline:hover, .animationZoomSimple:hover {
        transform: scale(1.3); /*(130% zoom - si le zoom devient trop important il sort du viewport*/
    }
    .animationZoomButton:hover {
        border: 3px solid rgba(39, 72, 128, 1);
    }
</style>
