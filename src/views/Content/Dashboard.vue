<template>
  <div class="container-fluid" style="background-color: #f2f2f2">
    <div class="row">
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div class="d-flex justify-content-center mb-3 mt-3">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h4 v-if="getCurrentLogInUser">
                    Hello! {{ getCurrentLogInUser }}
                  </h4>
                  <p class="card-text">
                    We'll help you trade smarter with real-time data and
                    insight. Let's start
                  </p>
                  <hr />
                  <div class="btn-group-vertical">
                    <router-link
                      to="/underdev"
                      class="btn btn-outline-secondary"
                      style="text-align: left"
                      >Auto Bid Entry</router-link
                    >
                    <router-link
                      to="/underdev"
                      class="btn btn-outline-secondary"
                      style="text-align: left"
                      >New Bid Entry</router-link
                    >
                    <router-link
                      to="/underdev"
                      class="btn btn-outline-secondary"
                      style="text-align: left"
                      >New Bulk Bid Entry</router-link
                    >
                    <router-link
                      to="/underdev"
                      class="btn btn-outline-secondary"
                      style="text-align: left"
                      >Auto Trade</router-link
                    >
                    <router-link
                      to="/underdev"
                      class="btn btn-outline-secondary"
                      style="text-align: left"
                      >e-Certificate</router-link
                    >
                    <router-link
                      to="/underdev"
                      class="btn btn-outline-secondary"
                      style="text-align: left"
                      >Settlement</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <div
              class="container mt-3 mb-3 ml-0 mx-auto"
              style="padding-left: none; margin-left: none"
            >
              <div class="card">
                <div class="card-header">Market Offer List</div>
                <div class="card-body">
                  <table
                    class="table table-sm table-striped table-hover table-bordered"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Product Code</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Total Value</th>
                        <th scope="col">Total Value</th>
                        <th scope="col">Total Volume</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="marketOfferList in marketOfferLists">
                        <td>{{ marketOfferList.ProductCode }}</td>
                        <td>{{ marketOfferList.ProductName }}</td>
                        <td>{{ marketOfferList.UnitValue }}</td>
                        <td>{{ marketOfferList.TotalValue }}</td>
                        <td>{{ marketOfferList.TotalVolume }}</td>
                        <td class="text-center">
                          <button type="button" class="btn btn-primary btn-sm">
                            Bid
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Action />
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <Chad />
      </div>
    </div>
  </div>
</template>
<script>
import Action from "../Content/Action.vue";
import Chad from "../../components/Chad.vue";
export default {
  components: { Action, Chad },
  data() {
    return {
      marketOfferLists: [
        {
          ProductCode: "CPO-MSIA-09",
          ProductName: "Crude Palm Oil",
          UnitValue: "MYR",
          TotalValue: "15,006,512.00",
          TotalVolume: "64,0000.00",
        },
        {
          ProductCode: "CNO-MSIA-03",
          ProductName: "Coconut Oil",
          UnitValue: "MYR",
          TotalValue: "4,006,632.00",
          TotalVolume: "1,299,000.00",
        },
        {
          ProductCode: "SB-MSIA-11",
          ProductName: "Soya Bean",
          UnitValue: "MYR",
          TotalValue: "100,006,512.00",
          TotalVolume: "123,0000.00",
        },
        {
          ProductCode: "CFAD-MSIA-01",
          ProductName: "Coconut Fatty Acid",
          UnitValue: "MYR",
          TotalValue: "70,006,512.00",
          TotalVolume: "90,0000.00",
        },
        {
          ProductCode: "RBDPOL-MSIA-09",
          ProductName: "RBD Palm Oil",
          UnitValue: "MYR",
          TotalValue: "80,006,512.00",
          TotalVolume: "64,0000.00",
        },
      ],
    };
  },
  computed: {
    getCurrentLogInUser() {
      return localStorage.getItem("userName") != null
        ? localStorage.getItem("userName")
        : null;
    },
  },
};
</script>
