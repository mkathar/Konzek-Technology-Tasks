<template>
  <header class="header">
    <h1 class="header__title">Countries</h1>
    <input
      v-model="inputValue"
      class="header__input"
      placeholder="type to filter"
      type="text"
    />
  </header>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";
import store from "../store/store";
import { ref, watch } from "vue";

export default {
  setup() {
    const LIST_COUNTRIES = gql`
      query AllCountries {
        countries {
          code
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
    `;

    const { result, refetch } = useQuery(LIST_COUNTRIES);
    let data = null;
    const executeQuery = async () => {
      await refetch();

      console.log(result);
      data = result._value.countries;
      store.commit("setCountries", result._value.countries);
    };
    const inputValue = ref("");

    const methodToRunOnChange = () => {
      console.log(inputValue._value);
      const filtered = data.filter((item) => {
        if (item.name.toLowerCase().includes(inputValue._value)) {
          return item;
        }
      });
      console.log(filtered);
      store.commit("setCountries", filtered);
    };

    watch(inputValue, (newVal, oldVal) => {
      methodToRunOnChange();
    });

    return {
      executeQuery,
      inputValue,
    };
  },
  mounted() {
    this.executeQuery();
  },
};
</script>
