<template>
  <div class="list">
    <div class="list__group" list v-if="countries">
      <div
        class="list__group__box"
        v-for="(country, index) in countries"
        :key="index"
        @click="toggleSelection(index)"
        :style="{ backgroundColor: isSelected(index) ? randomColor() : '' }"
      >
        <h1 class="list__group__box__emoji">{{ country.emoji }}</h1>
        <h3 class="list__group__box__name">{{ country.name }}</h3>
        <p class="list__group__box__capital">{{ country.capital }}</p>
      </div>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["countries", "selectedCountries"]),
  },
  mounted() {
    if (this.countries) {
      this.automaticSelection();
    }
  },
  watch: {
    countries: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue) {
          this.automaticSelection();
        }
        console.log("seçilmiş ülkeler", this.selectedCountries);
      },
    },
  },
  methods: {
    toggleSelection(index) {
      const selectedIndex = this.selectedCountries.indexOf(index);
      if (selectedIndex !== -1) {
        this.selectedCountries.splice(selectedIndex, 1);
      } else {
        this.selectedCountries.splice(0, this.selectedCountries.length);
        this.selectedCountries.push(index);
      }
    },
    isSelected(index) {
      return this.selectedCountries.includes(index);
    },
    randomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
    automaticSelection() {
      this.selectedCountries.splice(0, this.selectedCountries.length);
      if (this.countries.length > 10) {
        this.selectedCountries.push(9);
      } else if (this.countries.length > 0) {
        this.selectedCountries.push(this.countries.length - 1);
      }
    },
  },
};
</script>
