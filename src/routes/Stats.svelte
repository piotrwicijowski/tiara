<script>
    import HouseStats from "../components/HouseStats.svelte";
    import { housesInitial, housesStore } from "../services/stores";
    let editable = false;
    function reset() {
        if (confirm("Czy na pewno zresetować statystyki?")) {
            housesStore.set(JSON.parse(JSON.stringify(housesInitial)));
        }
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
        <button class="reset" on:click={reset}>resetuj</button>
    </div>
    <div>
        {#each $housesStore as house}
            <HouseStats {house} {editable} />
        {/each}
    </div>
</div>

<style>
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .actions {
        display: flex;
        gap: 0.5em;
    }
    .reset {
        margin-left: auto;
    }
</style>
