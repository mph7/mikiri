export interface MockVolume {
  [x: string]: any;
  id: string;
  title: string;
  series: string;
  volume: number | null;
  cover: string;
  level: number | null;
  finishedAt: string | null;
  status: "finished" | "reading" | "owned" | "wishlist" | "stopped" | null;
}

export interface MangaSeries {
  name: string;
  volumes: MockVolume[];
  totalVolumes: number;
}

export const mockMangaSeries: MangaSeries[] = [
  {
    name: "はなにあらし",
    totalVolumes: 3,
    volumes: [
      {
        id: "37bd687495",
        title: "はなにあらし 3",
        series: "はなにあらし",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/dc3bd1dc-1511-4c99-b831-be30e59ce78d.jpg",
        level: 19,
        finishedAt: "2025-12-18",
        status: "reading",
      },
      {
        id: "c4e2b80198",
        title: "はなにあらし 2",
        series: "はなにあらし",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/bc1cf349-aaaa-44cb-86d2-09efae4be446.jpg",
        level: 19,
        finishedAt: "2025-12-01",
        status: "finished",
      },
      {
        id: "0b7e3c384b",
        title: "はなにあらし 1",
        series: "はなにあらし",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8c311c51-1e76-4918-b6d3-e099ede7767a.jpg",
        level: 19,
        finishedAt: "2025-11-28",
        status: "finished",
      },
    ],
  },
  {
    name: "トモちゃんは女の子!",
    totalVolumes: 8,
    volumes: [
      {
        id: "0ecf187d58",
        title: "トモちゃんは女の子! 8",
        series: "トモちゃんは女の子!",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c805bef8-9fdb-4fda-91d3-f1285794ffaf.jpg",
        level: 21,
        finishedAt: "2025-11-15",
        status: "finished",
      },
      {
        id: "eab7cffafc",
        title: "トモちゃんは女の子! 7",
        series: "トモちゃんは女の子!",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/55dfa94a-588c-4b08-9217-926d4e8bad1d.jpg",
        level: 21,
        finishedAt: "2025-11-12",
        status: "finished",
      },
      {
        id: "b6115a14a4",
        title: "トモちゃんは女の子! 6",
        series: "トモちゃんは女の子!",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/685d3951-5afb-4148-be01-e4a675c94a23.jpg",
        level: 21,
        finishedAt: "2025-11-09",
        status: "finished",
      },
      {
        id: "7f3c7d67b4",
        title: "トモちゃんは女の子! 5",
        series: "トモちゃんは女の子!",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/52f47c8b-3ceb-4c48-819e-1d748b9a4d6d.jpg",
        level: 21,
        finishedAt: "2025-10-18",
        status: "finished",
      },
      {
        id: "1b48be17b9",
        title: "トモちゃんは女の子! 4",
        series: "トモちゃんは女の子!",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c70f9a2f-df86-4b5a-b47f-4b0d1c292dd4.jpg",
        level: 21,
        finishedAt: "2025-10-15",
        status: "finished",
      },
      {
        id: "1f2aae8df7",
        title: "トモちゃんは女の子! 3",
        series: "トモちゃんは女の子!",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b06dc256-c258-4f71-91ac-b87d7e392b99.jpg",
        level: 21,
        finishedAt: "2025-10-13",
        status: "finished",
      },
      {
        id: "fe8f29ccd3",
        title: "トモちゃんは女の子! 2",
        series: "トモちゃんは女の子!",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/da8a3090-4121-40a9-ac9a-c1c0f2629e0e.jpg",
        level: 21,
        finishedAt: "2025-10-08",
        status: "finished",
      },
      {
        id: "9ddbec4a57",
        title: "トモちゃんは女の子! 1",
        series: "トモちゃんは女の子!",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0a7f6793-81f9-493a-b2cb-1cbaa6e3758a.jpg",
        level: 21,
        finishedAt: "2025-09-22",
        status: "finished",
      },
    ],
  },
  {
    name: "血の轍",
    totalVolumes: 17,
    volumes: [
      {
        id: "c9e2bb4f5a",
        title: "血の轍 17",
        series: "血の轍",
        volume: 17,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0c1f4f72-e621-402a-97cb-c1959368ae56.jpg",
        level: 18,
        finishedAt: "2025-09-08",
        status: "finished",
      },
      {
        id: "fad4485da9",
        title: "血の轍 16",
        series: "血の轍",
        volume: 16,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/4b8a2ea6-4ebc-41a0-a808-cfc48188da93.jpg",
        level: 18,
        finishedAt: "2025-09-07",
        status: "finished",
      },
      {
        id: "de746cd061",
        title: "血の轍 15",
        series: "血の轍",
        volume: 15,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/be10df2a-0838-40b1-9a32-89ac8d071c1b.jpg",
        level: 18,
        finishedAt: "2025-09-06",
        status: "finished",
      },
      {
        id: "943bfbac06",
        title: "血の轍 14",
        series: "血の轍",
        volume: 14,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/33fa7b3e-3257-479f-b33d-a4c65a33662b.jpg",
        level: 18,
        finishedAt: "2025-09-02",
        status: "finished",
      },
      {
        id: "7368a9ba9a",
        title: "血の轍 13",
        series: "血の轍",
        volume: 13,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/9e84cae0-2a5f-4dba-a032-129672c6392d.jpg",
        level: 18,
        finishedAt: "2025-08-31",
        status: "finished",
      },
      {
        id: "482599fa48",
        title: "血の轍 12",
        series: "血の轍",
        volume: 12,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c22403a8-22ed-4ff8-b8b7-4369fa2244b9.jpg",
        level: 18,
        finishedAt: "2025-08-30",
        status: "finished",
      },
      {
        id: "a51d65a6c9",
        title: "血の轍 11",
        series: "血の轍",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/a7e1b837-10fa-4288-8001-d9648c52ca72.jpg",
        level: 18,
        finishedAt: "2025-08-28",
        status: "finished",
      },
      {
        id: "cc4014e7b9",
        title: "血の轍 10",
        series: "血の轍",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b3356f59-3dfe-4362-9bae-be2d44b07ef2.jpg",
        level: 18,
        finishedAt: "2025-08-22",
        status: "finished",
      },
      {
        id: "65b1b05865",
        title: "血の轍 9",
        series: "血の轍",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0d611671-e353-4c58-9439-9508bc54b114.jpg",
        level: 18,
        finishedAt: "2025-08-19",
        status: "finished",
      },
      {
        id: "0108ff55ec",
        title: "血の轍 8",
        series: "血の轍",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/3e3151ae-f71a-44f6-b2ec-295187c3be62.jpg",
        level: 18,
        finishedAt: "2025-08-16",
        status: "finished",
      },
      {
        id: "1402ff05f6",
        title: "血の轍 7",
        series: "血の轍",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/dd41d00e-e811-4741-90ff-7e156431c6b7.jpg",
        level: 18,
        finishedAt: "2025-08-14",
        status: "finished",
      },
      {
        id: "67b593db99",
        title: "血の轍 6",
        series: "血の轍",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/a67e8dfd-a95c-4197-a892-5d5446e7d2a5.jpg",
        level: 18,
        finishedAt: "2025-08-12",
        status: "finished",
      },
      {
        id: "1037691d64",
        title: "血の轍 5",
        series: "血の轍",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/2ceeb97b-a0cc-4a53-b5f0-895767e8742f.jpg",
        level: 18,
        finishedAt: "2025-08-10",
        status: "finished",
      },
      {
        id: "697f3cb9df",
        title: "血の轍 4",
        series: "血の轍",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c0ea2854-d0c2-4245-b59c-54802249bd74.jpg",
        level: 18,
        finishedAt: "2025-08-08",
        status: "finished",
      },
      {
        id: "efe668cd5b",
        title: "血の轍 3",
        series: "血の轍",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/15b61305-e7e0-4aaf-899d-726e011eddf6.jpg",
        level: 18,
        finishedAt: "2025-08-06",
        status: "finished",
      },
      {
        id: "cdf0d22164",
        title: "血の轍 2",
        series: "血の轍",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1fa3a922-4065-4026-82d8-2629e2214c12.jpg",
        level: 18,
        finishedAt: "2025-08-01",
        status: "finished",
      },
      {
        id: "4c3ed41b0f",
        title: "血の轍 1",
        series: "血の轍",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/4f12e7b2-aad6-4e39-89dc-4de57eab893c.jpg",
        level: 18,
        finishedAt: "2025-07-29",
        status: "finished",
      },
    ],
  },
  {
    name: "可愛いだけじゃない式守さん",
    totalVolumes: 6,
    volumes: [
      {
        id: "40e5eac5fd",
        title: "可愛いだけじゃない式守さん 6",
        series: "可愛いだけじゃない式守さん",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b8438023-1630-465d-b64a-7abc9ebecd20.jpg",
        level: 18,
        finishedAt: "2025-07-26",
        status: "finished",
      },
      {
        id: "7883cabecd",
        title: "可愛いだけじゃない式守さん 5",
        series: "可愛いだけじゃない式守さん",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/929ecbe2-16ff-41bb-a1da-a1af1358906a.jpg",
        level: 18,
        finishedAt: "2025-07-17",
        status: "finished",
      },
      {
        id: "42fb0c9db6",
        title: "可愛いだけじゃない式守さん 4",
        series: "可愛いだけじゃない式守さん",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/82286c8e-083f-46c0-b8fc-7783ed391394.jpg",
        level: 18,
        finishedAt: "2025-07-14",
        status: "finished",
      },
      {
        id: "a9243f96a3",
        title: "可愛いだけじゃない式守さん 3",
        series: "可愛いだけじゃない式守さん",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/cec91e97-9be3-4811-86d6-fe69c675e402.jpg",
        level: 18,
        finishedAt: "2025-07-11",
        status: "finished",
      },
      {
        id: "ab2be9c8df",
        title: "可愛いだけじゃない式守さん 2",
        series: "可愛いだけじゃない式守さん",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/752a1271-34a6-4f13-9f43-0d633fac829a.jpg",
        level: 18,
        finishedAt: "2025-07-09",
        status: "finished",
      },
      {
        id: "866768e8d7",
        title: "可愛いだけじゃない式守さん 1",
        series: "可愛いだけじゃない式守さん",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/22a3a977-4a8b-40c9-9dd1-a04fbc7045f2.jpg",
        level: 18,
        finishedAt: "2025-07-06",
        status: "finished",
      },
    ],
  },
  {
    name: "惡の華",
    totalVolumes: 11,
    volumes: [
      {
        id: "0bce8e6108",
        title: "惡の華 11 <完>",
        series: "惡の華",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/472b2b81-ece9-4f1c-8998-ab695650c592.jpg",
        level: 18,
        finishedAt: "2025-06-23",
        status: "finished",
      },
      {
        id: "f12593c264",
        title: "惡の華 (10)",
        series: "惡の華",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1198f33e-5eca-4c1e-a15b-b4be61e5636b.jpg",
        level: 18,
        finishedAt: "2025-06-23",
        status: "finished",
      },
      {
        id: "9f08626c9a",
        title: "惡の華 (9)",
        series: "惡の華",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/bf90b2e0-1929-4128-81f5-c6df8dea8927.jpg",
        level: 18,
        finishedAt: "2025-06-20",
        status: "finished",
      },
      {
        id: "8309d7bc02",
        title: "惡の華 (8)",
        series: "惡の華",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/efe38dd3-4580-48d2-a957-41a1a49cf366.jpg",
        level: 18,
        finishedAt: "2025-06-18",
        status: "finished",
      },
      {
        id: "fda6ddcf67",
        title: "惡の華 (7)",
        series: "惡の華",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/bf8827a4-a7d3-486f-a217-e8378168b3b9.jpg",
        level: 18,
        finishedAt: "2025-06-14",
        status: "finished",
      },
      {
        id: "d0dc652413",
        title: "惡の華 (6)",
        series: "惡の華",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e3bfa275-54d6-4721-982e-05f237035a3e.jpg",
        level: 18,
        finishedAt: "2025-06-12",
        status: "finished",
      },
      {
        id: "64814f25d4",
        title: "惡の華 (5)",
        series: "惡の華",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e4c64c1a-a188-42ef-9f85-dc9b6abb381b.jpg",
        level: 18,
        finishedAt: "2025-06-10",
        status: "finished",
      },
      {
        id: "32d274993c",
        title: "惡の華 (4)",
        series: "惡の華",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/d8cfbd58-92d6-43db-98d6-93af8880cc4f.jpg",
        level: 18,
        finishedAt: "2025-06-08",
        status: "finished",
      },
      {
        id: "a5964e6842",
        title: "惡の華 (3)",
        series: "惡の華",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c226bf83-1ad6-4229-9a44-14e572d6fe30.jpg",
        level: 18,
        finishedAt: "2025-06-06",
        status: "finished",
      },
      {
        id: "442fa43fb5",
        title: "惡の華 (2)",
        series: "惡の華",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/235fb669-fa67-4330-ab8f-0d29dcca16df.jpg",
        level: 18,
        finishedAt: "2025-06-05",
        status: "finished",
      },
      {
        id: "4d27cf49c9",
        title: "惡の華 (1)",
        series: "惡の華",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/4ce177e2-4494-4dad-96f5-a748e6e778ef.jpg",
        level: 18,
        finishedAt: "2025-06-03",
        status: "finished",
      },
    ],
  },
  {
    name: "ぼくは麻理のなか",
    totalVolumes: 9,
    volumes: [
      {
        id: "67f8b45843",
        title: "ぼくは麻理のなか 9",
        series: "ぼくは麻理のなか",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/9dff7354-7940-4d3d-8000-9397fc68bf33.jpg",
        level: 18,
        finishedAt: "2025-05-29",
        status: "finished",
      },
      {
        id: "ea4cbba803",
        title: "ぼくは麻理のなか 8",
        series: "ぼくは麻理のなか",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/42be2119-38d6-48af-8940-9e022071c008.jpg",
        level: 18,
        finishedAt: "2025-05-27",
        status: "finished",
      },
      {
        id: "a8303e4c12",
        title: "ぼくは麻理のなか 7",
        series: "ぼくは麻理のなか",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b4da5fde-4451-4120-ae90-5cd7ebb1b4d5.jpg",
        level: 18,
        finishedAt: "2025-05-25",
        status: "finished",
      },
      {
        id: "7b679c9702",
        title: "ぼくは麻理のなか 6",
        series: "ぼくは麻理のなか",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/16f74aec-a9b8-4edd-a5f9-445263920cea.jpg",
        level: 18,
        finishedAt: "2025-05-23",
        status: "finished",
      },
      {
        id: "033d9a9198",
        title: "ぼくは麻理のなか 5",
        series: "ぼくは麻理のなか",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/6b12b544-00d4-4c94-bcb7-2619b4561834.jpg",
        level: 18,
        finishedAt: "2025-05-21",
        status: "finished",
      },
      {
        id: "0967684d2c",
        title: "ぼくは麻理のなか 4",
        series: "ぼくは麻理のなか",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/a6a540ef-eee2-419e-96c7-5d2d66eac7f0.jpg",
        level: 18,
        finishedAt: "2025-05-19",
        status: "finished",
      },
      {
        id: "e9960c553c",
        title: "ぼくは麻理のなか 3",
        series: "ぼくは麻理のなか",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/dbeb7247-8316-4666-929e-5184aab9331d.jpg",
        level: 18,
        finishedAt: "2025-05-17",
        status: "finished",
      },
      {
        id: "0f5bc31447",
        title: "ぼくは麻理のなか 2",
        series: "ぼくは麻理のなか",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/fd7b8db5-d680-48e7-8527-7c4f94308c26.jpg",
        level: 18,
        finishedAt: "2025-05-16",
        status: "finished",
      },
      {
        id: "6c6b56d9fc",
        title: "ぼくは麻理のなか 1",
        series: "ぼくは麻理のなか",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/158ad5af-8818-46a0-8b64-7280619421cb.jpg",
        level: 18,
        finishedAt: "2025-05-14",
        status: "finished",
      },
    ],
  },
  {
    name: "スイようび",
    totalVolumes: 5,
    volumes: [
      {
        id: "ef150f0406",
        title: "スイようび 5",
        series: "スイようび",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/be4cbe1c-005e-4286-b6eb-18f56cfc5f5d.jpg",
        level: 19,
        finishedAt: "2025-05-12",
        status: "finished",
      },
      {
        id: "a076d7f7e6",
        title: "スイようび 4",
        series: "スイようび",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e768df97-eba1-414e-a6a1-4a24ffcd957e.jpg",
        level: 19,
        finishedAt: "2025-05-03",
        status: "finished",
      },
      {
        id: "e31ff65bc9",
        title: "スイようび 3",
        series: "スイようび",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0554e69e-094e-44c4-b57e-c3fb7cb91428.jpg",
        level: 19,
        finishedAt: "2025-04-30",
        status: "finished",
      },
      {
        id: "a525043a27",
        title: "スイようび 2",
        series: "スイようび",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b79bf9ac-8b9b-48c4-bbbc-5d5a59478967.jpg",
        level: 19,
        finishedAt: "2025-04-25",
        status: "finished",
      },
      {
        id: "f123c360fc",
        title: "スイようび 1",
        series: "スイようび",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/015b041d-4fb5-462d-a7fd-300298adc080.jpg",
        level: 19,
        finishedAt: "2025-04-23",
        status: "finished",
      },
    ],
  },
  {
    name: "女子校だからセーフ",
    totalVolumes: 4,
    volumes: [
      {
        id: "7a76c8ece6",
        title: "女子校だからセーフ 4",
        series: "女子校だからセーフ",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b7637e6b-afc3-4b6c-b7c1-ec1c3a0002e7.jpg",
        level: 17,
        finishedAt: "2025-04-21",
        status: "owned",
      },
      {
        id: "29a4f1e673",
        title: "女子校だからセーフ 3",
        series: "女子校だからセーフ",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/718dc8a8-c995-4675-8b4d-8c344dfb9e94.jpg",
        level: 17,
        finishedAt: "2025-04-18",
        status: "reading",
      },
      {
        id: "4be3b8d5a6",
        title: "女子校だからセーフ 2",
        series: "女子校だからセーフ",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/70dd35be-9128-4315-99bc-4145f84acaf1.jpg",
        level: 17,
        finishedAt: "2025-04-16",
        status: "finished",
      },
      {
        id: "9523554fc6",
        title: "女子校だからセーフ 1",
        series: "女子校だからセーフ",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/97c91b3b-261b-411a-abf3-677fa772dd0f.jpg",
        level: 17,
        finishedAt: "2025-04-14",
        status: "finished",
      },
    ],
  },
  {
    name: "夢でフラれてはじまる百合",
    totalVolumes: 3,
    volumes: [
      {
        id: "707a472819",
        title: "夢でフラれてはじまる百合 3",
        series: "夢でフラれてはじまる百合",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/db68dd56-dfe2-4874-9e8c-a1aabb95bc2a.jpg",
        level: 16,
        finishedAt: "2025-04-10",
        status: "finished",
      },
      {
        id: "d50378358c",
        title: "夢でフラれてはじまる百合 2",
        series: "夢でフラれてはじまる百合",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/106864e2-7650-483b-be59-9e8195ab20b1.jpg",
        level: 16,
        finishedAt: "2025-04-08",
        status: "finished",
      },
      {
        id: "cd462f59f9",
        title: "夢でフラれてはじまる百合 1",
        series: "夢でフラれてはじまる百合",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/adda6be7-7a51-4bca-94f8-3160a2e9e556.jpg",
        level: 16,
        finishedAt: "2025-04-06",
        status: "finished",
      },
    ],
  },
  {
    name: "こむぎが自慢のパン屋さん",
    totalVolumes: 2,
    volumes: [
      {
        id: "025da25b47",
        title: "こむぎが自慢のパン屋さん 2巻",
        series: "こむぎが自慢のパン屋さん",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/f146664a-dac1-46d2-8f02-f55e47072e99.jpg",
        level: 16,
        finishedAt: "2025-04-03",
        status: "finished",
      },
      {
        id: "c74ed4908b",
        title: "こむぎが自慢のパン屋さん 1巻",
        series: "こむぎが自慢のパン屋さん",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1869d554-8c6e-45ab-ac1c-84634925a00c.jpg",
        level: 16,
        finishedAt: "2025-03-31",
        status: "finished",
      },
    ],
  },
  {
    name: "桜井さんは気づいてほしい",
    totalVolumes: 4,
    volumes: [
      {
        id: "5eb06fcd53",
        title: "桜井さんは気づいてほしい 4",
        series: "桜井さんは気づいてほしい",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/38ddca11-5e97-4b38-bec2-62979ba5511b.jpg",
        level: 14,
        finishedAt: "2025-03-24",
        status: "finished",
      },
      {
        id: "033fe46a34",
        title: "桜井さんは気づいてほしい 3",
        series: "桜井さんは気づいてほしい",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/427c39ea-157a-4083-9475-056e664218d5.jpg",
        level: 14,
        finishedAt: "2025-03-22",
        status: "finished",
      },
      {
        id: "95bcc9e9e9",
        title: "桜井さんは気づいてほしい 2",
        series: "桜井さんは気づいてほしい",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8ee9f087-d765-48bf-b859-453499180be9.jpg",
        level: 14,
        finishedAt: "2025-03-20",
        status: "finished",
      },
      {
        id: "2643d8da63",
        title: "桜井さんは気づいてほしい 1",
        series: "桜井さんは気づいてほしい",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/d4b7b10a-7c4c-4954-8fbe-c7524a7f1c1b.jpg",
        level: 14,
        finishedAt: "2025-03-17",
        status: "finished",
      },
    ],
  },
  {
    name: "今日から始める幼なじみ",
    totalVolumes: 12,
    volumes: [
      {
        id: "f36bd726f8",
        title: "今日から始める幼なじみ 12巻",
        series: "今日から始める幼なじみ",
        volume: 12,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/214ff3e0-b7ec-4c52-90cc-2a039034ab53.jpg",
        level: 18,
        finishedAt: "2025-03-12",
        status: "finished",
      },
      {
        id: "c43cacffa8",
        title: "今日から始める幼なじみ 11巻",
        series: "今日から始める幼なじみ",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/a42d137d-9e78-4107-8e32-7adcafa653e0.jpg",
        level: 18,
        finishedAt: "2025-03-10",
        status: "finished",
      },
      {
        id: "88f0391d22",
        title: "今日から始める幼なじみ 10巻",
        series: "今日から始める幼なじみ",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/816e68be-c7c2-485d-bdac-5250b62c3fe9.jpg",
        level: 18,
        finishedAt: "2025-03-08",
        status: "finished",
      },
      {
        id: "6e9916436f",
        title: "今日から始める幼なじみ 9",
        series: "今日から始める幼なじみ",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/f26d7219-95d8-4eb1-bcf1-8c52622fe421.jpg",
        level: 18,
        finishedAt: "2025-03-06",
        status: "finished",
      },
      {
        id: "af9b8e96c6",
        title: "今日から始める幼なじみ 8",
        series: "今日から始める幼なじみ",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/f65015f8-676a-4644-b28d-e3849dc34092.jpg",
        level: 18,
        finishedAt: "2025-03-04",
        status: "finished",
      },
      {
        id: "5fa758fc3b",
        title: "今日から始める幼なじみ 7",
        series: "今日から始める幼なじみ",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1a0d022b-bca9-4d9f-9a75-2319a219ca7b.jpg",
        level: 18,
        finishedAt: "2025-03-02",
        status: "finished",
      },
      {
        id: "c7f7b0f5ab",
        title: "今日から始める幼なじみ 6",
        series: "今日から始める幼なじみ",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/bc74ee44-5e14-40b1-bdbc-2f38e162bc33.jpg",
        level: 18,
        finishedAt: "2025-02-28",
        status: "finished",
      },
      {
        id: "45a3aabaa8",
        title: "今日から始める幼なじみ 5",
        series: "今日から始める幼なじみ",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8d3511a5-111e-4695-b4be-55a953091424.jpg",
        level: 18,
        finishedAt: "2025-02-26",
        status: "finished",
      },
      {
        id: "e56ea69b75",
        title: "今日から始める幼なじみ 4",
        series: "今日から始める幼なじみ",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/ff991661-c982-46fe-b639-a7856f4f8a59.jpg",
        level: 18,
        finishedAt: "2025-02-24",
        status: "finished",
      },
      {
        id: "d7d9be783d",
        title: "今日から始める幼なじみ 3",
        series: "今日から始める幼なじみ",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/82549c26-bed5-4f44-a34c-59779e1ce20a.jpg",
        level: 18,
        finishedAt: "2025-02-22",
        status: "finished",
      },
      {
        id: "ffe2ed7465",
        title: "今日から始める幼なじみ 2",
        series: "今日から始める幼なじみ",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/93bd52cf-587e-4e26-b82d-69f812a24b75.jpg",
        level: 18,
        finishedAt: "2025-02-20",
        status: "finished",
      },
      {
        id: "a26eb536f7",
        title: "今日から始める幼なじみ 1",
        series: "今日から始める幼なじみ",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/36bc4795-271d-447a-8872-59d51ef8203c.jpg",
        level: 18,
        finishedAt: "2025-02-19",
        status: "finished",
      },
    ],
  },
  {
    name: "よつばと!",
    totalVolumes: 15,
    volumes: [
      {
        id: "13ffd98dbe",
        title: "よつばと! 15",
        series: "よつばと!",
        volume: 15,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e114fedb-477a-4dc3-a5d6-67005954b2f6.jpg",
        level: 18,
        finishedAt: "2025-02-16",
        status: "finished",
      },
      {
        id: "d94a0563fc",
        title: "よつばと! 14",
        series: "よつばと!",
        volume: 14,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e6ca0100-3ace-485d-bb36-d183905222c8.jpg",
        level: 18,
        finishedAt: "2025-02-13",
        status: "finished",
      },
      {
        id: "203cf9bae3",
        title: "よつばと! 13",
        series: "よつばと!",
        volume: 13,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c9bea80f-2df9-4732-b73e-318ab719afbd.jpg",
        level: 18,
        finishedAt: "2025-02-10",
        status: "finished",
      },
      {
        id: "bbc7220171",
        title: "よつばと! 12",
        series: "よつばと!",
        volume: 12,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/df8bc498-d149-4d26-9035-a55d4d264966.jpg",
        level: 18,
        finishedAt: "2025-02-06",
        status: "finished",
      },
      {
        id: "842fb212d4",
        title: "よつばと! 11",
        series: "よつばと!",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/6d35eebb-c445-4cb0-839d-aeb8f43e0f03.jpg",
        level: 18,
        finishedAt: "2025-02-03",
        status: "finished",
      },
      {
        id: "ec32e4b446",
        title: "よつばと! 10",
        series: "よつばと!",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/ee85a542-0293-4173-a6a8-b6e390e0c97e.jpg",
        level: 18,
        finishedAt: "2025-01-30",
        status: "finished",
      },
      {
        id: "ad81fe13fe",
        title: "よつばと! 9",
        series: "よつばと!",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/2691096a-553b-4d50-a8d4-d2b600b6ba3b.jpg",
        level: 18,
        finishedAt: "2025-01-24",
        status: "finished",
      },
      {
        id: "078ae70529",
        title: "よつばと! 8",
        series: "よつばと!",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/137ab461-fc3d-453d-be20-0f19e4109fcc.jpg",
        level: 18,
        finishedAt: "2025-01-22",
        status: "finished",
      },
      {
        id: "b40e886df7",
        title: "よつばと! 7",
        series: "よつばと!",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/2e3e6d4c-274f-4dcf-9bee-dc5862858c33.jpg",
        level: 18,
        finishedAt: "2025-01-18",
        status: "finished",
      },
      {
        id: "64ed1d3e89",
        title: "よつばと! 6",
        series: "よつばと!",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/35a1512e-6dc8-489c-a90c-d64b71abf339.jpg",
        level: 18,
        finishedAt: "2025-01-16",
        status: "finished",
      },
      {
        id: "7b95a7ef2f",
        title: "よつばと! 5",
        series: "よつばと!",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e2a44284-915d-4c3b-9a80-e5c084e29c6f.jpg",
        level: 18,
        finishedAt: "2025-01-14",
        status: "finished",
      },
      {
        id: "d18ea78481",
        title: "よつばと! 4",
        series: "よつばと!",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/4a8bcf8e-72a3-4a47-9743-76d4316249ac.jpg",
        level: 18,
        finishedAt: "2025-01-11",
        status: "finished",
      },
      {
        id: "ece5bc61e9",
        title: "よつばと! 3",
        series: "よつばと!",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/2a869d9d-31ab-4c34-a260-e85e3b5d4510.jpg",
        level: 18,
        finishedAt: "2025-01-09",
        status: "finished",
      },
      {
        id: "3a114d9a85",
        title: "よつばと! 2",
        series: "よつばと!",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8ee0e481-0138-413d-999e-52b33838a5bb.jpg",
        level: 18,
        finishedAt: "2025-01-07",
        status: "finished",
      },
      {
        id: "830efb7474",
        title: "よつばと! 1",
        series: "よつばと!",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/9bc4a132-c38a-4375-a842-88ea07361141.jpg",
        level: 18,
        finishedAt: "2025-01-05",
        status: "finished",
      },
    ],
  },
  {
    name: "ハピネス",
    totalVolumes: 10,
    volumes: [
      {
        id: "554306f6a2",
        title: "ハピネス 10",
        series: "ハピネス",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/7ce13e10-4d84-4565-960d-4b425f9417d1.jpg",
        level: 16,
        finishedAt: "2024-12-10",
        status: "finished",
      },
      {
        id: "6e9cc9a701",
        title: "ハピネス 9",
        series: "ハピネス",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c4725138-2528-4703-b28a-f1e214b24290.jpg",
        level: 16,
        finishedAt: "2024-12-09",
        status: "finished",
      },
      {
        id: "15e7b673e1",
        title: "ハピネス 8",
        series: "ハピネス",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/ed0852c2-ed97-4e99-acc1-dfecf78f0881.jpg",
        level: 16,
        finishedAt: "2024-12-08",
        status: "finished",
      },
      {
        id: "97f77d18ab",
        title: "ハピネス 7",
        series: "ハピネス",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/15cd6040-3d13-4c7f-8ac9-06c1aa13297f.jpg",
        level: 16,
        finishedAt: "2024-12-07",
        status: "finished",
      },
      {
        id: "d5d4af8225",
        title: "ハピネス 6",
        series: "ハピネス",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/fec38cc1-a4ee-45c4-b5aa-1ae173ad8d74.jpg",
        level: 16,
        finishedAt: "2024-12-06",
        status: "finished",
      },
      {
        id: "b75a914a9d",
        title: "ハピネス 5",
        series: "ハピネス",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/d199044a-ccc1-439b-8606-c5f603c1486c.jpg",
        level: 16,
        finishedAt: "2024-12-04",
        status: "finished",
      },
      {
        id: "9dd6c59212",
        title: "ハピネス 4",
        series: "ハピネス",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/7bee220e-56e7-4d92-be8c-c267338d6341.jpg",
        level: 16,
        finishedAt: "2024-11-29",
        status: "finished",
      },
      {
        id: "e1e8fa8264",
        title: "ハピネス 3",
        series: "ハピネス",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/f31b259a-c317-4ff8-acf7-59e596af463f.jpg",
        level: 16,
        finishedAt: "2024-11-28",
        status: "finished",
      },
      {
        id: "5f514b93c7",
        title: "ハピネス 2",
        series: "ハピネス",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/d0f9e29c-e7f2-48e6-a8ec-55e4e3177ec4.jpg",
        level: 16,
        finishedAt: "2024-11-24",
        status: "finished",
      },
      {
        id: "1c3774c59c",
        title: "ハピネス 1",
        series: "ハピネス",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/fe0716ae-82fc-4354-8e57-10a4d50be58c.jpg",
        level: 16,
        finishedAt: "2024-11-20",
        status: "finished",
      },
    ],
  },
  {
    name: "女子かう生",
    totalVolumes: 9,
    volumes: [
      {
        id: "dcfb0f0b77",
        title: "女子かう生 9",
        series: "女子かう生",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/09e04ba5-549e-4d80-ab63-79cde687df5a.jpg",
        level: 9,
        finishedAt: "2024-11-14",
        status: "finished",
      },
      {
        id: "41d4fdffa0",
        title: "女子かう生 8",
        series: "女子かう生",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e28fbb1f-8f0a-476a-93ad-e0fbf548e459.jpg",
        level: 9,
        finishedAt: "2024-11-14",
        status: "finished",
      },
      {
        id: "e778964f6b",
        title: "女子かう生 7",
        series: "女子かう生",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e4f0df77-6c9c-40da-a372-32246c908d37.jpg",
        level: 9,
        finishedAt: "2024-11-14",
        status: "finished",
      },
      {
        id: "a534e8e68c",
        title: "女子かう生 6",
        series: "女子かう生",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/84fb0603-1233-4007-9022-059dac8f3e8b.jpg",
        level: 9,
        finishedAt: "2024-11-13",
        status: "finished",
      },
      {
        id: "125993638c",
        title: "女子かう生 5",
        series: "女子かう生",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/5d2396a8-b2eb-4694-894f-d623ee6c6145.jpg",
        level: 9,
        finishedAt: "2024-11-13",
        status: "finished",
      },
      {
        id: "48660f58ab",
        title: "女子かう生 4",
        series: "女子かう生",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/11f141d5-b8e2-4f60-8d1b-d35e64bcb032.jpg",
        level: 9,
        finishedAt: "2024-11-09",
        status: "finished",
      },
      {
        id: "201ec0e251",
        title: "女子かう生 3",
        series: "女子かう生",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/72d2ee11-26fd-454e-a95d-e8f6a69a4f4a.jpg",
        level: 9,
        finishedAt: "2024-11-07",
        status: "finished",
      },
      {
        id: "73c439251e",
        title: "女子かう生 2",
        series: "女子かう生",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c1671c60-648b-43ec-ba5f-f07519b66caa.jpg",
        level: 9,
        finishedAt: "2024-11-03",
        status: "finished",
      },
      {
        id: "1b305357ea",
        title: "女子かう生 1",
        series: "女子かう生",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/015e6bc0-2c9f-4b50-8ed7-c09211624989.jpg",
        level: 9,
        finishedAt: "2024-11-02",
        status: "finished",
      },
    ],
  },
  {
    name: "舞ちゃんのお姉さん飼育ごはん。",
    totalVolumes: 4,
    volumes: [
      {
        id: "2753575811",
        title: "舞ちゃんのお姉さん飼育ごはん。 4",
        series: "舞ちゃんのお姉さん飼育ごはん。",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1c60cb09-aa96-4f44-b6c8-758ee3efe257.jpg",
        level: 18,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "f8db5e7944",
        title: "舞ちゃんのお姉さん飼育ごはん。 3",
        series: "舞ちゃんのお姉さん飼育ごはん。",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/062d4c31-75aa-4b66-9aee-24e3a5d9d788.jpg",
        level: 18,
        finishedAt: "2024-11-01",
        status: "finished",
      },
      {
        id: "e8cb52874d",
        title: "舞ちゃんのお姉さん飼育ごはん。 2",
        series: "舞ちゃんのお姉さん飼育ごはん。",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/ce58a5b2-66ac-4296-8b55-03afeba60f66.jpg",
        level: 18,
        finishedAt: "2024-10-17",
        status: "finished",
      },
      {
        id: "c2eeb5ce8a",
        title: "舞ちゃんのお姉さん飼育ごはん。 1",
        series: "舞ちゃんのお姉さん飼育ごはん。",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/7d6e1b71-5439-4569-842a-6de2afb0b9b1.jpg",
        level: 18,
        finishedAt: "2024-10-11",
        status: "finished",
      },
    ],
  },
  {
    name: "最近雇ったメイドが怪しい",
    totalVolumes: 6,
    volumes: [
      {
        id: "5381375c96",
        title: "最近雇ったメイドが怪しい 6",
        series: "最近雇ったメイドが怪しい",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/7adfe4ef-6d79-43c9-bb4d-ab70923690dc.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "38f265914c",
        title: "最近雇ったメイドが怪しい 5",
        series: "最近雇ったメイドが怪しい",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/38f68505-6856-4e9f-9a48-b3af522efaa0.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "99e02c2025",
        title: "最近雇ったメイドが怪しい 4",
        series: "最近雇ったメイドが怪しい",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c8f92ec0-6508-4402-8c81-4d6f7f40e39e.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "2d3a25a21f",
        title: "最近雇ったメイドが怪しい 3",
        series: "最近雇ったメイドが怪しい",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b532da00-ec20-4cc1-b86c-17acf401dd32.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "2c990d8736",
        title: "最近雇ったメイドが怪しい 2",
        series: "最近雇ったメイドが怪しい",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/d7fd1714-48bd-48f1-bb46-8edfa6149e9c.jpg",
        level: 18,
        finishedAt: "2024-01-31",
        status: "finished",
      },
      {
        id: "e0356fe2a9",
        title: "最近雇ったメイドが怪しい 1",
        series: "最近雇ったメイドが怪しい",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/dcc381c3-a82a-428a-a4a3-adfb11a428a4.jpg",
        level: 18,
        finishedAt: "2024-01-25",
        status: "finished",
      },
    ],
  },
  {
    name: "みらいのふうふですけど?",
    totalVolumes: 2,
    volumes: [
      {
        id: "13ad592f3c",
        title: "みらいのふうふですけど? 2",
        series: "みらいのふうふですけど?",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8491c424-dbb3-444a-9bb3-9efbd2eac480.jpg",
        level: 15,
        finishedAt: "2024-01-21",
        status: "finished",
      },
      {
        id: "bf4cda4fd3",
        title: "みらいのふうふですけど? 1",
        series: "みらいのふうふですけど?",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b663237b-6628-4720-8e56-cd5497647557.jpg",
        level: 15,
        finishedAt: "2024-01-18",
        status: "finished",
      },
    ],
  },
  {
    name: "姫乃ちゃんに恋はまだ早い",
    totalVolumes: 7,
    volumes: [
      {
        id: "8e409f1ad3",
        title: "姫乃ちゃんに恋はまだ早い 7",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/53f6f60c-901a-449d-ab84-60ae3010e14c.jpg",
        level: 17,
        finishedAt: "2024-01-10",
        status: "finished",
      },
      {
        id: "2d56a1abe1",
        title: "姫乃ちゃんに恋はまだ早い 6",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/34f99847-af24-405d-b166-dda9e55b61b1.jpg",
        level: 17,
        finishedAt: "2024-01-08",
        status: "finished",
      },
      {
        id: "96150fc6a3",
        title: "姫乃ちゃんに恋はまだ早い 5",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8a2ce2fb-fc5a-4c47-a577-c43d69bbe52b.jpg",
        level: 17,
        finishedAt: "2024-01-07",
        status: "finished",
      },
      {
        id: "dddf2c778e",
        title: "姫乃ちゃんに恋はまだ早い 4",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/9dd785f5-4676-4edc-ae58-7b5b48a1c969.jpg",
        level: 17,
        finishedAt: "2024-01-03",
        status: "finished",
      },
      {
        id: "2d6efac5c6",
        title: "姫乃ちゃんに恋はまだ早い 3",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/dfc4f625-567c-4ff3-8d34-bef241df69ac.jpg",
        level: 17,
        finishedAt: "2023-09-09",
        status: "finished",
      },
      {
        id: "62e970b157",
        title: "姫乃ちゃんに恋はまだ早い 2",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e8758b56-b7e0-46b1-847a-112eee4b9117.jpg",
        level: 17,
        finishedAt: "2023-09-06",
        status: "finished",
      },
      {
        id: "ccb2d90592",
        title: "姫乃ちゃんに恋はまだ早い1",
        series: "姫乃ちゃんに恋はまだ早い",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/61d4dbd0-a8ca-4e73-9391-51a03327e192.jpg",
        level: 17,
        finishedAt: "2023-09-04",
        status: "finished",
      },
    ],
  },
  {
    name: "かわずや",
    totalVolumes: 2,
    volumes: [
      {
        id: "bc7d5f4b6c",
        title: "かわずや 2",
        series: "かわずや",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/fb1770fd-b8b8-490d-bac2-1db54d8b68db.jpg",
        level: 14,
        finishedAt: "2023-08-19",
        status: "finished",
      },
      {
        id: "23c58bb4a1",
        title: "かわずや 1",
        series: "かわずや",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/680bd334-442f-4229-b635-149760e5e561.jpg",
        level: 14,
        finishedAt: "2023-08-17",
        status: "finished",
      },
    ],
  },
  {
    name: "チーズスイートホーム",
    totalVolumes: 12,
    volumes: [
      {
        id: "2b89cd7594",
        title: "チーズスイートホーム 12",
        series: "チーズスイートホーム",
        volume: 12,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8598b8e5-b826-4013-820d-e4594a531fe2.jpg",
        level: 15,
        finishedAt: "2023-08-15",
        status: "finished",
      },
      {
        id: "ec1bc51378",
        title: "チーズスイートホーム 11",
        series: "チーズスイートホーム",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/c060bb47-9f4f-4d97-8c13-ede3e4e0a48e.jpg",
        level: 15,
        finishedAt: "2023-08-13",
        status: "finished",
      },
      {
        id: "cd7d383d59",
        title: "チーズスイートホーム 10",
        series: "チーズスイートホーム",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/670500f9-401a-4413-9df7-7d7ab1883d1b.jpg",
        level: 15,
        finishedAt: "2023-08-11",
        status: "finished",
      },
      {
        id: "7b43e4b52e",
        title: "チーズスイートホーム 9",
        series: "チーズスイートホーム",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b3ef251c-e699-4ae1-b50a-615a33b69729.jpg",
        level: 15,
        finishedAt: "2023-08-09",
        status: "finished",
      },
      {
        id: "0d41590851",
        title: "チーズスイートホーム 8",
        series: "チーズスイートホーム",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/4ddb9e63-563d-41be-9691-c47f20def448.jpg",
        level: 15,
        finishedAt: "2023-08-07",
        status: "finished",
      },
      {
        id: "299e8b13f6",
        title: "チーズスイートホーム 7",
        series: "チーズスイートホーム",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/536e31e7-5345-43f1-aedc-1a03c0c3cd17.jpg",
        level: 15,
        finishedAt: "2023-08-03",
        status: "finished",
      },
      {
        id: "4d91c2e55e",
        title: "チーズスイートホーム 6",
        series: "チーズスイートホーム",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/7ab279ba-765a-4c80-b007-662f81f4f49d.jpg",
        level: 15,
        finishedAt: "2023-08-01",
        status: "finished",
      },
      {
        id: "27dd7d3bce",
        title: "チーズスイートホーム 5",
        series: "チーズスイートホーム",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e46e1173-60b7-46e1-8377-2c44170dd040.jpg",
        level: 15,
        finishedAt: "2023-07-30",
        status: "finished",
      },
      {
        id: "10827f4245",
        title: "チーズスイートホーム 4",
        series: "チーズスイートホーム",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0c26b484-4d25-466e-88c5-7a69be2a4861.jpg",
        level: 15,
        finishedAt: "2023-07-28",
        status: "finished",
      },
      {
        id: "8930e11e1c",
        title: "チーズスイートホーム 3",
        series: "チーズスイートホーム",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8bd33b89-c043-4408-887f-c453d307a3af.jpg",
        level: 15,
        finishedAt: "2023-07-25",
        status: "finished",
      },
      {
        id: "c12fa5382c",
        title: "チーズスイートホーム 2",
        series: "チーズスイートホーム",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/d6bf2907-2d24-45c2-8dd0-55f7c84a6c23.jpg",
        level: 15,
        finishedAt: "2023-07-21",
        status: "finished",
      },
      {
        id: "625544af85",
        title: "チーズスイートホーム 1",
        series: "チーズスイートホーム",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/6c4d2807-9d3e-4cfc-adf4-3fa9a351ef01.jpg",
        level: 15,
        finishedAt: "2023-07-18",
        status: "finished",
      },
    ],
  },
  {
    name: "スーと鯛ちゃん",
    totalVolumes: 1,
    volumes: [
      {
        id: "4757e36a02",
        title: "スーと鯛ちゃん 1",
        series: "スーと鯛ちゃん",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/2031f96f-56b9-4108-a581-16c9ea701396.jpg",
        level: 15,
        finishedAt: "2023-07-14",
        status: "finished",
      },
    ],
  },
  {
    name: "事情を知らない転校生がグイグイくる。",
    totalVolumes: 14,
    volumes: [
      {
        id: "4e247f4169",
        title: "事情を知らない転校生がグイグイくる。 14",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 14,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/3a881f46-14a6-4a27-8392-44e4b906c491.jpg",
        level: 17,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "67226f850e",
        title:
          "事情を知らない転校生がグイグイくる。(13) ガンガンコミックスJOKER",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 13,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/6b9ba84b-0eb7-496c-ae4f-18170d7afeb5.jpg",
        level: 17,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "9d437b5daf",
        title: "事情を知らない転校生がグイグイくる。 12",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 12,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/f5c66e9f-83b3-4c27-923a-711c624de6fd.jpg",
        level: 17,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "a0152cf392",
        title: "事情を知らない転校生がグイグイくる。 11",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/70e153c6-10cc-4f5b-bdef-f93e2224d046.jpg",
        level: 17,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "13249a9f63",
        title: "事情を知らない転校生がグイグイくる。 10",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/a6ce60ad-0a0e-4726-a6c0-fb8a046a1ac8.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "4b86c3eeac",
        title: "事情を知らない転校生がグイグイくる。 9",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/70ac19cf-7263-4cc1-8a43-8647374012f7.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "54408af461",
        title: "事情を知らない転校生がグイグイくる。 8",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/fe450ee2-9b6e-4006-94db-5c3a30ad46e3.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "1bdc1995e8",
        title: "事情を知らない転校生がグイグイくる。(7)",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/8c3a92cd-1e12-4559-b4d1-7c038f823eab.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "ab65b8ccb3",
        title: "事情を知らない転校生がグイグイくる。 6",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/987d4a05-4e49-41c6-8129-041310d0699d.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "68f545144c",
        title: "事情を知らない転校生がグイグイくる。 5",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e3f54c29-bd24-4672-9dcb-14244ca31c10.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "29b8ac63f7",
        title: "事情を知らない転校生がグイグイくる。 4",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/9ab8d608-adbb-4364-81dc-ff032596cdc7.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "02a782b401",
        title: "事情を知らない転校生がグイグイくる。 3",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/6fb7237a-d8fe-4f4e-8fe5-f38d2dfd6464.jpg",
        level: 17,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "b78bc95fd4",
        title: "事情を知らない転校生がグイグイくる。 2",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/a8854c71-e333-46d7-b365-6415b304b1f4.jpg",
        level: 17,
        finishedAt: null,
        status: "stopped",
      },
      {
        id: "bd48d0853c",
        title: "事情を知らない転校生がグイグイくる。 1",
        series: "事情を知らない転校生がグイグイくる。",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0bed4a96-1a61-4694-bd2f-053b371c87fd.jpg",
        level: 17,
        finishedAt: "2023-07-07",
        status: "finished",
      },
    ],
  },
  {
    name: "雨と君と",
    totalVolumes: 7,
    volumes: [
      {
        id: "b9d94566a9",
        title: "雨と君と(7)",
        series: "雨と君と",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b9e6618b-a935-4458-952a-10aae6a05ec0.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "06697c6d96",
        title: "雨と君と 6",
        series: "雨と君と",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/2e118cee-5a72-42de-9122-1594dc6c7774.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "9f1f1b7f84",
        title: "雨と君と 5",
        series: "雨と君と",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/4d19717f-6a55-4ef9-bec9-34b078706294.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "9bfc3de82b",
        title: "雨と君と 4",
        series: "雨と君と",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b26bee99-ffbc-49b7-ab53-282bd519a1fc.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "00a97f399b",
        title: "雨と君と 3",
        series: "雨と君と",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/5eaa4ce5-0e18-47ce-a7ab-747ff2405332.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "c694b439ab",
        title: "雨と君と 2",
        series: "雨と君と",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1f7866a3-1890-44b8-a1ba-39a07738b64e.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "3ce02e27f3",
        title: "雨と君と 1",
        series: "雨と君と",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/04372333-4321-44e8-8a35-4720608b3ac4.jpg",
        level: 18,
        finishedAt: null,
        status: "owned",
      },
    ],
  },
  {
    name: "カノジョも彼女",
    totalVolumes: 14,
    volumes: [
      {
        id: "9892063505",
        title: "カノジョも彼女 14",
        series: "カノジョも彼女",
        volume: 14,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/25ad641b-1975-40ad-8492-64315ba2d397.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "e2c081784d",
        title: "カノジョも彼女 13",
        series: "カノジョも彼女",
        volume: 13,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/ca667470-6a5e-4753-a095-039f9b2399c7.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "658945b7e5",
        title: "カノジョも彼女 12",
        series: "カノジョも彼女",
        volume: 12,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/64f5eb2f-e795-4db8-a42d-895ba1c08074.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "551befafc2",
        title: "カノジョも彼女 11",
        series: "カノジョも彼女",
        volume: 11,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/92ae4457-1e6d-416f-89f3-94fa483cc889.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "138c34df0c",
        title: "カノジョも彼女 10",
        series: "カノジョも彼女",
        volume: 10,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/31b71bdc-9265-409e-8159-b034c4cde6ac.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "caf9de7029",
        title: "カノジョも彼女 9",
        series: "カノジョも彼女",
        volume: 9,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/0cc39303-c16e-47ec-bdd1-81e813b24756.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "f9ec0ac8b3",
        title: "カノジョも彼女 8",
        series: "カノジョも彼女",
        volume: 8,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/88b9c969-68a6-424c-a95d-e0c4efa2d112.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "9c85c47f61",
        title: "カノジョも彼女 7",
        series: "カノジョも彼女",
        volume: 7,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/90cf948b-d365-4acd-8b99-5bfdc6e38fb9.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "c076fc265c",
        title: "カノジョも彼女 6",
        series: "カノジョも彼女",
        volume: 6,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/efe35ff1-3093-4ef0-809e-cbc3b4741491.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "754131120a",
        title: "カノジョも彼女 5",
        series: "カノジョも彼女",
        volume: 5,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/267d68a8-12ce-4c40-b32d-fc0d40736ad2.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "3b1ec9ebdb",
        title: "カノジョも彼女 4",
        series: "カノジョも彼女",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e5497a36-7fce-4772-bef0-c5ae75a2de2f.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "f5a7864ded",
        title: "カノジョも彼女 3",
        series: "カノジョも彼女",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/56eb4a2d-d4fc-4e22-81c0-9307a379874e.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "9c1a019bb3",
        title: "カノジョも彼女 2",
        series: "カノジョも彼女",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/e2935a20-4ea0-4b41-84f3-7c356dd544a8.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
      {
        id: "d2326af5f0",
        title: "カノジョも彼女 1",
        series: "カノジョも彼女",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b792f076-b90c-4c8e-94c6-c4c022ca9fe5.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
    ],
  },
  {
    name: "好きな子がめがねを忘れた",
    totalVolumes: 1,
    volumes: [
      {
        id: "be9a46528f",
        title: "好きな子がめがねを忘れた 1",
        series: "好きな子がめがねを忘れた",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/38fb2040-cb92-42ba-8396-c71b0435bfcd.jpg",
        level: 19,
        finishedAt: null,
        status: "owned",
      },
    ],
  },
  {
    name: "ルリドラゴン",
    totalVolumes: 1,
    volumes: [
      {
        id: "058e7847b4",
        title: "ルリドラゴン 1",
        series: "ルリドラゴン",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/015d8981-0c63-4bb7-bf2f-c7edd9a8fe30.jpg",
        level: 22,
        finishedAt: null,
        status: "owned",
      },
    ],
  },
  {
    name: "今日のこねこのチー",
    totalVolumes: 4,
    volumes: [
      {
        id: "0f6a84b444",
        title: "今日のこねこのチー(4)",
        series: "今日のこねこのチー",
        volume: 4,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/b3580d1e-4634-426d-93f8-825aadfd944a.jpg",
        level: 15,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "93dac11664",
        title: "今日のこねこのチー(3)",
        series: "今日のこねこのチー",
        volume: 3,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/97ffaa93-4aee-4da7-9b86-17878c33a785.jpg",
        level: 15,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "94053cebc0",
        title: "今日のこねこのチー(2)",
        series: "今日のこねこのチー",
        volume: 2,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/1d42b198-1ae0-4854-9b51-e36b4324c943.jpg",
        level: 15,
        finishedAt: null,
        status: "wishlist",
      },
      {
        id: "25265ea4b7",
        title: "今日のこねこのチー(1)",
        series: "今日のこねこのチー",
        volume: 1,
        cover:
          "https://d1qyepy4suh8il.cloudfront.net/dcf8c58d-37e2-43d9-8339-5710ae81f7b5.jpg",
        level: 15,
        finishedAt: null,
        status: "wishlist",
      },
    ],
  },
];

// Helper function to get all volumes from all series as a flat array
export function getAllVolumes(): MockVolume[] {
  return mockMangaSeries.flatMap((series) => series.volumes);
}

// Helper function to get a series by name
export function getSeriesByName(name: string): MangaSeries | undefined {
  return mockMangaSeries.find((series) => series.name === name);
}
