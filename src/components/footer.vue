<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          {{currentYear}} © Narayani Finance Bank.
        </div>
        <div class="col-sm-6">
          <div class="text-sm-right d-none d-sm-block">
            Online Account Portal
            by Narayani Finance Bank.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  data () {
    return {
      currentYear: '',
    }
  },
  mounted() {
    var today = new Date();
    this.currentYear = today.getFullYear()
  }
}
</script>