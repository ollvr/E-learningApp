<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
    <div>
        <div>
            <h3 style="color:rgb(15, 15, 26);text-align:center">All Your Course Stats are here </h3>
        </div>
        <div class="chart-container">
            <!-- Chart 1: Number of Students -->
            <canvas id="studentsChart"></canvas>

            <!-- Chart 2: Earnings -->
            <canvas id="earningsChart"></canvas>

            <!-- Chart 3: Certified Students -->
            <canvas id="certifiedStudentsChart"></canvas>

            <!-- Chart 4: Feedbacks -->
            <canvas id="feedbacksChart"></canvas>
        </div>
    </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";
        const studentsData = [150, 200, 180, 220, 250];
        const earningsData = [3000, 4500, 4000, 5200, 6000];
        const certifiedStudentsData = [120, 180, 150, 200, 220];
        const feedbacksData = [45, 60, 50, 70, 75];
onMounted(()=>{
    const commonConfig = {
            type: 'bar',
            data: {
                labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 2000, // Animation duration in milliseconds
                },
            },
        };

        // Create and render charts
        // eslint-disable-next-line no-unused-vars
        const studentsChart = new Chart(document.getElementById('studentsChart'), {
            ...commonConfig,
            data: {
                ...commonConfig.data,
                datasets: [{
                    label: 'Number of Students',
                    data: studentsData,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
                }]
            },
        });

        // eslint-disable-next-line no-unused-vars
        const earningsChart = new Chart(document.getElementById('earningsChart'), {
            ...commonConfig,
            data: {
                ...commonConfig.data,
                datasets: [{
                    label: 'Earnings ($)',
                    data: earningsData,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color
                }]
            },
        });

        // eslint-disable-next-line no-unused-vars
        const certifiedStudentsChart = new Chart(document.getElementById('certifiedStudentsChart'), {
            ...commonConfig,
            data: {
                ...commonConfig.data,
                datasets: [{
                    label: 'Certified Students',
                    data: certifiedStudentsData,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green color
                }]
            },
        });

        // eslint-disable-next-line no-unused-vars
        const feedbacksChart = new Chart(document.getElementById('feedbacksChart'), {
            ...commonConfig,
            data: {
                ...commonConfig.data,
                datasets: [{
                    label: 'Feedbacks',
                    data: feedbacksData,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)', // Yellow color
                }]
            },
        });

})
</script>

<style  scoped>
.chart-container {
    max-width: 800px;
    margin: 0 auto;
}
</style>
