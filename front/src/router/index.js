import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoodslistComponent from "../components/goodList/goodsListComponent";
import IndexComponent from '../components/Index/indexComponent';
import PublicSearchComponent from "../components/publicSearch/publicSearchComponent";
import Login from '../components/login/loginComponent'
import HomeComponent from '../components/home/homeComponent';
import DogFoodIndexComponent from '../components/dogFoodIndex/dogFoodIndexComponent';
import categorysComponent from '../components/category/categoryComponent'
import BrandComponent from '../components/brandComponent/brandComponent'
import ProductComponent from '../components/productsComponent/productsComponent'
import DefailComponent from '../components/productDefail/defailComponent';
 
import DogCostumeIndexComponent from '../components/dogCostumeIndex/dogCostumeIndexComponent';
import HealthCareIndexComponent from '../components/HealthCareIndex/HealthCareIndexComponent';
import SnackToysIndexComponent from '../components/SnackToysIndex/SnackToysIndexComponent';
import GoOutIndexComponent from '../components/goOutIndex/goOutIndexComponent';
import BeautyIndexComponent from '../components/BeautyIndex/BeautyIndexComponent';
import EpetTeamComponent from '../components/ePetTeam/ePetTeamComponent';
import Register from '../components/register/registerComponent';
import Mine from '../components/mine/mineComponent';
import Accounts from '../components/account/accountComponent';
import EpetInterComponent from '../components/ePetInter/ePetInterComponent';
import ePetTopBarComponent from '../components/ePetTopBar/ePetTopBarComponent';
import ePetMarkingComponent from '../components/ePetMarking/ePetMarkingComponent';
import orderComponent from '../components/order/orderComponent'
import address from '../components/address/addressComponent'
import allorder from '../components/order/allorder/allorderComponent'
import evaluate from '../components/order/waitevaluate/evaluateComponnet'
import waitpay from '../components/order/waitpay/payComponent'
import takegoods from '../components/order/waittakegoods/takegoodsComponent'
import editAddress from '../components/editAddress/editAddressComponent'
import collect from '../components/collect/collectComponent';
import FakeComponent from '../components/specialist/fake/fakeComponent';
import HighQualityComponent from '../components/specialist/HighQuality/HighQualityComponent';
import FeedComponent from '../components/specialist/feed/feedComponent';
import GuideComponent from '../components/specialist/guide/guideComponent';
import ToysComponent from '../components/specialist/Toys/ToysComponent';
import ClothesComponent from '../components/specialist/clothes/clothesComponent';
import FashionComponent from '../components/specialist/fashion/fashionComponent';
import DriveComponent from '../components/specialist/drive/driveComponent';
import WatchCompoent from '../components/specialist/watch/watchCompoent';
import ScarceComponent from '../components/specialist/scarce/scarceComponent';
import ToActiviteComponent from '../components/ToActivite/ToActiviteComponent'

export default (
    <div>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={IndexComponent} />  
            <Route path="/" component={IndexComponent}></Route>
            <Route path="dogfoodindex" component={DogFoodIndexComponent}></Route>
            <Route path="dogcostumeindex" component={DogCostumeIndexComponent}></Route>
            <Route path="healthcareindex" component={HealthCareIndexComponent}></Route>
            <Route path="snacktoysindex" component={SnackToysIndexComponent}></Route>
            <Route path="gooutindex" component={GoOutIndexComponent}></Route>
            <Route path="beautyindex" component={BeautyIndexComponent}></Route>
        </Route> 
        <Route path="/search" component={PublicSearchComponent}></Route>
        <Route path="category" component={GoodslistComponent}>
            <IndexRoute component={categorysComponent}></IndexRoute>
            <Route path="/brand" component={BrandComponent}></Route>
        </Route>
        <Route path="product(/:val)" component={ProductComponent}></Route>
        <Route path="defail(/:goodId)" component={DefailComponent}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="epetteam" component={EpetTeamComponent}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
        <Route path="mine" component={Mine}></Route>
        <Route path="account" component={Accounts}></Route>
        <Route path="epetinter" component={EpetInterComponent}></Route>
        <Route path="epettop" component={ePetTopBarComponent}></Route>
        <Route path="epetmarking" component={ePetMarkingComponent}></Route>
        <Route path="order" component={orderComponent}>
            <IndexRoute component={allorder} />
            <Route path="allorder" component={allorder}></Route>
            <Route path="waitpay" component={waitpay}></Route>
            <Route path="takegoods" component={takegoods}></Route>
            <Route path="evaluate" component={evaluate}></Route>
        </Route>
        <Route path="address" component={address}></Route>
        <Route path="editAddress" component={editAddress}></Route>
        <Route path="collect" component={collect}></Route>
        <Route path="fake" component={FakeComponent}></Route>
        <Route path="highquality" component={HighQualityComponent}></Route>
        <Route path="/feed" component={FeedComponent}></Route>
        <Route path="/guide" component={GuideComponent}></Route>
        <Route path="/toys" component={ToysComponent}></Route>
        <Route path="clothes" component={ClothesComponent}></Route>
        <Route path="/fashion" component={FashionComponent}></Route>
        <Route path="/drive" component={DriveComponent}></Route>
        <Route path="/watch" component={WatchCompoent}></Route>
        <Route path="/scarce" component={ScarceComponent}></Route>
        <Route path="/activite(/:id)" component={ToActiviteComponent}></Route>
        
    </div>
)