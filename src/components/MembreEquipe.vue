<template>
    <div class="hello">
         <h3>{{nom}}</h3>
         <i>age : {{ age }}</i>
        <img alt="Vue logo" width="50" src="../assets/logo.png">
    </div>
  </template>
  
  <script>
  export default {
    name: 'MembreEquipe',
    props: 
      ['nom', 'age']
    
  }
  </script>
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
    color: #42b983;
  }
  </style>
  