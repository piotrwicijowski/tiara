<script>
    import { navigate } from "svelte-routing";
    import { randomizeHouses } from "../services/randomizer";
    import { housesStore } from "../services/stores";

    // let houses;

	// const unsubscribe = housesStore.subscribe(value => {
	// 	houses = value;
	// });

	// onDestroy(unsubscribe);

    function select() {
        const selectedHouse = randomizeHouses($housesStore);
        navigate(`/selected/${selectedHouse}`);
    }
</script>

<p>Witamy w Tiarze przydziału</p>
<button on:click={select}>Losuj</button>
