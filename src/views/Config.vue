<template>
    <div class="home" id="main">
        <header class="major ">
            <h2>Config</h2>
        </header>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import LogToTwitch from "@/shared/TwitchLogger";
    import {TwitchConfig} from "@/shared/TwitchLogger";

    @Component({
        components: {},
    })
    export default class Config extends Vue {
        ConfigObject = null;

        mounted() {
            this.ConfigObject = TwitchConfig;
            debugger;
            LogToTwitch(this.ConfigObject)

        }
    }
</script>
<style>
    .carousel-3d-container figure {
        margin: 0;

    }

    .carousel-3d-container figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
    }

    .actions {
        max-width: 260px;
    }

    #main {
        max-width: 100%;
    }

</style>
