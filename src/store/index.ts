import { create, createStore } from "zustand";
import { persist } from "zustand/middleware";
import { get } from "lodash-es";

const initState = {};

const store = persist(
  (set, get) => ({
    ...initState,
  }),
  { name: "user" }
);
export default create(store);
