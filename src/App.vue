<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    * {
        list-style: none;
        outline: none;
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    /* 设置滚动条的样式 */
    ::-webkit-scrollbar {
        width: 6px;
    }

    /* 滚动槽 */
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
        border-radius: 3px;
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: rgba(0, 176, 96, 0.5);
        -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 3px;
        background: rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
        background-image: -webkit-gradient(linear, 40% 0%, 75% 84%, from(#00b362), to(#00b362), color-stop(.6, #54DE5D));
    }

/*    ::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(255, 0, 0, 1);
    }*/

</style>
