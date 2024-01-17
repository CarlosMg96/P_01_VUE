<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Limpieza',
            href: '/conocenos'
          },
          {
            text: 'Detergentes Industriales',
            active: true
          },
        ]
      }
    }
}
</script>

<style>

</style>