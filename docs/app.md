# Music Brasil menager

## Descrição:

Aplicativo para centralizar diferentes artistas em destaque na cena musical brasileira.

### Features:

- Listar as músicas em destaque na cena musical do Brasil.
    - [Pop, Mpb, Indie, Rock e etc..]
- Filtrar músicas de diferentes artistas.

## Implementação:

- Listar as músicas em destaque na cena musical do Brasil.

Vamos retornar em uma Api rest {json} com o nome do artista, nome da música, imagem de capa, link e categoria.

```js
[
    {
        artistName: "Liniker",
        music: "CAJU",
        videoId: "rPVVgNI1FS4",
        cover: "https://i.ytimg.com/vi/rPVVgNI1FS4/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=rPVVgNI1FS4",
        categories: ["mpb", "samba", "soul"]
    },
        {
        artistName: "Zaynara",
        music: "Quem Manda em Mim",
        videoId: "eYgb0wKM_Qo",
        cover: "https://i.ytimg.com/vi/eYgb0wKM_Qo/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=eYgb0wKM_Qo",
        categories: ["pop", "BeatMelody"]
    }
]

```
