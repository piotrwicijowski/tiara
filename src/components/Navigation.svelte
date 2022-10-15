<script>
    import { Link } from "svelte-routing";
</script>

<nav>
    <Link to="/">Losuj</Link>
    <Link to="manual">Wybierz</Link>
    <Link to="stats">Statystyki</Link>
</nav>

<style>
    nav {
        padding: 0.5em 1em;
        position: sticky;
        top: 0;
        width: 100%;
        background-color: var(--background-color);
        box-shadow: 0px 0px 5px rgba(0,0,0,0.6);
        display: flex;
        gap: 2em;
    }
</style>