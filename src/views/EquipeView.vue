
<template>
  <div class="equipe">
    <h1>C'est la page de l'équipe</h1>

<MembreEquipe nom="John Wayne" age="25" />
<MembreEquipe nom = "Bob Marley" age="36"/>
<MembreEquipe nom="Isi Dor" age="100"/>
<MembreEquipe nom="Filip Mo "/>
<MembreEquipe nom="Hey Ho"/>
<MembreEquipe nom="CElia Too"/>


  </div>
</template>

<script>
// @ is an alias to /src
import MembreEquipe from '@/components/MembreEquipe.vue'

export default {
  name: 'EquipeView',
  components: {
    MembreEquipe
  }
}
</script>

