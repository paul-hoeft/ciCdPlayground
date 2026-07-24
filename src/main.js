import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Paul Höft",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["A lot of automated tests"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins and more?",
    // What do you want to learn in this workshop?
    expectations: ["Overview of the different tools/providers"],
  },
});
