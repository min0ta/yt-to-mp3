<script lang="ts">
    export let clear: Function
    export let paste: Function
    export let setMp3: Function
    export let setMp4: Function
    export let target: string
</script>

<div class="helper">
    <div class="group">
        target
        <div>
            <button on:click={() => {setMp3()}} class="option {target === "mp3" ? "selected" : null}">mp3</button>
            <button on:click={() => {setMp4()}} class="option {target === "mp4" ? "selected" : null}">mp4</button>
        </div>
    </div>
    <div class="group">
        actions
        <div>
            <button class="option" on:click={() => {clear()}}>clear</button>
            <button class="option" on:click={() => {paste()}}>paste</button>
        </div>
    </div>
</div>

<style>
    *{
        display: flex;
        color:var(--text);
        font-family: 'Fira Sans', sans-serif;
        background: none;
    }
    .helper{
        width: clamp(130px, 90%, 600px);
        border-radius: 2px;
        background-color: var(--secondary);
        margin-top: 10px;
        box-shadow: 1px 3px 5px rgb(136, 136, 136);
        justify-content: space-between;
        padding: 5px 15px;
        height: 55px;
    }
    .group{
        font-size: 0.8rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .option{
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        width: 50px;
        height: 25px;
        border-inline: 1px rgba(255, 255, 255, 0.15) solid;
        cursor: pointer;
    }

    .selected{
        background-color: var(--secondaryPressed);
    }

</style>