<template>
    <div>
    <div v-for="news in newsData.slice(0, itemsToShow)">
        <h5>{{news.datenews}}</h5>
        <h3>{{news.titrenews}}</h3>
        <h6>{{news.textenews}}</h6>
    </div>
</div>
</template>

<script>
    export default {
        name: "croustiNews",
        props: ['newsData', 'itemsToShow'],
    }

</script>

<style>

</style>