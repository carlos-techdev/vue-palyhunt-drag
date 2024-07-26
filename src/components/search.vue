<template>
    <div class="flex items-center">
      <v-text-field
        v-model="searchQuery"
        placeholder="Search..."
        hide-details
        density="compact"
        dense
        solo-inverted
        class="flex-grow"
      >
      </v-text-field>
      <v-btn color="primary" @click="onSearch" dense>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const searchQuery = ref('');
  
      const onSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchQuery.value);
      };
  
      return {
        searchQuery,
        onSearch,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add any additional custom styles here if necessary */
  </style>
  