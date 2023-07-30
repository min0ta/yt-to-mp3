<script lang="ts">
import Header from "./header.svelte";
import Footer from "./footer.svelte";
import Input from "./input.svelte";
import About from "./about.svelte";

let load: any = null
function setLoad(arg: any) {
    load = arg
}
let link = ""
function setLink(arg: string) {
    link = arg
}
let target = "mp4"
function setTarget(arg: string) {
    target = arg
}
</script>
<div class=wrapper>
    <Header/>
        <div class="main">
            <Input {setLink} {setLoad} {setTarget} {target}/>
            <svelte:component this={load} {link} {target}/>
            <About/>
        </div>
    <Footer/>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap');
    :root{
        --primary: rgb(80, 80, 80);
        --secondary: #2095b3;
        --secondaryPressed: #197991;
        --text: #ddd;
    }
    .wrapper{
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
    }
    .main{
        display: flex;
        flex-grow: 1;
        align-items: center;
        flex-direction: column;
        background-color: #fafafa;
        padding: 25px 0;
    }
</style>