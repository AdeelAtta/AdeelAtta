let toogleNavStatus = false;
let toogleNav = function(){
    
    let getSidebar = document.querySelector(".nav-sidebar");    
    let getSidebarUl = document.querySelector(".nav-sidebar ul");  
    let getSidebarTitle = document.querySelector(".nav-sidebar span");  
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");  
    let getToogle = document.querySelector(".btn-toggle-nav");  
    
    
    if(toogleNavStatus === false){
        
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";
        getToogle.style.transform = "rotate(450deg)";
    
    let arrayLength = getSidebarLinks.length;
        for(let i=0; i< arrayLength; i++)
            {
                getSidebarLinks[i].style.opacity = "1";
            }
    
    toogleNavStatus = true;
    }
    
    
       else if(toogleNavStatus === true){
        
        
        getSidebar.style.width = "0px";
        getSidebarTitle.style.opacity = "0";
          getToogle.style.transform = "rotate(0deg)";
    
    let arrayLength = getSidebarLinks.length;
        for(let i=0; i< arrayLength; i++)
            {
                getSidebarLinks[i].style.opacity = "0";
            }
           getSidebarUl.style.visibility = "collapse";
    
    toogleNavStatus = false;
    }
}
    
    
    


