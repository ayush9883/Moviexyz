# Next js 14 Movie Admin Dashboard Notes



### Movie Database Model

```js
    title: { type: String },
    slug: { type: String, required: true },
    bgposter: { type: String },
    smposter: { type: String },
    titlecategory: {type: String}, //
    description: { type: String },
    rating: { type: String },
    duration: { type: String },
    year: { type: String },
    genre: [{ type: String }],
    language: { type: String }, //
    subtitle: { type: String }, //
    size: { type: String }, //
    quaility: { type: String }, //
    youtubelink: { type: String }, //
    category: { type: String },
    watchonline: { type: String }, //
    downloadlink: { 
        "480p": { type: String },
        "720p": { type: String },
        "1080p": { type: String },
        "4k": { type: String }
    },
    status: { type: String },
```

### Movie Categories 

```js
["Editor_Choice", "Bollywood", "Hollywood", "South", "Gujarati", "Punjabi", "Telugu", "Tamil", "Malayalam", "Kannada", "Pakistani", "Marvel_Studio", "DC", "Tv_Shows", "Web_Series"]
```

### Movie Genre

```js
['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction']
```



### Delete Page Svg

```svg
<svg
                        viewBox="0 0 24 24"
                        fill="red"
                        height="6em"
                        width="6em"
                    >
                        <path d="M4 19V7h12v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2M6 9v10h8V9H6m7.5-5H17v2H3V4h3.5l1-1h5l1 1M19 17v-2h2v2h-2m0-4V7h2v6h-2z" />
                    </svg>
```