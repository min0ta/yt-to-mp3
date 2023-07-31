<script lang="ts">
  import Imgloader from "./imgloader.svelte";

    export let link: string[]
    export let target: string

    let val: number = 0 

    function getResult(res: Blob | undefined) {
        if (!res) {
            return ""
        }
        const url = URL.createObjectURL(res)
        const a = document.createElement("a")
        a.href = url
        a.download = `video.${target}`
        a.click()
        URL.revokeObjectURL(url)
        return ""
    }
    async function newFetch() {
        const input = link[1]
        const regex = /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gim
        const exec = regex.exec(input)
        if (exec === null) {
            return Promise.reject("invalid url")
        }
        const id = exec[1]
        const q = await fetch(`https://yt-to-mp3-backend.onrender.com/ping?url=${id}`)
        const reader = q.body?.getReader()
        const contentLength = q.headers.get("Content-Length")
        if (!contentLength) {
            return
        }
        let recieveddLen = 0
        let chuncks = []
        while (true){
            //@ts-ignore
            const {done, value} = await reader?.read() 
            if (done) {
                break;
            }
            chuncks.push(value)
            recieveddLen += value.length
            val = (recieveddLen/(+contentLength) * 100) | 0
        }
        return new Blob(chuncks)
    }
  
    async function ping(){
        const regex = /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gim
        const url = regex.exec(link[1])
        if (url == null) {
            return Promise.reject("Not valid url")
        }
        const id = url[1]
        const res = await fetch(`https://yt-to-mp3-backend.onrender.com/ping?url=${id}`).then(response => response.json())
        if (res.err) {
            return Promise.reject(res.err)
        }
        return res
    }
</script>
{#await ping()}
    <div class="loading-circle"></div>
{:then result}
        <div class="preview">
            <svelte:component this={Imgloader} thumb={result.thumb}/>
            <div style="width:100%">
                <div class="text">
                    <span><b>{result.title}</b><br>{result.author}</span>
                </div>
            </div>
        </div>
        {#await newFetch()}
        <div style="display:flex; justify-content:center">
            <!-- <progress max=100 value={val}>progeess</progress> -->
            <div class="progress" style=width:100px>
                <div class="value" style=width:{val}px></div>
                <div class="rolly"/>
                <div class="rolly"/>
            </div>
            
        </div>
        {:then res} 
            {getResult(res)}
        {:catch err}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="error">Error: {err}</div>
        {/await}
{:catch err}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="error">{err}</div>
{/await}


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');

.preview{
    border: 1px #959595 solid;
    border-radius: 15px;
    margin: 50px 0;
    font-family: 'Inter', sans-serif;
    color:hsl(0, 0%, 40%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.preview div{
    background-color: #e9e9e9;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.text {
    width: 100%;
    max-width: 360px;
    padding: 15px 15px;
}
@media (min-width:600) {
    .text{
        max-width: 480px;
    }
}

.progress {
  overflow: hidden;
  border-radius: 7px; 
  width: 120px;
  height: 15px;
  box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
  background: linear-gradient(#a1a1a1, #8d8c8c);
}
.value {
    position: relative;
    z-index: 1000;
    height: 100%;
    background: linear-gradient(var(--secondary), var(--secondaryPressed));
}
.rolly{
    position: relative;
    margin-top: 27px;
    rotate: 15deg;
    width: 100px;
    height: 3px;
    background-color: #c0c0c0;
    animation: s-5vM2haeXPK5E-roll 1s linear infinite;
}

@keyframes roll{
    0%{
        top: -50px
    }
    100%{
        top: -10px
    }
}

.error{
    width: clamp(120px, 30vw, 360px);
    margin-top: 15px;
    border-radius: 5px;
    background-color: #c72b2b;
    padding: 15px;
    text-align: center;
    color: var(--text);
}
</style>