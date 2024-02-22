<template>
  <div class="container" v-if="item">
    <div class="card">
      <img :src="item.image" alt="Image de l'item">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.availablePlaces }}</p>
      <button>Participer</button>
    </div>
  </div>
  <div v-else>
    <p>Item not found</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null,
      items: [
        {
          id: 1,
          title: 'Titre 1',
          description: 'Description 1',
          image: 'https://via.placeholder.com/150',
          date: '2022-01-01'
        },
        {
          id: 2,
          title: 'Titre 2',
          description: 'Description 2',
          image: 'https://via.placeholder.com/150',
          date: '2022-02-02'
        },
        {
          id: 3,
          title: 'Titre 3',
          description: 'Description 3',
          image: 'https://via.placeholder.com/150',
          date: '2022-03-03'
        }
      ]
    }
  },
  created() {
    const id = this.$route.params.id;
    const foundItem = this.items.find(item => item.id === id);
    console.log(this.items);
    if (foundItem) {
      this.item = foundItem;
    } else {
      console.error('Item not found');
    }
  }
}
</script>