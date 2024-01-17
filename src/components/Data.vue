<script setup>
import { ref } from "vue";
import Info from "./components/Info.vue";
</script>

<template>
  <div id="app">
    <!-- Aquí está el Navbar -->
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

    <!-- Zona del contenido, content -->
    <b-container fluid>
      <b-row>
        <b-col md="3">
          <!-- <div style="margin-top: 15px">
            <b-sidebar class="mt-5" id="sidebar" title="Sidebar" visible>
              <template #default="{ hide }">
                <div class="p-3">
                  <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <nav class="mb-3">
                    <b-nav vertical>
                      <b-nav-item active @click="hide">Active</b-nav-item>
                      <b-nav-item href="/conocenos" @click="hide"
                        >Conocenos</b-nav-item
                      >
                      <b-nav-item href="/perfil" @click="hide"
                        >Perfil</b-nav-item
                      >
                    </b-nav>
                  </nav>
                  <b-button variant="primary" block @click="hide"
                    >Close Sidebar</b-button
                  >
                </div>
              </template>
            </b-sidebar>
          </div> -->
          <b-nav-item
            ><b-link :to="{ name: 'inicio' }"> Inicio </b-link>
          </b-nav-item>

          <b-nav-item
            ><b-link :to="{ name: 'perfil' }">Conocenos</b-link>
          </b-nav-item>

          <b-nav-item
            ><b-link :to="{ name: 'conocenos' }">Perfil</b-link>
          </b-nav-item>
        </b-col>

        <b-col md="9">
          <div>
            <router-view> </router-view>
            <Info/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
</style>
