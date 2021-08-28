import m from "https://esm.sh/mithril";

const root = document.body;
let count = 0; // added a variable

const Hello = {
  view: function () {
    return m("main", [
      m("h1", {
        class: "title",
      }, "My first app"),
      m("button", {
        onclick: function () {
          count++;
        },
      }, count + " clicks"),
    ]);
  },
};

m.mount(root, Hello);
