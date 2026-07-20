import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://linruhai328.github.io/",
    title: "River",
    description: "思考，学习，与沿途所得。",
    author: "River",
    profile: "https://github.com/LinRuhai328",
    ogImage: "default-og.png",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: false,
  },
  socials: [
    { name: "github", url: "https://github.com/LinRuhai328" },
    { name: "mail", url: "mailto:ruhai3937@gmail.com" },
  ],
  shareLinks: [],
});
