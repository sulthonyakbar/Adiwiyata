import React from 'react';
import Utama from './utama';
import {Link} from "react-router-dom";

class App extends React.Component {
  render () {
  return (
<div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <div class="container-fluid">
     <a class="navbar-brand" href="/">Adiwiyata</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" name="beranda" href="/">Beranda</a>
         </li>
         <li class="nav-item">
         <a class="nav-link active" aria-current="page" name="galeri" href="/galeri">Galeri</a>
         </li>
         <li class="nav-item">
         <a class="nav-link active" aria-current="page" name="haribesar" href="/haribesar">Hari Besar</a>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 <p><Utama /></p>
 </div>

  );
}
}

export default App;
