<template>
    <!-- Sidebar -->
  
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="javascript:void(0)">
        <img src="/public/admin/images/admin-icon.png" alt="adminpanel icon">
        <!-- <div class="sidebar-brand-text mx-3">Admin</div> -->
    </a>
    <hr class="sidebar-divider my-0">
    <li class="nav-item active">
        <a class="nav-link" href="javascript:void(0)">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>
    <hr class="sidebar-divider">
    <div class="sidebar-heading">
        Managements
    </div>
    <li class="nav-item mt-1">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Categories</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <!-- <h6 class="collapse-header">Login Modules:</h6> -->

                <router-link class="collapse-item text-decoration-none" to="/category">
                    <span>Category Details</span>  
                </router-link>

            </div>
        </div>
    </li>

    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThr"
            aria-expanded="true" aria-controls="collapseThr">
            <i class="fas fa-fw fa-cog"></i>
            <span>Products</span>
        </a>
        <div id="collapseThr" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <!-- <h6 class="collapse-header">Products Modules:</h6> -->
                <router-link class="collapse-item text-decoration-none" to="/">
                    <span>Products Details</span>
                </router-link>
            </div>
        </div>
    </li>
    <hr class="sidebar-divider">
  

  
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
</ul>

<!-- End of Sidebar -->
</template>
   
