<template>
  <div class="mainPage">
    <Header />
    <List />
  </div>
</template>

<script>
import header from "../components/header.vue";
import list from "../components/list.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header: header,
    List: list,
  },
};
</script>
