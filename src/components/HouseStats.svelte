<script lang="ts">
    import type { HouseCapacity } from "../utils/houses";
    export let house: HouseCapacity;
    export let editable: boolean;
</script>

<div class={`${house.house.name.toLowerCase()} row`}>
    <span>{house.house.name}</span>
    <span class="count">
        {#if !editable}
            <span>{house.count}</span>
            /
            <span>{house.capacity}</span>
        {:else}
            <input type="number" bind:value={house.count}/>
            /
            <input type="number" bind:value={house.capacity}/>
        {/if}
    </span>
</div>

<style>
    .row {
        display: flex;
        background-color: var(--background-color);
        padding: 0.5em 1em;
    }
    .gryffindor {
        --background-color: var(--gryffindor-color);
    }
    .hufflepuff {
        --background-color: var(--hufflepuff-color);
    }
    .slytherin {
        --background-color: var(--slytherin-color);
    }
    .ravenclaw {
        --background-color: var(--ravenclaw-color);
    }
    .count {
        margin-left: auto;
        display: flex;
        gap: 0.5em;
    }
    .count > * {
        min-width: 3ch;
        text-align: right;
    }
    input {
        max-width: 5ch;
    }
</style>
