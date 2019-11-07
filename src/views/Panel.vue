<template>
    <div class="home" id="main">
        <header class="major " v-if="CurrentBroadcaster">
            <h2>{{CurrentBroadcaster}}</h2>
        </header>
        <p v-if="StoreNotSetup"> This store is not yet set up. Please check back later!</p>
        <carousel3d ref="mycarousel" v-if="Slides.length >0"
                    :on-slide-change="onSlideChanged"
                    :perspective="180"

                    :autoplayTimeout="15000"
                    :display="1"
                    :autoplay="ShouldAutoPlay"
                    :autoplayHoverPause="true"


        >
            <slide v-for="(Slide,index) in Slides" :index="index"
                   :key="index">

                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">

                    <a target="_blank"
                       :href="GetCurrentLink">

                        <v-lazy-image :alt="Slide.title" :data-index="index"
                                      class="Image"
                                      :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
                                      :src="Slide.images[0].src">

                        </v-lazy-image>
                    </a>
                </template>

            </slide>

        </carousel3d>
        <div class="col-12 align-center" v-if="CurrentSlide">
            <h2><a target="_blank"
                   :href="GetCurrentLink">
                {{CurrentSlide.title}} {{GetPrice(CurrentSlide)}}</a>
            </h2>
        </div>

        <button @click="Prev" v-if="CurrentSlide">Prev</button>

        <button @click="NextSlide" v-if="CurrentSlide" style="float:right">Next</button>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LogToTwitch, {TwitchUser} from "@/shared/TwitchLogger";


    @Component({
        components: {},
    })
    export default class Panel extends Vue {
        StoreUrl = 'https://streamer-boutique-dev.myshopify.com';
        StoreNotSetup = false;

        onSlideChanged(indx: number) {
            this.CurrentIndex = indx;
        }

        get GetCurrentLink() {

            return `https://streamer.boutique/redirectstore={{StoreUrl}}&product=${this.CurrentSlide.handle}`
        }

        get CurrentSlide() {
            return this.Slides[this.CurrentIndex]
        }

        get Slides() {
            if (!this.products) return [];

            return this.products.filter(A => A.images.length > 0 && A.variants.length > 0);
        }

        get MaxWidth() {
            return 290;
        }

        get CurrentBroadcaster() {
            if (!this.$store.state.TwitchBroadCaster) return null;
            return this.$store.state.TwitchBroadCaster.login;
        }

        LastClick = +(new Date())

        get ShouldAutoPlay() {
            const now = +(new Date());
            if (now - this.LastClick > 15000) {
                return true;
            }
            return false;
        }

        Prev() {
            this.LastClick = +(new Date())
            if (this.CurrentIndex > 0) {
                this.$refs.mycarousel.goSlide(this.CurrentIndex - 1);
            } else {
                this.$refs.mycarousel.goSlide(this.Slides.length - 1);
            }
        }

        GetPrice(Product) {
            return Product.variants[0].price;
        }

        NextSlide() {
            this.LastClick = +(new Date())
            if (this.CurrentIndex >= this.Slides.length - 1) {
                this.$refs.mycarousel.goSlide(0);
            } else {
                this.$refs.mycarousel.goSlide(this.CurrentIndex + 1);
            }
        }

        GetHeight() {
            if (this.Slides.length === 0) return 0;
            var Image = this.Slides[this.CurrentIndex].images[0];
            var WidthRatio = this.MaxWidth / Image.width;
            return Image.height * WidthRatio;
        }

        CurrentIndex = 0;

        SlideClicked(e) {
            debugger;
            console.log(this.CurrentIndex);
        }


        products = []

        mounted() {
            (window as any).Twitch.ext.onAuthorized(async (auth: any) => {
                LogToTwitch(auth);
                console.log(auth);
                this.$store.commit('SetToken', auth.Token)
                //var GetCurrentUser = await this.Api('/helix/users?id=44322889', 'GET')
                const GetCurrentUser = await this.TwitchApi(`https://api.twitch.tv/helix/users?id=${auth.channelId}`, 'GET', null);
                const ReturnedData = GetCurrentUser.data;
                const User: TwitchUser = (ReturnedData[0] as TwitchUser);
                this.$store.commit('SetBroadCaster', User);
                this.LoadData(User.login);
            })


        }

        async TwitchApi(ApiUrl: string, Method: string, Payload: any) {
            var Resp = await fetch(ApiUrl, {
                body: Payload,
                method: Method,
                headers: {
                    'Client-ID': this.$store.state.ClientID,
                }
            });
            return await Resp.json();
        }

        async EBSApi(ApiUrl: string, Method: string) {
            var Resp = await fetch(ApiUrl, {

                method: Method,
                headers: {
                    'x-extension-jwt': this.$store.state.TwitchToken,
                }
            });
            return await Resp.json();
        }

        async LoadData(UserID: any) {
            try {

                const Formed = await fetch(`https://s3.us-east-2.amazonaws.com/streamer.boutique/${UserID}/Shop.json`, {
                    headers: {
                        'Origin': 'http://localhost:5050'
                    },
                    method: 'GET',
                })


                this.products = await Formed.json();
            } catch (E) {
                this.StoreNotSetup = true;
                console.log(E);
            }
        }


    }
</script>
<style>


    #main {
        max-width: 100%;
    }

    .actionbuttons {
        margin: 0 auto !important;
    }
</style>
