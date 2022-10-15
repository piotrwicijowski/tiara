<script>
    import { Link } from "svelte-routing";
    import SelectedHouse from "../components/SelectedHouse.svelte";
    import { houses } from "../utils/houses";
</script>

<div class="grid">
    {#each houses as house}
        <Link to={ `/selected/${house.id}` }>
            <SelectedHouse house={house}></SelectedHouse>
        </Link>
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
        gap: 1em;
        width: 100%;
    }
</style>
