<script lang="ts">
    export let createLink: Function
</script>

<button on:click={() => {createLink()}}>Convert</button>
<style>
    button{
        color: var(--text);
        font-size: 1rem;
        font-weight: 600;
        width: clamp(60px, 20%, 120px);
        border-radius: 15px;
        background-color: var(--secondary);
        box-shadow: 1px 3px 5px #5f5f5f;
        cursor: pointer;
    }
    button:active {
        background-color: var(--secondaryPressed);
        box-shadow: 1px 2px 3px #5f5f5f;
    }
</style>