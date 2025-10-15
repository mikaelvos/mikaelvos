<script lang="ts">
    import { page } from '$app/stores';
    
    $: host = $page.url.hostname;
</script>

<h1>LustreLus subdomain</h1>
<p> Page: {host}</p>