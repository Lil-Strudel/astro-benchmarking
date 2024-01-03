import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";
import preact from "@astrojs/preact";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    preact(),
    solidJs(),
    svelte(),
    react(),
  ],
});
