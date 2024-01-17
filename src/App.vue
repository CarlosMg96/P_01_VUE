<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="sidebar"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/conocenos">Conocenos</b-nav-item>
            <b-nav-item href="/perfil" disabled>Perfil</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container fluid>
      <b-row style="height: 100vh;">
        <b-col md="3" class="sidebar_body">
        <b-nav vertical style="height: 100%;">
          <b-nav-item :class="{ 'selected': $route.name === 'juguetes' }">
            <b-link :to="{ name: 'juguetes' }"> Tienda de Juguetes </b-link>
          </b-nav-item>

          <b-nav-item :class="{ 'selected': $route.name === 'electrodomesticos' }">
            <b-link :to="{ name: 'electrodomesticos' }">Tienda de Electrodomésticos</b-link>
          </b-nav-item>

          <b-nav-item :class="{ 'selected': $route.name === 'hogar' }">
            <b-link :to="{ name: 'hogar' }">Tienda de Productos para el Hogar</b-link>
          </b-nav-item>
        </b-nav>
      </b-col>

        <b-col md="9">
        <b-breadcrumb>
          <b-breadcrumb-item :to="{ name: 'conocenos' }">Inicio</b-breadcrumb-item>
          <b-breadcrumb-item :to="{ name: $route.name }" active>Tienda de {{ $route.name }}</b-breadcrumb-item>
        </b-breadcrumb>
          <div>
            <router-view> </router-view>
            <Info/>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import { ref } from "vue";
export default {

}
</script>

<style scoped>
.selected {
  background-color: #000;
  color: #fff;
} 

.sidebar_body{
  background: scroll;
  background-color: bisque;
}
</style>