<script>
    import Newsletter from './Newsletter.svelte'
</script>


<div class="sidebar">
    <Newsletter />
</div>



<style>
    @media screen and (max-width: 768px){
        .sidebar {
            display: none;
        }
    }
</style>
