<template>
    <div class="home">
        <carousel3d :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'"
                    :controls-width="30" :controls-height="60">
            <slide v-for="(Slide,index) in SampleData" :index="index" :key="index">
                <img :src="Slide.Image"/>
                <p>{{Slide.Text}}</p>
            </slide>

        </carousel3d>

    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    import LogToTwitch from "@/shared/TwitchLogger";

    @Component({
        components: {},
    })
    export default class App extends Vue {
        SampleData = [
            {
                Text: " Integer rutrum libero a quam facilisis imperdiet. Vestibulum ac erat at metus mollis tempor et vitae mauris. Praesent at sodales ex. Maecenas molestie convallis metus nec posuere ",
                Image: 'https://picsum.photos/900/800'

            },
            {
                Text: " Integer rutrum libero ",
                Image: 'https://picsum.photos/500/200'

            },
            {
                Text: " Integer rutrum libero a quam facilisis imperdiet. Vestibulum ac erat at metus mollis tempor et vitae mauris. Praesent at sodales ex. Maecenas molestie convallis metus nec posuere ",
                Image: 'https://picsum.photos/400/600'

            },
            {
                Text: " Integer rutrum libero a quam facilisis imperdiet. ",
                Image: 'https://picsum.photos/500/400'

            },
            {
                Text: " Integer rutrum libero a quam facilisis imperdiet. Vestibulum ac erat at metus mollis tempor et vitae mauris. Praesent at sodales ex. Maecenas molestie convallis metus nec posuere ",
                Image: 'https://picsum.photos/200/700'

            },
            {
                Text: " Integer rutrum libero a quam facilisis imperdiet. ",
                Image: 'https://picsum.photos/700/300'

            },

        ]

        mounted() {
            LogToTwitch("Hello World", "adsfads")
        }
    }
</script>
