<template>
    <!-- <Header />    -->
    <router-view />
    <!-- <Footer /> -->
</template>
<script>
export default {
    name: "App",
    data() {
        return {
            publicPath: local_image_path
        };
    },
    components: {}
};
</script>
