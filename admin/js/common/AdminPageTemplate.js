class AdminPageTemplate {

    static footer() {
        let currentYear = (new Date().getYear()) + "";
        return `<footer class="templatemo-footer">   
                   <div class="templatemo-copyright">   
                   <p>Copyright  @20${currentYear.substr(1)} AutoExpress.co.nf - Raymart De Guzman</p>   
                   </div>   
                </footer>`;
    }

    static sideBar(username) {
        return `
        <div class="navbar-collapse collapse templatemo-sidebar">   
          <ul class="templatemo-sidebar-menu">   
            <li><a href="dashboard.php?username=${username}"><i class="fa fa-home"></i>Dashboard</a></li>   
            <li><a href="inventory.php?username=${username}"><i class="fa fa-car"></i>Manage Inventory</a></li>   
            <li><a href="admin.php?username=${username}"><i class="fa fa-user-circle"></i>Manage / View Admin</a></li>   
            <li><a href="preferences.php?username=${username}"><i class="fa fa-cog"></i>Preferences</a></li>   
            <li><a href="#" data-toggle="modal" data-target="#confirmModalLogout"><i class="fa fa-sign-out"></i>Sign Out</a></li>   
          </ul>   
        </div>`;
    }

}