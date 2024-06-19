
function add_custom_script() {
    ?>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            showGraph('datawrapper-chart-Y8WGy');
        });

        function showGraph(id) {
            var graphs = document.querySelectorAll('.flourish-embed, iframe');
            graphs.forEach(function (graph) {
                graph.style.display = 'none';
            });
            var selectedGraph = document.getElementById(id);
            if (selectedGraph) {
                selectedGraph.style.display = 'block';
            }

            // Show or hide participant characteristics buttons
            var participantButtons = document.getElementById('participant-characteristics-buttons');
            if (id === 'datawrapper-chart-Y8WGy') {
                participantButtons.style.display = 'flex';
            } else {
                participantButtons.style.display = 'none';
            }
        }

        function showSubGraph(id) {
            var subGraphs = document.querySelectorAll('iframe[id^="datawrapper-chart-"]');
            subGraphs.forEach(function (subGraph) {
                subGraph.style.display = 'none';
            });
            var selectedSubGraph = document.getElementById(id);
            if (selectedSubGraph) {
                selectedSubGraph.style.display = 'block';
            }
        }
    </script>
    <?php
}
add_action('wp_footer', 'add_custom_script');

