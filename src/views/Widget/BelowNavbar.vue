<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Market Order</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Matching</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Settlement</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Report/Delivery</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Market Information</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Market Mangement</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">System Setting</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <router-link to="/signin" class="btn btn-success">Sign In</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>