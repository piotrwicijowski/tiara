<script>
    import HouseStats from "../components/HouseStats.svelte";
    import { housesInitial, housesStore } from "../services/stores";
    function reset() {
        housesStore.set(housesInitial);
    }
</script>

<button on:click={reset}>resetuj</button>
{#each $housesStore as house}
    <HouseStats {house} />
{/each}
