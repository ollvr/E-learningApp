<template>
  <div class="certificate">
    <div class="header">
      <div class="title">Certificate of Achievement</div>
    </div>
    <div class="content">
      <div class="recipient">This is to certify that</div>
      <div class="recipient">
        <strong>{{ $props.CandidatName }}</strong>
      </div>
      <div class="achievement">has successfully completed {{ $props.CourseName }} Cource</div>
      <div class="date">Date: {{ $props.date }}</div>
    </div>
    <div class="signature-container">
      <div class="issuer">Issued by: {{ $props.teacher }}</div>
      <div class="signature">{{ $props.teacher }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  CandidatName: String,
  CourseName: String,
  date: String,
  teacher: String
})
</script>

<style scoped>
.certificate {
  width: 800px;
  margin: 150px auto;
  background-color: #fff;
  border: 5px solid #3498db;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.header {
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.content {
  text-align: center;
  padding: 30px;
}

.recipient {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.achievement {
  font-size: 18px;
  margin-bottom: 20px;
}

.date {
  font-size: 16px;
}

.issuer {
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

.signature {
  font-family: 'Brush Script MT', cursive;
  font-size: 36px;
  font-weight: bold;
  color: #000;
  text-align: center;
  padding: 20px;
}
</style>
