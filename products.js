/**
 * Light SEO Suite - 统一产品配置文件
 * Key 与对应的子目录路径保持一致
 */
const PRODUCTS_DATA = {
  ckfinder: {
    id: "ckfinder",
    title: "Competitor Keyword Finder",
    icon: "🔍",
    status: "Active",
    description: "Analyze competitor domains to extract high-traffic keywords, automated 0-100 Blue Ocean opportunity scores, and instant CSV datasets across 9 Google markets.",
    landingUrl: "/ckfinder",
    storeUrl: "https://chromewebstore.google.com/detail/competitor-keyword-finder/mmcajkhbkkhmcbaabeajefkdaciohodc",
    tags: ["competitor", "keywords", "blue ocean", "traffic", "ranking", "serp"]
  },
  compare: {
    id: "compare",
    title: "Compare 2 Websites SEO",
    icon: "⚡",
    status: "Active",
    description: "Side-by-side SEO comparison tool. Inspect on-page DOM, word count & heading hierarchies for free, plus head-to-head Google rankings & organic keyword gaps.",
    landingUrl: "/compare",
    storeUrl: "https://chromewebstore.google.com/detail/compare-2-websites-seo-co/obneicfolpajedlgjeaihpagmfbaalid",
    tags: ["compare", "seo", "content gap", "competitor", "rankings", "keywords", "side by side", "on-page", "diff"]
  }
};

// 导出数组形式供列表页面遍历使用（无需修改原渲染逻辑）
const TOOLS_REGISTRY = Object.values(PRODUCTS_DATA);
