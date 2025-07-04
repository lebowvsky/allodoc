import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlloDoc",
  description: "Doc métier AlloVoisins",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Règles métier générales", link: "/pages/regles-generales/avatars/avatars.md" },
      { text: "Messagerie", link: "/pages/messagerie/messagerie.md" },
      { text: "Devis facturation", link: "/pages/devis-facturation/devis-facturation.md" },
    ],

    sidebar: {
      "/pages/regles-generales/": [
        {
          text: "Règles générales",
          items: [
            { text: "Avatars", link: "/pages/regles-generales/avatars/avatars.md" },
            {
              text: "Algorithme menu offreur",
              link: "/pages/regles-generales/algorithme-menu-offreur/algorithme-menu-offreur.md",
            },
            {
              text: "Affichage profil des CTAs connectés",
              link: "/pages/regles-generales/cta-profil-connecte/cta-profil-connecte.md",
            },
            {
              text: "Catégorisation de la demande",
              link: "/pages/regles-generales/categorisation-demande/categorisation-demande.md",
            },
            {
              text: "Date passée",
              link: "/pages/regles-generales/date-passee/date-passee.md",
            },
            {
              text: "Wording général",
              link: "/pages/regles-generales/wording-general/wording-general.md",
            },
            { text: "Markdown Examples", link: "/pages/regles-generales/markdown-examples" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
