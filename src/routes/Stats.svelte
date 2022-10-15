<script>
    import HouseStats from "../components/HouseStats.svelte";
    import { housesInitial, housesStore } from "../services/stores";
    let editable = false;
    function reset() {
        housesStore.set(JSON.parse(JSON.stringify(housesInitial)));
        console.log("oje");
    }
    function edit() {
        editable = true;
    }
    function endEdit() {
        editable = false;
    }
</script>

<div class="wrapper">
    <div class="actions">
        {#if editable}
            <button on:click={endEdit}>ok</button>
        {:else}
            <button on:click={edit}>edytuj</button>
        {/if}
        <button on:click={reset}>resetuj</button>
    </div>
    {#each $housesStore as house}
        <HouseStats {house} {editable} />
    {/each}
</div>

<style>
    .wrapper {
        width: 100%;
    }
    .actions {
        display: flex;
    }
</style>
