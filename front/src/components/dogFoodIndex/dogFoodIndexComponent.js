import React from 'react';
import { connect } from 'react-redux';
import * as dogFoodIndexAction from './dogFoodIndexAction'; 
import '../dogFoodIndex/dogFoodIndex.scss';
import action from '../../utils/tab'
import HomeBastComponent from '../home/homeBestComponent';
import '../../sass/indexbase.scss';
import spinner from  '../spinner/spinner'
class DogFoodIndexComponent extends React.Component{
    state = {
        Tab:[],
        tabItems:[],
        changeTab:[],
        avtBigId:[],
        avtBigImg:[]

    }
    componentWillMount(){ 
        var arr =[]
        spinner.loadSpinner();
        //ajax tab菜单数据
        this.props.getTab().then(()=>{
            // console.log('aa', this.props.TabDate)
            this.props.TabDate.forEach((item)=>{
                if (this.state.Tab.indexOf(item.tabImg1) == -1){
                    this.state.Tab.push(item.tabImg1);
                    this.state.changeTab.push(item.tabImg2)
                }
            })
            this.setState({ Tab: this.state.Tab})
            this.setState({ changeTab: this.state.changeTab })

            // 封装函数
            // this.toTabItem(1);
            this.setState({ tabItems: action.TabItem(1, this.state.tabItems, this.props.TabDate) })
            
            $('#tabs').find('li').eq(0).find('img').attr({ src: this.state.changeTab[0] });
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        });
        // ajax 精选品牌数据
        this.props.getBigImg().then(()=>{
            this.props.atvPrd.forEach((item)=>{
                if (this.state.avtBigId.indexOf(item.activityId) == -1){
                    this.state.avtBigId.push(item.activityId);
                    this.state.avtBigImg.push(item.activityImg);
                }
            })
            this.setState({ avtBigId: this.state.avtBigId});
            // console.log(this.state.avtBigId)
            this.setState({ avtBigImg: this.state.avtBigImg });
            spinner.closeSpinner();
        }).catch(error => {
            spinner.closeSpinner();
        });
        this.props.getDogFoodMenu()
        
    }
    // 点击切换菜单
    toTabItem(id) {
        // 封装--详细请看tab.js文件
        this.setState({ tabItems: action.TabItem(id, this.state.tabItems, this.props.TabDate) })
        
        // this.state.tabItems = [];
        // if (this.props.TabDate) {
        //     this.props.TabDate.forEach(item => {
        //         if (item.tabId == id) {
        //             // console.log(item.tabId)
        //             this.state.tabItems.push(item.classifyImg)
        //         }
        //     })
        //     this.setState({ tabItems: this.state.tabItems})
        // }
    }
    tabSmall(idx,eve){
        this.toTabItem((idx * 1 + 1), this.state.tabItems, this.props.TabDate);
        for(let i=0;i<this.state.Tab.length;i++){
            if(i != idx){
                // console.log($('#tabs').find('li').eq(i))
                $('#tabs').find('li').eq(i).find('img').attr({ src: this.state.Tab[i] })
            }
        }
        $(eve.target).attr({ src: this.state.changeTab[idx] })
    }
    ToActivite(id) {
        // console.log(id); 
        // hashHistory.push('/activite/')
        this.props.router.push("/activite/" + id);
    }
    render(){
        return(
            <div className="dogFood">
                <div className="banner-item-2"> 
                    <img src={require('../../assets/img/navList/a4a9af65943791fd74db9a5ae3cb38b7.png')}/>
                    
                </div>
                <div className="dogFoodMenu">
                    <ul id="tabs">
                        {
                            this.state.Tab.map((item,idx)=>{
                                return <li key={idx} data-id={idx} onClick={this.tabSmall.bind(this,idx)}><img src={item}/></li>
                            })
                        }
                    </ul>
                    <div className="tabItems">
                        {
                            this.state.tabItems.map((item, idx) => {
                                return <div key={idx}><img src={item} /></div>
                            })
                        }
                    </div>
                </div>
                <HomeBastComponent Img={['../src/assets/img/navList/5df340d068e4bc97759d801edcd5ac19.jpg', '../src/assets/img/navList/6ebc7bc52a02cc2fb2d725dd9ebe58aa.jpg', '../src/assets/img/navList/e8fa7e93ded2be02792cbade66353832.jpg']} active={["fake", "HighQuality","feed"]}/>
                <div className="Activites">
                    <h2>
                        <img src="../src/assets/img/navList/ebf85555c851f683bf33cd4c14f7f68b.jpg"/>
                    </h2>
                    <div className="Activite">
                        {
                            this.state.avtBigId.map((item,idx)=>{
                                return <div className="ActiviteItem" key={idx}>
                                    <div className="ActiviteImg" onClick={this.ToActivite.bind(this, item)}>
                                                <img src={this.state.avtBigImg[idx]} />
                                            </div>
                                            <ul className="ActiviteGoods">
                                                {
                                                    this.props.atvPrd.map((item1,index)=>{
                                                if (item == item1.activityId){
                                                    return <li key={index}>
                                                        <div className="goodImg">
                                                            <i></i>
                                                            <img src={item1.goodImgUrl} />
                                                        </div>
                                                        <div className="goodmsg">
                                                            <p>{item1.goodName}</p>
                                                            <span>￥{item1.Price}</span>
                                                        </div>
                                                    </li>
                                                        }
                                                    })
                                                }
                                        <li onClick={this.ToActivite.bind(this, item)}>
                                            <h3>查看全部</h3>
                                            <span>SEE ALL</span>
                                        </li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="dogfoodMenu">
                    <ul className="dogfoodMenuUL">
                        <li><span>全部</span></li>
                        {
                            this.props.dogFoodMenu.map((item,idx)=>{
                                return <li key={idx}><span>{item.classifyName}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapToState = function (state) {
    console.log('state', state.TabsReducer)
    return {
        AjaxTabState: state.TabsReducer.status,
        TabDate: state.TabsReducer.result1 || [],
        atvPrd: state.TabsReducer.result2 || [],
        dogFoodMenu: state.TabsReducer.result4 || []
    }
}

export default connect(mapToState, dogFoodIndexAction)(DogFoodIndexComponent);