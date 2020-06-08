<template>
    <div>
        <header-page></header-page>
        <full-page :options="options" id="fullpage">
            <div class="section" id="section0">
                <div class="slide" id="actu">
                </div>
            </div>
            <div class="TitleBottom"><a
                    @click="$vuetify.goTo('#welcome',{ duration:1000, offset:0, easing:'easeInOutCubic'})">
                <h1>
                    <v-icon :size="screenwidth" color="white">mdi-chevron-down</v-icon>
                    Les actualités
                </h1>
            </a></div>
        </full-page>
        <div>
            <div class="backgroundGreen" id="welcome">
                <div class="media-row">
                    <div class="row backgroundGreen">

                    </div>
                </div>
            </div>

        </div>
        <crousti-news :itemsToShow=12 :newsData="Ndata"></crousti-news>
        <footer-page> </footer-page>
    </div>

</template>

<script>
    import HeaderPage from './headerPage'
    import FooterPage from './footerPage'
    import croustiNews from './croustiNews'

    export default {
        name: 'actualites',
        components: {
            HeaderPage,
            FooterPage,
            croustiNews,
        },
        data() {
            return {
                options: {
                    licenseKey: 'A32C7F42-F0FE4A04-AAB7E182-AB1F9C8B',
                    navigation: false,
                    scrollBar: true,
                    autoScrolling: false,
                    fitToSection: false
                },
                Ndata:[
                    {
                        id: "1",
                        image: "/news/images/fleur-fete-meres.jpg",
                        altImg: "Le menu pour la fetes des mères 2020",
                        date: "2020-05-30",
                        title: "menu fête des Mères",
                        text: "Le menu spécial fête des mères 2020. Disponible les 6 et 7 juin",
                        urlLink: "/news/pdf/fete-des-meres-2020.pdf",
                        typeLink: "pdf",
                        textLink: "Découvrir le menu spécial"
                    },
                    {
                        id: "2",
                        image: "/news/images/covid19.jpg",
                        altImg: "Information COVID 19",
                        date: "2020-03-30",
                        title: "Livraison à domicile et COVID 19",
                        text: "Suite à de nombreux appels, nous informons notre clientèle que nous poursuivons le portage de repas à domicile vers les personnes dépendantes même en période de confinement.\nNous prenons toutes les précautions sanitaires nécessaires à l’intérieur de notre laboratoire et lors de nos livraisons, afin de préserver la santé de notre personnel et de nos clients.",
                        urlLink: "/portage-repas",
                        typeLink: "internal",
                        textLink: "Plus d'infos sur la livraison à domicile"
                    },
                    {
                        id: "3",
                        image: "/news/images/news3.jpg",
                        altImg: "Animation",
                        date: "2020-01-15",
                        title: "NOUVEAU les animations pour les entreprises ",
                        text: "Nos animations sont conçues comme de petits divertissements qui raviront les yeux et les papilles de vos invités. Selon les formules, les convives pourront participer à la confection de leur plat en choisissant les sauces, les condiments, les décors qui leur plaisent. ",
                        urlLink: "/evenements-entreprises",
                        typeLink: "internal",
                        textLink: "En savoir plus sur les animations"
                    }
                ]
            }
        },
        methods: {
            afterLoad() {
                console.log('After load')
            },
        },
        computed: {
            screenwidth() {
                if (screen.width > 400) {
                    return 70
                } else {
                    return 30
                }
            }

        }
    }
</script>

<style>
    #actu {
        background: url('/img/actualites/coucou-du-chef.jpg') no-repeat center center;
        padding: 0 0 0 0;
        background-size: cover;
    }
</style>