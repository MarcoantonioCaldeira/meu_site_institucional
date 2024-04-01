<template>
    <div class="info-container">
      <div class="icone">
        <i  id="fa-solid-li"  class="fa-solid fa-link"></i> 
      </div>
      <p class="titulo">{{ titulo }}</p>
      <p class="descricao">{{ descricao }}</p>
      <div class="linguagens">
        <span class="tecnologias" v-for="(tecnologia, index) in tecnologias" :key="index">{{tecnologia}}</span>
      </div>
    </div>
  </template>
  
<script>
import '@fortawesome/fontawesome-free/css/all.css';

  export default{
      name: 'ProjetoContainer',
      props: {
          titulo: String,
          descricao: String,
          tecnologias: {
            type: Array,
            required: true
          },
          hrefProp: { 
            type: String,
            required: true,
          },
      },
      methods: {
        acessarRepositorio() {
          window.location.href = this.hrefProp;
        },
      },
  }
  
  </script>
<style src="./style.scss" lang="scss">
</style>