<template>
<div class="container-fluid" style="background-color: #f2f2f2;">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        In Progress Bid
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Purchase Reference</th>
                                    <th>e-Cert No</th>
                                    <th>Currency</th>
                                    <th>Bought Value</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    <th>e-Certificate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="inProgressBid in inProgressBids">
                                    <td>{{ inProgressBid.PurchaseRef }}</td>
                                    <td>{{ inProgressBid.certNo }}</td>
                                    <td>{{ inProgressBid.currency }}</td>
                                    <td>{{ inProgressBid.boughtValue }}</td>
                                    <td>{{ inProgressBid.status }}</td>
                                    <td v-if="inProgressBid.action == 'Onsell'">
                                        <button class="btn btn-success">{{ inProgressBid.action }}</button>
                                    </td>
                                    <td v-else-if="inProgressBid.action == 'Delivery'">
                                        <button class="btn btn-warning">{{ inProgressBid.action }}</button>
                                    </td>
                                    <td v-else-if="inProgressBid.action == 'Sell to BMIS'">
                                        <button class="btn btn-danger">{{ inProgressBid.action }}</button>
                                    </td>
                                    <td class="text-center" v-if="inProgressBid.eCert == 1">
                                        <i class="bi bi-file-earmark-pdf-fill" style="color:blue;font-size: 2rem;"></i>
                                    </td>
                                    <td class="text-center" v-else-if="inProgressBid.eCert == 2">
                                        <i class="bi bi-file-earmark-pdf-fill" style="color:blue;font-size: 2rem;"></i>
                                        <i class="bi bi-file-earmark-pdf-fill" style="color:red;font-size: 2rem;"></i>
                                    </td>
                                    <td class="text-center" v-else-if="inProgressBid.eCert == 3">
                                        <i class="bi bi-file-earmark-pdf-fill" style="color:blue;font-size: 2rem;"></i>
                                        <i class="bi bi-file-earmark-pdf-fill" style="color:red;font-size: 2rem;"></i>
                                        <i class="bi bi-file-earmark-pdf-fill" style="color:green;font-size: 2rem;"></i>
                                    </td>
                                    <td v-else>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            inProgressBids: [
                { PurchaseRef: "CTP-USER1-20230401", certNo: "CPO-MSIA-09", currency: "MYR", boughtValue: "1,000,000.00", status: "Onsell Pending", action: "Onsell", eCert: "1" },
                { PurchaseRef: "CTP-USER2-20230101", certNo: "CPO-MSIA-10", currency: "MYR", boughtValue: "1,000,000.00", status: "Onsell Pending", action: "Delivery", eCert: "2" },
                { PurchaseRef: "CTP-USER5-20230215", certNo: "CPO-MSIA-07", currency: "MYR", boughtValue: "1,000,000.00", status: "Delivery", action: "Onsell", eCert: "3" },
                { PurchaseRef: "CTP-USER4-20230302", certNo: "CPO-MSIA-09", currency: "MYR", boughtValue: "1,000,000.00", status: "Onsell", action: "Sell to BMIS", eCert: "1" },
                { PurchaseRef: "CTP-USER7-20230221", certNo: "CPO-MSIA-02", currency: "MYR", boughtValue: "1,000,000.00", status: "Delivery/STB Pending", action: "Onsell", eCert: "1" },
            ]
        }
    }
}
</script>