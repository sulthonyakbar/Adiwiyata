import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Galeri from './galeri';
import Haribesar from './haribesar';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/galeri" component={Galeri} />
        <Route exact path="/haribesar" component={Haribesar} />
    </Switch>
)

export default Utama;