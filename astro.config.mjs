import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";
import preact from "@astrojs/preact";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    preact(),
    solidJs(),
    svelte(),
    react(),
    vue(),
    lit(),
  ],
});
