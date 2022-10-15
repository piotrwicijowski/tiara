<script>
    import { housesStore } from "../services/stores";
</script>

{#each $housesStore as house}
    <div>
        <span>{house.house.name}</span>
        <span>{house.count}</span>
    </div>
{/each}
