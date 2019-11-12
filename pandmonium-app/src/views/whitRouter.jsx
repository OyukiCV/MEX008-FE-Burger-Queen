import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuView from '../views/MenuView/index';
import BurgerView from '../views/MenuItemView/burgerview';
import HotdogView from './MenuItemView/hotdogview.jsx';
import PizzaView from '../views/MenuItemView/pizzaview';
import SaladView from '../views/MenuItemView/saladview';
import DessertView from '../views/MenuItemView/dessertview';
import Login from '../views/Login/Login';
import Mesas from '../views/TableSelectorView/index'
import CustomView from '../views/CustonViews/index';
import Error404 from '../views/Page404/index';
// import Orders from '../views/OrderCarView/index';
import CustomSodas from '../views/MenuItemView/sodasview';
import CustomMilkshake from '../views/MenuItemView/milkshakeview';
import OrderCarView from '../components/orderCar/orderCarContainer';
import CustomViewMalicia from '../views/CustonViews/CustomViewMalicia';
import CustomViewSoberbia from '../views/CustonViews/CustomViewSoberbia';
import CustomViewAlmaEnPena from '../views/CustonViews/CustomViewAlmaEnPena';
import CustomViewEncarnacion from './CustonViews/CustomViewEncarnacion';
import CustomViewBananaLimbo from './CustonViews/CustomViewBananaLimbo';
import CustomViewJochoslaw from './CustonViews/CustomViewJochoslaw';
import CustomViewXoloescuintle from './CustonViews/CustomViewXoloescuintle';
import CustomViewPitBull from './CustonViews/CustomViewPitBull';
import CustomViewHachiko from './CustonViews/CustomViewHachiko';
import CustomViewPastorAleman from './CustonViews/CustomViewPastorAleman';
import CustomViewDelirium from './CustonViews/CustomViewDelirium';
import CustomViewParaisoPerdido from './CustonViews/CustomViewParaisoPerdido';
import CustomViewChaneque from './CustonViews/CustomViewChaneque';
import CustomViewSodoma from './CustonViews/CustomViewSodoma';
import CustomViewLujuria from './CustonViews/CustomViewLujuria';
import CustomViewAngelCaido from './CustonViews/CustomViewAngelCaido';
import CustomViewPurgatorio from './CustonViews/CustomViewPurgatorio';
import CustomViewTikiHawaiana from './CustonViews/CustomViewTikiHawaiana';
import CustomViewMargarita from './CustonViews/CustomViewMargarita';
import CustomViewMousse from './CustonViews/CustomViewMousse';
import CustomViewVegatina from './CustonViews/CustomViewVegatina';
import CustomViewHellGirl from './CustonViews/CustomViewHellGirl';
import CustomViewPan from './CustonViews/CustomViewPan';


class WhitRouter extends React.Component {
   render(){
       console.log(this.props.location.pathname)
       switch(this.props.location.pathname){
           case '/':
               return(<Login/>)
           case '/Menu':
               return(<MenuView/>);
           case '/burgers':
               return (<BurgerView/>);
           case '/hotdogs':
                return (<HotdogView />);
           case '/pizzas':
                return(<PizzaView/>);
           case '/ensaladas':
                return(<SaladView/>);
           case '/postres':
                return(<DessertView/>)
           case '/mesas':
                return(<Mesas/>)
           case '/gula':
                return(<CustomView/>);
           case '/malicia':
                return(<CustomViewMalicia />)
           case '/soberbia':
                return(<CustomViewSoberbia />)
           case '/encarnacion':
                return(<CustomViewEncarnacion />)
           case '/alma-en-pena':
                return(<CustomViewAlmaEnPena />)
           case '/carrito':
                return(<OrderCarView />)
           case '/banana-limbo':
                return(<CustomViewBananaLimbo />)
           case '/jochoslaw':
                return(<CustomViewJochoslaw />)
           case '/xoloescuintle':
                return(<CustomViewXoloescuintle />)
           case '/pitbull':
                return(<CustomViewPitBull />)
           case '/hachiko':
                return(<CustomViewHachiko />)
           case '/pastor-aleman':
                return(<CustomViewPastorAleman />)
           case '/delirium':
                return(<CustomViewDelirium />)
           case '/paraiso-perdido':
                return(<CustomViewParaisoPerdido />)
           case '/chaneque':
                return(<CustomViewChaneque />)
           case '/sodoma':
                return(<CustomViewSodoma />)
           case '/lujuria':
                return(<CustomViewLujuria />)
           case '/angel-caido':
                return(<CustomViewAngelCaido />)
           case '/purgatorio':
                return(<CustomViewPurgatorio />)
           case '/tiki-hawaiana':
                return(<CustomViewTikiHawaiana />)
           case '/margarita':
                return(<CustomViewMargarita />)
           case '/mousse':
                return(<CustomViewMousse />)
           case '/vegatina':
                return(<CustomViewVegatina />)
           case '/hell-girl':
                return(<CustomViewHellGirl />)
           case '/pan-dulce':
                return(<CustomViewPan />)                                     
           case '/malteadas':
               return(<CustomMilkshake />)
           case '/soda':
               return(<CustomSodas />)
           default:
               return (<Error404 />)
       }
   }
}
export default withRouter(WhitRouter);