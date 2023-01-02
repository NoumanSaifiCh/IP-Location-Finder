<template>
  <yandex-map :coords="[setIpData?.lat, setIpData?.lon]" :zoom="10"  class="map-box"
    :settings="{ lang: 'en_US' }">
    <ymap-marker :coords="[setIpData?.lat, setIpData?.lon]" marker-id="123" :hint-content=setIpData.city />
  </yandex-map>
</template>
  
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
export default {
  name: 'LocationMap',
  components: { yandexMap, ymapMarker },
  data: () => ({
  }),

  computed: {
    setIpData() {
      return this.$store.state.CurrentIp;
    },
  },
};

</script>
  
<style  scoped>
.map-box {
  height: 470px;
}
</style>
  