import React from "react";
import Heart from '../../assets/images/Heart.png';
import FifteenSubscribers from '../../assets/images/WinPrizes/FifteenSubscribers.png';
import FiveSubscribers from '../../assets/images/WinPrizes/FiveSubscribers.png';
import TenSubscribers from '../../assets/images/WinPrizes/TenSubscribers.png';
import TwentyfiveSubscribers from '../../assets/images/WinPrizes/TwentyfiveSubscribers.png';
import FiftySubscribers from '../../assets/images/WinPrizes/FiftySubscribers.png';
import HundredSubscribers from '../../assets/images/WinPrizes/HundredSubscribers.png';
import ThousandSubscribers from '../../assets/images/WinPrizes/ThousandSubscribers.png';
import FiveHundredSubscribers from '../../assets/images/WinPrizes/FiveHundredSubscribers.png';
import TopSubscribers from '../../assets/images/WinPrizes/TopSubscribers.png';
import classes from './HomeThirdPart.module.css';
import config from "../../config";



function HomeThirdPart (props) {

       // const itemData = [
       //     {
       //         logo: FiveSubscribers,
       //         // title:{props.profileInfo.config.subscribe_type.title}
       //         title:"5 abonnees dankzij jou",
       //         description:"Handtekening van darrell met bedankje"
       //     },
       //
       //     {
       //         logo: TenSubscribers,
       //         title:"10 abonnees dankzij jou",
       //         description:"Alle vorige prijzen + je naam komt op het shirt dat ik aan doe op mijn date"
       //     },
       //     {
       //         logo: TwentyfiveSubscribers,
       //         title:"25 abonnees dankzij jou",
       //         description:"Alle vorige prijzen + Videoboodschap van Darrell"
       //     },
       //     {
       //         logo: FiftySubscribers,
       //         title:"50 abonnees dankzij jou",
       //         description:"Alle vorige prijzen + Maak kans in een AirPods Pro giveaway"
       //     },
       //     {
       //         logo: HundredSubscribers,
       //         title:"100 abonnees dankzij jou",
       //         description:"Alle vorige prijzen + Een gesigneerde Darrell truiy"
       //     },
       //     {
       //         logo: FiveHundredSubscribers,
       //         title:"500 abonnees dankzij jou",
       //         description:"Alle vorige prijzen + Doe mee in een video van Darrellsteg"
       //     },
       //     {
       //         logo: ThousandSubscribers,
       //         title:"1000 abonnees dankzij jou",
       //         description:"Alle vorige prijzen + Collab met Darrell op jou kanaal"
       //     },
       //     {
       //         logo: TopSubscribers,
       //         title:"TOP",
       //         description:"Je wint een iPhone 14 + een tattoo op Darrell zijn lichaam"
       //     },
       // ]


    //
    // const renderPrizes=itemData.map((item, index)=>
    //     <div key={index} className={classes.prizesWhole}>
    //         <img className={classes.prizeImg} src={item.logo} />
    //         <div className={classes.prizeTexts}>
    //             <div className={classes.prizeBoldText}>{item.title}</div>
    //             <div className={classes.prizeText}>{item.description}</div>
    //         </div>
    //     </div>
    // )

    //
    // if(props.profileInfo){
    //     const renderPrizes=props.profileInfo.config.setting_text_footer.map((item, index)=>
    //         <div key={index} className={classes.prizesWhole}>
    //             <img className={classes.prizeImg} src={props.profileInfo.config.subscribe_type.item.logo}/>
    //             <div className={classes.prizeTexts}>
    //                 <div className={classes.prizeBoldText}>
    // }
    //
    //
    //
    //
    //
    //
    //
    //                             {props.profileInfo.config.subscribe_type[1].title}</div>
    //                         <div className={classes.prizeText}>
    //                             {props.profileInfo.config.subscribe_type[1].description}</div>
    //                     </div>
    //                 </>}




    return(
        <div className={classes.fourthPartWhole}>
            <div className="container flex">
                <div className={classes.fourthPart1}>
                    {props.profileInfo && <>
                        <div className="title">{props.profileInfo.config.setting_text_footer.title}
                            <img className={classes.heartImg} src={Heart}/></div>
                        <div className={classes.fourthPartText}>
                            {props.profileInfo.config.setting_text_footer.description}</div>
                    <div className={classes.fourthPartBoldText}>
                        {props.profileInfo.config.setting_text_footer.bold_description}</div>
                    </>
                    }
                </div>
                <div className={classes.fourthPart2}>
                    <div className={classes.prizesWhole}>
                    {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[0].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[0].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[0].description}</div>
                            </div>
                        </>}
                        </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[1].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[1].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[1].description}</div>
                            </div>
                        </>}
                    </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[2].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[2].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[2].description}</div>
                            </div>
                        </>}
                    </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[3].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[3].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[3].description}</div>
                            </div>
                        </>}
                    </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[4].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[4].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[4].description}</div>
                            </div>
                        </>}
                    </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[5].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[5].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[5].description}</div>
                            </div>
                        </>}
                    </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[6].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[6].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[6].description}</div>
                            </div>
                        </>}
                    </div>
                    <div className={classes.prizesWhole}>
                        {props.profileInfo && <>
                            <img className={classes.prizeImg}
                                 src={`${config.mediaUrl}${props.profileInfo.config.subscribe_type[7].logo}`}/>
                            <div className={classes.prizeTexts}>
                                <div className={classes.prizeBoldText}>
                                    {props.profileInfo.config.subscribe_type[7].title}</div>
                                <div className={classes.prizeText}>
                                    {props.profileInfo.config.subscribe_type[7].description}</div>
                            </div>
                        </>}
                    </div>

                    {/*{renderPrizes}*/}

                </div>
            </div>
        </div>
    )
}


    export default HomeThirdPart;
