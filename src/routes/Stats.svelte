<script>
    import { housesInitial, housesStore } from "../services/stores";
    function reset() {
        housesStore.set(housesInitial);
    }
</script>

<button on:click={reset} >resetuj</button>
{#each $housesStore as house}
    <div>
        <span>{house.house.name}</span>
        <span>{house.count}</span>
    </div>
{/each}
