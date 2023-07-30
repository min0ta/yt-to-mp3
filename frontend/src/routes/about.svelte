<script>

</script>
    <div class="wrapper">
        <div class="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
<style>
    .wrapper{
        margin-top: 50px;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: clamp(20px, 8vw, 200px);
    }
    .grid div{
        border-radius: 25px;
        aspect-ratio: 1;
        width: max(150px,12vw);
        background-color: rgb(226, 226, 226);
        box-shadow: 4px 4px 25px rgb(139, 139, 139);
    }
    @media (min-width:360px) {
        .grid{
        grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width:700px) {
        .grid{
        grid-template-columns: repeat(3, 1fr);
        }
    }
</style>