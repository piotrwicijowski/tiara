<script>
    import HouseStats from "../components/HouseStats.svelte";
    import { housesInitial, housesStore } from "../services/stores";
    function reset() {
        housesStore.set(JSON.parse(JSON.stringify(housesInitial)));
        console.log('oje')
    }
</script>

<button on:click={reset}>resetuj</button>
{#each $housesStore as house}
    <HouseStats {house} />
{/each}
