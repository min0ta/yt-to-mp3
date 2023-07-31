<script lang="ts">
    import Button from "./button.svelte";
    import Helper from "./helper.svelte";
    import Loading from "./loading.svelte";

    export let setLink: Function
    export let setLoad: Function
    export let setTarget: Function
    export let target: string
    let input: string
    
    async function paste() {
        input = await navigator.clipboard.readText()
    }

    function clear() {
        input = ""
    }

    function setMp3() {
        setTarget("mp3")
    }

    function setMp4() {
        setTarget("mp4")
    }

    function createLink() {
        setLoad(null)
        const targ = target === "mp4" ? "video" : "audio"
        setLink([targ, input])
        setTimeout(() => {setLoad(Loading)}, 0)
    }
</script>

<div class="container">
    <div class="input">
        <input type="text" bind:value={input} placeholder="Paste your youtube URL...">
        <Button {createLink}/>
    </div>
    <Helper {clear} {paste} {setMp3} {setMp4} {target}/>
</div>

<style>
    .container{
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .input{
        display: flex;
        justify-content: space-between;
        width: clamp(130px, 90%, 600px);
        height: 50px;
    }
    input{
        width: 75%;

        border-radius: 15px;
        outline: var(--secondary) 2px solid;
        padding: 3px 10px;
        font-size: 1.15rem;
        background-color: inherit;
        color: #7f7f7f;
    }
    input:focus{
        outline: none;
        box-shadow: 0 0 7px var(--secondary);
        color: #0f0f0f;
    }

</style>