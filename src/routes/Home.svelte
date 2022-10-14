<script>
    import { navigate } from "svelte-routing";
    import { randomize } from "../services/randomizer";

    function select() {
        const selectedHouse = randomize();
        navigate(`/selected/${selectedHouse}`);
    }
</script>

<p>Witamy w Tiarze przydziału</p>
<button on:click={select}>Losuj</button>
