<template>

    <div id="newsData">
        <div class="section fp-auto-height fp-section active section-anim fp-completely" data-section="projects-grid" data-anchor="projects-grid" style="height: 627px;">
            <!-- Begin of section wrapper -->
            <div class="section-wrapper fullwidth with-margin">
                <!-- content -->
                <div class="section-content">
                    <!-- project list -->
                    <div class="project-list grid-1 grid-md-2 grid-lg-3 anim">
                        <!-- an item -->
                        <div class="item media media-square text-white" v-for="news in newsData.slice(0, itemsToShow)">
                            <div class="media-img">
                                <div class="mask"></div>
                                <img :src="news.image" :alt="news.altImg" class="img-block" style="display: none;">
                                <div class="img" :style="{ backgroundImage: 'url(' + news.image + ')' }" :alt="news.altImg"></div>
                            </div>
                            <div class="media-body">
                                <a href="#">
                                    <h5 class="sr-up-td1">{{ news.date }}</h5>
                                    <h2 class="sr-up-td2 display-6 mt-5 mb-5">{{ news.title }}</h2>
                                </a>
                                <div class="desc">
                                    <p class="pSpacer" style="background-color: rgba(255, 255, 255, 0.72);color: #7d7d7d;border-radius: 5px;">
                                        {{ news.text }}
                                    </p>
                                </div>
                            </div>
                           <div class="media-footer sr-up-td4" v-if="news.typeLink != 'none'">
                                <div class="btns-action sr-up-td3 text-primary">
                                    <a class="btn btn-normal btn-white spaceTop" @click="goToLink(news.urlLink,news.typeLink)">
                                        <span class="icon" v-if="news.typeLink == 'pdf'"><img src="public/img/pdf-icone.svg" width="35px"></span>
                                        <span class="text">{{news.textLink}}</span>
                                        <span class="icon" v-if="news.typeLink == 'internal' || news.typeLink == 'external'">
                                            <span class="arrow-right"></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- an item -->

                    </div>
                </div>
            </div>
            <!-- End of section wrapper -->
        </div>

    </div>
</template>

<script>
    export default {
        name: "croustiNews",
        props: ['newsData', 'itemsToShow'],
        methods: {

            afterLoad() {
                console.log('After load')
            },

            goToLink(urlLink, typeLink) {
                switch(typeLink) {
                    case 'pdf':
                        window.open(urlLink, '_blank');
                        break;
                    case 'internal':
                        this.$router.push({ path:urlLink });
                        break;
                    case 'external':
                        window.open(urlLink, '_blank');
                        break;
                }
            }
        },
    }
</script>

<style>

</style>