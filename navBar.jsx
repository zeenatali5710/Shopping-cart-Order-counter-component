import React from 'react';

// Stateless FUnctional Component
const NavBar = (props)=> {
    
        return ( 
            <nav class="navbar navbar-light bg-light">
              <span class="navbar-brand">Navbar
              <span className="badge badge-pill badge-secondary">{props.counter.filter(c=>c.value>0).length}</span>
              </span>
            </nav>
         );
    }
export default NavBar;