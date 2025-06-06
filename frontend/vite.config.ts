import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        fs: {
            // 👇 permite acesso aos arquivos fora da raiz
            allow: [".."],
        },
    },
    resolve: {
        alias: {
            "@mikiri/types": path.resolve(__dirname, "../packages/types"),
        },
    },
});
