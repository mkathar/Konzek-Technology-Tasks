import { createApp, provide } from "vue";
import { ApolloClients } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "@apollo/client/link/http";
import App from "./App.vue";
import router from "./router";
import { h } from "vue";
import store from "./store/store.js";
import "./assets/scss/index.css";

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com/graphql",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const AppWithApollo = {
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
    });
  },
  render() {
    return h(App);
  },
};

const app = createApp(AppWithApollo);
app.use(router);
app.use(store);
app.mount("#app");
