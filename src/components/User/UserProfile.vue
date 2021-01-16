<template>
  <h2>User/UserProfile.vue</h2>
  <div>{{displayUserprofile}}</div>
</template>

<script>
export default {
    name: 'UserProfile',
    data() {
        return {


        }  
    },
    computed: {

        displayUserprofile() {
            return this.$route.params.id
        }
    },
    created() {
        /* this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {

            }
        ) */
    }
}
</script>

<style>

</style>