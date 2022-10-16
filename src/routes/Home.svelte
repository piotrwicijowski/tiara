<script>
    import { navigate } from "svelte-routing";
    import { randomizeHouses } from "../services/randomizer";
    import { housesStore } from "../services/stores";

    function select() {
        const selectedHouse = randomizeHouses($housesStore);
        navigate(`/selected/${selectedHouse}`);
    }
</script>

<div class="wrapper">

<h3>Witamy w Tiarze przydziału</h3>
<button class="select" on:click={select}>Losuj</button>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
    }
    .select {
        aspect-ratio: 1;
        width: 400px;
        max-width: 100%;
        font-size: 3rem;
    }
</style>
