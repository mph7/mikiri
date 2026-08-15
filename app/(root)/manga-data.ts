export type MangaStatus =
  | "finished"
  | "reading"
  | "owned"
  | "wishlist"
  | "stopped"
  | null

export interface MockVolume {
  id: string
  title: string
  series: string
  volume: number | null
  cover: string
  level: number | null
  finishedAt: string | null
  status: MangaStatus
}

export interface MangaSeries {
  id: string
  name: string
  totalVolumes: number
  status: MangaStatus
  volumes: MockVolume[]
}

export const mangaSeries: MangaSeries[] = [
  {
    id: "hana-ni-arashi",
    name: "はなにあらし",
    totalVolumes: 3,
    status: "finished",
    volumes: [
      { id: "hana-1", title: "はなにあらし 1", series: "はなにあらし", volume: 1, cover: "https://d1qyepy4suh8il.cloudfront.net/8c311c51-1e76-4918-b6d3-e099ede7767a.jpg", level: 19, finishedAt: "2025-11-28", status: "finished" },
      { id: "hana-2", title: "はなにあらし 2", series: "はなにあらし", volume: 2, cover: "https://d1qyepy4suh8il.cloudfront.net/bc1cf349-aaaa-44cb-86d2-09efae4be446.jpg", level: 19, finishedAt: "2025-12-01", status: "finished" },
      { id: "hana-3", title: "はなにあらし 3", series: "はなにあらし", volume: 3, cover: "https://d1qyepy4suh8il.cloudfront.net/dc3bd1dc-1511-4c99-b831-be30e59ce78d.jpg", level: 19, finishedAt: "2025-12-18", status: "finished" },
    ],
  },
  {
    id: "tomo-chan",
    name: "トモちゃんは女の子!",
    totalVolumes: 8,
    status: "reading",
    volumes: [
      { id: "tomo-1", title: "トモちゃんは女の子! 1", series: "トモちゃんは女の子!", volume: 1, cover: "https://d1qyepy4suh8il.cloudfront.net/0a7f6793-81f9-493a-b2cb-1cbaa6e3758a.jpg", level: 21, finishedAt: "2025-09-22", status: "finished" },
      { id: "tomo-2", title: "トモちゃんは女の子! 2", series: "トモちゃんは女の子!", volume: 2, cover: "https://d1qyepy4suh8il.cloudfront.net/da8a3090-4121-40a9-ac9a-c1c0f2629e0e.jpg", level: 21, finishedAt: "2025-10-08", status: "finished" },
      { id: "tomo-3", title: "トモちゃんは女の子! 3", series: "トモちゃんは女の子!", volume: 3, cover: "https://d1qyepy4suh8il.cloudfront.net/b06dc256-c258-4f71-91ac-b87d7e392b99.jpg", level: 21, finishedAt: null, status: "reading" },
      { id: "tomo-4", title: "トモちゃんは女の子! 4", series: "トモちゃんは女の子!", volume: 4, cover: "https://d1qyepy4suh8il.cloudfront.net/c70f9a2f-df86-4b5a-b47f-4b0d1c292dd4.jpg", level: 21, finishedAt: null, status: "owned" },
      { id: "tomo-5", title: "トモちゃんは女の子! 5", series: "トモちゃんは女の子!", volume: 5, cover: "https://d1qyepy4suh8il.cloudfront.net/52f47c8b-3ceb-4c48-819e-1d748b9a4d6d.jpg", level: 21, finishedAt: null, status: "wishlist" },
      { id: "tomo-6", title: "トモちゃんは女の子! 6", series: "トモちゃんは女の子!", volume: 6, cover: "https://d1qyepy4suh8il.cloudfront.net/685d3951-5afb-4148-be01-e4a675c94a23.jpg", level: null, finishedAt: null, status: "stopped" },
    ],
  },
  {
    id: "chi-no-wadachi",
    name: "血の轍",
    totalVolumes: 17,
    status: "owned",
    volumes: [
      { id: "chi-14", title: "血の轍 14", series: "血の轍", volume: 14, cover: "https://d1qyepy4suh8il.cloudfront.net/33fa7b3e-3257-479f-b33d-a4c65a33662b.jpg", level: 18, finishedAt: null, status: "owned" },
    ],
  },
  {
    id: "maid",
    name: "最近雇ったメイドが怪しい",
    totalVolumes: 7,
    status: "wishlist",
    volumes: [
      { id: "maid-6", title: "最近雇ったメイドが怪しい 6", series: "最近雇ったメイドが怪しい", volume: 6, cover: "https://d1qyepy4suh8il.cloudfront.net/7adfe4ef-6d79-43c9-bb4d-ab70923690dc.jpg", level: 18, finishedAt: null, status: "wishlist" },
    ],
  },
  {
    id: "mai-gohan",
    name: "舞ちゃんのお姉さん飼育ごはん。",
    totalVolumes: 4,
    status: "stopped",
    volumes: [
      { id: "mai-4", title: "舞ちゃんのお姉さん飼育ごはん。 4", series: "舞ちゃんのお姉さん飼育ごはん。", volume: null, cover: "https://d1qyepy4suh8il.cloudfront.net/1c60cb09-aa96-4f44-b6c8-758ee3efe257.jpg", level: null, finishedAt: null, status: "stopped" },
    ],
  },
]
