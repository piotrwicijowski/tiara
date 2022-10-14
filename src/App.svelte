<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./routes/Home.svelte";
    import Manual from "./routes/Manual.svelte";
    import Selected from "./routes/Selected.svelte";
    import Stats from "./routes/Stats.svelte";

    export let url = "";
</script>

<Router {url}>
    <nav>
        <Link to="/">Losuj</Link>
        <Link to="manual">Wybierz</Link>
        <Link to="stats">Statystyki</Link>
    </nav>
    <div>
        <Route path="stats" component={Stats} />
        <Route path="selected/:id" component={Selected} />
        <Route path="manual" component={Manual} />
        <Route path="/"><Home /></Route>
    </div>
</Router>
