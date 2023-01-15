<template>
  <v-container fluid>
    <v-row class="text-center black">
      <v-card class=" d-flex justify-center flex-sm-row flex-colum black" height="auto" width="100%" flat>
        <v-app-bar dark prominent flat min-height="160" color="blue">
          <v-card-text>
            <h1>IP Location Finder</h1>
            <span>IP LOOKUP OR IP ADDRESS LOOKUP WITH DETAILED IP GEOLOCATION DATA</span>
            <v-row class="d-flex justify-center my-1">
              <v-col cols="7" sm="6">
                <v-text-field v-model.lazy="ipAddress" color="white" outlined label="write ip address"></v-text-field>
              </v-col>
              <v-btn class="mt-5" depressed color="grey darken-1" @click="HandleUserIP" elevation="15">
                Submit
              </v-btn>
            </v-row>
          </v-card-text>
        </v-app-bar>
      </v-card>
    </v-row>

    <v-container fluid>
      <div class="mt-3 d-flex justify-center flex-sm-row flex-column" color='grey darken-4'>
        <v-spacer></v-spacer>
        <div>
          <h3 class="grey darken-10 text-center">IP Address Location</h3>
          <table style="width:100%" class="">
            <tr>
              <th class="px-15 pt-1">IP</th>
              <td class="px-15 pt-1">{{ setIpData.query
              }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">city</th>
              <td class="px-15 pt-1">{{ setIpData.city }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Country</th>
              <td class="px-15 pt-1">{{ setIpData.country }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Country code</th>
              <td class="px-15 pt-1">{{ setIpData.countryCode }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Postal code</th>
              <td class="px-15 pt-1">{{ setIpData.zip }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Regin Name</th>
              <td class="px-15 pt-1">{{ setIpData.regionName
              }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Time Zone</th>
              <td class="px-15 pt-1">{{ setIpData.timezone
              }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">ISP Provider</th>
              <td class="px-15 pt-1">{{ setIpData.isp
              }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Lat</th>
              <td class="px-15 pt-1">{{ setIpData.lat
              }}</td>
            </tr>
            <tr>
              <th class="px-15 pt-1">Lon</th>
              <td class="px-15 pt-1">{{ setIpData.lon
              }}</td>
            </tr>
          </table>
        </div>
        <v-spacer></v-spacer>
        <v-card class="pa-2" flat height="400" width="600">
          <LocationMap />
        </v-card>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import LocationMap from './LocationMap.vue';

export default {
  name: 'IndexPage',

  components: {
    LocationMap,
  },

  data() {
    return {
      ipAddress: "",
    }
  },

  mounted() {
    fetch("https://api.ipify.org?format=json")
      .then((x) => x.json())
      .then(({ ip }) => {
        this.ipAddress = ip;
      });
    this.$store.dispatch("Devicelocation", this.ipAddress
    )
  },

  computed: {
    setIpData() {
      return this.$store.state.CurrentIp;
    },
  },

  methods: {
    HandleUserIP() {
      this.$store.dispatch("Devicelocation", this.ipAddress);
      
    },
  }
}
</script>
      
<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>