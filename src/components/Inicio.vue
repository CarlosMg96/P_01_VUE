<template>
  
<b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "/inicio",
          name:"inicio"
        },
        {
          text: "Conocenos",
          href: "/conocenos",
          name:"conocenos"
        },
        {
          text: "Perfil",
          href: "/perfil",
          name: "perfil"
        },
      ],
    };
  },
};
</script>

<style>

</style>