<script lang="ts">
    export let thumb: string
    type quality = 'h' | 'm'
    function handleUrl(url: string, quality: quality) {
        const arr = url.split("/")
        const last = arr.pop()
        const ext = last?.split(".").pop()
        arr.push(`${quality}qdefault.${ext}`)
        return arr.join("/")
    }
</script>
<picture>
    <source srcset={handleUrl(thumb, "h")} media="(min-width: 400px)" />
    <img decoding="async" src={handleUrl(thumb, "m")} alt=""/>
</picture>
<style>
    picture, img, source{
        object-fit: cover;
        aspect-ratio: 1.7777;
        max-width: 360px;
        width:100%;
        background-color: rgb(209, 209, 209);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
}

@media (min-width: 600px) {
    picture, img, source{
        height: 270px;
        max-width: 480px;
    }
}
</style>