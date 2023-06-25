<script>
import REQUEST from "@/repositories/RepositoryAdmin";
export default {
   data() {
      return {
         stat: [],
         statData: [
            {
               title: "Total Request",
               key: "total",
               icon: "ri-stack-line",
               value: "",
            },
            {
               title: "Total Approved Request",
               key: "approved",
               icon: "ri-store-2-line",
               value: "",
            },
            {
               title: "Total Rejected Request",
               key: "rejected",
               icon: "ri-briefcase-4-line",
               value: "",
            },
            {
               title: "Total Submitted Request",
               key: "submitted",
               icon: "ri-briefcase-4-line",
               value: "",
            },
         ],
      };
   },
   methods: {
      //
   },
   mounted() {
      REQUEST.get(`dashboard`)
         .then((response) => {
            this.stat = response.data;
         })
         .catch((error) => {
            console.log(error);
         });
   },
};
</script>

<template>
   <div class="row">
      <div class="col-md-3" v-for="(data, index) in statData" :key="index">
         <div class="card">
            <div class="card-body">
               <div class="media">
                  <div class="media-body overflow-hidden">
                     <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
                     <h4 class="mb-0">{{stat[0][data.key]}}</h4>
                  </div>
                  <div class="text-primary">
                     <i :class="`${data.icon} font-size-24`"></i>
                  </div>
               </div>
            </div>

            <div class="card-body border-top py-3">
               <div class="text-truncate">
                  <span class="text-muted ml-2">From All Time period</span>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- end row -->
</template>